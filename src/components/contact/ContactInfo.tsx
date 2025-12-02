'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactInfo() {
  const { language } = useLanguage();

  const translations = {
    en: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      viewOnMap: 'View on map'
    },
    sl: {
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokacija',
      viewOnMap: 'Poglej na zemljevidu'
    },
    hr: {
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokacija',
      viewOnMap: 'Pogledajte na karti'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <div className="contact-info-wrapper">
      {/* Email Card */}
      <div className="contact-card">
        <div className="contact-card-header">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.email}</h3>
        </div>
        <p>
          <a href="mailto:info@qr-space.si" className="contact-link">
            info@qr-space.si
          </a>
        </p>
      </div>

      {/* Phone Card */}
      <div className="contact-card">
        <div className="contact-card-header">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.phone}</h3>
        </div>
        <p>
          <a href="tel:+38669413494" className="contact-link">
            SLO: +386 69 413 494
          </a>
        </p>
        <p>
          <a href="tel:+38670614341" className="contact-link">
            SLO: +386 70 614 341
          </a>
        </p>
        <p>
          <a href="tel:+385957728882" className="contact-link">
            HR: +385 957 728 882
          </a>
        </p>
      </div>

      {/* Location Card */}
      <div className="contact-card">
        <div className="contact-card-header">
          <div className="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
            </svg>
          </div>
          <h3>{t.location}</h3>
        </div>
        <p>
          1231 Ljubljana - Črnuče<br />
          Slovenija
        </p>
        <Link href="/about" className="contact-link with-arrow">
          {t.viewOnMap}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      <style jsx>{`
        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-card {
          background-color: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-radius: 20px;
          padding: 32px;
          border: 2px solid rgba(162, 158, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(162, 158, 255, 0.15);
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #a29eff 0%, #7db8ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0;
        }

        .contact-card p {
          font-size: 18px;
          color: #4a4a4a;
          margin: 0 0 8px 0;
          line-height: 1.6;
        }

        .contact-card p:last-child {
          margin-bottom: 0;
        }

        .contact-link {
          color: #7c5fd9;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-link.with-arrow {
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}

