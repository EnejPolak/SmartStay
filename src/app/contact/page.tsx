'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });

  const translations = {
    sl: {
      title: 'Kontaktirajte nas',
      subtitle: 'Imate vprašanje ali želite izvedeti več o SmartxStay? Pišite nam in z veseljem vam bomo odgovorili.',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokacija',
      viewOnMap: 'Poglej na zemljevidu',
      sendMessage: 'Pošljite nam sporočilo',
      fullName: 'Ime in priimek',
      emailAddress: 'Email naslov',
      phoneLabel: 'Telefon',
      iAm: 'Sem...',
      select: 'Izberite...',
      host: 'Host',
      guest: 'Gost',
      propertyManager: 'Upravitelj nepremičnin',
      partner: 'Partner',
      other: 'Drugo',
      message: 'Sporočilo',
      sendButton: 'Pošlji sporočilo',
      messageSent: 'Sporočilo poslano! (demo)'
    }
  };

  const t = translations.sl;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    alert(language === 'sl' ? t.messageSent : 'Message sent! (demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Fixed Background */}
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 40px 80px 40px',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            <span 
              style={{ 
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {language === 'sl' ? t.title : 'Contact us'}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.7',
              margin: '0 0 60px 0',
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            {language === 'sl' ? t.subtitle : 'Have a question or want to learn more about SmartxStay? Write to us and we\'ll be happy to answer.'}
          </p>

          {/* Main Content Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              width: '100%',
              alignItems: 'start',
            }}
            className="contact-grid"
          >
            {/* Left Side - Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Email Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '2px solid rgba(162, 158, 255, 0.3)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #a29eff 0%, #7db8ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f0f', margin: 0 }}>{language === 'sl' ? t.email : 'Email'}</h3>
                </div>
                <p style={{ fontSize: '18px', color: '#4a4a4a', margin: 0, lineHeight: '1.6' }}>
                  <a 
                    href="mailto:info@qr-space.si" 
                    style={{ color: '#7c5fd9', textDecoration: 'none', fontWeight: 600 }}
                  >
                    info@qr-space.si
                  </a>
                </p>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '2px solid rgba(162, 158, 255, 0.3)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #a29eff 0%, #7db8ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f0f', margin: 0 }}>{language === 'sl' ? t.phone : 'Phone'}</h3>
                </div>
                <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 8px 0', lineHeight: '1.6' }}>
                  <a 
                    href="tel:+38669413494" 
                    style={{ color: '#7c5fd9', textDecoration: 'none', fontWeight: 600 }}
                  >
                    SLO: +386 69 413 494
                  </a>
                </p>
                <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 8px 0', lineHeight: '1.6' }}>
                  <a 
                    href="tel:+38670614341" 
                    style={{ color: '#7c5fd9', textDecoration: 'none', fontWeight: 600 }}
                  >
                    SLO: +386 70 614 341
                  </a>
                </p>
                <p style={{ fontSize: '18px', color: '#4a4a4a', margin: 0, lineHeight: '1.6' }}>
                  <a 
                    href="tel:+385957728882" 
                    style={{ color: '#7c5fd9', textDecoration: 'none', fontWeight: 600 }}
                  >
                    HR: +385 957 728 882
                  </a>
                </p>
              </div>

              {/* Location Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(25px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '2px solid rgba(162, 158, 255, 0.3)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #a29eff 0%, #7db8ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f0f', margin: 0 }}>{language === 'sl' ? t.location : 'Location'}</h3>
                </div>
                <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                  1231 Ljubljana - Črnuče<br />
                  Slovenija
                </p>
                <a 
                  href="/about" 
                  style={{ 
                    color: '#7c5fd9', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    fontSize: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {language === 'sl' ? t.viewOnMap : 'View on map'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                borderRadius: '20px',
                padding: '40px',
                border: '2px solid rgba(162, 158, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#0f0f0f',
                  margin: '0 0 32px 0',
                }}
              >
                {language === 'sl' ? t.sendMessage : 'Send us a message'}
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0f0f0f',
                      marginBottom: '8px',
                    }}
                  >
                    {language === 'sl' ? t.fullName : 'Full name'} *
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
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid rgba(162, 158, 255, 0.2)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a29eff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 158, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(162, 158, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0f0f0f',
                      marginBottom: '8px',
                    }}
                  >
                    {language === 'sl' ? t.emailAddress : 'Email address'} *
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
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid rgba(162, 158, 255, 0.2)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a29eff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 158, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(162, 158, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0f0f0f',
                      marginBottom: '8px',
                    }}
                  >
                    {language === 'sl' ? t.phoneLabel : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid rgba(162, 158, 255, 0.2)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a29eff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 158, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(162, 158, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* User Type */}
                <div>
                  <label
                    htmlFor="userType"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0f0f0f',
                      marginBottom: '8px',
                    }}
                  >
                    {language === 'sl' ? t.iAm : 'I am...'} *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid rgba(162, 158, 255, 0.2)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a29eff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 158, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(162, 158, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">{language === 'sl' ? t.select : 'Select...'}</option>
                    <option value="host">{language === 'sl' ? t.host : 'Host'}</option>
                    <option value="guest">{language === 'sl' ? t.guest : 'Guest'}</option>
                    <option value="property-manager">{language === 'sl' ? t.propertyManager : 'Property manager'}</option>
                    <option value="partner">{language === 'sl' ? t.partner : 'Partner'}</option>
                    <option value="other">{language === 'sl' ? t.other : 'Other'}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#0f0f0f',
                      marginBottom: '8px',
                    }}
                  >
                    {language === 'sl' ? t.message : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      fontSize: '16px',
                      border: '2px solid rgba(162, 158, 255, 0.2)',
                      borderRadius: '12px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      resize: 'vertical',
                      minHeight: '140px',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a29eff';
                      e.target.style.boxShadow = '0 0 0 3px rgba(162, 158, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(162, 158, 255, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {language === 'sl' ? t.sendButton : 'Send message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          section {
            padding: 100px 20px 60px 20px !important;
          }
        }
      `}</style>
    </main>
  );
}

