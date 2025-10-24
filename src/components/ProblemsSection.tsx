'use client';

import React from 'react';
import Link from 'next/link';

const ProblemsSection = () => {

  const problems = [
    {
      id: 1,
      title: 'Repetitive guest questions',
      description: 'Answering the same things over and over',
      icon: 'question'
    },
    {
      id: 2,
      title: 'Outdated paper guides',
      description: 'Hard to update, easy to lose or damage',
      icon: 'document'
    },
    {
      id: 3,
      title: 'Lost time',
      description: 'Time spent on logistics is time lost on hospitality',
      icon: 'clock'
    },
    {
      id: 4,
      title: 'Low differentiation',
      description: 'Struggling to stand out in a crowded market',
      icon: 'star'
    }
  ];

  const renderIcon = (iconType: string) => {
    const iconColor = '#a29eff';
    
    switch(iconType) {
      case 'question':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2"/>
            <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'document':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12H15M9 16H15M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H12.586C12.8512 3.00006 13.1055 3.10545 13.293 3.293L18.707 8.707C18.8946 8.89449 18.9999 9.1488 19 9.414V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="problems-smartxstay-solves"
      className="problems-section"
      style={{ 
        backgroundColor: '#f4f1fe',
        fontFamily: 'Inter, sans-serif',
        padding: '120px 20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Content Container */}
      <div 
        style={{ 
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto'
        }}
      >
        {/* Title */}
        <h2 
          className="section-title"
          style={{ 
            color: '#0f0f0f',
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: '1.2',
            textAlign: 'center',
            margin: 0,
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}
        >
          Problems Smart<span className="accent-x">x</span>Stay solves
        </h2>

        {/* Subtitle */}
        <p 
          className="section-subtitle"
          style={{ 
            color: '#737373',
            fontSize: 'clamp(18px, 2vw, 20px)',
            fontWeight: 400,
            textAlign: 'center',
            margin: 0,
            marginBottom: '48px',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}
        >
          Transforming challenges into seamless experiences.
        </p>

        {/* Navigation Buttons */}
        <div 
          className="pill-buttons"
          style={{ 
            display: 'flex',
            gap: '16px',
            marginBottom: '64px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Link href="/for-hosts" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#a29eff',
                color: '#ffffff',
                borderRadius: '24px',
                padding: '14px 32px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 12px rgba(162, 158, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9383ee';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(162, 158, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#a29eff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(162, 158, 255, 0.3)';
              }}
            >
              For hosts
            </button>
          </Link>
          <Link href="/for-guests" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#ffffff',
                color: '#a29eff',
                borderRadius: '24px',
                padding: '14px 32px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 12px rgba(162, 158, 255, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a29eff';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(162, 158, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#a29eff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(162, 158, 255, 0.15)';
              }}
            >
              For guests
            </button>
          </Link>
        </div>

        {/* Cards Grid */}
        <div 
          className="cards-grid"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            width: '100%',
            maxWidth: '1100px'
          }}
        >
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="problem-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '40px 36px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                border: '1px solid rgba(162, 158, 255, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              tabIndex={0}
            >
              {/* Gradient overlay */}
              <div 
                className="card-gradient"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #a29eff 0%, #b8a1ff 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              />

              {/* Icon Container */}
              <div 
                className="icon-container"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  padding: '16px',
                  backgroundColor: '#f4f1fe',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                {renderIcon(problem.icon)}
              </div>

              {/* Title */}
              <h3 
                style={{
                  color: '#0f0f0f',
                  fontSize: '24px',
                  fontWeight: 700,
                  margin: 0,
                  marginBottom: '12px',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  color: '#737373',
                  fontSize: '17px',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: '1.6'
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .accent-x {
          color: #a29eff;
        }

        .problem-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(162, 158, 255, 0.2) !important;
          border-color: rgba(162, 158, 255, 0.3) !important;
        }

        .problem-card:hover .card-gradient {
          opacity: 1 !important;
        }

        .problem-card:hover .icon-container {
          background-color: #e8e5ff !important;
          transform: scale(1.05);
        }

        .problem-card:hover .icon-container svg path,
        .problem-card:hover .icon-container svg circle {
          stroke: #b8a1ff !important;
        }

        .problem-card:focus-visible {
          outline: 3px solid #a29eff;
          outline-offset: 4px;
        }

        @media (max-width: 1024px) {
          .cards-grid {
            gap: 24px !important;
          }
        }

        @media (max-width: 768px) {
          .problems-section {
            padding: 80px 16px !important;
          }

          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .problem-card {
            padding: 32px 28px !important;
          }

          .section-title {
            font-size: 36px !important;
            margin-bottom: 16px !important;
          }

          .section-subtitle {
            font-size: 17px !important;
            margin-bottom: 32px !important;
          }

          .pill-buttons {
            margin-bottom: 48px !important;
          }
        }

        @media (max-width: 480px) {
          .problem-card {
            padding: 28px 24px !important;
          }

          .icon-container {
            padding: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemsSection;

