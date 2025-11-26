'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AboutMap from '@/components/AboutMap';

export default function AboutPage() {
  const { language } = useLanguage();

  const translations = {
    sl: {
      title: 'O nas',
      paragraph1: 'Turizem je ena najhitreje rastočih panog, toda večina nastanitev še vedno deluje z orodji iz prejšnjega desetletja. To ustvarja nepotreben stres in neučinkovitost.',
      visionTitle: 'Naša vizija je preprosta:',
      visionText: 'da si lahko čisto vsak host privošči lastno aplikacijo za najboljšo izkušnjo gosta.',
      paragraph2: 'SmartxStay je zgrajen z mislijo na vse, ki želijo dvigniti svojo nastanitev. Ne z velikimi investicijami, ampak s pametnimi potezami. Verjamemo v transparentnost, lep dizajn, preprosto komuniciranje in tehnologijo, ki nikoli ne prekrije človeškega dotika.',
      weAre: 'Smo SmartxStay.',
      weAreText: 'Za vse gostitelje, ki obožujejo svoje goste in za vse goste, ki radi potujejo brez stresa.',
      contactUs: 'Kontaktiraj nas'
    }
  };

  const t = translations.sl;
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
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 48px 0',
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
              {language === 'sl' ? t.title : 'About us'}
            </span>
          </h1>

          {/* Content Box 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              borderRadius: '20px',
              padding: '32px 40px',
              marginBottom: '24px',
              border: '2px solid rgba(162, 158, 255, 0.3)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.8',
                color: '#4a4a4a',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {language === 'sl' ? t.paragraph1 : 'Tourism is one of the fastest-growing industries, yet most accommodations still operate with tools from the previous decade. This creates unnecessary stress and inefficiency.'}
            </p>
          </div>

          {/* Content Box 2 - Gradient */}
          <div
            style={{
              background: 'linear-gradient(135deg, #a29eff 0%, #7db8ff 100%)',
              borderRadius: '20px',
              padding: '32px 40px',
              marginBottom: '24px',
              boxShadow: '0 8px 24px rgba(162, 158, 255, 0.3)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.8',
                color: '#ffffff',
                margin: 0,
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              <strong>{language === 'sl' ? t.visionTitle : 'Our vision is simple:'}</strong> {language === 'sl' ? t.visionText : 'to make it possible for every host to afford their own app for the best guest experience.'}
            </p>
          </div>

          {/* Content Box 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              borderRadius: '20px',
              padding: '32px 40px',
              marginBottom: '24px',
              border: '2px solid rgba(162, 158, 255, 0.3)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.8',
                color: '#4a4a4a',
                margin: 0,
                textAlign: 'center',
              }}
            >
              {language === 'sl' ? t.paragraph2 : 'SmartxStay is built with everyone in mind who wants to elevate their accommodation. Not with big investments, but with smart moves. We believe in transparency, beautiful design, simple communication, and technology that never overshadows the human touch.'}
            </p>
          </div>

          {/* Content Box 4 - Gradient */}
          <div
            style={{
              background: 'linear-gradient(135deg, #a29eff 0%, #7db8ff 100%)',
              borderRadius: '20px',
              padding: '32px 40px',
              marginBottom: '80px',
              boxShadow: '0 8px 24px rgba(162, 158, 255, 0.3)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.8',
                color: '#ffffff',
                margin: 0,
                textAlign: 'center',
                fontWeight: 500,
              }}
            >
              <strong>{language === 'sl' ? t.weAre : 'We are SmartxStay.'}</strong> {language === 'sl' ? t.weAreText : 'For all hosts who love their guests and for all guests who love to travel stress-free.'}
            </p>
          </div>

          {/* Contact Section */}
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 48px 0',
              textAlign: 'center',
              color: '#0f0f0f',
            }}
          >
            {language === 'sl' ? t.contactUs : 'Contact us'}
          </h2>

          {/* Contact Info Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              borderRadius: '20px',
              padding: '40px',
              border: '2px solid rgba(162, 158, 255, 0.3)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {/* Email */}
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 16px 0' }}>
                <a 
                  href="mailto:info@qr-space.si" 
                  style={{ color: '#7c5fd9', textDecoration: 'none', fontWeight: 600 }}
                >
                  info@qr-space.si
                </a>
              </p>
            </div>

            {/* Phone Numbers */}
            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 8px 0' }}>
                <a 
                  href="tel:+38669413494" 
                  style={{ color: '#4a4a4a', textDecoration: 'none' }}
                >
                  SLO: +386 69 413 494
                </a>
                {' '}
                <a 
                  href="mailto:eva@smartxstay.com" 
                  style={{ color: '#7c5fd9', textDecoration: 'none', marginLeft: '8px' }}
                >
                  (eva@smartxstay.com)
                </a>
              </p>
              <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0 0 8px 0' }}>
                <a 
                  href="tel:+38670614341" 
                  style={{ color: '#4a4a4a', textDecoration: 'none' }}
                >
                  SLO: +386 70 614 341
                </a>
                {' '}
                <a 
                  href="mailto:monika@smartxstay.com" 
                  style={{ color: '#7c5fd9', textDecoration: 'none', marginLeft: '8px' }}
                >
                  (monika@smartxstay.com)
                </a>
              </p>
              <p style={{ fontSize: '18px', color: '#4a4a4a', margin: '0' }}>
                <a 
                  href="tel:+385957728882" 
                  style={{ color: '#4a4a4a', textDecoration: 'none' }}
                >
                  HR: +385 957 728 882
                </a>
                {' '}
                <a 
                  href="mailto:neda@smartxstay.com" 
                  style={{ color: '#7c5fd9', textDecoration: 'none', marginLeft: '8px' }}
                >
                  (neda@smartxstay.com)
                </a>
              </p>
            </div>

            {/* Map */}
            <AboutMap />

            {/* Address */}
            <p
              style={{
                fontSize: '18px',
                color: '#4a4a4a',
                margin: '24px 0 0 0',
                fontWeight: 600,
              }}
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=C.+24.+Junija+23,+1231+Ljubljana"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#7c5fd9',
                  textDecoration: 'none',
                  borderBottom: '2px solid rgba(124, 95, 217, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = '#7c5fd9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'rgba(124, 95, 217, 0.3)';
                }}
              >
                C. 24. Junija 23, 1231 Ljubljana - Črnuče
              </a>
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 100px 20px 60px 20px !important;
          }
        }
      `}</style>
    </main>
  );
}

