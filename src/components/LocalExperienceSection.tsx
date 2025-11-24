'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const LocalExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Local experience.',
      subtitle: 'Powered by hosts.',
      paragraph1: 'We believe the best recommendations come from those who know the area best: the hosts.',
      paragraph2: 'We provide the platform, you bring the local soul, supported by trusted partners who elevate every tip.',
      partnersTitle: 'Our local partners'
    },
    sl: {
      title: 'Lokalna izkušnja.',
      subtitle: 'Poganjajo gostitelji.',
      paragraph1: 'Verjamemo, da najboljša priporočila prihajajo od tistih, ki območje najbolje poznajo: gostiteljev.',
      paragraph2: 'Mi zagotavljamo platformo, vi prinašate lokalno dušo, podprto s partnerji, ki dvigujejo vsak nasvet.',
      partnersTitle: 'Naši lokalni partnerji'
    }
  };

  const t = translations[language];

  useEffect(() => {
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
      { threshold: 0.2, rootMargin: '-50px' }
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
      id="local-experience"
      style={{
        background: 'none',
        backgroundColor: 'transparent',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div
        className="content-wrapper"
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          background: 'none',
          backgroundColor: 'transparent'
        }}
      >
        {/* Bordered Container for Entire Section */}
        <div
          className="section-border-wrapper"
          style={{
            position: 'relative',
            padding: '2px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)'
          }}
        >
          <div
            style={{
              background: 'none',
              backgroundColor: 'transparent',
              borderRadius: '14px',
              padding: '60px 40px',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box'
        }}
      >
        {/* Title Section - Centered at Top */}
            <div style={{ textAlign: 'center', marginBottom: '80px', background: 'none', backgroundColor: 'transparent' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              lineHeight: '1.2',
              margin: 0
            }}
          >
                <span style={{ color: '#0f0f0f', display: 'block', marginBottom: '6px' }}>{t.title}</span>
                <span style={{ color: '#0f0f0f', display: 'block' }}>{t.subtitle}</span>
          </h2>
        </div>

        {/* Main Content - Centered Text */}
        <div
          className="text-content"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
                gap: '32px',
                background: 'none',
                backgroundColor: 'transparent'
          }}
        >
          {/* First Paragraph */}
          <p
            style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
              lineHeight: '1.6',
              margin: 0,
              color: '#4a4a4a'
            }}
          >
                {t.paragraph1}
          </p>

          {/* Second Paragraph */}
          <p
            style={{
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
              lineHeight: '1.6',
              margin: 0,
              color: '#4a4a4a'
            }}
          >
                {t.paragraph2}
          </p>
        </div>

        {/* Our Local Partners Section */}
            <div style={{ marginTop: '100px', textAlign: 'center', background: 'none', backgroundColor: 'transparent' }}>
          <h3
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
                  marginBottom: '48px',
                  color: '#0f0f0f'
            }}
          >
                {t.partnersTitle}
          </h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '80px',
              flexWrap: 'wrap'
            }}
          >
            {/* Cerklje pod Krvavcem Logo */}
            <div
              className="partner-logo cerklje-logo"
              style={{
                position: 'relative',
                width: '220px',
                height: '140px'
              }}
            >
              <Image
                src="/images/local-experience/cerklje-logo.png"
                alt="Cerklje pod Krvavcem"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Slovenia Outdoor Logo */}
            <div
              className="partner-logo slovenia-logo"
              style={{
                position: 'relative',
                width: '250px',
                height: '95px'
              }}
            >
              <Image
                src="/images/local-experience/slovenia-outdoor-logo.png"
                alt="Slovenia Outdoor"
                fill
                style={{ objectFit: 'contain' }}
              />
                </div>
              </div>
            </div>
          </div>
        </div>
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
          animation: gradientShift 3s ease-in-out infinite;
        }

        .section-border-wrapper > div {
          background: none !important;
          background-color: transparent !important;
        }

        .content-wrapper {
          background: none !important;
          background-color: transparent !important;
        }

        .text-content {
          background: none !important;
          background-color: transparent !important;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }

          .section-title {
            font-size: clamp(28px, 6vw, 40px) !important;
          }
          
          .section-subtitle {
            font-size: clamp(14px, 3vw, 16px) !important;
          }

          .section-border-wrapper {
            padding: 2px !important;
          }

          .section-border-wrapper > div {
            padding: 32px 20px !important;
          }

          .section-border-wrapper > div > div:first-child {
            margin-bottom: 40px !important;
          }

          .text-content {
            gap: 20px !important;
          }
          
          .partner-logo {
            width: 180px !important;
            height: auto !important;
          }
          
          .cerklje-logo {
            height: 110px !important;
          }
          
          .slovenia-logo {
            height: 75px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 48px 12px !important;
          }
          
          .section-border-wrapper > div {
            padding: 24px 16px !important;
          }
          
          .partner-logo {
            width: 150px !important;
          }
          
          .cerklje-logo {
            height: 90px !important;
          }
          
          .slovenia-logo {
            height: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LocalExperienceSection;

