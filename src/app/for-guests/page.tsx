'use client';

import React from 'react';
import EverythingYouNeedSection from '@/components/EverythingYouNeedSection';
import FindYourStaySection from '@/components/FindYourStaySection';
import OurStaysSection from '@/components/OurStaysSection';

const ForGuestsPage = () => {
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
            margin: '0 0 24px 0',
            maxWidth: '640px'
          }}
        >
          <span style={{ color: '#0f0f0f' }}>Your stay,</span>
          <span style={{ color: '#b8a1ff' }}> made smarter.</span>
        </h1>

        {/* Description */}
        <p
          style={{
            color: '#737373',
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: '1.6',
            margin: '0 0 40px 0',
            maxWidth: '640px',
            fontWeight: 400
          }}
        >
          Explore more, relax better, and feel connected wherever you go. With SmartxStay, 
          everything you need for a perfect stay is right at your fingertips.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Primary Button */}
          <button
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
            Find your Stay
          </button>

          {/* Secondary Button */}
          <button
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

      {/* Everything You Need Section */}
      <EverythingYouNeedSection />

      {/* Find Your Stay Section */}
      <FindYourStaySection />

      {/* Our Stays Section */}
      <OurStaysSection />
    </div>
  );
};

export default ForGuestsPage;
