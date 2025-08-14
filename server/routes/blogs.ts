import { Router } from "express";
import { supabase } from "../supabase";
import { requireAuth } from "../middleware/auth";

export const blogs = Router();

/**
 * GET /api/blogs
 * Public: list all blogs with their images
 */
blogs.get("/", async (_req, res) => {
  const { data, error } = await supabase
    .from("blogs")
    .select(
      "id,title,description,subtitle,tag,cover_photo,created_at,images(id,url,caption_text)"
    )
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

/**
 * POST /api/blogs
 * Auth required: create a new blog
 * body: { title, description?, subtitle?, tag?, cover_photo? }
 */
blogs.post("/", requireAuth, async (req, res) => {
  const { title, description, subtitle, tag, cover_photo } = req.body || {};
  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "title is required" });
  }

  const user = (req as any).user;
  const { data, error } = await supabase
    .from("blogs")
    .insert({
      title,
      description: description ?? null,
      subtitle: subtitle ?? null,
      tag: tag ?? null,
      cover_photo: cover_photo ?? null,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

/**
 * PUT /api/blogs/:id
 * Auth required: update own blog
 * body: { title?, description?, subtitle?, tag?, cover_photo? }
 *
 * Since the server uses the service role (bypasses RLS),
 * we do a quick ownership check to avoid editing others' posts.
 */
blogs.put("/:id", requireAuth, async (req, res) => {
  const { id } = req.params;
  const updates = (({ title, description, subtitle, tag, cover_photo }) => ({
    ...(title !== undefined && { title }),
    ...(description !== undefined && { description }),
    ...(subtitle !== undefined && { subtitle }),
    ...(tag !== undefined && { tag }),
    ...(cover_photo !== undefined && { cover_photo }),
  }))(req.body || {});

  // Ownership check
  const user = (req as any).user;
  const { data: existing, error: getErr } = await supabase
    .from("blogs")
    .select("id,user_id")
    .eq("id", id)
    .single();

  if (getErr) return res.status(404).json({ error: "Blog not found" });
  if (existing?.user_id !== user.id)
    return res.status(403).json({ error: "Forbidden" });

  const { data, error } = await supabase
    .from("blogs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

/**
 * DELETE /api/blogs/:id
 * Auth required: delete own blog
 * DB has ON DELETE CASCADE for images rows.
 * (If you later add images.storage_path, you can also remove Storage files here.)
 */
blogs.delete("/:id", requireAuth, async (req, res) => {
  const { id } = req.params;

  // Ownership check
  const user = (req as any).user;
  const { data: existing, error: getErr } = await supabase
    .from("blogs")
    .select("id,user_id")
    .eq("id", id)
    .single();

  if (getErr) return res.status(404).json({ error: "Blog not found" });
  if (existing?.user_id !== user.id)
    return res.status(403).json({ error: "Forbidden" });

  // Optionally: fetch images and remove from storage if you add storage_path later.

  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });

  res.json({ ok: true });
});
