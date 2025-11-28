'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SmartxStayMap from './SmartxStayMap';

const FindYourStaySection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Find your next stay with ',
      titleSmartxStay: 'SmartxStay',
      titleHighlight: '',
      stay: '',
      description: 'Our hosts are passionate about creating amazing experiences. Discover unique homes around the world where hospitality meets innovation.',
      bottomText: 'Let your next trip be the best experience - Book with a SmartxStay host'
    },
    sl: {
      title: 'Naj bo vaše naslednje potovanje, ',
      titleSmartxStay: '',
      titleHighlight: 'najboljša izkušnja!',
      stay: '',
      description: '',
      bottomText: ''
    },
    hr: {
      title: 'Neka vaše sljedeće putovanje bude, ',
      titleSmartxStay: '',
      titleHighlight: 'najbolje iskustvo!',
      stay: '',
      description: '',
      bottomText: ''
    }
  };

  const t = translations[language] || translations.en;
  return (
    <section
      style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Main Title */}
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 20px 0',
            lineHeight: '1.2'
          }}
        >
          {language === 'sl' ? (
            <>
              {t.title}
              <br />
              <span className="animated-gradient-text">{t.titleHighlight}</span>
            </>
          ) : (
            <>
              {t.title}
              <span className="animated-gradient-text">{t.titleSmartxStay}</span>
            </>
          )}
        </h2>

        {/* Description */}
        {t.description && (
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: '0 auto 60px auto',
            maxWidth: '640px',
            lineHeight: '1.6'
          }}
        >
          {t.description}
        </p>
        )}

        {/* SmartxStay Interactive Map */}
        <SmartxStayMap />

        {/* Bottom Text */}
        {t.bottomText && (
          <p
            style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              fontWeight: 600,
              color: '#0f0f0f',
              margin: '40px auto 0 auto',
              maxWidth: '800px',
              lineHeight: '1.5',
              textAlign: 'center'
            }}
          >
            {t.bottomText}
          </p>
        )}
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
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          section {
            padding: 60px 20px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 50px 16px !important;
          }
          
          h2 {
            margin-bottom: 16px !important;
          }
          
          p {
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FindYourStaySection;

