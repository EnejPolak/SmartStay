'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/getPosts';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { language } = useLanguage();

  const translations = {
    en: {
      readMore: 'Read article',
      minRead: 'min read',
    },
    sl: {
      readMore: 'Preberi članek',
      minRead: 'min branja',
    },
    hr: {
      readMore: 'Pročitaj članak',
      minRead: 'min čitanja',
    },
  };

  const t = translations[language] || translations.en;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString(language === 'sl' ? 'sl-SI' : language === 'hr' ? 'hr-HR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  // Calculate estimated reading time (rough estimate based on content length)
  const calculateReadingTime = () => {
    if (post.excerpt) {
      const words = post.excerpt.replace(/<[^>]*>/g, '').split(/\s+/).length;
      const minutes = Math.ceil(words / 200); // Average reading speed
      return Math.max(1, minutes);
    }
    return 5; // Default
  };

  const readingTime = calculateReadingTime();

  return (
    <article className="blog-post-card">
      <Link href={`/blog/${post.slug}`}>
        <div className="card-wrapper">
          {/* Featured Image with Overlay */}
          <div className="card-image-container">
            {post.featuredImage?.node?.sourceUrl ? (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                fill
                className="card-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              />
            ) : (
              <div className="placeholder-gradient" />
            )}
            <div className="image-overlay" />
          </div>

          {/* Card Content */}
          <div className="card-content">
            {/* Meta Information */}
            <div className="card-meta">
              {formattedDate && (
                <time className="meta-date">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333zM10.667 1.333V4M5.333 1.333V4M2 6.667h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {formattedDate}
                </time>
              )}
              <span className="meta-divider">•</span>
              <span className="meta-time">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 4v4l2.667 1.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {readingTime} {t.minRead}
              </span>
            </div>

            {/* Title */}
            <h2 className="card-title blog-title">{post.title}</h2>

            {/* Excerpt */}
            {post.excerpt && (
              <div
                className="card-excerpt blog-content"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            )}

            {/* Read More Button */}
            <div className="card-footer">
              <span className="read-more-btn">
                {t.readMore}
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .blog-post-card {
          width: 100%;
          height: 100%;
        }

        .blog-post-card a {
          text-decoration: none !important;
          display: block;
          height: 100%;
        }

        .blog-post-card a:hover {
          text-decoration: none !important;
        }

        .blog-post-card a * {
          text-decoration: none !important;
        }

        .blog-post-card a:hover * {
          text-decoration: none !important;
        }

        .card-wrapper {
          height: 100%;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .card-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(125, 184, 255, 0.05) 0%, 
            rgba(162, 158, 255, 0.05) 50%, 
            rgba(124, 95, 217, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 24px;
        }

        .card-wrapper:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 48px rgba(125, 184, 255, 0.25),
                      0 8px 24px rgba(162, 158, 255, 0.15);
          border-color: rgba(162, 158, 255, 0.6);
        }

        .card-wrapper:hover::before {
          opacity: 1;
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(135deg, 
            rgba(125, 184, 255, 0.1) 0%, 
            rgba(162, 158, 255, 0.1) 100%);
        }

        .placeholder-gradient {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(125, 184, 255, 0.2) 0%, 
            rgba(162, 158, 255, 0.2) 50%, 
            rgba(124, 95, 217, 0.2) 100%);
        }

        .card-image {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper:hover .card-image {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0, 0, 0, 0.02) 100%);
          transition: background 0.4s ease;
        }

        .card-wrapper:hover .image-overlay {
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(125, 184, 255, 0.1) 100%);
        }

        .card-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #737373;
        }

        .meta-date,
        .meta-time {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-date svg,
        .meta-time svg {
          color: #a29eff;
          flex-shrink: 0;
        }

        .meta-divider {
          color: #d1d5db;
          font-weight: 300;
        }

        .card-title {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 800;
          line-height: 1.3;
          margin: 0;
          color: #0f0f0f;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-decoration: none !important;
        }

        .card-title,
        .card-title * {
          text-decoration: none !important;
        }

        .card-wrapper:hover .card-title {
          background: linear-gradient(120deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }

        .card-excerpt {
          font-size: 15px;
          line-height: 1.7;
          color: #737373;
          flex: 1;
          text-decoration: none !important;
        }

        .card-excerpt * {
          text-decoration: none !important;
        }

        .card-excerpt :global(p) {
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          text-decoration: none !important;
        }

        .card-excerpt :global(a) {
          text-decoration: none !important;
        }

        .card-excerpt :global(p *),
        .card-excerpt :global(span *),
        .card-excerpt :global(div *) {
          text-decoration: none !important;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(162, 158, 255, 0.1);
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 700;
          color: #7c5fd9;
          letter-spacing: 0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          text-decoration: none !important;
        }

        .card-wrapper:hover .read-more-btn {
          color: #7db8ff;
          gap: 12px;
        }

        .arrow-icon {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .card-image-container {
            height: 220px;
          }

          .card-content {
            padding: 24px;
            gap: 12px;
          }

          .card-meta {
            font-size: 13px;
            flex-wrap: wrap;
          }

          .card-title {
            font-size: 20px;
          }

          .card-excerpt {
            font-size: 14px;
          }

          .read-more-btn {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .card-wrapper {
            border-radius: 20px;
          }

          .card-image-container {
            height: 200px;
          }

          .card-content {
            padding: 20px;
            gap: 10px;
          }

          .card-meta {
            font-size: 12px;
          }

          .card-title {
            font-size: 18px;
          }

          .card-excerpt {
            font-size: 13px;
            line-height: 1.6;
          }
        }
      `}</style>
    </article>
  );
}

