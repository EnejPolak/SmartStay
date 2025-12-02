'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogHero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Blog',
      subtitle: 'Discover insights, stories, and updates from SmartxStay',
    },
    sl: {
      title: 'Blog',
      subtitle: 'Odkrijte vpoglede, zgodbe in novice o SmartxStay',
    },
    hr: {
      title: 'Blog',
      subtitle: 'Otkrijte uvide, priče i novosti o SmartxStay',
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className="blog-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="animated-gradient-text">{t.title}</span>
        </h1>
        <p className="hero-subtitle">
          {t.subtitle}
        </p>
      </div>

      <style jsx>{`
        .blog-hero {
          text-align: center;
          padding: 120px 20px 80px 20px;
          font-family: 'Inter', sans-serif;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          letter-spacing: -0.03em;
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
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

        .hero-subtitle {
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 400;
          color: #737373;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .blog-hero {
            padding: 100px 20px 60px 20px;
          }
        }
      `}</style>
    </section>
  );
}

