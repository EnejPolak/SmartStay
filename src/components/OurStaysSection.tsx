'use client';

import React from 'react';

const OurStaysSection = () => {
  // Sample stays data with placeholders
  const stays = [
    { id: 1, title: 'Chic Parisian Flat', location: 'Paris, France', emoji: '🇫🇷' },
    { id: 2, title: 'Modern Tokyo Loft', location: 'Tokyo, Japan', emoji: '🇯🇵' },
    { id: 3, title: 'Cozy Barcelona Studio', location: 'Barcelona, Spain', emoji: '🇪🇸' },
    { id: 4, title: 'Elegant NYC Apartment', location: 'New York, USA', emoji: '🇺🇸' },
    { id: 5, title: 'Seaside Villa', location: 'Santorini, Greece', emoji: '🇬🇷' },
    { id: 6, title: 'Alpine Retreat', location: 'Zermatt, Switzerland', emoji: '🇨🇭' },
    { id: 7, title: 'Beach House', location: 'Bali, Indonesia', emoji: '🇮🇩' },
    { id: 8, title: 'Urban Oasis', location: 'London, UK', emoji: '🇬🇧' },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative'
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
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 16px 0',
            lineHeight: '1.2'
          }}
        >
          Our stays around the World
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 500,
            color: '#737373',
            margin: '0 auto 60px auto',
            maxWidth: '640px',
            lineHeight: '1.6'
          }}
        >
          Browse the full list below to find your next perfect SmartxStay.
        </p>

        {/* Stays Grid */}
        <div
          className="stays-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '28px',
            marginBottom: '60px'
          }}
        >
          {stays.map((stay) => (
            <div
              key={stay.id}
              className="stay-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#f0ebff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(184, 161, 255, 0.15) 0%, rgba(218, 206, 255, 0.15) 100%)',
                    zIndex: 1
                  }}
                />
                
                {/* Icon and text */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '48px',
                      marginBottom: '8px'
                    }}
                  >
                    {stay.emoji}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#a29eff',
                      fontWeight: 500,
                      letterSpacing: '0.5px'
                    }}
                  >
                    Image coming soon
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '20px',
                  textAlign: 'left',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0f0f0f',
                    margin: '0 0 8px 0',
                    lineHeight: '1.3'
                  }}
                >
                  {stay.title}
                </h3>

                {/* Location */}
                <p
                  style={{
                    fontSize: '15px',
                    color: '#737373',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#b8a1ff"
                    />
                  </svg>
                  {stay.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: '#daceff',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '16px',
            padding: '18px 48px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(218, 206, 255, 0.3)',
            minWidth: '280px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c9baff';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(218, 206, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#daceff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(218, 206, 255, 0.3)';
          }}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid #b8a1ff';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
        >
          Explore more SmartxStay homes
        </button>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .stays-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          
          section {
            padding: 60px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .stays-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          section {
            padding: 50px 16px !important;
          }
          
          .stay-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStaysSection;

