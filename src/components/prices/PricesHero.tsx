'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricesHero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      packagesModules: 'Packages & Modules',
      title: 'Smarter digital experience for',
      yourGuests: 'your guests',
      subtitle: 'Choose a SmartStay package that grows with your needs.',
      description: 'From basic digital welcome to advanced automation and integrations - SmartStay lets you create an experience that delights every guest.',
      comparePackages: 'Compare packages',
      freeConsultation: 'Free consultation'
    },
    sl: {
      packagesModules: 'Paketi & Moduli',
      title: 'Pametnejša digitalna izkušnja za',
      yourGuests: 'vaše goste',
      subtitle: 'Izberite SmartxStay paket, ki raste z vašimi potrebami.',
      description: 'Od osnovne digitalne dobrodošlice do napredne avtomatizacije in integracij - SmartxStay vam omogoča, da ustvarite izkušnjo, ki navduši vsakega gosta.',
      comparePackages: 'Primerjaj pakete',
      freeConsultation: 'Brezplačen posvet'
    },
    hr: {
      packagesModules: 'Paketi i Moduli',
      title: 'Pametnije digitalno iskustvo za',
      yourGuests: 'vaše goste',
      subtitle: 'Odaberite SmartxStay paket koji raste s vašim potrebama.',
      description: 'Od osnovne digitalne dobrodošlice do napredne automatizacije i integracija - SmartxStay vam omogućava stvaranje iskustva koje oduševljava svakog gosta.',
      comparePackages: 'Usporedi pakete',
      freeConsultation: 'Besplatna konzultacija'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="prices-hero-section">
      <button className="packages-modules-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#a29eff"/>
        </svg>
        {t.packagesModules}
      </button>

      <h1 className="hero-title">
        <span>{t.title}</span>{' '}
        <span className="gradient-text">{t.yourGuests}</span>
      </h1>

      <p className="hero-subtitle">{t.subtitle}</p>

      <p className="hero-description">{t.description}</p>

      <div className="hero-cta-buttons">
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t.comparePackages}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <Link 
          href={language === 'hr' 
            ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000057014"
            : language === 'sl'
            ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000063002"
            : "https://meetings-smartxstay.zohobookings.eu/#/242002000000041016"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          {t.freeConsultation}
        </Link>
      </div>

      <style jsx>{`
        .prices-hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 40px 80px 40px;
          font-family: 'Inter', sans-serif;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .packages-modules-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid rgba(162, 158, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          color: #a29eff;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .packages-modules-badge:hover {
          background-color: rgba(255, 255, 255, 0.4);
          border-color: rgba(162, 158, 255, 0.5);
        }

        .hero-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          text-align: center;
          letter-spacing: -0.02em;
          max-width: 900px;
        }

        .hero-title span:first-of-type {
          color: #0f0f0f;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .hero-subtitle {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 500;
          color: #737373;
          line-height: 1.7;
          margin: 0 0 24px 0;
          text-align: center;
          max-width: 700px;
        }

        .hero-description {
          font-size: clamp(16px, 2vw, 18px);
          font-weight: 400;
          color: #9ca3af;
          line-height: 1.8;
          margin: 0 0 48px 0;
          text-align: center;
          max-width: 800px;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
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
      `}</style>
    </section>
  );
}

