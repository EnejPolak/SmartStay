import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type BlogItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string | null;
  content_html?: string | null;
  cover_photo: string | null;
  published_at: string;
  category_name: string | null;
  category_slug: string | null;
  read_minutes?: number;
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

type BlogListResponse = {
  hero: BlogItem | null;
  latest: BlogItem[];
  pagination: { limit: number; offset: number; total: number };
  categories?: Category[];
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

function computeReadMinutes(html?: string | null): number {
  if (!html) return 1;
  const text = stripHtmlToText(html);
  if (!text) return 1;
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

const FALLBACK_IMAGE = "/pictures/logo/smartStay_logo.png";

const BlogPage: React.FC = () => {
  const [data, setData] = React.useState<BlogListResponse | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = React.useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch categories on mount
  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('/api/categories');
        if (res.ok) {
          const categoriesData = await res.json();
          if (isMounted && Array.isArray(categoriesData)) {
            setCategories(categoriesData);
          }
        }
      } catch (e) {
        console.error('Failed to load categories:', e);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  // After categories load, determine which categories actually have published blogs
  React.useEffect(() => {
    if (!categories || categories.length === 0) {
      setFilteredCategories([]);
      return;
    }

    let isMounted = true;
    (async () => {
      try {
        // Use public list to gather categories with posts (increase limit to cover most cases)
        const res = await fetch('/api/blogs?limit=200');
        if (!res.ok) throw new Error('Failed to inspect blog categories');
        const json: BlogListResponse = await res.json();
        const presentSlugs = new Set<string>();
        if (json.hero?.category_slug) presentSlugs.add(json.hero.category_slug);
        (json.latest || []).forEach((it) => {
          if (it.category_slug) presentSlugs.add(it.category_slug);
        });

        const filtered = categories.filter((c) => presentSlugs.has(c.slug));
        if (!isMounted) return;
        setFilteredCategories(filtered);

        // If current selection is not available anymore, reset to All
        if (selectedCategory && !filtered.some((c) => c.id === selectedCategory)) {
          setSelectedCategory(null);
        }
      } catch (e) {
        console.error('Failed to compute filtered categories:', e);
        // Fallback: show none rather than all to avoid empty categories
        if (isMounted) setFilteredCategories([]);
      }
    })();
    return () => { isMounted = false; };
  }, [categories]);

  // Fetch blogs based on selected category
  React.useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        // If no category selected, use the public list endpoint
        if (!selectedCategory) {
          const res = await fetch('/api/blogs');
          if (!res.ok) throw new Error('Failed to load blogs');
          const json: BlogListResponse = await res.json();
          if (isMounted) setData(json);
          return;
        }

        // When filtering by category, use the list endpoint and transform the result
        const params = new URLSearchParams({
          status: 'published',
          category: selectedCategory,
          limit: '24',
          offset: '0',
        });

        const res = await fetch(`/api/blogs?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to load blogs');
        const json: any = await res.json();

        const items = Array.isArray(json.items) ? json.items : [];
        const mapped: BlogItem[] = items.map((b: any) => {
          const catObj = Array.isArray(b?.category) ? b.category[0] : b?.category;
          const summary = b.excerpt ?? b.description ?? (b.content_html ? stripHtmlToText(b.content_html).slice(0, 200) : null);
          return {
            id: b.id,
            slug: b.slug,
            title: b.title,
            subtitle: b.subtitle ?? null,
            summary,
            content_html: b.content_html ?? null,
            cover_photo: b.cover_photo ?? null,
            published_at: b.published_at,
            category_name: catObj?.name ?? null,
            category_slug: catObj?.slug ?? null,
            read_minutes: computeReadMinutes(b.content_html),
          } as BlogItem;
        });

        const hero = mapped[0] ?? null;
        const latest = hero ? mapped.slice(1) : mapped;
        const transformed: BlogListResponse = {
          hero,
          latest,
          pagination: { limit: mapped.length, offset: 0, total: typeof json.total === 'number' ? json.total : mapped.length },
        };

        if (isMounted) setData(transformed);
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Unexpected error');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title>SmartStay Blog - Hospitality Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest trends, tips, and insights in hospitality and property management from the SmartStay team." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
        <Navbar />
        
        {/* Hero Section with staggered animations */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600/20 to-blue-600/20 text-violet-300 border border-violet-500/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Latest Insights
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                SmartStay
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Discover the latest trends, insights, and best practices in hospitality technology. 
              Stay ahead with expert advice from industry leaders.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        {filteredCategories.length > 0 && (
          <section className="px-4 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === null
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  All Articles
                </button>
                {filteredCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Loader / Error */}
        <section className="px-4 mb-8">
          {loading && (
            <div className="max-w-6xl mx-auto flex items-center justify-center py-12">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
            </div>
          )}
          {error && (
            <div className="max-w-6xl mx-auto text-center text-red-400 py-6">{error}</div>
          )}
        </section>

        {/* Hero article */}
        {data?.hero && (
          <section className="px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>Featured Article</h2>
              <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 opacity-0 animate-fade-in-up hover:transform hover:scale-[1.02]" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30">
                        {data.hero.category_name || 'General'}
                      </span>
                      <span className="text-gray-400 text-sm">{(data.hero.read_minutes || 1)} min read</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                      {data.hero.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {data.hero.summary || (data.hero.content_html ? stripHtmlToText(data.hero.content_html).slice(0, 200) : '')}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          S
                        </div>
                        <div>
                          <p className="text-gray-200 font-medium text-sm">SmartStay Team</p>
                          <p className="text-gray-400 text-xs">{formatDatePretty(data.hero.published_at)}</p>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/blog/${data.hero.slug}`}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300 group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={data.hero.cover_photo || FALLBACK_IMAGE}
                      alt={data.hero.title}
                      fill
                      className="object-contain bg-gradient-to-br from-slate-900 to-gray-800 p-8"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {data?.latest && data.latest.length > 0 && (
              <h2 className="text-center mb-8 md:mb-12 text-2xl md:text-3xl font-semibold text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                {selectedCategory 
                  ? `${categories.find(cat => cat.id === selectedCategory)?.name || 'Category'} Articles`
                  : 'Latest Articles'
                }
              </h2>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {data?.latest?.map((post, index) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="group h-full flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/50 to-slate-900/50 backdrop-blur-xl ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-0.5 opacity-0 animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-violet-400/60 after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" 
                  style={{ animationDelay: `${1.8 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
                    {post.cover_photo ? (
                      <Image
                        src={post.cover_photo}
                        alt={post.title}
                        fill
                        priority={false}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span 
                        className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 text-white px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur shadow-sm"
                        aria-label={`Category: ${post.category_name || 'General'}`}
                      >
                        {post.category_name || 'General'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Wrapper */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-sm text-white/60 tracking-tight">
                      <span>{formatDatePretty(post.published_at)}</span>
                      <span className="opacity-50">•</span>
                      <span>{(post.read_minutes || 1)} min read</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white leading-tight group-hover:text-violet-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="mt-2 text-white/70 line-clamp-3">
                      {post.summary || (post.content_html ? stripHtmlToText(post.content_html).slice(0, 200) : '')}
                    </p>
                    
                    {/* Separator */}
                    <div className="my-5 h-px bg-white/10"></div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                          S
                        </div>
                        <span className="text-white/80 text-sm font-medium">SmartStay Team</span>
                      </div>
                      
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md active:scale-[0.98] transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {(!data || (!loading && !error && (!data.hero && (!data.latest || data.latest.length === 0)))) && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-violet-600/20 to-blue-600/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedCategory 
                    ? `No articles found in ${categories.find(cat => cat.id === selectedCategory)?.name || 'this category'}`
                    : 'No articles found'
                  }
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedCategory 
                    ? 'Try selecting a different category or check back later.'
                    : 'Try again later. New content is coming soon.'
                  }
                </p>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View All Articles
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;


