'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const EverythingYouNeedSection = () => {
  const { language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Features data
  const features = [
    { title: 'Instant Access', description: 'Scan a QR code and instantly access all info. No apps to download.', icon: 'M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z' },
    { title: 'Personalized Tips', description: 'Get your host\'s curated local tips for the best experiences in town.', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' },
    { title: 'All Info in One Tap', description: 'Wi-Fi, rules, check-in, appliances. Everything in one place, clear and simple.', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
    { title: 'Clear directions', description: 'No more getting lost or calling the host. Just clear, easy directions.', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
    { title: 'Transport tips', description: 'Buses, taxis or parking explained, so you will never feel lost in foreign country again.', icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z' },
    { title: 'GPX routes', description: 'Pre-made GPX tracks for effortless, unforgettable adventures.', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm-1.5 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' },
    { title: 'Easy Booking', description: 'Book local services like taxis or tours directly from your guide.', icon: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z' },
    { title: 'Stay Connected', description: 'A seamless, connected experience from check-in to check-out.', icon: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z' },
  ];

  const translations = {
    en: {
      title: 'Everything you need in one place',
      subtitle: 'Features designed for connection, not just convenience.'
    },
    sl: {
      title: 'Vse, kar potrebujete, na enem mestu',
      subtitle: 'Funkcije zasnovane za povezovanje, ne le za udobje.'
    }
  };

  const t = translations[language];
  const totalCards = features.length;
  const radius = 350; // Polmer kroga

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const rotate = () => {
      if (!isPausedRef.current) {
        rotationRef.current += 0.08; // Počasnejša hitrost rotacije za lažje branje
        if (rotationRef.current >= 360) {
          rotationRef.current = 0;
        }
        carousel.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(rotate);
    };

    // Začni rotacijo takoj
    animationFrameRef.current = requestAnimationFrame(rotate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
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
            margin: '0 0 14px 0',
            lineHeight: '1.2'
          }}
        >
          {t.title}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 500,
            color: '#737373',
            margin: '0 0 60px 0',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}
        >
          {t.subtitle}
        </p>

        {/* Carousel Container */}
        <div
          className="carousel-wrapper"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
            width: '100%',
            height: '500px',
            marginTop: '60px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            ref={carouselRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transform: 'rotateY(0deg)',
            }}
            className="carousel-container"
          >
          {features.map((feature, index) => {
            const angle = (360 / totalCards) * index;
            const cardStyle = {
              position: 'absolute' as const,
              width: '280px',
              height: '350px',
              left: '50%',
              top: '50%',
              marginLeft: '-140px',
              marginTop: '-175px',
              transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              transformStyle: 'preserve-3d' as const,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            };

            return (
              <div
                key={index}
                className="feature-card"
                style={{
                  ...cardStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  isPausedRef.current = true;
                  e.currentTarget.style.transform = `rotateY(${angle}deg) translateZ(${radius + 50}px) scale(1.1)`;
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                  const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
                  const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
                  if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
                  if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
                }}
                onMouseLeave={(e) => {
                  isPausedRef.current = false;
                  e.currentTarget.style.transform = `rotateY(${angle}deg) translateZ(${radius}px) scale(1)`;
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
                  const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
                  if (iconBg) iconBg.style.backgroundColor = '#efeaff';
                  if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
                }}
              >
                {/* Icon */}
                <div
                  className="icon-bg"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#efeaff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 28px auto',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="icon-svg"
                      d={feature.icon}
                      fill="#a29eff"
                      style={{ transition: 'fill 0.3s ease-in-out' }}
                    />
                  </svg>
                </div>
                {/* Title */}
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0f0f0f',
                    margin: '0 0 16px 0',
                    lineHeight: '1.3'
                  }}
                >
                  {feature.title}
                </h3>
                {/* Description */}
                <p
                  style={{
                    fontSize: '16px',
                    color: '#737373',
                    lineHeight: '1.7',
                    margin: 0
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .carousel-wrapper {
            transform: scale(0.8);
          }
          
          section {
            padding: 40px 20px !important;
            min-height: auto !important;
          }
          
          .carousel-wrapper {
            height: 400px !important;
          }
        }

        @media (max-width: 768px) {
          .carousel-wrapper {
            transform: scale(0.85);
            height: 400px !important;
          }
          
          section {
            padding: 30px 16px !important;
            min-height: auto !important;
          }
          
          .feature-card {
            width: 280px !important;
            height: 360px !important;
            margin-left: -140px !important;
            margin-top: -180px !important;
            padding: 28px 24px !important;
          }
          
          .feature-card h3 {
            font-size: 20px !important;
          }
          
          .feature-card p {
            font-size: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          .carousel-wrapper {
            transform: scale(0.75);
            height: 380px !important;
          }
          
          .feature-card {
            width: 260px !important;
            height: 340px !important;
            margin-left: -130px !important;
            margin-top: -170px !important;
            padding: 26px 22px !important;
          }
          
          .feature-card h3 {
            font-size: 19px !important;
          }
          
          .feature-card p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EverythingYouNeedSection;

