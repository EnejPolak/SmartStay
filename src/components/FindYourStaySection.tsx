'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SmartxStayMap from './SmartxStayMap';

const FindYourStaySection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Find your next stay with Smart',
      stay: 'Stay',
      description: 'Our hosts are passionate about creating amazing experiences. Discover unique homes around the world where hospitality meets innovation.'
    },
    sl: {
      title: 'Poiščite svoj naslednji obisk pri Smart',
      stay: 'Stay',
      description: 'Naši gostitelji so strastni do ustvarjanja neverjetnih izkušenj. Odkrijte edinstvene domove po vsem svetu, kjer se gostoljubje sreča z inovacijami.'
    }
  };

  const t = translations[language];
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
          {t.title}<span style={{ color: '#a29eff' }}>x</span>{t.stay}
        </h2>

        {/* Description */}
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

        {/* SmartxStay Interactive Map */}
        <SmartxStayMap />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
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

