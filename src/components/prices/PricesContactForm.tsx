'use client';

import React, { forwardRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricesContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    packageName: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
    message: string;
    packageName: string;
  }>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submitStatus: 'idle' | 'success' | 'error';
  setSubmitStatus: React.Dispatch<React.SetStateAction<'idle' | 'success' | 'error'>>;
  onClose: () => void;
}

const PricesContactForm = forwardRef<HTMLDivElement, PricesContactFormProps>(({
  formData,
  setFormData,
  isSubmitting,
  setIsSubmitting,
  submitStatus,
  setSubmitStatus,
  onClose
}, ref) => {
  const { language } = useLanguage();

  const translations = {
    en: {
      getInTouch: 'Get in touch',
      fullName: 'Full name',
      emailAddress: 'Email address',
      phoneNumber: 'Phone number',
      yourMessage: 'Your message',
      selectPackage: 'Select package',
      sendMessage: 'Send message',
      messageSent: 'Message sent successfully!',
      messageError: 'Failed to send message. Please try again.',
      sending: 'Sending...',
      selectPackagePlaceholder: 'Select package...'
    },
    sl: {
      getInTouch: 'Kontaktirajte nas',
      fullName: 'Ime in priimek',
      emailAddress: 'E-poštni naslov',
      phoneNumber: 'Telefonska številka',
      yourMessage: 'Vaše sporočilo',
      selectPackage: 'Izberite paket',
      sendMessage: 'Pošlji sporočilo',
      messageSent: 'Sporočilo uspešno poslano!',
      messageError: 'Pošiljanje sporočila ni uspelo. Poskusite znova.',
      sending: 'Pošiljanje...',
      selectPackagePlaceholder: 'Izberite paket...'
    },
    hr: {
      getInTouch: 'Kontaktirajte nas',
      fullName: 'Ime i prezime',
      emailAddress: 'Email adresa',
      phoneNumber: 'Broj telefona',
      yourMessage: 'Vaša poruka',
      selectPackage: 'Odaberite paket',
      sendMessage: 'Pošalji poruku',
      messageSent: 'Poruka uspješno poslana!',
      messageError: 'Slanje poruke nije uspjelo. Pokušajte ponovno.',
      sending: 'Slanje...',
      selectPackagePlaceholder: 'Odaberite paket...'
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
          packageName: formData.packageName,
          subject: `New inquiry from ${formData.name || 'Website visitor'}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          packageName: formData.packageName // Keep the selected package
        });
        setTimeout(() => {
          onClose();
        }, 2000);
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
      ref={ref}
      style={{
        padding: '80px 40px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(162, 158, 255, 0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 900,
              color: '#0f0f0f',
              margin: 0,
            }}
          >
            {t.getInTouch}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#737373',
              padding: '0',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f0f0f',
              }}
            >
              {t.fullName} *
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
                borderRadius: '12px',
                border: '1px solid rgba(162, 158, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f0f0f',
              }}
            >
              {t.emailAddress} *
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
                borderRadius: '12px',
                border: '1px solid rgba(162, 158, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="phone"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f0f0f',
              }}
            >
              {t.phoneNumber}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(162, 158, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="packageName"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f0f0f',
              }}
            >
              {t.selectPackage} *
            </label>
            <select
              id="packageName"
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(162, 158, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            >
              <option value="">{t.selectPackagePlaceholder}</option>
              <option value="SmartxWelcome">SmartxWelcome</option>
              <option value="SmartxPro">SmartxPro</option>
              <option value="SmartxElite">SmartxElite</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f0f0f',
              }}
            >
              {t.yourMessage} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(162, 158, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                resize: 'vertical',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.6)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
            />
          </div>

          {submitStatus === 'success' && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#16a34a',
                marginBottom: '20px',
                fontSize: '14px',
              }}
            >
              {t.messageSent}
            </div>
          )}

          {submitStatus === 'error' && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                color: '#dc2626',
                marginBottom: '20px',
                fontSize: '14px',
              }}
            >
              {t.messageError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{
              width: '100%',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? t.sending : t.sendMessage}
          </button>
        </form>
      </div>
    </section>
  );
});

PricesContactForm.displayName = 'PricesContactForm';

export default PricesContactForm;
