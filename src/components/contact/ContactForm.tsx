'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const translations = {
    en: {
      sendMessage: 'Send us a message',
      fullName: 'Full name',
      emailAddress: 'Email address',
      phoneLabel: 'Phone',
      iAm: 'I am...',
      select: 'Select...',
      host: 'Host',
      guest: 'Guest',
      propertyManager: 'Property manager',
      partner: 'Partner',
      other: 'Other',
      message: 'Message',
      sendButton: 'Send message',
      messageSent: 'Message sent! (demo)',
      sending: 'Sending...',
      errorMessage: 'Failed to send message. Please try again.'
    },
    sl: {
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
      messageSent: 'Sporočilo poslano! (demo)',
      sending: 'Pošiljanje...',
      errorMessage: 'Pošiljanje sporočila ni uspelo. Poskusite znova.'
    },
    hr: {
      sendMessage: 'Pošaljite nam poruku',
      fullName: 'Ime i prezime',
      emailAddress: 'Email adresa',
      phoneLabel: 'Telefon',
      iAm: 'Ja sam...',
      select: 'Odaberite...',
      host: 'Domaćin',
      guest: 'Gost',
      propertyManager: 'Upravitelj nekretnina',
      partner: 'Partner',
      other: 'Drugo',
      message: 'Poruka',
      sendButton: 'Pošalji poruku',
      messageSent: 'Poruka poslana! (demo)',
      sending: 'Slanje...',
      errorMessage: 'Slanje poruke nije uspjelo. Pokušajte ponovno.'
    }
  };

  const t = translations[language] || translations.en;

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
          phone: formData.phone,
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
          phone: '',
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
    <div className="contact-form-wrapper">
      <h2 className="form-title">{t.sendMessage}</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">{t.fullName} *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">{t.emailAddress} *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">{t.phoneLabel}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* User Type */}
        <div className="form-group">
          <label htmlFor="userType">{t.iAm} *</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">{t.select}</option>
            <option value="host">{t.host}</option>
            <option value="guest">{t.guest}</option>
            <option value="property-manager">{t.propertyManager}</option>
            <option value="partner">{t.partner}</option>
            <option value="other">{t.other}</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">{t.message} *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="form-textarea"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="status-message success">
            {t.messageSent}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            {t.errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary"
          disabled={isSubmitting}
          style={{ 
            width: '100%', 
            marginTop: '8px',
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? t.sending : t.sendButton}
        </button>
      </form>

      <style jsx>{`
        .contact-form-wrapper {
          background-color: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-radius: 20px;
          padding: 40px;
          border: 2px solid rgba(162, 158, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }

        .form-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f0f0f;
          margin: 0 0 32px 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #0f0f0f;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          font-size: 16px;
          border: 2px solid rgba(162, 158, 255, 0.2);
          border-radius: 12px;
          outline: none;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          background-color: rgba(255, 255, 255, 0.6);
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #a29eff;
          box-shadow: 0 0 0 3px rgba(162, 158, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.8);
        }

        .form-input:blur,
        .form-textarea:blur {
          border-color: rgba(162, 158, 255, 0.2);
          box-shadow: none;
          background-color: rgba(255, 255, 255, 0.6);
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .form-input {
          cursor: text;
        }

        select.form-input {
          cursor: pointer;
        }

        .status-message {
          padding: 12px 16px;
          border-radius: 12px;
          margin-top: 16px;
          font-size: 14px;
        }

        .status-message.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        }

        .status-message.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
      `}</style>
    </div>
  );
}

