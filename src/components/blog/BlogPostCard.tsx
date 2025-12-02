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
      readMore: 'Read more',
    },
    sl: {
      readMore: 'Preberi več',
    },
    hr: {
      readMore: 'Pročitaj više',
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

  return (
    <article className="blog-post-card">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="card-content">
          {post.featuredImage?.node?.sourceUrl && (
            <div className="card-image-wrapper">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                fill
                className="card-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>

            {formattedDate && (
              <time className="card-date">{formattedDate}</time>
            )}

            {post.excerpt && (
              <div
                className="card-excerpt"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            )}

            <div className="card-read-more">
              <span>{t.readMore}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .blog-post-card {
          width: 100%;
          margin-bottom: 32px;
        }

        .card-content {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .card-content:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(125, 184, 255, 0.2),
            0 8px 16px rgba(162, 158, 255, 0.15);
          border-color: rgba(162, 158, 255, 0.4);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          background: linear-gradient(
            135deg,
            rgba(125, 184, 255, 0.1) 0%,
            rgba(162, 158, 255, 0.1) 50%,
            rgba(124, 95, 217, 0.1) 100%
          );
          overflow: hidden;
        }

        .card-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card-content:hover .card-image {
          transform: scale(1.05);
        }

        .card-body {
          padding: 32px;
        }

        .card-title {
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 16px 0;
          color: #0f0f0f;
          transition: color 0.3s ease;
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .card-content:hover .card-title {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
          text-decoration: none;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .card-date {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #737373;
          margin-bottom: 16px;
        }

        .card-excerpt {
          font-size: 16px;
          line-height: 1.7;
          color: #737373;
          margin-bottom: 24px;
        }

        .card-excerpt :global(p) {
          margin: 0;
        }

        .card-excerpt :global(*) {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #7c5fd9;
          transition: all 0.3s ease;
        }

        .card-content:hover .card-read-more {
          color: #7db8ff;
          gap: 12px;
        }

        .card-read-more svg {
          transition: transform 0.3s ease;
        }

        .card-content:hover .card-read-more svg {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .card-image-wrapper {
            height: 200px;
          }

          .card-body {
            padding: 24px;
          }

          .card-title {
            font-size: 24px;
          }
        }
      `}</style>
    </article>
  );
}

