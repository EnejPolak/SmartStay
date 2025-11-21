'use client';

import React, { useState, useEffect, useRef } from 'react';

const FeaturesOverviewSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Funkcija za določanje barve glede na index (šahovnica)
  const getCardColor = (index: number) => {
    const isPurple = index % 2 === 0;
    return {
      backgroundColor: isPurple ? '#ede9fe' : '#e0f2fe', // Močnejša vijolična ali pastelno modra
      iconBg: isPurple ? '#ddd6fe' : 'rgba(191, 219, 254, 0.8)', // Bolj vijoličen krog za vijolične kartice
      iconColor: isPurple ? '#a29eff' : '#3b82f6', // Vijolična ali modra ikona
      titleColor: isPurple ? '#7c3aed' : '#1e40af', // Temno vijolična ali temno modra za naslov
      hoverBg: isPurple ? '#e9e0ff' : '#d4eaf7',
    };
  };

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
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H22" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Upsell',
      description: 'Boost your revenue with extra services like tours and offers.'
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Apartment Directions',
      description: 'Clear, step-by-step navigation straight to your apartment.'
    },
    {
      id: 7,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="4" width="22" height="16" rx="2" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 10H23" stroke="#b8a1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Transport',
      description: 'Help guests travel like locals with taxis or parking info.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasScrolled]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        setScrollPosition((prev) => {
          const newPosition = prev + 1;
          if (newPosition >= maxScroll) {
            return 0;
          }
          return newPosition;
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section
      ref={sectionRef}
      id="features-overview"
      style={{
        backgroundColor: 'transparent',
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
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

        {/* Features Carousel */}
        <div
          ref={scrollContainerRef}
          className="features-carousel"
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '20px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {features.concat(features).map((feature, index) => {
            const colors = getCardColor(index);
            return (
            <div
              key={`${feature.id}-${index}`}
              className="feature-card"
              style={{
                width: '240px',
                height: '240px',
                backgroundColor: colors.backgroundColor,
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: colors.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {React.cloneElement(feature.icon as React.ReactElement<Record<string, unknown>>, {
                  children: React.Children.map((feature.icon as React.ReactElement<Record<string, unknown>>).props.children as React.ReactNode, (child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                      const childProps = (child.props as Record<string, unknown>) || {};
                      return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
                        ...childProps,
                        stroke: colors.iconColor,
                      } as Record<string, unknown>);
                    }
                    return child;
                  }),
                } as Record<string, unknown>)}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: colors.titleColor,
                  margin: 0,
                  lineHeight: '1.3',
                  flexShrink: 0
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#4a4a4a',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {feature.description}
              </p>
            </div>
          );
          })}
        </div>
      </div>

      <style jsx>{`
        .features-carousel::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          section {
            padding: 72px 16px !important;
          }

          .feature-card {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesOverviewSection;

