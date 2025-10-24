'use client';

import React from 'react';

const WhatIsSmartxStay = () => {
  return (
    <section 
      id="what-is-smartxstay"
      className="what-is-section"
      style={{ 
        backgroundColor: '#f7f6fb',
        fontFamily: 'Inter, sans-serif',
        padding: '96px 20px'
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
          What is Smart<span className="accent-x">x</span>Stay?
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
          SmartxStay is a digital guest experience platform that helps vacation rental hosts 
          share all essential information, recommendations, and services in one place by simply 
          scanning a QR code or tapping an NFC tag. It's designed for hosts who care deeply 
          about their guests, offering a smooth, personal, and connected stay. With SmartxStay, 
          every guest instantly feels informed, welcomed, and at home.
        </p>
      </div>

      <style jsx>{`
        .accent-x {
          color: #a29eff;
        }

        @media (max-width: 768px) {
          .what-is-section {
            padding: 64px 16px !important;
          }
          
          .section-title {
            font-size: 32px !important;
            line-height: 1.3 !important;
          }
          
          .section-description {
            font-size: 16px !important;
            line-height: 1.7 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsSmartxStay;

