'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatItMeansSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'What it means to be a',
      smartxStay: 'SmartxStay',
      host: 'Host',
      description: 'Being a SmartxStay Host means elevating every aspect of the guest experience, turning simple stays into memorable journeys. It\'s about anticipating needs, offering personalized touches, and using technology to create a seamless and welcoming environment. You\'re not just providing a place to sleep; you\'re curating an experience that guests will cherish and share.'
    },
    sl: {
      title: 'Kaj pomeni biti',
      smartxStay: 'SmartxStay',
      host: 'gostitelj',
      description: 'Biti SmartxStay gostitelj pomeni dvigniti vsak vidik gostovske izkušnje, preoblikovati preproste bivanja v nepozabna potovanja. Gre za predvidevanje potreb, ponujanje osebnih dotikov in uporabo tehnologije za ustvarjanje brezhibnega in gostoljubnega okolja. Ne zagotavljate le kraja za spanje; kurirate izkušnjo, ki si jo bodo gosti cenili in delili.'
    },
    hr: {
      title: 'Što znači biti',
      smartxStay: 'SmartxStay',
      host: 'domaćin',
      description: 'Biti SmartxStay domaćin znači podići svaki aspekt gostujućeg iskustva, pretvoriti jednostavne boravke u nezaboravna putovanja. Riječ je o predviđanju potreba, nuditi personalizirane dodire i koristiti tehnologiju za stvaranje besprijekornog i gostoljubnog okruženja. Ne pružate samo mjesto za spavanje; kurirate iskustvo koje će gosti cijeniti i dijeliti.'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
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
            margin: '0 0 24px 0',
            lineHeight: '1.3'
          }}
        >
          {t.title}<br />
          <span style={{ color: '#b8a1ff' }}>{t.smartxStay}</span> {t.host}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: 0,
            lineHeight: '1.7',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {t.description}
        </p>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 20px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }
          
          h2 {
            font-size: 32px !important;
            margin-bottom: 20px !important;
          }
          
          p {
            line-height: 1.8 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatItMeansSection;

