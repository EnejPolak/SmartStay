'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostHeaderProps {
  title: string;
  date?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export default function BlogPostHeader({
  title,
  date,
  featuredImage,
}: BlogPostHeaderProps) {
  const { language } = useLanguage();

  const translations = {
    en: {
      backToBlog: 'Back to Blog',
    },
    sl: {
      backToBlog: 'Nazaj na Blog',
    },
    hr: {
      backToBlog: 'Natrag na Blog',
    },
  };

  const t = translations[language] || translations.en;

  const formattedDate = date
    ? new Date(date).toLocaleDateString(language === 'sl' ? 'sl-SI' : language === 'hr' ? 'hr-HR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <header className="blog-post-header">
      <Link href="/blog" className="back-link">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{t.backToBlog}</span>
      </Link>

      {featuredImage?.node?.sourceUrl && (
        <div className="featured-image-wrapper">
          <Image
            src={featuredImage.node.sourceUrl}
            alt={title}
            fill
            className="featured-image"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      <div className="header-content">
        <h1 className="post-title">{title}</h1>

        {formattedDate && (
          <time className="post-date">{formattedDate}</time>
        )}
      </div>

      <style jsx>{`
        .blog-post-header {
          margin-bottom: 48px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #7c5fd9;
          margin-bottom: 32px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .back-link:hover {
          color: #7db8ff;
          gap: 12px;
        }

        .back-link svg {
          transition: transform 0.3s ease;
        }

        .back-link:hover svg {
          transform: translateX(-4px);
        }

        .featured-image-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 40px;
          background: linear-gradient(
            135deg,
            rgba(125, 184, 255, 0.1) 0%,
            rgba(162, 158, 255, 0.1) 50%,
            rgba(124, 95, 217, 0.1) 100%
          );
          box-shadow: 0 20px 40px rgba(125, 184, 255, 0.15);
        }

        .featured-image {
          object-fit: cover;
        }

        .header-content {
          text-align: center;
        }

        .post-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
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

        .post-date {
          display: block;
          font-size: 18px;
          font-weight: 500;
          color: #737373;
        }

        @media (max-width: 768px) {
          .featured-image-wrapper {
            height: 250px;
            border-radius: 16px;
            margin-bottom: 32px;
          }

          .post-title {
            font-size: 32px;
          }

          .post-date {
            font-size: 16px;
          }
        }
      `}</style>
    </header>
  );
}

