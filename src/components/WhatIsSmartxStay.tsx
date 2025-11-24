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
      title: 'What is Smart',
      description: 'SmartxStay is a digital guest experience platform that helps vacation rental hosts share all essential information, recommendations, and services in one place by simply scanning a QR code or tapping an NFC tag. It\'s designed for hosts who care deeply about their guests, offering a smooth, personal, and connected stay. With SmartxStay, every guest instantly feels informed, welcomed, and at home.'
    },
    sl: {
      title: 'Kaj je Smart',
      description: 'SmartxStay je digitalna platforma za izkušnjo gostov, ki pomaga gostiteljem najemov za počitnice deliti vse ključne informacije, priporočila in storitve na enem mestu s preprostim skeniranjem QR kode ali dotikom NFC oznake. Zasnovana je za gostitelje, ki jim je resnično mar za svoje goste, in ponuja gladko, osebno in povezano bivanje. Z SmartxStay se vsak gost takoj počuti informirano, dobrodošlo in kot doma.'
    }
  };

  const t = translations[language];

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
          {t.title}<span className="accent-x">x</span>Stay?
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
        .accent-x {
          color: #a29eff;
        }

        @media (max-width: 768px) {
          .what-is-section {
            padding: 20px 16px 40px 16px !important;
            margin-top: -40px !important;
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

