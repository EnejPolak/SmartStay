'use client';

import React from 'react';

const EverythingYouNeedSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#f7f6fb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'Inter, sans-serif'
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
            margin: '0 0 14px 0',
            lineHeight: '1.2'
          }}
        >
          Everything you need in one place
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 500,
            color: '#737373',
            margin: '0 0 60px 0',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}
        >
          Features designed for connection, not just convenience.
        </p>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            marginTop: '60px'
          }}
          className="features-grid"
        >
          {/* Card 1: Instant Access */}
          <div
            className="feature-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
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
                  d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"
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
              Instant Access
            </h3>
            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              Scan a QR code and instantly access all info. No apps to download.
            </p>
          </div>

          {/* Card 2: Personalized Tips */}
          <div
            className="feature-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
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
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
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
              Personalized Tips
            </h3>
            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              Get your host&apos;s curated local tips for the best experiences in town.
            </p>
          </div>

          {/* Card 3: Easy Booking */}
          <div
            className="feature-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
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
                  d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
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
              Easy Booking
            </h3>
            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              Book local services like taxis or tours directly from your guide.
            </p>
          </div>

          {/* Card 4: Stay Connected */}
          <div
            className="feature-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
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
                  d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
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
              Stay Connected
            </h3>
            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.7',
                margin: 0
              }}
            >
              A seamless, connected experience from check-in to check-out.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          section {
            padding: 40px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .feature-card {
            padding: 40px 32px !important;
          }
          
          section {
            padding: 30px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EverythingYouNeedSection;

