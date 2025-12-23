import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib/getPostBySlug';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | SmartxStay',
    };
  }

  // Extract description from content
  const description = post.content 
    ? post.content.replace(/<[^>]*>/g, '').substring(0, 160).trim() + '...' 
    : 'Read our latest blog post about SmartxStay';
  const imageUrl = post.featuredImage?.node?.sourceUrl || '/logo__1__720.png';

  return {
    title: post.title,
    description,
    keywords: [
      'SmartxStay blog',
      'vacation rental tips',
      'hospitality technology',
      'guest experience',
    ],
    openGraph: {
      title: `${post.title} | SmartxStay Blog`,
      description,
      url: `https://smartxstay.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SmartxStay Blog`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://smartxstay.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
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
        <article
          style={{
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: '120px 24px 80px 24px',
            }}
          >
            <BlogPostHeader
              title={post.title}
              date={post.date}
              featuredImage={post.featuredImage}
            />

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                borderRadius: '20px',
                padding: '48px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <BlogPostContent content={post.content} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
