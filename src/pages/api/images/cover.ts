import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import crypto from 'crypto';
import { supabaseAdmin } from '../_lib/supabase';

export const config = { api: { bodyParser: false } };

const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp']);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = formidable({ multiples: false, maxFileSize: MAX_SIZE_BYTES });

  try {
    const { files } = await new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const file = (files.file as File) || (Object.values(files)[0] as File);
    if (!file) return res.status(400).json({ error: 'No file' });
    if (file.size && file.size > MAX_SIZE_BYTES) return res.status(413).json({ error: 'File too large' });
    if (file.mimetype && !ALLOWED.has(file.mimetype)) return res.status(400).json({ error: 'Invalid file type' });

    const fileBuf = await fsRead(String(file.filepath || (file as any)._writeStream?.path));
    const checksum = crypto.createHash('sha256').update(fileBuf).digest('hex');
    const ext = (file.mimetype || 'image/jpeg').split('/')[1];
    const objectName = `covers/${Date.now()}-${checksum.slice(0, 12)}.${ext}`;

    const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_IMAGE_BUCKET || 'images';
    const { data: upload, error: upErr } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(objectName, fileBuf, { contentType: file.mimetype || 'application/octet-stream', upsert: false });
    if (upErr) return res.status(500).json({ error: upErr.message });

    const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(upload.path);
    const url = data.publicUrl;

    const { data: inserted, error: insErr } = await supabaseAdmin
      .from('images')
      .insert({ url, file_size: file.size || null, checksum })
      .select('id, url')
      .single();
    if (insErr) return res.status(500).json({ error: insErr.message });

    return res.status(200).json(inserted);
  } catch (e: any) {
    if (e?.code === 'FST_FILES_LIMIT') return res.status(413).json({ error: 'Too many files' });
    return res.status(500).json({ error: 'Upload failed' });
  }
}

async function fsRead(path: string): Promise<Buffer> {
  const fs = await import('fs');
  return fs.readFileSync(path);
}


