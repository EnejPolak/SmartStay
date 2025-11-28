'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTASection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Ready to elevate your hospitality?',
      subtitle: 'Let\'s connect and bring digital hospitality to your guests. Book a free, no-obligation video meeting to see how SmartxStay can work for you.',
      description: '',
      bookPresentation: 'Book a free presentation',
      getInTouch: 'Get in Touch',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      iAmA: 'I am a...',
      select: 'Select...',
      vacationRental: 'Vacation Rental Host',
      hotelManager: 'Hotel Manager',
      propertyManager: 'Property Manager',
      other: 'Other',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message'
    },
    sl: {
      title: 'Pripravljeni dvigniti nivo vašega oddajanja?',
      subtitle: 'Ne bodite le ena izmed nastanitev. Bodite nadstandardni.',
      description: 'Rezervirajte 15-minutni pregled rešitve. Pokažite nam svoje posestvo in mi vam pokažemo, kako lahko SmartxStay dvigne vaše gostoljubje na najvišji nivo in zagotovi vašo konkurenčno prednost.',
      bookPresentation: 'Kliknite tukaj za brezplačen uvodni sestanek.',
      getInTouch: 'Kontaktirajte nas',
      yourName: 'Vaše ime',
      emailAddress: 'E-poštni naslov',
      iAmA: 'Sem...',
      select: 'Izberite...',
      vacationRental: 'Gostitelj najema za počitnice',
      hotelManager: 'Upravitelj hotela',
      propertyManager: 'Upravitelj nepremičnin',
      other: 'Drugo',
      yourMessage: 'Vaše sporočilo',
      sendMessage: 'Pošlji sporočilo'
    },
    hr: {
      title: 'Spremni podići razinu vašeg iznajmljivanja?',
      subtitle: 'Ne budite samo jedan od smještaja. Budite iznad standarda.',
      description: 'Rezervirajte 15-minutni pregled rješenja. Pokažite nam svoje imanje i mi ćemo vam pokazati kako SmartxStay može podići vašu gostoljubnost na najvišu razinu i osigurati vašu konkurentsku prednost.',
      bookPresentation: 'Kliknite ovdje za besplatni uvodni sastanak.',
      getInTouch: 'Kontaktirajte nas',
      yourName: 'Vaše ime',
      emailAddress: 'Email adresa',
      iAmA: 'Ja sam...',
      select: 'Odaberite...',
      vacationRental: 'Domaćin najma za odmor',
      hotelManager: 'Upravitelj hotela',
      propertyManager: 'Upravitelj nekretnina',
      other: 'Drugo',
      yourMessage: 'Vaša poruka',
      sendMessage: 'Pošalji poruku'
    }
  };

  const t = translations[language] || translations.en;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hostType: '',
    message: ''
  });

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
          userType: formData.hostType,
          subject: `New contact form submission from ${formData.name || 'Website visitor'}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          hostType: '',
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
      style={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        marginTop: '0px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative'
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
              {t.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                fontWeight: 600,
                color: '#0f0f0f',
                margin: '0 0 20px 0',
                maxWidth: '520px',
                lineHeight: '1.5'
              }}
            >
              {t.subtitle}
            </p>

            {/* Description */}
            {t.description && (
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
                {t.description}
            </p>
            )}

            {/* CTA Button */}
            <Link 
              href={language === 'hr' 
                ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000057014"
                : "https://meetings-smartxstay.zohobookings.eu/#/242002000000041016"}
              className="btn-primary"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.bookPresentation}
            </Link>
          </div>

          {/* Right Side - Contact Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
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
              {t.getInTouch}
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
                  {t.yourName}
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
                  {t.emailAddress}
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
                  {t.iAmA}
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
                  <option value="">{t.select}</option>
                  <option value="vacation-rental">{t.vacationRental}</option>
                  <option value="hotel">{t.hotelManager}</option>
                  <option value="property-manager">{t.propertyManager}</option>
                  <option value="other">{t.other}</option>
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
                  {t.yourMessage}
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
            gap: 40px !important;
          }

          .text-content {
            text-align: left !important;
            width: 100% !important;
          }

          .text-content h2 {
            font-size: clamp(20px, 5.5vw, 28px) !important;
            line-height: 1.3 !important;
            margin-bottom: 14px !important;
            text-align: center !important;
          }

          .text-content p {
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 100% !important;
            font-size: clamp(14px, 3.8vw, 16px) !important;
            line-height: 1.5 !important;
            text-align: left !important;
          }

          .text-content p[style*="fontWeight: 600"] {
            font-size: clamp(15px, 4vw, 18px) !important;
            margin-bottom: 14px !important;
            text-align: center !important;
          }

          section {
            padding: 60px 16px !important;
          }
        }

        @media (max-width: 480px) {
          .cta-grid {
            gap: 32px !important;
          }

          .text-content h2 {
            font-size: clamp(18px, 6.5vw, 24px) !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }

          .text-content p {
            font-size: clamp(13px, 4.2vw, 15px) !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }

          .text-content p[style*="fontWeight: 600"] {
            font-size: clamp(14px, 4.5vw, 16px) !important;
            margin-bottom: 12px !important;
          }

          section {
            padding: 50px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;

