'use client';

import React, { useState, useEffect, useRef } from 'react';

const CTAContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      ref={sectionRef}
      id="cta-contact"
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div
        className="cta-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '48px',
          alignItems: 'center'
        }}
      >
        {/* Left Side - CTA Text and Button */}
        <div className="cta-text">
          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              fontWeight: 800,
              color: '#0f0f0f',
              lineHeight: '1.15',
              marginBottom: '16px'
            }}
          >
            Ready to elevate your hospitality?
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#4a4a4a',
              lineHeight: '1.7',
              maxWidth: '540px',
              marginBottom: '28px'
            }}
          >
            Let&apos;s connect and bring digital hospitality to your guests. Book a free, no-obligation 
            video meeting to see how SmartxStay can work for you.
          </p>

          {/* CTA Button */}
          <button className="btn-primary">
            Book a free presentation
          </button>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="contact-form-card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(25px) saturate(180%)',
            WebkitBackdropFilter: 'blur(25px) saturate(180%)',
            borderRadius: '22px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderTop: '1px solid rgba(255, 255, 255, 0.5)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
            maxWidth: '540px',
            width: '100%'
          }}
        >
          {/* Form Title */}
          <h3
            style={{
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '20px',
              color: '#0f0f0f',
              marginBottom: '20px'
            }}
          >
            Get in Touch
          </h3>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '16px',
                color: '#333',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#b8a1ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(184,161,255,0.25)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '16px',
                color: '#333',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#b8a1ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(184,161,255,0.25)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />

            {/* User Type Select */}
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '16px',
                color: formData.userType ? '#333' : '#a0a0a0',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#b8a1ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(184,161,255,0.25)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            >
              <option value="" disabled>Vacation Rental Host</option>
              <option value="host">Vacation Rental Host</option>
              <option value="property-manager">Property Manager</option>
              <option value="guest">Guest</option>
              <option value="other">Other</option>
            </select>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '14px',
                padding: '14px 16px',
                fontSize: '16px',
                color: '#333',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease',
                resize: 'vertical',
                minHeight: '140px'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#b8a1ff';
                e.target.style.boxShadow = '0 0 0 3px rgba(184,161,255,0.25)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.boxShadow = 'none';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 72px 16px !important;
          }

          .cta-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .cta-text {
            text-align: center;
          }

          .cta-text p {
            max-width: 100% !important;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-form-card {
            margin: 0 auto;
          }
        }

        input::placeholder,
        textarea::placeholder,
        select {
          color: #a0a0a0;
        }
      `}</style>
    </section>
  );
};

export default CTAContactSection;

