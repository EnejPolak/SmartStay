import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { supabaseAdmin } from '../_lib/supabase';
import { toSlug } from '../_lib/slug';

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

const listQuerySchema = z.object({
  status: z.enum(['draft', 'published', 'scheduled', 'archived']).optional(),
  q: z.string().optional(),
  category: z.string().uuid().optional(),
  tag: z.string().uuid().optional(),
  limit: z.string().transform(s => parseInt(s, 10)).pipe(z.number().min(1).max(100)).default(20),
  offset: z.string().transform(s => parseInt(s, 10)).pipe(z.number().min(0)).default(0),
});

const slugQuerySchema = z.object({
  slug: z.string().min(1),
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
  if (req.method === 'GET') {
    // Check if this is a slug-based request
    if (req.query.slug && !req.query.status && !req.query.q && !req.query.category && !req.query.tag && !req.query.limit && !req.query.offset) {
      return handleGetBySlug(req, res);
    }
    return handleGet(req, res);
  }
  
  if (req.method === 'POST') {
    return handleCreate(req, res);
  }

  return res.status(405).end();
}

async function handleGetBySlug(req: NextApiRequest, res: NextApiResponse) {
  const parsed = slugQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  const { slug } = parsed.data;

  const { data: blog, error } = await supabaseAdmin
    .from('blogs')
    .select(`
      id, slug, status, published_at, title, subtitle, description, excerpt,
      content_html, cover_photo, updated_at, author,
      category:categories(id, name, slug),
      tags:blog_tags(tag:tags(id, name, slug))
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return res.status(404).json({ error: 'Blog not found' });
    }
    console.error('[blogs/slug] Query error:', error);
    return res.status(500).json({ error: error.message });
  }

  // Transform the response to match expected format
  const response = {
    ...blog,
    tags: blog.tags?.map((t: any) => t.tag) || []
  };

  return res.status(200).json(response);
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const parsed = listQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ fieldErrors: { query: 'Invalid query parameters' } });
  }

  const { status, q, category, tag, limit, offset } = parsed.data;

  let query = supabaseAdmin
    .from('blogs')
    .select(`
      id, slug, status, published_at, title, subtitle, description, excerpt,
      content_html, cover_photo, updated_at, author,
      category:categories(id, name, slug),
      tags:blog_tags(tag:tags(id, name, slug))
    `);

  // Apply filters
  if (status) {
    query = query.eq('status', status);
  }
  
  if (q) {
    query = query.or(`title.ilike.%${q}%,description.ilike.%${q}%,slug.ilike.%${q}%`);
  }
  
  if (category) {
    query = query.eq('category_id', category);
  }
  
  if (tag) {
    query = query.eq('blog_tags.tag_id', tag);
  }

  // Get total count
  const { count } = await supabaseAdmin
    .from('blogs')
    .select('*', { count: 'exact', head: true });

  // Get paginated results
  const { data, error } = await query
    .order('updated_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('[blogs/list] Query error:', error);
    return res.status(500).json({ error: error.message });
  }

  // Transform the response to match expected format
  const items = data?.map(blog => ({
    ...blog,
    tags: blog.tags?.map((t: any) => t.tag) || []
  })) || [];

  return res.status(200).json({
    items,
    total: count || 0
  });
}

async function handleCreate(req: NextApiRequest, res: NextApiResponse) {
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

  // Check slug uniqueness
  const { data: existingSlug } = await supabaseAdmin
    .from('blogs')
    .select('id')
    .eq('slug', body.slug)
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
  const publishedAt = body.status === 'published' ? now : null;

  // Start transaction
  const { data: blog, error: blogError } = await supabaseAdmin
    .from('blogs')
    .insert({
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
      author: 'SmartxStay',
    })
    .select(`
      id, slug, status, published_at, title, subtitle, description, excerpt,
      content_html, cover_photo, updated_at, author,
      category:categories(id, name, slug)
    `)
    .single();

  if (blogError) {
    console.error('[blogs/create] Insert error:', blogError);
    return res.status(500).json({ error: blogError.message });
  }

  // Insert blog_tags
  if (uniqueTags.length > 0) {
    const blogTags = uniqueTags.map(tagId => ({
      blog_id: blog.id,
      tag_id: tagId
    }));

    const { error: tagError } = await supabaseAdmin
      .from('blog_tags')
      .insert(blogTags);

    if (tagError) {
      console.error('[blogs/create] Tag insert error:', tagError);
      return res.status(500).json({ error: tagError.message });
    }
  }

  // Fetch tags for response
  const { data: tags, error: tagsError } = await supabaseAdmin
    .from('tags')
    .select('id, name, slug')
    .in('id', uniqueTags);

  if (tagsError) {
    console.error('[blogs/create] Tags fetch error:', tagsError);
    return res.status(500).json({ error: tagsError.message });
  }

  return res.status(200).json({
    ...blog,
    tags: tags || []
  });
}


