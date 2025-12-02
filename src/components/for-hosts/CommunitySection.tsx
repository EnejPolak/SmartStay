'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunitySection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Become a Part of ',
      titleSmartxStay: 'SmartxStay',
      community: 'Community',
      description: 'Connect with a global network of hosts who share your passion for hospitality. Share insights, find support, and grow together in a community dedicated to creating unforgettable guest experiences worldwide.'
    },
    sl: {
      title: 'Postanite del ',
      titleSmartxStay: 'SmartxStay',
      community: 'skupnosti',
      description: 'Povežite se z globalno mrežo gostiteljev, ki delijo vašo strast do gostoljubja. Delite vpoglede, poiščite podporo in rastite skupaj v skupnosti, posvečeni ustvarjanju nepozabnih gostovskih izkušenj po vsem svetu.'
    },
    hr: {
      title: 'Postanite dio ',
      titleSmartxStay: 'SmartxStay',
      community: 'zajednice',
      description: 'Povežite se s globalnom mrežom domaćina koji dijele vašu strast prema gostoljubju. Dijelite uvide, pronađite podršku i rastite zajedno u zajednici posvećenoj stvaranju nezaboravnih gostujućih iskustava diljem svijeta.'
    }
  };

  const t = translations[language] || translations.en;
  // Partner logos
  const logos = [
    '/images/community/1.png',
    '/images/community/2.png',
    '/images/community/3.png',
    '/images/community/4.png',
    '/images/community/5.png',
    '/images/community/6.png',
    '/images/community/7.png',
    '/images/community/8.png',
    '/images/community/9.png',
    '/images/community/10.png',
    '/images/community/11.png',
    '/images/community/12.png',
    '/images/community/13.png',
    '/images/community/14.png',
    '/images/community/15.png',
    '/images/community/16.png',
    '/images/community/17.png',
    '/images/community/18.png',
    '/images/community/19.png',
  ];

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
        overflow: 'hidden',
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
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 20px 0',
            lineHeight: '1.2'
          }}
        >
          {t.title}<span className="animated-gradient-text">{t.titleSmartxStay || 'SmartxStay'}</span> {t.community}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: '0 auto 80px auto',
            maxWidth: '750px',
            lineHeight: '1.6'
          }}
        >
          {t.description}
        </p>

        {/* Logos Carousel Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '20px 0'
          }}
        >
          {/* Carousel Track */}
          <div
            className="carousel-track"
            style={{
              display: 'flex',
              gap: '24px',
              animation: 'scroll 40s linear infinite'
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="logo-card"
                style={{
                  minWidth: '140px',
                  height: '140px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
                  if (img) img.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
                  if (img) img.style.filter = 'grayscale(100%)';
                }}
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  style={{ 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                  className="logo-image"
                  sizes="140px"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="logo-card"
                style={{
                  minWidth: '140px',
                  height: '140px',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
                  if (img) img.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
                  if (img) img.style.filter = 'grayscale(100%)';
                }}
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  style={{ 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease',
                  }}
                  className="logo-image"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
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

        @keyframes scroll {
          0% {
            transform: translateX(calc(-140px * 19 - 24px * 19));
          }
          100% {
            transform: translateX(0);
          }
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(calc(-120px * 19 - 24px * 19));
            }
            100% {
              transform: translateX(0);
            }
          }

          section {
            padding: 80px 16px !important;
          }

          h2 {
            font-size: 30px !important;
            margin-bottom: 16px !important;
          }

          p {
            margin-bottom: 60px !important;
          }

          .logo-card {
            min-width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;

