'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatIsSmartxStay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      titlePrefix: 'What is ',
      titleSmartxStay: 'SmartxStay',
      description: 'SmartxStay is a digital guest experience platform that helps vacation rental hosts share all essential information, recommendations, and services in one place by simply scanning a QR code or tapping an NFC tag. It\'s designed for hosts who care deeply about their guests, offering a smooth, personal, and connected stay. With SmartxStay, every guest instantly feels informed, welcomed, and at home.'
    },
    sl: {
      titlePrefix: 'Kaj je ',
      titleSmartxStay: 'SmartxStay',
      description: 'SmartxStay je digitalna platforma, ki omogoča vsem ponudnikom nastanitev – od manjših enot in property managerjev do večjih hotelov – zbiranje in deljenje vseh ključnih informacij, priporočil in storitev na enem mestu. Zasnovana je za gostitelje, ki jim je resnično mar za izkušnjo svojih gostov, saj zagotavlja gladko, osebno in povezano bivanje. Z SmartxStay se vsak gost takoj počuti informirano, dobrodošlo in kot doma.'
    },
    hr: {
      titlePrefix: 'Što je ',
      titleSmartxStay: 'SmartxStay',
      description: 'SmartxStay je digitalna platforma koja omogućava svim ponuditeljima smještaja – od manjih jedinica i property managera do većih hotela – prikupljanje i dijeljenje svih ključnih informacija, preporuka i usluga na jednom mjestu. Dizajnirana je za domaćine kojima je stvarno stalo do iskustva svojih gostiju, jer osigurava glatko, osobno i povezano boravak. Sa SmartxStay se svaki gost odmah osjeća informirano, dobrodošlo i kao kod kuće.'
    }
  };

  const t = translations[language] || translations.en;

  useEffect(() => {
    // Počakaj da uporabnik začne scrollati
    const handleScroll = () => {
      setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasScrolled]);

  return (
    <section 
      ref={sectionRef}
      id="what-is-smartxstay"
      className="what-is-section"
      style={{ 
        backgroundColor: 'transparent',
        fontFamily: 'Inter, sans-serif',
        padding: '60px 20px',
        marginTop: '0px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {/* Content Container */}
      <div 
        className="content-container"
        style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        {/* Title */}
        <h2 
          className="section-title"
          style={{ 
            color: '#111827',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            lineHeight: '1.25',
            textAlign: 'center',
            margin: 0
          }}
        >
          {t.titlePrefix}<span className="animated-gradient-text">{t.titleSmartxStay}</span>?
        </h2>

        {/* Description */}
        <p 
          className="section-description"
          style={{ 
            color: '#737373',
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            lineHeight: '1.7',
            textAlign: 'center',
            maxWidth: '840px',
            margin: 0
          }}
        >
          {t.description}
        </p>
      </div>

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

        @media (max-width: 768px) {
          .what-is-section {
            padding: 120px 16px 40px 16px !important;
            margin-top: 0 !important;
          }
          
          .section-title {
            font-size: clamp(28px, 6vw, 40px) !important;
            line-height: 1.3 !important;
          }
          
          .section-description {
            font-size: clamp(14px, 3vw, 16px) !important;
            line-height: 1.7 !important;
          }
        }
        
        @media (max-width: 480px) {
          .what-is-section {
            padding: 16px 12px 32px 12px !important;
            margin-top: -30px !important;
          }
          
          .section-title {
            font-size: clamp(24px, 7vw, 32px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsSmartxStay;

