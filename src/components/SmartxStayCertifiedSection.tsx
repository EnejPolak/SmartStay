'use client';

import React from 'react';

const SmartxStayCertifiedSection = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px',
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
        {/* Certification Badge Icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 32px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gold Medal Background */}
            <circle cx="50" cy="50" r="45" fill="#f4d03f" opacity="0.2" />
            <circle cx="50" cy="50" r="38" fill="#f4d03f" opacity="0.4" />
            <circle cx="50" cy="50" r="32" fill="#f4d03f" />
            
            {/* Star in center */}
            <path
              d="M50 20 L55 40 L75 40 L59 52 L65 72 L50 60 L35 72 L41 52 L25 40 L45 40 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Main Title */}
        <h2
          style={{
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 24px 0',
            lineHeight: '1.2'
          }}
        >
          Smart<span style={{ color: '#b8a1ff' }}>x</span>Stay Certified
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: '0 auto 80px auto',
            maxWidth: '740px',
            lineHeight: '1.6'
          }}
        >
          Showcase your commitment to exceptional hospitality. Our certification highlights your dedication to guest care and quality, providing a trusted benchmark that helps you stand out.
        </p>

        {/* Benefits Cards */}
        <div
          className="benefits-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '60px'
          }}
        >
          {/* Card 1: Build Trust */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              Build Trust
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Gain a competitive edge with a badge that signals quality and reliability to potential guests, assuring them of a superior stay.
            </p>
          </div>

          {/* Card 2: Elevate Your Listing */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              Elevate Your Listing
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Certified hosts get priority placement and greater visibility across our platform and partners, attracting more bookings.
            </p>
          </div>

          {/* Card 3: Access Expert Resources */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              Access Expert Resources
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Unlock exclusive guides, workshops, and tools to help you refine your hosting skills and enhance guest satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          section {
            padding: 100px 20px !important;
          }
          
          .benefit-card:last-child {
            grid-column: 1 / -1;
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          section {
            padding: 80px 16px !important;
          }
          
          .benefit-card {
            padding: 40px 32px !important;
          }
          
          .benefit-card:last-child {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SmartxStayCertifiedSection;

