'use client';

import React from 'react';
import Image from 'next/image';

const LocalExperienceSection = () => {
  return (
    <section
      id="local-experience"
      style={{
        backgroundColor: '#f7f6fb',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden'
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
            <span style={{ color: '#b8a1ff', display: 'block' }}>Powered by hosts.</span>
          </h2>
        </div>

        {/* Main Content - Two Columns */}
        <div
          className="grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column - Text */}
          <div className="text-content" style={{ textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p
              style={{
                color: '#737373',
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              We believe the best recommendations come from those who know the area best: the hosts.
            </p>

            <p
              style={{
                color: '#737373',
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              SmartxStay was created to empower hosts to share their favorite local spots, from the best 
              coffee shop around the corner to that hidden gem of a restaurant.
            </p>

            <p
              style={{
                color: '#737373',
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              We provide the tool, you provide the local soul. Let&apos;s create unforgettable stays together, 
              one local tip at a time.
            </p>
          </div>

          {/* Right Column - Image */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
            {/* Local Experience Image - Polaroid Style */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                position: 'relative',
                transform: 'rotate(-2deg)',
                marginTop: '20px'
              }}
            >
              {/* Polaroid Frame */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '12px 12px 40px 12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)',
                  position: 'relative'
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <Image 
                    src="/images/local-experience/pocitnice.png" 
                    alt="Local experience - Počitnice"
                    fill
                    style={{ 
                      objectFit: 'cover',
                      filter: 'sepia(0.1) contrast(1.1) brightness(1.05)'
                    }} 
                  />
                </div>
              </div>
              
              {/* Tape strips */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '20px',
                  right: '20px',
                  height: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '30px',
                  right: '30px',
                  height: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '1px'
                }}
              />
              
              {/* Bottom tape */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '25px',
                  right: '25px',
                  height: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }

          .content-wrapper > div:first-child {
            margin-bottom: 48px !important;
          }

          .grid-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .text-content {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LocalExperienceSection;

