import { Router } from "express";
import multer from "multer";
import { supabase } from "../supabase";
import { requireAuth } from "../middleware/auth";

export const photos = Router();

const upload = multer({ storage: multer.memoryStorage() });

/**
 * POST /api/photos/:blogId
 * Auth required
 * FormData: file (single)
 * Optional body fields: caption_text
 *
 * Bucket must exist: process.env.SUPABASE_BUCKET
 */
photos.post(
  "/:blogId",
  requireAuth,
  upload.single("file"),
  async (req, res) => {
    const { blogId } = req.params;
    const caption_text = (req.body?.caption_text ?? null) as string | null;

    if (!req.file) return res.status(400).json({ error: "No file" });

    // Ensure user owns this blog (since service role bypasses RLS)
    const user = (req as any).user;
    const { data: parent, error: pErr } = await supabase
      .from("blogs")
      .select("id,user_id")
      .eq("id", blogId)
      .single();

    if (pErr || !parent)
      return res.status(404).json({ error: "Blog not found" });
    if (parent.user_id !== user.id)
      return res.status(403).json({ error: "Forbidden" });

    const path = `${blogId}/${Date.now()}_${req.file.originalname}`;

    const { error: upErr } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET!)
      .upload(path, req.file.buffer, { contentType: req.file.mimetype });

    if (upErr) return res.status(500).json({ error: upErr.message });

    // Public URL (for public bucket). If bucket is private, store path and sign later.
    const { data: pub } = supabase.storage
      .from(process.env.SUPABASE_BUCKET!)
      .getPublicUrl(path);

    const { data, error } = await supabase
      .from("images")
      .insert({ blog_id: blogId, url: pub.publicUrl, caption_text })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  }
);

/**
 * DELETE /api/photos/:photoId
 * Auth required: only owner of the parent blog can delete
 * (We only delete DB row. If you later add a storage_path column,
 *  you can also remove the file from Storage here.)
 */
photos.delete("/:photoId", requireAuth, async (req, res) => {
  const { photoId } = req.params;

  // Find photo and its parent blog to check ownership
  const { data: photo, error: phErr } = await supabase
    .from("images")
    .select("id,blog_id,url")
    .eq("id", photoId)
    .single();

  if (phErr || !photo)
    return res.status(404).json({ error: "Photo not found" });

  const user = (req as any).user;
  const { data: parent, error: pErr } = await supabase
    .from("blogs")
    .select("id,user_id")
    .eq("id", photo.blog_id)
    .single();

  if (pErr || !parent) return res.status(404).json({ error: "Blog not found" });
  if (parent.user_id !== user.id)
    return res.status(403).json({ error: "Forbidden" });

  // If you later store storage_path, remove from Storage first:
  // await supabase.storage.from(process.env.SUPABASE_BUCKET!).remove([photo.storage_path])

  const { error } = await supabase.from("images").delete().eq("id", photoId);
  if (error) return res.status(500).json({ error: error.message });

  res.json({ ok: true });
});
