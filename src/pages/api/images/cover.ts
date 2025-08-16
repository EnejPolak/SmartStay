import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import os from 'os';
import crypto from 'crypto';
import { supabaseAdmin } from '../_lib/supabase';

export const config = { api: { bodyParser: false } };

const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = formidable({
    multiples: false,
    maxFileSize: MAX_SIZE_BYTES,
    uploadDir: os.tmpdir(),
    keepExtensions: true,
  });

  try {
    const { files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const first = Object.values(files)[0] as any;
    const file: File | undefined = Array.isArray(first) ? first[0] : (first as File);
    if (!file) return res.status(400).json({ error: 'No file' });
    if (file.size && file.size > MAX_SIZE_BYTES) return res.status(413).json({ error: 'File too large' });
    if (file.mimetype && !ALLOWED.has(file.mimetype)) return res.status(415).json({ error: 'Unsupported media type' });

    const resolvedPath = (file as any)?.filepath || (file as any)?.path || (file as any)?._writeStream?.path;
    if (!resolvedPath || typeof resolvedPath !== 'string') {
      console.error('[images/cover] Missing temp filepath on uploaded file', { keys: Object.keys(file as any) });
      return res.status(400).json({ error: 'Upload failed: file path missing' });
    }
    const fileBuf = await fsRead(String(resolvedPath));
    const checksum = crypto.createHash('sha256').update(fileBuf).digest('hex');
    const ext = (file.mimetype || 'image/jpeg').split('/')[1];
    const objectName = `covers/${Date.now()}-${checksum.slice(0, 12)}.${ext}`;

    const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET || 'images';
    // Ensure bucket exists; if not, try to create (best-effort - Supabase may forbid in client SDK)
    let targetBucket = BUCKET;
    const listRes = await supabaseAdmin.storage.from(targetBucket).list('');
    if (listRes.error) {
      console.warn('[images/cover] Bucket list error, attempting create:', listRes.error.message);
      try {
        await supabaseAdmin.storage.createBucket(targetBucket, { public: true });
      } catch (createErr: any) {
        console.error('[images/cover] createBucket failed:', createErr?.message || createErr);
      }
    }

    let uploadRes = await supabaseAdmin.storage
      .from(targetBucket)
      .upload(objectName, fileBuf, { contentType: file.mimetype || 'application/octet-stream', upsert: false });
    if (uploadRes.error && /not found/i.test(uploadRes.error.message)) {
      // Fallback to 'public' bucket
      targetBucket = 'public';
      try {
        await supabaseAdmin.storage.createBucket(targetBucket, { public: true });
      } catch {}
      uploadRes = await supabaseAdmin.storage
        .from(targetBucket)
        .upload(objectName, fileBuf, { contentType: file.mimetype || 'application/octet-stream', upsert: false });
    }
    if (uploadRes.error) {
      console.error('[images/cover] Storage upload error:', uploadRes.error.message);
      return res.status(500).json({ error: uploadRes.error.message });
    }

    const { data } = supabaseAdmin.storage.from(targetBucket).getPublicUrl(uploadRes.data.path);
    const url = data.publicUrl;

    // Return the URL directly since blogs table uses cover_photo (text) not cover_photo_id (uuid)
    return res.status(200).json({ url });
  } catch (e: any) {
    if (e?.code === 'FST_FILES_LIMIT') return res.status(413).json({ error: 'Too many files' });
    console.error('[images/cover] Upload failed:', e?.message || e);
    return res.status(500).json({ error: 'Upload failed' });
  }
}

async function fsRead(path: string): Promise<Buffer> {
  const fs = await import('fs');
  return fs.readFileSync(path);
}


