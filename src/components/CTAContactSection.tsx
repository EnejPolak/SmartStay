'use client';

import React, { useState } from 'react';

const CTAContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    message: ''
  });

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
      id="cta-contact"
      style={{
        backgroundColor: '#f4f1fe',
        width: '100%',
        padding: '96px 20px',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
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
              color: '#737373',
              lineHeight: '1.7',
              maxWidth: '540px',
              marginBottom: '28px'
            }}
          >
            Let&apos;s connect and bring digital hospitality to your guests. Book a free, no-obligation 
            video meeting to see how SmartxStay can work for you.
          </p>

          {/* CTA Button */}
          <button
            className="cta-button"
            style={{
              backgroundColor: '#b8a1ff',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '16px',
              padding: '16px 30px',
              borderRadius: '18px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(184,161,255,0.4)',
              transition: 'all 0.25s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a991ff';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,161,255,0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#b8a1ff';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,161,255,0.4)';
            }}
          >
            Book a free presentation
          </button>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="contact-form-card"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '22px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
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
                backgroundColor: '#f8f8fc',
                border: '1px solid #e4e4f2',
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
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e4e4f2';
                e.target.style.boxShadow = 'none';
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
                backgroundColor: '#f8f8fc',
                border: '1px solid #e4e4f2',
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
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e4e4f2';
                e.target.style.boxShadow = 'none';
              }}
            />

            {/* User Type Select */}
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#f8f8fc',
                border: '1px solid #e4e4f2',
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
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e4e4f2';
                e.target.style.boxShadow = 'none';
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
                backgroundColor: '#f8f8fc',
                border: '1px solid #e4e4f2',
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
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e4e4f2';
                e.target.style.boxShadow = 'none';
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              style={{
                width: '100%',
                backgroundColor: '#b8a1ff',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a991ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#b8a1ff';
              }}
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

