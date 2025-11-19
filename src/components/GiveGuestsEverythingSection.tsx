'use client';

import React, { useEffect, useRef } from 'react';

const GiveGuestsEverythingSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Features data
  const features = [
    {
      title: 'Digital Info Map',
      description: 'All apartment info, rules, and appliance guides in one interactive hub.',
      icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
    },
    {
      title: 'Curated Local Guide',
      description: 'Personal recommendations for restaurants, cafes, and hidden gems.',
      icon: 'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.65l4.19 4.19zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.89-6.03-1.4-1.4-4.12-1.02-6.03.89-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z'
    },
    {
      title: 'Upsell',
      description: 'Boost your revenue with ease. Showcase tours, breakfasts and other extra offers.',
      icon: 'M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z'
    },
    {
      title: 'Apartment Directions',
      description: 'Clear, step-by-step navigation straight to your apartment, no more late-night calls.',
      icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
    },
    {
      title: 'Transport',
      description: 'Help guests travel like locals. Explain buses, taxis or parking so guests never get lost.',
      icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'
    },
    {
      title: 'Sustainability',
      description: 'Share your eco values with pride and inform guests how to stay green during their visit.',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
    },
    {
      title: 'GPX Routes',
      description: 'Give hikers and cyclists pre-made GPX tracks for effortless, unforgettable adventures.',
      icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm-1.5 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    },
  ];

  const totalCards = features.length;
  const radius = 350; // Polmer kroga

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const rotate = () => {
      if (!isPausedRef.current) {
        rotationRef.current += 0.2; // Hitrost rotacije
        if (rotationRef.current >= 360) {
          rotationRef.current = 0;
        }
        carousel.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(rotate);
    };

    animationFrameRef.current = requestAnimationFrame(rotate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 40px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Main Title */}
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 60px 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}
        >
          Give guests everything they need.
        </h2>

        {/* Carousel Container */}
        <div
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
            width: '100%',
            height: '500px',
            marginTop: '60px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            ref={carouselRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transform: 'rotateY(0deg)',
            }}
            className="carousel-container"
          >
          {features.map((feature, index) => {
            const angle = (360 / totalCards) * index;
            const cardStyle = {
              position: 'absolute' as const,
              width: '280px',
              height: '350px',
              left: '50%',
              top: '50%',
              marginLeft: '-140px',
              marginTop: '-175px',
              transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              transformStyle: 'preserve-3d' as const,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            };

            return (
              <div
                key={index}
                className="feature-card"
                style={{
                  ...cardStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  isPausedRef.current = true;
                  e.currentTarget.style.transform = `rotateY(${angle}deg) translateZ(${radius + 50}px) scale(1.1)`;
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                  const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
                  const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
                  if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
                  if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
                }}
                onMouseLeave={(e) => {
                  isPausedRef.current = false;
                  e.currentTarget.style.transform = `rotateY(${angle}deg) translateZ(${radius}px) scale(1)`;
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
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
                    margin: '0 auto 24px auto',
                    transition: 'all 0.3s ease-in-out',
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
                      d={feature.icon}
                      fill="#a29eff"
                      style={{ transition: 'fill 0.3s ease-in-out' }}
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0f0f0f',
                    margin: '0 0 12px 0',
                    lineHeight: '1.3',
                    textAlign: 'center',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: '#737373',
                    lineHeight: '1.6',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .carousel-container {
            transform: scale(0.8) !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 20px !important;
          }
          
          h2 {
            margin-bottom: 40px !important;
          }
          
          .carousel-container {
            transform: scale(0.6) !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            transform: scale(0.5) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GiveGuestsEverythingSection;

