export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string | null;
};

export type BlogListItem = {
  id: string;
  title: string;
  subtitle: string | null;
  slug: string;
  excerpt: string | null;
  cover_photo: string | null;
  published_at: string | null;
  author: string;
  category?: Category | null;
  tags: Tag[];
};

export type BlogDetail = BlogListItem & {
  content_html: string | null;
};
