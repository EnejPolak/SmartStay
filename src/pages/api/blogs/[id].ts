import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { supabaseAdmin } from '../_lib/supabase';
import { toSlug } from '../_lib/slug';

const payloadSchema = z.object({
  title: z.string().min(2).max(120),
  subtitle: z.string().max(160).nullable().optional(),
  description: z.string().max(160).nullable().optional(),
  excerpt: z.string().max(240).nullable().optional(),
  slug: z.string().min(2).max(160),
  status: z.enum(['draft', 'published']),
  category_id: z.string().uuid().nullable().optional(),
  cover_image_id: z.string().uuid().nullable().optional(),
  content_html: z.string().default(''),
  content_delta: z.any().nullable().optional(),
  tags: z.array(z.string().uuid()).max(5).default([]),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') return res.status(405).end();
  const id = String(req.query.id);

  const parsed = payloadSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const body = parsed.data;

  // Ensure slug is unique for other posts
  let unique = toSlug(body.slug || body.title);
  for (let i = 2; i < 50; i++) {
    const { data: exists } = await supabaseAdmin
      .from('blogs')
      .select('id')
      .eq('slug', unique)
      .neq('id', id)
      .maybeSingle();
    if (!exists) break;
    unique = `${unique}-${i}`;
  }

  const now = new Date().toISOString();
  const { data: blog, error: blogErr } = await supabaseAdmin
    .from('blogs')
    .update({
      title: body.title,
      subtitle: body.subtitle ?? null,
      description: body.description ?? null,
      excerpt: body.excerpt ?? null,
      slug: unique,
      status: body.status,
      category_id: body.category_id ?? null,
      cover_image_id: body.cover_image_id ?? null,
      content_html: sanitizeHtml(body.content_html || '', {
        allowedTags: [
          'a','p','h1','h2','h3','h4','ul','ol','li','img','video','code','pre','blockquote','strong','em','u','span','br','hr','table','thead','tbody','tr','th','td'
        ],
        allowedAttributes: {
          a: ['href','target','rel'],
          img: ['src','alt','width','height'],
          video: ['src','controls','poster','width','height'],
          span: ['style'],
          '*': ['style']
        },
        allowedSchemes: ['http','https','data','mailto'],
        allowProtocolRelative: false,
      }),
      content_delta: body.content_delta ?? null,
      updated_at: now,
    })
    .eq('id', id)
    .select('id, slug, status, published_at, title, subtitle, description, excerpt, content_html, category:categories(id, name, slug), cover_image:images!blogs_cover_image_id_fkey(id, url), created_at, updated_at')
    .single();
  if (blogErr) return res.status(500).json({ error: blogErr.message });

  // Replace tags
  await supabaseAdmin.from('blog_tags').delete().eq('blog_id', id);
  if (body.tags?.length) {
    const rows = body.tags.map((tagId) => ({ blog_id: id, tag_id: tagId }));
    const { error: tagErr } = await supabaseAdmin.from('blog_tags').insert(rows);
    if (tagErr) return res.status(500).json({ error: tagErr.message });
  }

  const { data: tags, error: tagsErr } = await supabaseAdmin
    .from('tags')
    .select('id, name, slug, blog_tags!inner(blog_id)')
    .eq('blog_tags.blog_id', id);
  if (tagsErr) return res.status(500).json({ error: tagsErr.message });

  return res.status(200).json({ ...blog, tags });
}


