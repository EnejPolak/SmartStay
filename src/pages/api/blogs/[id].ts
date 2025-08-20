import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { supabaseAdmin } from '../_lib/supabase';

// Validation schemas
const blogPayloadSchema = z.object({
  title: z.string().min(2).max(120).transform(s => s.trim()),
  subtitle: z.string().max(160).nullable().optional(),
  description: z.string().max(160).nullable().optional(),
  excerpt: z.string().max(240).nullable().optional(),
  slug: z.string().min(2).max(140).regex(/^[a-z0-9-]+$/, 'Slug must be kebab-case'),
  status: z.enum(['draft', 'published', 'scheduled', 'archived']),
  category_id: z.string().uuid().nullable().optional(),
  cover_photo: z.string().max(2048).url().nullable().optional(),
  content_html: z.string().default(''),
  content_delta: z.any().nullable().optional(),
  tags: z.array(z.string().uuid()).max(5).default([]),
});

// HTML sanitization options
const sanitizeOptions = {
  allowedTags: [
    'a', 'p', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'img', 'video', 'code', 'pre', 
    'blockquote', 'strong', 'em', 'u', 'span', 'figure', 'figcaption', 'br', 'hr'
  ],
  allowedAttributes: {
    'a': ['href', 'target', 'rel'],
    'img': ['src', 'alt', 'class', 'style'],
    'video': ['src', 'controls'],
    'span': ['style'],
  },
  allowedStyles: {
    'span': {
      'color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
      'font-size': [/^\d+(?:px|em|%)$/],
      'text-decoration': [/^none$/, /^underline$/, /^line-through$/],
    }
  },
  allowedSchemes: ['http', 'https'],
  allowProtocolRelative: false,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = String(req.query.id);

  if (req.method === 'GET') {
    // If id looks like a slug (contains a dash and not a UUID), treat as public slug read
    const isUuid = /^[0-9a-fA-F-]{36}$/.test(id);
    if (!isUuid) {
      return handlePublicGetBySlug(req, res, id);
    }
    return handleGet(req, res, id);
  }
  
  if (req.method === 'PUT') {
    return handleUpdate(req, res, id);
  }

  return res.status(405).end();
}

function stripHtmlToText(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function estimateReadMinutesFromHtml(html: string | null | undefined): number | undefined {
  if (!html) return undefined;
  const text = stripHtmlToText(html);
  if (!text) return 1;
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

async function handlePublicGetBySlug(_req: NextApiRequest, res: NextApiResponse, slug: string) {
  const { data: b, error } = await supabaseAdmin
    .from('blogs')
    .select(`
      id, slug, title, subtitle,
      cover_photo, published_at, content_html,
      description, excerpt,
      category:categories(name, slug)
    `)
    .eq('status', 'published')
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return res.status(404).json({ error: 'Blog not found' });
    }
    // eslint-disable-next-line no-console
    console.error('[blogs/publicGetBySlug] Query error:', error);
    return res.status(500).json({ error: error.message });
  }

  const summary = b?.excerpt ?? b?.description ?? null;
  const readMinutes = estimateReadMinutesFromHtml(b?.content_html);
  const cat = Array.isArray((b as any)?.category) ? (b as any).category[0] : (b as any).category;

  return res.status(200).json({
    id: b.id,
    slug: b.slug,
    title: b.title,
    subtitle: b.subtitle ?? null,
    summary,
    cover_photo: b.cover_photo ?? null,
    published_at: b.published_at,
    category_name: cat?.name ?? null,
    category_slug: cat?.slug ?? null,
    content_html: b.content_html ?? '',
    read_minutes: readMinutes,
  });
}

async function handleGet(req: NextApiRequest, res: NextApiResponse, id: string) {
  const { data: blog, error } = await supabaseAdmin
    .from('blogs')
    .select(`
      id, slug, status, published_at, title, subtitle, description, excerpt,
      content_html, cover_photo, updated_at, author,
      category:categories(id, name, slug),
      tags:blog_tags(tag:tags(id, name, slug))
    `)
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return res.status(404).json({ error: 'Blog not found' });
    }
    console.error('[blogs/get] Query error:', error);
    return res.status(500).json({ error: error.message });
  }

  // Transform the response to match expected format
  const response = {
    ...blog,
    tags: blog.tags?.map((t: any) => t.tag) || []
  };

  return res.status(200).json(response);
}

async function handleUpdate(req: NextApiRequest, res: NextApiResponse, id: string) {
  const parsed = blogPayloadSchema.safeParse(req.body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((err: any) => {
      const field = err.path.join('.');
      fieldErrors[field] = err.message;
    });
    return res.status(400).json({ fieldErrors });
  }

  const body = parsed.data;

  // Check if blog exists
  const { data: existingBlog, error: fetchError } = await supabaseAdmin
    .from('blogs')
    .select('id, status, published_at')
    .eq('id', id)
    .single();

  if (fetchError) {
    if (fetchError.code === 'PGRST116') {
      return res.status(404).json({ error: 'Blog not found' });
    }
    console.error('[blogs/update] Fetch error:', fetchError);
    return res.status(500).json({ error: fetchError.message });
  }

  // Validate published status requirements
  if (body.status === 'published') {
    if (!body.title || !body.content_html || !body.cover_photo) {
      return res.status(400).json({
        fieldErrors: {
          status: 'Published posts require title, content, and cover photo'
        }
      });
    }
  }

  // Check slug uniqueness (excluding current blog)
  const { data: existingSlug } = await supabaseAdmin
    .from('blogs')
    .select('id')
    .eq('slug', body.slug)
    .neq('id', id)
    .maybeSingle();

  if (existingSlug) {
    // Generate suggestion
    let suggestion = body.slug;
    for (let i = 2; i < 50; i++) {
      const testSlug = `${body.slug}-${i}`;
      const { data: exists } = await supabaseAdmin
        .from('blogs')
        .select('id')
        .eq('slug', testSlug)
        .neq('id', id)
        .maybeSingle();
      if (!exists) {
        suggestion = testSlug;
        break;
      }
    }
    return res.status(409).json({ 
      error: 'Slug already exists',
      suggestion 
    });
  }

  // Validate category exists
  if (body.category_id) {
    const { data: category } = await supabaseAdmin
      .from('categories')
      .select('id')
      .eq('id', body.category_id)
      .maybeSingle();
    if (!category) {
      return res.status(400).json({
        fieldErrors: { category_id: 'Category not found' }
      });
    }
  }

  // Validate tags exist and are distinct
  const uniqueTags = [...new Set(body.tags)];
  if (uniqueTags.length !== body.tags.length) {
    return res.status(400).json({
      fieldErrors: { tags: 'Tags must be distinct' }
    });
  }

  if (uniqueTags.length > 0) {
    const { data: existingTags } = await supabaseAdmin
      .from('tags')
      .select('id')
      .in('id', uniqueTags);
    
    if (!existingTags || existingTags.length !== uniqueTags.length) {
      return res.status(400).json({
        fieldErrors: { tags: 'One or more tags not found' }
      });
    }
  }

  const now = new Date().toISOString();
  
  // Determine if we need to set published_at
  let publishedAt = existingBlog.published_at;
  if (body.status === 'published' && !existingBlog.published_at) {
    publishedAt = now;
  }

  // Update blog
  const { data: blog, error: blogError } = await supabaseAdmin
    .from('blogs')
    .update({
      title: body.title,
      subtitle: body.subtitle || null,
      description: body.description || null,
      excerpt: body.excerpt || null,
      slug: body.slug,
      status: body.status,
      category_id: body.category_id || null,
      cover_photo: body.cover_photo || null,
      content_html: sanitizeHtml(body.content_html, sanitizeOptions),
      content_delta: body.content_delta || null,
      published_at: publishedAt,
      updated_at: now,
    })
    .eq('id', id)
    .select(`
      id, slug, status, published_at, title, subtitle, description, excerpt,
      content_html, cover_photo, updated_at, author,
      category:categories(id, name, slug)
    `)
    .single();

  if (blogError) {
    console.error('[blogs/update] Update error:', blogError);
    return res.status(500).json({ error: blogError.message });
  }

  // Replace blog_tags (delete all, then insert new)
  const { error: deleteError } = await supabaseAdmin
    .from('blog_tags')
    .delete()
    .eq('blog_id', id);

  if (deleteError) {
    console.error('[blogs/update] Tag delete error:', deleteError);
    return res.status(500).json({ error: deleteError.message });
  }

  // Insert new blog_tags
  if (uniqueTags.length > 0) {
    const blogTags = uniqueTags.map(tagId => ({
      blog_id: id,
      tag_id: tagId
    }));

    const { error: tagError } = await supabaseAdmin
      .from('blog_tags')
      .insert(blogTags);

    if (tagError) {
      console.error('[blogs/update] Tag insert error:', tagError);
      return res.status(500).json({ error: tagError.message });
    }
  }

  // Fetch tags for response
  const { data: tags, error: tagsError } = await supabaseAdmin
    .from('tags')
    .select('id, name, slug')
    .in('id', uniqueTags);

  if (tagsError) {
    console.error('[blogs/update] Tags fetch error:', tagsError);
    return res.status(500).json({ error: tagsError.message });
  }

  return res.status(200).json({
    ...blog,
    tags: tags || []
  });
}


