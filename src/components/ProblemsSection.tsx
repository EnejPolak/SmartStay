'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProblemsSection = () => {
  const [activeTab, setActiveTab] = useState<'hosts' | 'guests'>('hosts');
  const { language } = useLanguage();

  const translations = {
    en: {
      titlePrefix: 'Problems ',
      titleSmartxStay: 'SmartxStay',
      solves: 'solves',
      subtitle: 'Transforming challenges into seamless experiences.',
      forHosts: 'For hosts',
      forGuests: 'For guests',
      hostsProblems: [
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
      title: 'Falling behind in modern tourism',
      description: 'Technology moves fast, don\'t get left behind.',
      icon: 'hourglass'
    },
    {
      id: 4,
      title: 'Losing opportunities to upsell',
      description: 'Guests don\'t find your additional services',
      icon: 'star'
    }
      ],
      guestsProblems: [
    {
      id: 1,
      title: 'Lost information',
      description: 'Hard to find local guides, rules or amenities',
      icon: 'info'
    },
    {
      id: 2,
      title: 'Getting lost before arrival',
      description: 'Poor direction info from your host',
      icon: 'message'
    },
    {
      id: 3,
      title: 'Hours lost researching for trips',
      description: 'Avrage traveler plans at least 4 h tor a trip',
      icon: 'star'
    },
    {
      id: 4,
      title: 'Confusing transport info',
      description: 'Dont know what transport to use and how',
      icon: 'check'
    }
      ]
    },
    sl: {
      titlePrefix: 'Težave, ki jih ',
      titleSmartxStay: 'SmartxStay',
      solves: 'rešuje',
      subtitle: 'Preoblikovanje izzivov v brezhibne izkušnje.',
      forHosts: 'Za gostitelje',
      forGuests: 'Za goste',
      hostsProblems: [
        {
          id: 1,
          title: 'Ponavljajoča se vprašanja gostov',
          description: 'Nenehno odgovarjanje na ista vprašanja',
          icon: 'question'
        },
        {
          id: 2,
          title: 'Zastareli papirnati vodniki',
          description: 'Težko posodabljanje, enostavno izgubiti ali poškodovati',
          icon: 'document'
        },
        {
          id: 3,
          title: 'Zaostajanje v sodobnem turizmu',
          description: 'Tehnologija se hitro razvija, ne zaostajajte.',
          icon: 'hourglass'
        },
        {
          id: 4,
          title: 'Izgubljene priložnosti za dodatno prodajo',
          description: 'Večina turistov sploh ne izve za dodatne storitve, ki jih namestitev ponuja.',
          icon: 'star'
        }
      ],
      guestsProblems: [
        {
          id: 1,
          title: 'Izgubljene ure pri načrtovanju potovanja',
          description: 'Povprečna oseba porabi več kot 10 ur za načrtovanje počitnic',
          icon: 'star'
        },
        {
          id: 2,
          title: 'Izgubljeni pred prihodom',
          description: 'Slaba navodila / Čakalne vrste, dolge minute ob prihodu. Raziskava Cornellove univerze: Čakanje, daljše od 5 minut, zmanjša zadovoljstvo gosta za 50 %.',
          icon: 'message'
        },
        {
          id: 3,
          title: 'Stres v tuji državi',
          description: 'Jezikovne ovire. Zaradi jezikovnih ovir hitro pride do pomanjkanja informacij, nezdovoljstva in ne gotovosti.',
          icon: 'info'
        },
        {
          id: 4,
          title: 'Zmedene informacije o prevozu',
          description: 'Ne veste, kateri prevoz uporabiti in kako',
          icon: 'check'
        }
      ]
    }
  };

  const t = translations[language];
  const problems = activeTab === 'hosts' ? t.hostsProblems : t.guestsProblems;

  const renderIcon = (iconType: string, iconColor: string = '#a29eff') => {
    
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
      case 'hourglass':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2H18M6 22H18M6 2V6L10 10C10 10 10 14 6 18V22M18 2V6L14 10C14 10 14 14 18 18V22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L10 10C10 10 10 14 6 18M18 6L14 10C14 10 14 14 18 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'info':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2"/>
            <path d="M12 16V12M12 8H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'message':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'check':
        return (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2"/>
            <path d="M9 12L11 14L15 10" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
        backgroundColor: 'transparent',
        fontFamily: 'Inter, sans-serif',
        padding: '60px 20px',
        marginTop: '0px',
        minHeight: 'auto',
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
          {t.titlePrefix}<span className="animated-gradient-text">{t.titleSmartxStay}</span> {t.solves}
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
          {t.subtitle}
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
            <button
            onClick={() => setActiveTab('hosts')}
              style={{
              backgroundColor: activeTab === 'hosts' ? '#3b82f6' : '#ffffff',
              color: activeTab === 'hosts' ? '#ffffff' : '#3b82f6',
                borderRadius: '24px',
                padding: '14px 32px',
                fontWeight: 600,
                border: activeTab === 'hosts' ? 'none' : '2px solid #3b82f6',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
              boxShadow: activeTab === 'hosts' ? '0 4px 12px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.15)'
              }}
              onMouseEnter={(e) => {
              if (activeTab === 'hosts') {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
              } else {
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }
              }}
              onMouseLeave={(e) => {
              if (activeTab === 'hosts') {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
              } else {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }
              }}
            >
              {t.forHosts}
            </button>
            <button
            onClick={() => setActiveTab('guests')}
              style={{
              backgroundColor: activeTab === 'guests' ? '#3b82f6' : '#ffffff',
              color: activeTab === 'guests' ? '#ffffff' : '#3b82f6',
                borderRadius: '24px',
                padding: '14px 32px',
                fontWeight: 600,
                border: activeTab === 'guests' ? 'none' : '2px solid #3b82f6',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
              boxShadow: activeTab === 'guests' ? '0 4px 12px rgba(59, 130, 246, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.15)'
              }}
              onMouseEnter={(e) => {
              if (activeTab === 'guests') {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
              } else {
                e.currentTarget.style.backgroundColor = '#eff6ff';
              }
              }}
              onMouseLeave={(e) => {
              if (activeTab === 'guests') {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
              } else {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }
              }}
            >
              {t.forGuests}
            </button>
        </div>

        {/* Cards Grid */}
        <div 
          key={activeTab}
          className="cards-grid"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            width: '100%',
            maxWidth: '900px',
            animation: 'fadeIn 0.5s ease-in-out'
          }}
        >
          {problems.map((problem, index) => {
            // Barve: index 0 in 3 (Repetitive questions, Losing opportunities) -> modra
            //        index 1 in 2 (Outdated guides, Falling behind) -> vijolična
            const isBlue = index === 0 || index === 3;
            
            return (
            <div
              key={problem.id}
              className="problem-card"
              style={{
                backgroundColor: isBlue 
                  ? '#e0f2fe' 
                  : '#ede9fe', // Močnejša vijolična
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(162, 158, 255, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
              }}
              tabIndex={0}
            >

              {/* Icon Container */}
              <div 
                className="icon-container"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  padding: '12px',
                  backgroundColor: isBlue ? 'rgba(191, 219, 254, 0.8)' : '#ddd6fe', // Bolj vijoličen krog
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                {renderIcon(problem.icon, isBlue ? '#1e40af' : '#a29eff')}
              </div>

              {/* Title */}
              <h3 
                className={`problem-title ${isBlue ? 'title-blue' : 'title-purple'}`}
                style={{
                  color: '#0f0f0f', // Črna barva
                  fontSize: '20px',
                  fontWeight: 700,
                  margin: 0,
                  marginBottom: '8px',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.3s ease'
                }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  color: '#4a4a4a',
                  fontSize: '15px',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: '1.5'
                }}
              >
                {problem.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .problem-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(162, 158, 255, 0.2) !important;
          border-color: rgba(162, 158, 255, 0.3) !important;
        }
        
        .problem-card:nth-child(1):hover,
        .problem-card:nth-child(4):hover {
          background-color: #cfe7f5 !important;
        }
        
        .problem-card:nth-child(2):hover,
        .problem-card:nth-child(3):hover {
          background-color: #ede9ff !important;
        }

        .problem-card:nth-child(1):hover .icon-container,
        .problem-card:nth-child(4):hover .icon-container {
          background-color: #bfdbfe !important;
          transform: scale(1.05);
        }
        
        .problem-card:nth-child(2):hover .icon-container,
        .problem-card:nth-child(3):hover .icon-container {
          background-color: #e8e5ff !important;
          transform: scale(1.05);
        }

        .problem-card:nth-child(1):hover .icon-container svg path,
        .problem-card:nth-child(1):hover .icon-container svg circle,
        .problem-card:nth-child(4):hover .icon-container svg path,
        .problem-card:nth-child(4):hover .icon-container svg circle {
          stroke: #1e3a8a !important;
        }
        
        .problem-card:nth-child(2):hover .icon-container svg path,
        .problem-card:nth-child(2):hover .icon-container svg circle,
        .problem-card:nth-child(3):hover .icon-container svg path,
        .problem-card:nth-child(3):hover .icon-container svg circle {
          stroke: #b8a1ff !important;
        }

        /* Title hover effects */
        .problem-card:nth-child(1):hover .problem-title.title-blue,
        .problem-card:nth-child(4):hover .problem-title.title-blue {
          color: #1e40af !important;
        }
        
        .problem-card:nth-child(2):hover .problem-title.title-purple,
        .problem-card:nth-child(3):hover .problem-title.title-purple {
          color: #7c3aed !important;
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
            padding: 60px 16px !important;
          }

          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .problem-card {
            padding: 28px 24px !important;
          }

          .section-title {
            font-size: clamp(28px, 6vw, 40px) !important;
            margin-bottom: 16px !important;
          }

          .section-subtitle {
            font-size: clamp(14px, 3vw, 17px) !important;
            margin-bottom: 32px !important;
          }

          .pill-buttons {
            margin-bottom: 40px !important;
            gap: 12px !important;
          }
          
          .pill-button {
            font-size: clamp(14px, 3vw, 16px) !important;
            padding: 10px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .problems-section {
            padding: 48px 12px !important;
          }
          
          .problem-card {
            padding: 24px 20px !important;
          }

          .icon-container {
            padding: 12px !important;
            width: 48px !important;
            height: 48px !important;
          }
          
          .section-title {
            font-size: clamp(24px, 7vw, 32px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemsSection;

