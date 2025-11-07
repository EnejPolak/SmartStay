'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [heroImage, setHeroImage] = useState('');
  const [overlayType, setOverlayType] = useState('');

  useEffect(() => {
    // Array of available hero images
    const heroImages = [
      '/images/hero1SmartxStay.png',
      '/images/hero2smartxstay.png',
      '/images/hero3smartxstay.png',
      '/images/hero4smartxstay.png'
    ];
    
    // Randomly select one hero image
    const randomImageIndex = Math.floor(Math.random() * heroImages.length);
    setHeroImage(heroImages[randomImageIndex]);
    
    // Randomly select overlay type (blue overlay or circular gradient)
    const overlayTypes = ['blue', 'gradient'];
    const randomOverlayIndex = Math.floor(Math.random() * overlayTypes.length);
    setOverlayType(overlayTypes[randomOverlayIndex]);
  }, []);

  return (
    <section 
      className="relative flex items-center justify-center"
      style={{ 
        minHeight: '100vh',
        backgroundImage: heroImage ? `url("${heroImage}")` : 'url("/images/hero1SmartxStay.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Inter, sans-serif',
        padding: '100px 20px'
      }}
    >
      {/* Dynamic Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayType === 'blue' ? 'rgba(18, 57, 85, 0.77)' : 'transparent',
          background: overlayType === 'gradient' 
            ? 'radial-gradient(circle at 50% 50%, rgba(135, 110, 191, 0.77) 0%, rgba(31, 12, 66, 0.77) 100%)'
            : 'transparent',
          zIndex: 1
        }}
      />

      {/* Hero Content */}
      <div 
        className="flex flex-col items-center justify-center text-center"
        style={{ 
          maxWidth: '90%',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          gap: '35px'
        }}
      >
        {/* Main Heading */}
        <h1 
          className="font-bold transition-all duration-300"
          style={{ 
            maxWidth: '700px',
            lineHeight: '1.3',
            fontSize: 'clamp(36px, 5vw, 52px)',
            textAlign: 'center',
            margin: 0
          }}
        >
          <span style={{ color: '#ffffff' }}>Elevate every stay</span>
          <br />
          <span style={{ color: '#daceff' }}>For hosts who love their guests.</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="transition-all duration-300"
          style={{ 
            color: '#ffffff',
            fontSize: '18px',
            fontWeight: 400,
            maxWidth: '700px',
            lineHeight: '1.6',
            textAlign: 'center',
            margin: 0
          }}
        >
          With SmartxStay, you know you&apos;re in good hands. Every host on our platform 
          cares deeply about comfort, quality and creating meaningful guest experiences.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex items-center justify-center" style={{ gap: '20px' }}>
          <button
            className="transition-all duration-300"
            style={{
              backgroundColor: '#daceff',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '16px',
              borderRadius: '40px',
              padding: '12px 32px',
              border: 'none',
              cursor: 'pointer',
              minWidth: '150px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c9baff';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 206, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#daceff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            For hosts
          </button>

          <button
            className="transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
              color: '#b399ff',
              fontWeight: 500,
              fontSize: '16px',
              borderRadius: '40px',
              padding: '12px 32px',
              border: 'none',
              cursor: 'pointer',
              minWidth: '150px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f6ff';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 206, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            For guests
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 15px !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

