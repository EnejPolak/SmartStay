'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StandOutSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      standOut: 'Stand Out',
      inWorld: 'in a World Full of Stays',
      paragraph1: 'Every apartment looks good online.',
      paragraph2: 'Not every host delivers an unforgettable experience.',
      paragraph3: 'SmartxStay helps you become the host guests remember.'
    },
    sl: {
      standOut: 'Izdite',
      inWorld: 'v svetu polnem nastanitev',
      paragraph1: 'Vsak apartma izgleda dobro na spletu.',
      paragraph2: 'Vendar vsak gostitelj ne ponudi nepozabne izkušnje.',
      paragraph3: 'SmartxStay vam pomaga postati gostitelj, ki ga gostje ne pozabijo.'
    }
  };

  const t = translations[language];
  return (
    <section
      style={{
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: '1.2',
            margin: '0 0 60px 0',
            letterSpacing: '-0.02em',
          }}
        >
          <span 
            className="animated-gradient-text"
            style={{ 
              background: 'linear-gradient(90deg, #b8a1ff 0%, #7c5fd9 50%, #a29eff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 4px rgba(184, 161, 255, 0.3))',
            }}
          >{t.standOut}</span>{' '}
          <span style={{ color: '#0f0f0f' }}>{t.inWorld}</span>
        </h2>

        {/* Paragraphs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            {t.paragraph1}
          </p>
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            {t.paragraph2}
          </p>
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            {t.paragraph3}
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
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

        .animated-gradient-text {
          animation: gradientShift 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          
          h2 {
            margin-bottom: 40px !important;
          }
          
          div[style*="flexDirection: 'column'"] {
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StandOutSection;

