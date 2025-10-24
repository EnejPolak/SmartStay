'use client';

import React from 'react';

const CommunitySection = () => {
  // Placeholder logos - will be replaced with actual partner logos
  const logos = [
    'LOGO 1',
    'LOGO 2',
    'LOGO 3',
    'LOGO 4',
    'LOGO 5',
    'LOGO 6',
    'LOGO 7',
    'LOGO 8',
  ];

  return (
    <section
      style={{
        backgroundColor: '#f7f6fb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden'
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
          Become a Part of Smart<span style={{ color: '#b8a1ff' }}>x</span>Stay Community
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
          Connect with a global network of hosts who share your passion for hospitality. Share insights, find support, and grow together in a community dedicated to creating unforgettable guest experiences worldwide.
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
              animation: 'scroll 20s linear infinite'
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
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#b8a1ff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
              >
                {logo}
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
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#b8a1ff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                }}
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Fade edges for smooth appearance */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to right, #f7f6fb, transparent)',
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100%',
              background: 'linear-gradient(to left, #f7f6fb, transparent)',
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
        </div>
      </div>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(calc(-140px * 8 - 24px * 8));
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
              transform: translateX(calc(-140px * 8 - 24px * 8));
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

