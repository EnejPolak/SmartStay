'use client';

import React from 'react';

const HostMeansMoreSection = () => {
  return (
    <section
      style={{
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: '1.2',
            margin: '0 0 40px 0',
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#0f0f0f' }}>Because being a </span>
          <span style={{ 
            background: 'linear-gradient(135deg, #b8a1ff 0%, #7c5fd9 50%, #a29eff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 4px rgba(184, 161, 255, 0.3))',
          }}>SmartxStay</span>
          <br />
          <span style={{ color: '#0f0f0f' }}>host means more</span>
        </h2>

        {/* Benefit List */}
        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 400,
            color: '#737373',
            lineHeight: '1.6',
            margin: '0 0 60px 0',
            textAlign: 'center',
          }}
        >
          more trust, more visibility, more bookings, and happier guests.
        </p>

        {/* Detailed Paragraphs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Being a SmartxStay Host means giving guests more than a place to sleep.
          </p>
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            It means making their stay easy, personal, and unforgettable.
          </p>
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            You anticipate what they need, guide them with care, and use simple tools to create a smooth, welcoming experience they&apos;ll remember and talk about.
          </p>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          
          h2 {
            margin-bottom: 32px !important;
          }
          
          p[style*="textAlign: 'center'"] {
            margin-bottom: 48px !important;
          }
          
          div[style*="flexDirection: 'column'"] {
            gap: 24px !important;
            text-align: center !important;
          }
          
          div[style*="flexDirection: 'column'"] p {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HostMeansMoreSection;

