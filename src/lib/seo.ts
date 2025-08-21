import Head from 'next/head';
import { SITE_NAME, SITE_URL, SITE_TWITTER, DEFAULT_OG_IMAGE, buildCanonical } from './site';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string | null;
  slug?: string; // like '/blog/my-post'
  type?: 'website' | 'article' | 'product' | 'service' | 'profile';
  keywords?: string[];
  noindex?: boolean;
  canonical?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
};

export function clampTitle(base?: string): string {
  if (!base) return SITE_NAME;
  const t = base.trim();
  return t.length > 55 ? `${t.slice(0, 52)}...` : t;
}

export function clampDescription(d?: string): string | undefined {
  if (!d) return undefined;
  const t = d.trim();
  return t.length > 155 ? `${t.slice(0, 152)}...` : t;
}

export function SEO({ title, description, image, slug, type = 'website', keywords, noindex, canonical, jsonLd }: SEOProps) {
  const pageTitle = clampTitle(title ? `${title}` : SITE_NAME);
  const desc = clampDescription(description) || '';
  const url = canonical || buildCanonical(slug || '/');
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{pageTitle}</title>
      {desc && <meta name="description" content={desc} />}
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={pageTitle} />
      {desc && <meta property="og:description" content={desc} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage || ''} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_TWITTER} />
      <meta name="twitter:title" content={pageTitle} />
      {desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:image" content={ogImage || ''} />

      {/* JSON-LD */}
      {jsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    sameAs: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://twitter.com/',
      'https://www.instagram.com/',
    ],
  };
}

export function buildBlogPostingJsonLd({
  title,
  description,
  image,
  author = SITE_NAME,
  datePublished,
  url,
}: {
  title: string;
  description?: string | null;
  image?: string | null;
  author?: string;
  datePublished: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description || undefined,
    image: image || DEFAULT_OG_IMAGE,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    mainEntityOfPage: url,
  };
}


