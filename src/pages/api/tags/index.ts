import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { supabaseAdmin } from '../_lib/supabase';
import { toSlug } from '../_lib/slug';

const createSchema = z.object({ 
  name: z.string().min(1).max(60).transform(s => s.trim()) 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('tags')
      .select('id, name, slug')
      .order('name', { ascending: true });
    
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const parsed = createSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ 
        fieldErrors: { name: 'Name must be between 1 and 60 characters' } 
      });
    }
    
    const name = parsed.data.name;
    const slug = toSlug(name);

    // Check if tag exists (case-insensitive)
    const { data: existing } = await supabaseAdmin
      .from('tags')
      .select('id, name, slug')
      .or(`name.ilike.${name},slug.eq.${slug}`)
      .maybeSingle();

    if (existing) {
      return res.status(200).json(existing);
    }

    // Create new tag
    const { data, error } = await supabaseAdmin
      .from('tags')
      .insert({ name, slug })
      .select('id, name, slug')
      .single();
      
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).end();
}


