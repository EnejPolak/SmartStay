'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LocalExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

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
          margin: '0 auto'
        }}
      >
        {/* Title Section - Centered at Top */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              lineHeight: '1.2',
              margin: 0
            }}
          >
            <span style={{ color: '#0f0f0f', display: 'block', marginBottom: '6px' }}>Local experience.</span>
            <span 
              className="animated-gradient-text"
              style={{ 
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block'
              }}
            >Powered by hosts.</span>
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
            gap: '40px'
          }}
        >
          {/* First Paragraph */}
          <p
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              lineHeight: '1.6',
              margin: 0,
              color: '#4a4a4a'
            }}
          >
            We believe the best recommendations come from those who know the area best:{' '}
            <span
              style={{
                fontWeight: 700,
                color: '#5ba3c7',
                fontSize: 'clamp(22px, 2.7vw, 28px)'
              }}
            >
              the hosts.
            </span>
          </p>

          {/* Second Paragraph */}
          <p
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              lineHeight: '1.6',
              margin: 0,
              color: '#4a4a4a'
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: '#0f0f0f'
              }}
            >
              SmartxStay
            </span>{' '}
            was created to{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#6eb5d0',
                fontStyle: 'italic'
              }}
            >
              empower hosts
            </span>{' '}
            to share their favorite local spots, from the best coffee shop around the corner to that{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#87CEEB'
              }}
            >
              hidden gem
            </span>{' '}
            of a restaurant.
          </p>

          {/* Third Paragraph */}
          <p
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              lineHeight: '1.6',
              margin: 0,
              color: '#4a4a4a'
            }}
          >
            We provide the{' '}
            <span
              style={{
                fontWeight: 700,
                color: '#0f0f0f'
              }}
            >
              tool
            </span>
            , you provide the{' '}
            <span
              style={{
                fontWeight: 700,
                color: '#5ba3c7',
                fontSize: 'clamp(22px, 2.7vw, 28px)'
              }}
            >
              local soul
            </span>
            . Let&apos;s create{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#6eb5d0',
                fontStyle: 'italic'
              }}
            >
              unforgettable stays
            </span>{' '}
            together, one local tip at a time.
          </p>
        </div>

        {/* Our Local Partners Section */}
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#0f0f0f',
              marginBottom: '48px'
            }}
          >
            Our local partners
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
              style={{
                position: 'relative',
                width: '280px',
                height: '180px'
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
              style={{
                position: 'relative',
                width: '320px',
                height: '120px'
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
            padding: 60px 16px !important;
          }

          .content-wrapper > div:first-child {
            margin-bottom: 48px !important;
          }

          .text-content {
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LocalExperienceSection;

