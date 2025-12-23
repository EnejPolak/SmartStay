import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostsByCategory } from '@/lib/getPostsByCategory';
import { getCategories } from '@/lib/getCategories';
import BlogHero from '@/components/blog/BlogHero';
import BlogPostCard from '@/components/blog/BlogPostCard';
import CategoryFilters from '@/components/blog/CategoryFilters';

export const dynamic = 'force-dynamic';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPostsByCategory(slug);

  if (!result) {
    return {
      title: 'Category Not Found | SmartxStay',
    };
  }

  return {
    title: `${result.categoryName}`,
    description: `Browse blog posts in the ${result.categoryName} category on SmartxStay. Read articles about vacation rental management, hospitality technology, and guest experience.`,
    keywords: [
      'SmartxStay blog',
      result.categoryName,
      'vacation rental blog',
      'hospitality technology',
      'guest experience',
    ],
    openGraph: {
      title: `${result.categoryName} | SmartxStay Blog`,
      description: `Browse blog posts in the ${result.categoryName} category on SmartxStay.`,
      url: `https://smartxstay.com/blog/category/${slug}`,
      images: [
        {
          url: '/logo__1__720.png',
          width: 1200,
          height: 630,
          alt: `${result.categoryName} - SmartxStay Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${result.categoryName} | SmartxStay Blog`,
      description: `Browse blog posts in the ${result.categoryName} category.`,
      images: ['/logo__1__720.png'],
    },
    alternates: {
      canonical: `https://smartxstay.com/blog/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  let categoryData;
  let categories;
  let categoriesError = false;

  try {
    categoryData = await getPostsByCategory(slug);
  } catch (err) {
    console.error('Failed to load category posts:', err);
    categoryData = null;
  }

  try {
    categories = await getCategories();
  } catch (err) {
    categoriesError = true;
    console.error('Failed to load categories:', err);
  }

  if (!categoryData) {
    notFound();
  }

  return (
    <main>
      {/* Fixed Background */}
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <BlogHero />

        <section
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 32px 100px 32px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {/* Category Filters */}
          {!categoriesError && categories && categories.length > 0 && (
            <CategoryFilters categories={categories} activeCategory={slug} />
          )}

          {/* Category Title */}
          <div
            style={{
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 900,
                lineHeight: 1.2,
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {categoryData.categoryName}
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#737373',
                margin: 0,
              }}
            >
              {categoryData.posts.length}{' '}
              {categoryData.posts.length === 1 ? 'post' : 'posts'} in this category
            </p>
          </div>

          {/* Posts Grid */}
          {categoryData.posts.length === 0 ? (
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                borderRadius: '20px',
                padding: '48px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  color: '#737373',
                }}
              >
                No posts found in this category.
              </p>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {categoryData.posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

