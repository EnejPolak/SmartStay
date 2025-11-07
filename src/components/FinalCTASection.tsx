'use client';

import React, { useState } from 'react';

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hostType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      style={{
        backgroundColor: '#f4f1fe',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <div
          className="cta-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}
        >
          {/* Left Side - Text & CTA */}
          <div
            className="text-content"
            style={{
              textAlign: 'left'
            }}
          >
            {/* Main Title */}
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 42px)',
                fontWeight: 800,
                color: '#0f0f0f',
                margin: '0 0 20px 0',
                lineHeight: '1.2'
              }}
            >
              Ready to elevate your hospitality?
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: 400,
                color: '#737373',
                margin: '0 0 32px 0',
                maxWidth: '520px',
                lineHeight: '1.6'
              }}
            >
              Let&apos;s connect and bring digital hospitality to your guests. Book a free, no-obligation video meeting to see how SmartxStay can work for you.
            </p>

            {/* CTA Button */}
            <button
              style={{
                backgroundColor: '#b8a1ff',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '16px',
                padding: '16px 40px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a991ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(184, 161, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#b8a1ff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #b8a1ff';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              Book a free presentation
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Form Title */}
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 28px 0',
                textAlign: 'center'
              }}
            >
              Get in Touch
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0f0f0f',
                    marginBottom: '8px'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #daceff',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#b8a1ff';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 161, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#daceff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0f0f0f',
                    marginBottom: '8px'
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #daceff',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#b8a1ff';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 161, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#daceff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Dropdown Field */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="hostType"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0f0f0f',
                    marginBottom: '8px'
                  }}
                >
                  I am a...
                </label>
                <select
                  id="hostType"
                  name="hostType"
                  value={formData.hostType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #daceff',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#b8a1ff';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 161, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#daceff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select...</option>
                  <option value="vacation-rental">Vacation Rental Host</option>
                  <option value="hotel">Hotel Manager</option>
                  <option value="property-manager">Property Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0f0f0f',
                    marginBottom: '8px'
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #daceff',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#b8a1ff';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 161, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#daceff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#b8a1ff',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '14px',
                  padding: '14px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#a991ff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#b8a1ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .cta-grid {
            gap: 60px !important;
          }
        }

        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .text-content {
            text-align: center !important;
          }

          .text-content p {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          section {
            padding: 80px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;

