'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HostMeansMoreSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      because: 'Because being a ',
      smartxStay: 'SmartxStay',
      hostMeans: 'host means more',
      moreTrust: 'more trust, more visibility, more bookings, and happier guests.',
      paragraph1: 'Being a SmartxStay Host means giving guests more than a place to sleep.',
      paragraph2: 'It means making their stay easy, personal, and unforgettable.',
      paragraph3: 'You anticipate what they need, guide them with care, and use simple tools to create a smooth, welcoming experience they\'ll remember and talk about.'
    },
    sl: {
      because: 'Ker biti ',
      smartxStay: 'SmartxStay',
      hostMeans: 'gostitelj pomeni več',
      moreTrust: 'več zaupanja, več vidnosti, več rezervacij in srečnejših gostov.',
      paragraph1: 'Biti SmartxStay gostitelj pomeni dati gostom več kot le kraj za spanje.',
      paragraph2: 'Pomeni narediti njihov obisk enostaven, oseben in nepozaben.',
      paragraph3: 'Predvidite, kaj potrebujejo, vodite jih s skrbjo in uporabljajte preprosta orodja za ustvarjanje gladke, gostoljubne izkušnje, ki si jo bodo zapomnili in o njej govorili.'
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
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
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
            margin: '0 0 40px 0',
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#0f0f0f' }}>{t.because}</span>
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
          >{t.smartxStay}</span>
          <br />
          <span style={{ color: '#0f0f0f' }}>{t.hostMeans}</span>
        </h2>

        {/* Benefit List */}
        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 400,
            color: '#737373',
            lineHeight: '1.6',
            margin: '0 0 60px 0',
            textAlign: 'center',
          }}
        >
          {t.moreTrust}
        </p>

        {/* Detailed Paragraphs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center',
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
              textAlign: 'center',
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
              textAlign: 'center',
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
            margin-bottom: 32px !important;
          }
          
          p[style*="textAlign: 'center'"] {
            margin-bottom: 48px !important;
          }
          
          div[style*="flexDirection: 'column'"] {
            gap: 24px !important;
            text-align: center !important;
          }
          
          div[style*="flexDirection: 'column'"] p {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HostMeansMoreSection;

