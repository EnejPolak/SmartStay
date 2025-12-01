'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const CTAContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    message: ''
  });
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Ready to elevate your hospitality?',
      description: 'Let\'s connect and bring digital hospitality to your guests. Book a free, no-obligation video meeting to see how SmartxStay can work for you.',
      button: 'Book a free presentation',
      formTitle: 'Get in Touch',
      accommodationName: 'Accommodation name',
      emailAddress: 'Email Address',
      vacationRentalHost: 'Vacation Rental Host',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      selectOptions: {
        host: 'Vacation Rental Host',
        propertyManager: 'Property Manager',
        guest: 'Guest',
        other: 'Other'
      }
    },
    sl: {
      title: 'Pripravljeni dvigniti vašo gostoljubnost?',
      description: 'Rezervirajte brezplačen, video sestanek, da vidite, kako lahko SmartxStay deluje za vas.',
      button: 'Rezervirajte brezplačno predstavitev',
      formTitle: 'Kontaktirajte nas',
      accommodationName: 'Ime nastanitve',
      emailAddress: 'E-poštni naslov',
      vacationRentalHost: 'Gostitelj najema za počitnice',
      yourMessage: 'Vaše sporočilo',
      sendMessage: 'Pošlji sporočilo',
      selectOptions: {
        host: 'Gostitelj najema za počitnice',
        propertyManager: 'Upravitelj nepremičnin',
        guest: 'Gost',
        other: 'Drugo'
      }
    },
    hr: {
      title: 'Spremni podići vašu gostoljubnost?',
      description: 'Rezervirajte besplatan video sastanak da vidite kako SmartxStay može raditi za vas.',
      button: 'Rezervirajte besplatnu prezentaciju',
      formTitle: 'Kontaktirajte nas',
      accommodationName: 'Ime smještaja',
      emailAddress: 'Email adresa',
      vacationRentalHost: 'Domaćin najma za odmor',
      yourMessage: 'Vaša poruka',
      sendMessage: 'Pošalji poruku',
      selectOptions: {
        host: 'Domaćin najma za odmor',
        propertyManager: 'Upravitelj nekretnina',
        guest: 'Gost',
        other: 'Drugo'
      }
    }
  };

  const t = translations[language] || translations.en;

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          userType: formData.userType,
          subject: `New contact form submission from ${formData.name || 'Website visitor'}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          userType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        background: 'linear-gradient(to bottom, rgba(237, 233, 254, 0.8) 0%, rgba(219, 234, 254, 0.8) 100%)',
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
            {t.title}
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
            {t.description}
          </p>

          {/* CTA Button */}
          <Link 
            href={language === 'hr' 
              ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000057014"
              : language === 'sl'
              ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000063002"
              : "https://meetings-smartxstay.zohobookings.eu/#/242002000000041016"}
            className="btn-primary"
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.button}
          </Link>
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
            {t.formTitle}
          </h3>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder={t.accommodationName}
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
              placeholder={t.emailAddress}
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
              <option value="" disabled>{t.vacationRentalHost}</option>
              <option value="host">{t.selectOptions.host}</option>
              <option value="property-manager">{t.selectOptions.propertyManager}</option>
              <option value="guest">{t.selectOptions.guest}</option>
              <option value="other">{t.selectOptions.other}</option>
            </select>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder={t.yourMessage}
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

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#16a34a',
                  marginBottom: '16px',
                  fontSize: '14px',
                }}
              >
                {language === 'sl' ? 'Sporočilo uspešno poslano!' : language === 'hr' ? 'Poruka uspješno poslana!' : 'Message sent successfully!'}
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#dc2626',
                  marginBottom: '16px',
                  fontSize: '14px',
                }}
              >
                {language === 'sl' ? 'Pošiljanje sporočila ni uspelo. Poskusite znova.' : language === 'hr' ? 'Slanje poruke nije uspjelo. Pokušajte ponovno.' : 'Failed to send message. Please try again.'}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
              style={{
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isSubmitting 
                ? (language === 'sl' ? 'Pošiljanje...' : language === 'hr' ? 'Slanje...' : 'Sending...')
                : t.sendMessage
              }
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 16px !important;
          }
          
          .section-title {
            font-size: clamp(28px, 6vw, 40px) !important;
          }
          
          .section-subtitle {
            font-size: clamp(14px, 3vw, 16px) !important;
          }

          .cta-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .cta-text {
            text-align: center;
          }

          .cta-text p {
            max-width: 100% !important;
            margin-left: auto;
            margin-right: auto;
            font-size: clamp(14px, 3vw, 16px) !important;
          }

          .contact-form-card {
            margin: 0 auto;
            padding: 32px 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 48px 12px !important;
          }
          
          .contact-form-card {
            padding: 24px 20px !important;
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

