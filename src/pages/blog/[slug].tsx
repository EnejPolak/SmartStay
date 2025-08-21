import React from 'react';
import Head from 'next/head';
import { SEO, buildBlogPostingJsonLd, buildOrganizationJsonLd } from '@/lib/seo.tsx';
import { buildCanonical } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';

type BlogDetail = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string | null;
  cover_photo: string | null;
  content_html: string | null;
  published_at: string;
  category_name: string | null;
  category_slug: string | null;
  read_minutes?: number;
};

function formatDatePretty(dateString: string) {
  const d = new Date(dateString);
  const fmt = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return fmt.format(d);
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

function estimateReadMinutesFromHtml(html: string | null | undefined): number {
  if (!html) return 1;
  const text = stripHtmlToText(html);
  if (!text) return 1;
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

const FALLBACK_IMAGE = '/pictures/logo/smartStay_logo.png';

const BlogArticlePage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

  const [post, setPost] = React.useState<BlogDetail | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/blogs/${encodeURIComponent(slug)}`);
        if (res.status === 404) {
          if (isMounted) {
            setPost(null);
            setError('not-found');
          }
          return;
        }
        if (!res.ok) throw new Error('Failed to load article');
        const json = await res.json();
        // Normalize fields from API to the expected shape
        const detail: BlogDetail = {
          id: json.id,
          slug: json.slug,
          title: json.title,
          subtitle: json.subtitle ?? null,
          summary: json.summary ?? json.description ?? json.excerpt ?? null,
          cover_photo: json.cover_photo ?? null,
          content_html: json.content_html ?? null,
          published_at: json.published_at,
          category_name: json.category_name ?? json.category?.name ?? null,
          category_slug: json.category_slug ?? json.category?.slug ?? null,
          read_minutes: json.read_minutes,
        };
        if (isMounted) setPost(detail);
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Unexpected error');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, [slug]);

  const computedReadMinutes = post?.read_minutes ?? estimateReadMinutesFromHtml(post?.content_html);

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... - SmartStay Blog</title>
        </Head>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          <Navbar />
          <div className="relative z-10 flex items-center justify-center pt-40">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error === 'not-found' || !post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found - SmartStay</title>
        </Head>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          <Navbar />
          <div className="relative z-10 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
              <p className="text-gray-400 mb-8">The blog post you are looking for doesn\'t exist.</p>
              <Link href="/blog" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                ← Back to Blog
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  const canonical = buildCanonical(`/blog/${post.slug}`);
  const jsonLd = [
    buildOrganizationJsonLd(),
    buildBlogPostingJsonLd({
      title: post.title,
      description: post.summary || undefined,
      image: post.cover_photo || undefined,
      datePublished: post.published_at,
      url: canonical,
    }),
  ];

  return (
    <>
      <SEO
        title={`${post.title} - SmartStay Blog`}
        description={post.summary || undefined}
        image={post.cover_photo || undefined}
        slug={`/blog/${post.slug}`}
        type="article"
        keywords={[post.category_name || 'hospitality', 'guest experience', 'smartxstay']}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <Navbar />

        <div className="relative z-10 pt-28 pb-16">
          {/* Cover image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] mb-10">
            <Image
              src={post.cover_photo || FALLBACK_IMAGE}
              alt={post.title}
              fill
              className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-6"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Article container */}
          <article className="max-w-3xl mx-auto px-4">
            {/* Meta */}
            <div className="mb-6">
              <div className="flex items-center gap-3 flex-wrap">
                {post.category_slug ? (
                  <Link href={`/blog/category/${post.category_slug}`} className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                    {post.category_name || 'General'}
                  </Link>
                ) : (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                    {post.category_name || 'General'}
                  </span>
                )}
                <span className="text-gray-400 text-sm">{formatDatePretty(post.published_at)}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">SmartxStay Team</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">{computedReadMinutes} min read</span>
              </div>
            </div>

            {/* Title & subtitle */}
            <header className="mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">{post.title}</h1>
              {post.subtitle && (
                <p className="text-gray-300 text-lg leading-relaxed">{post.subtitle}</p>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-slate max-w-none">
              <div
                className="text-gray-300 leading-relaxed space-y-6 blog-content"
                dangerouslySetInnerHTML={{ __html: post.content_html || '' }}
              />
            </div>

            {/* Social Share Buttons */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">Share this article:</span>
                <div className="flex gap-4">
                  <FacebookShareButton
                    url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`}
                    quote={post.title}
                    hashtag="#SmartStay"
                  >
                    <FacebookIcon size={40} round className="hover:scale-110 transition-transform duration-300" />
                  </FacebookShareButton>
                  
                  <LinkedinShareButton
                    url={`${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.slug}`}
                    title={post.title}
                    summary={post.summary || ''}
                    source="SmartStay Blog"
                  >
                    <LinkedinIcon size={40} round className="hover:scale-110 transition-transform duration-300" />
                  </LinkedinShareButton>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => {
                      navigator.clipboard?.writeText(`${typeof window !== 'undefined' ? window.location.href : ''}`);
                    }}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    title="Copy link and share on Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>
        </div>

        <Footer />
      </div>

      <style jsx>{`
        .blog-content img, .blog-content video, .blog-content iframe {
          max-width: 100%;
          height: auto;
        }
        .blog-content pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default BlogArticlePage;


