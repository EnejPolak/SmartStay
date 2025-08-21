import type { GetServerSideProps } from 'next';
import { supabaseAdmin } from './api/_lib/supabase';
import { SITE_URL } from '@/lib/site';

function SiteMap() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  const urls: string[] = [
    '',
    '/blog',
    '/About_us',
    '/Contact',
    '/Prices',
  ].map((p) => `${SITE_URL}${p}`);

  const { data } = await supabaseAdmin
    .from('blogs')
    .select('slug, updated_at')
    .eq('status', 'published')
    .order('updated_at', { ascending: false })
    .limit(1000);

  const blogEntries = (data || []).map((b: any) => ({
    loc: `${SITE_URL}/blog/${b.slug}`,
    lastmod: new Date(b.updated_at || Date.now()).toISOString(),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `<url><loc>${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    )
    .join('\n  ')}
  ${blogEntries
    .map(
      (e) => `<url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join('\n  ')}
</urlset>`;

  res.write(xml);
  res.end();
  return { props: {} };
};

export default SiteMap;


