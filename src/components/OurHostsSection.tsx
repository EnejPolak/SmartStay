'use client';

import React, { useState, useEffect, useRef } from 'react';

const OurHostsSection = () => {
  const [, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  const testimonials = [
    {
      id: 1,
      name: 'Maria S.',
      role: 'Apartment Host, Rome',
      rating: 5,
      text: "SmartxStay has transformed how I interact with my guests. The digital guide is fantastic, and I love seeing how much they appreciate the local recommendations. It truly makes them feel cared for!",
      image: '/images/hosts/maria.jpg'
    },
    {
      id: 2,
      name: 'David R.',
      role: 'House Host, Lake Tahoe',
      rating: 5,
      text: "My guests used to ask so many questions about the heating or local trails. Now, with SmartxStay, all info is just a scan away. It frees me up to focus on making their stay extra special.",
      image: '/images/hosts/david.jpg'
    },
    {
      id: 3,
      name: 'Sophie L.',
      role: 'Villa Owner, Tuscany',
      rating: 4,
      text: "The booking integrations are a game-changer for my guests. They can effortlessly book local experiences I recommend. It's enhanced their stay and my reviews reflect it!",
      image: '/images/hosts/sophie.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={index < rating ? '#a898d8' : 'none'}
            stroke={index < rating ? '#a898d8' : '#d1d5db'}
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="our-hosts"
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Title */}
        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 800,
            color: '#0f0f0f',
            lineHeight: '1.2',
            marginBottom: '16px'
          }}
        >
          Our hosts. Our pride.
        </h2>

        {/* Subtitle */}
        <p
          className="section-subtitle"
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            lineHeight: '1.6',
            marginBottom: '48px'
          }}
        >
          Hear directly from the heart of the community.
        </p>

        {/* Testimonial Slider */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="nav-button"
            style={{
              position: 'absolute',
              left: '-80px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 10,
              transition: 'transform 0.2s ease'
            }}
            aria-label="Previous testimonial"
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#a898d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            className="testimonials-container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              width: '100%',
              maxWidth: '1120px'
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                  padding: '24px 28px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  opacity: 1,
                  display: 'block'
                }}
              >
                {/* Profile Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  {/* Profile Image Placeholder */}
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#a898d8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '20px'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 700, color: '#0f0f0f', fontSize: '16px' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#4a4a4a' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div style={{ marginBottom: '12px' }}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#4a4a4a',
                    fontStyle: 'italic',
                    margin: 0
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="nav-button"
            style={{
              position: 'absolute',
              right: '-80px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 10,
              transition: 'transform 0.2s ease'
            }}
            aria-label="Next testimonial"
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#a898d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(162, 158, 255, 0.15) !important;
          background-color: rgba(255, 255, 255, 0.35) !important;
        }

        .nav-button:hover {
          transform: scale(1.15);
        }

        .nav-button:hover svg path {
          stroke: #9383ee;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 32px !important;
          }

          .section-subtitle {
            font-size: 16px !important;
          }

          .testimonials-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .nav-button {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurHostsSection;

