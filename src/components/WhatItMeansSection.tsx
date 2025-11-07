'use client';

import React from 'react';

const WhatItMeansSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#f7f6fb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
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
            margin: '0 0 24px 0',
            lineHeight: '1.3'
          }}
        >
          What it means to be a<br />
          Smart<span style={{ color: '#b8a1ff' }}>x</span>Stay Host
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: 0,
            lineHeight: '1.7',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Being a SmartxStay Host means elevating every aspect of the guest experience, turning simple stays into memorable journeys. It&apos;s about anticipating needs, offering personalized touches, and using technology to create a seamless and welcoming environment. You&apos;re not just providing a place to sleep; you&apos;re curating an experience that guests will cherish and share.
        </p>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 20px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }
          
          h2 {
            font-size: 32px !important;
            margin-bottom: 20px !important;
          }
          
          p {
            line-height: 1.8 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatItMeansSection;

