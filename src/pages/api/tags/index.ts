import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { supabaseAdmin } from '../_lib/supabase';
import { toSlug } from '../_lib/slug';

const createSchema = z.object({ name: z.string().min(1).max(60) });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin.from('tags').select('id, name, slug').order('name');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: 'Invalid name' });
    const name = parsed.data.name.trim();
    const slug = toSlug(name);

    const { data, error } = await supabaseAdmin
      .from('tags')
      .upsert({ name, slug }, { onConflict: 'slug' })
      .select('id, name, slug')
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).end();
}


