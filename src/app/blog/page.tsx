import { getPosts } from '@/lib/getPosts';
import { getCategories } from '@/lib/getCategories';
import BlogHero from '@/components/blog/BlogHero';
import BlogPostCard from '@/components/blog/BlogPostCard';
import CategoryFilters from '@/components/blog/CategoryFilters';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog | SmartxStay',
  description: 'Read our latest blog posts about SmartxStay',
};

export default async function BlogPage() {
  let posts;
  let categories;
  let error = false;
  let categoriesError = false;

  try {
    posts = await getPosts();
  } catch (err) {
    error = true;
    console.error('Failed to load posts:', err);
  }

  try {
    categories = await getCategories();
  } catch (err) {
    categoriesError = true;
    console.error('Failed to load categories:', err);
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
          {!categoriesError && categories && categories.length > 0 ? (
            <CategoryFilters categories={categories} />
          ) : null}

          {error ? (
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(255, 0, 0, 0.2)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#dc2626',
                  marginBottom: '8px',
                }}
              >
                Failed to load blog posts
              </p>
              <p style={{ fontSize: '16px', color: '#737373' }}>
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          ) : !posts || posts.length === 0 ? (
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
                No blog posts found.
              </p>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
