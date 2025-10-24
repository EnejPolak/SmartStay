'use client';

import React from 'react';

const FeaturesOverviewSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Digital Info Map',
      description: 'All apartment info, rules, and appliance guides in one interactive hub.'
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Curated Local Guide',
      description: 'Personal recommendations for restaurants, cafés, and hidden gems.'
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6M8 2V6M3 10H21" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01" stroke="#b8a1ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Smart Bookings',
      description: 'Integrate services like taxi booking, food delivery, or local tours.'
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Simple Setup',
      description: 'Get started in minutes. Our intuitive dashboard makes setup a breeze.'
    }
  ];

  return (
    <section
      id="features-overview"
      style={{
        backgroundColor: '#f7f6fb',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '96px 20px',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* Title */}
        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 44px)',
            fontWeight: 800,
            color: '#0f0f0f',
            textAlign: 'center',
            marginBottom: '12px',
            lineHeight: '1.2'
          }}
        >
          Everything you need in one place
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: '#737373',
            textAlign: 'center',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}
        >
          Features designed for connection, not just convenience.
        </p>

        {/* Features Grid */}
        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '28px'
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 12px 26px rgba(0,0,0,0.08)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                height: 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 26px rgba(0,0,0,0.08)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#efeaff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#0f0f0f',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#737373',
                  lineHeight: '1.7',
                  margin: 0
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 72px 16px !important;
          }

          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesOverviewSection;

