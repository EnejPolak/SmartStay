import { supabaseBrowser } from "@/lib/supabaseBrowser";
import type { BlogListItem, BlogDetail, Tag, Category } from "@/types/blog";

function mapCategory(row: any): Category | null {
  if (!row) return null;
  const r = Array.isArray(row) ? row[0] : row;
  if (!r) return null;
  return { id: r.id, name: r.name, slug: r.slug };
}
function mapTags(rows?: any[] | null): Tag[] {
  if (!rows || rows.length === 0) return [];
  return rows
    .map((r) => {
      const t = r?.tags ?? r;
      if (!t) return null;
      return {
        id: String(t.id),
        name: String(t.name),
        slug: t.slug ?? null,
      } as Tag;
    })
    .filter(Boolean) as Tag[];
}

export async function fetchBlogList(): Promise<BlogListItem[]> {
  const { data, error } = await supabaseBrowser
    .from("blogs")
    .select(
      `
      id, title, subtitle, slug, excerpt, cover_photo, published_at, author,
      categories:category_id ( id, name, slug ),
      blog_tags ( tags:tags ( id, name, slug ) )
    `
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;

  return (data ?? []).map((row: any) => ({
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    slug: row.slug,
    excerpt: row.excerpt,
    cover_photo: row.cover_photo,
    published_at: row.published_at,
    author: row.author ?? "SmartxStay",
    category: mapCategory(row.categories),
    tags: mapTags(row.blog_tags),
  }));
}

export async function fetchBlogBySlug(
  slug: string
): Promise<BlogDetail | null> {
  const { data, error } = await supabaseBrowser
    .from("blogs")
    .select(
      `
      id, title, subtitle, slug, excerpt, cover_photo, published_at, content_html, author,
      categories:category_id ( id, name, slug ),
      blog_tags ( tags:tags ( id, name, slug ) )
    `
    )
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    slug: data.slug,
    excerpt: data.excerpt,
    cover_photo: data.cover_photo,
    published_at: data.published_at,
    content_html: data.content_html,
    author: data.author ?? "SmartxStay",
    category: mapCategory(data.categories),
    tags: mapTags(data.blog_tags),
  };
}
