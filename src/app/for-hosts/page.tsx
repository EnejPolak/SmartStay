'use client';

import React from 'react';
import WhatItMeansSection from '@/components/WhatItMeansSection';
import SmartxStayCertifiedSection from '@/components/SmartxStayCertifiedSection';
import CommunitySection from '@/components/CommunitySection';
import FinalCTASection from '@/components/FinalCTASection';

const ForHostsPage = () => {
  return (
    <div style={{ backgroundColor: '#f4f1fe', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#f4f1fe',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            lineHeight: '1.2',
            margin: '0 0 20px 0',
            maxWidth: '700px'
          }}
        >
          <span style={{ color: '#0f0f0f' }}>Welcome, Smart</span>
          <span style={{ color: '#b8a1ff' }}>x</span>
          <span style={{ color: '#0f0f0f' }}>Stay Hosts.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: '#737373',
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            maxWidth: '640px',
            lineHeight: '1.6',
            textAlign: 'center',
            margin: '0 0 40px 0'
          }}
        >
          You're more than a host; you're a creator of experiences. We're here to help you make every guest's stay unforgettable through care, connection, and seamless technology.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Primary Button */}
          <button
            style={{
              backgroundColor: '#b8a1ff',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '16px',
              padding: '16px 40px',
              border: 'none',
              cursor: 'pointer',
              minWidth: '220px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a991ff';
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 161, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b8a1ff';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #b8a1ff';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            Book a free presentation
          </button>

          {/* Secondary Button */}
          <button
            style={{
              backgroundColor: '#ffffff',
              color: '#b399ff',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '16px',
              padding: '16px 40px',
              border: 'none',
              cursor: 'pointer',
              minWidth: '180px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#a291ff';
              e.currentTarget.style.backgroundColor = '#fefeff';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b399ff';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #b8a1ff';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            Ask a question
          </button>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 20px 16px !important;
          }
          
          h1 {
            font-size: 36px !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* What It Means Section */}
      <WhatItMeansSection />

      {/* SmartxStay Certified Section */}
      <SmartxStayCertifiedSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Final CTA Section */}
      <FinalCTASection />
    </div>
  );
};

export default ForHostsPage;

