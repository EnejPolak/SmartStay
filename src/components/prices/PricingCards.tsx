'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingCardsProps {
  onPackageSelect: (packageName: string) => void;
}

export default function PricingCards({ onPackageSelect }: PricingCardsProps) {
  const { language } = useLanguage();

  const translations = {
    en: {
      smartxWelcome: 'SmartxWelcome',
      smartxPro: 'SmartxPro',
      smartxElite: 'SmartxElite',
      perMonth: '/month',
      forTesting: 'For testing and basic digitalization.',
      timeSaving: 'Time saving and communication automation.',
      forProfessionals: 'For professionals with integration and revenue growth requirements.',
      startNow: 'Start now',
      selectPackage: 'Select package',
      recommended: 'Recommended',
      features: {
        welcome: [
          'Logo & CGP',
          'All basic accommodation info',
          'Parking and access instructions',
          'Appliance instructions',
          'Contact',
          'Check in / check out',
          'WiFi access',
          '2 languages',
          'Support',
          'Chat integration - Viber, WhatsApp',
          'Basic analytics'
        ],
        pro: [
          'Everything from SmartxWelcome package',
          '4 languages',
          'Places module',
          'Cultural heritage module',
          'Sustainability module',
          'Weather module',
          'Rating module',
          'Salesmode (1)'
        ],
        elite: [
          'Everything from SmartxPro package',
          '6 languages',
          'Salesmode (3)',
          'Sportsmode',
          'Events',
          'Room care',
          'Surveys/Forms',
          'Private feedback',
          'Advanced analytics'
        ]
      }
    },
    sl: {
      smartxWelcome: 'SmartxWelcome',
      smartxPro: 'SmartxPro',
      smartxElite: 'SmartxElite',
      perMonth: '/mesec',
      forTesting: 'Za testiranje in osnovno digitalizacijo.',
      timeSaving: 'Prihranek časa in avtomatizacija komunikacije.',
      forProfessionals: 'Za profesionalce z zahtevami po integraciji in rasti prihodkov.',
      startNow: 'Začnite zdaj',
      selectPackage: 'Izberite paket',
      recommended: 'Priporočeno',
      features: {
        welcome: [
          'Logo & CGP',
          'Vse osnovne info o nastanitvi',
          'Navodila za parking in dostop',
          'Navodila za aparate',
          'Kontakt',
          'Prijava / Odjava',
          'WiFi dostop',
          '2 jezika',
          'Podpora',
          'Chat integracija - Viber, WhatsApp',
          'Osnovna analitika'
        ],
        pro: [
          'Vse iz SmartxWelcome paketa',
          '4 jeziki',
          'Modul krajev',
          'Modul kulturna dediščina',
          'Modul trajnost',
          'Modul vreme',
          'Modul ocena',
          'Modul način prodaje (1)'
        ],
        elite: [
          'Vse iz SmartxPro paketa',
          '6 jezikov',
          'Modul način prodaje (3)',
          'Modul način športa',
          'Modul dogodkov',
          'Modul skrb za sobe',
          'Ankete/Obrazci',
          'Zasebni povratni odziv',
          'Napredna analitika'
        ]
      }
    },
    hr: {
      smartxWelcome: 'SmartxWelcome',
      smartxPro: 'SmartxPro',
      smartxElite: 'SmartxElite',
      perMonth: '/mjesec',
      forTesting: 'Za testiranje i osnovnu digitalizaciju.',
      timeSaving: 'Štednja vremena i automatizacija komunikacije.',
      forProfessionals: 'Za profesionalce s potrebama za integraciju i rast prihoda.',
      startNow: 'Počni sada',
      selectPackage: 'Odaberite paket',
      recommended: 'Preporučeno',
      features: {
        welcome: [
          'Logo i CGP',
          'Sve osnovne informacije o smještaju',
          'Upute za parkiranje i pristup',
          'Upute za uređaje',
          'Kontakt',
          'Check in / check out',
          'WiFi pristup',
          '2 jezika',
          'Podrška',
          'Integracija chata - Viber, WhatsApp',
          'Osnovna analitika'
        ],
        pro: [
          'Sve iz SmartxWelcome paketa',
          '4 jezika',
          'Modul mjesta',
          'Modul kulturne baštine',
          'Modul održivosti',
          'Modul vremena',
          'Modul ocjenjivanja',
          'Salesmode (1)'
        ],
        elite: [
          'Sve iz SmartxPro paketa',
          '6 jezika',
          'Salesmode (3)',
          'Sportsmode',
          'Događaji',
          'Njega sobe',
          'Ankete/Formulari',
          'Privatna povratna informacija',
          'Napredna analitika'
        ]
      }
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section
      style={{
        padding: '80px 40px',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'stretch',
        }}
        className="pricing-cards-container"
      >
        {/* SmartxWelcome Card */}
        <div
          className="pricing-card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.5)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(162, 158, 255, 0.15)',
              color: '#a29eff',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
              width: 'fit-content',
            }}
          >
            {t.smartxWelcome}
          </div>

          <div style={{ marginBottom: '8px' }}>
            <div
              className="price-amount animated-gradient-text"
              style={{
                fontSize: '48px',
                fontWeight: 900,
              }}
            >
              14,90€{t.perMonth}
            </div>
          </div>

          <p
            style={{
              fontSize: '16px',
              color: '#737373',
              marginBottom: '32px',
              lineHeight: '1.6',
            }}
          >
            {t.forTesting}
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              flex: 1,
            }}
          >
            {t.features.welcome.map((feature, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '15px',
                  color: '#4b5563',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="#a29eff"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className="btn-tertiary"
            style={{ width: '100%' }}
            onClick={() => onPackageSelect('SmartxWelcome')}
          >
            {t.selectPackage}
          </button>
        </div>

        {/* SmartxPro Card - Recommended */}
        <div
          className="pricing-card pricing-card-featured"
          style={{
            background: 'linear-gradient(135deg, rgba(162, 158, 255, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
            backdropFilter: 'blur(25px) saturate(200%)',
            WebkitBackdropFilter: 'blur(25px) saturate(200%)',
            border: '2px solid rgba(162, 158, 255, 0.3)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 8px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(162, 158, 255, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'scale(1.03)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.06) translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(162, 158, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(162, 158, 255, 0.2)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(162, 158, 255, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.03) translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(162, 158, 255, 0.1)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(162, 158, 255, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)';
          }}
        >
          <div
            className="recommended-badge"
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '6px 20px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #a29eff 0%, #3b82f6 100%)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(162, 158, 255, 0.4)',
            }}
          >
            {t.recommended}
          </div>

          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: '#1e40af',
              fontSize: '14px',
              fontWeight: 700,
              marginTop: '12px',
              marginBottom: '24px',
              width: 'fit-content',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {t.smartxPro}
          </div>

          <div style={{ marginBottom: '8px' }}>
            <div
              className="price-amount animated-gradient-text"
              style={{
                fontSize: '48px',
                fontWeight: 900,
              }}
            >
              34,90€{t.perMonth}
            </div>
          </div>

          <p
            style={{
              fontSize: '16px',
              color: '#4b5563',
              marginBottom: '32px',
              lineHeight: '1.6',
              fontWeight: 500,
            }}
          >
            {t.timeSaving}
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              flex: 1,
            }}
          >
            {t.features.pro.map((text, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '15px',
                  color: '#4b5563',
                  fontWeight: index === 0 ? 700 : 400,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="#3b82f6"
                  />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <button
            className="btn-primary"
            style={{ width: '100%' }}
            onClick={() => onPackageSelect('SmartxPro')}
          >
            {t.startNow}
          </button>
        </div>

        {/* SmartxElite Card */}
        <div
          className="pricing-card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderTop: '1px solid rgba(255, 255, 255, 0.5)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              color: '#3b82f6',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px',
              width: 'fit-content',
            }}
          >
            {t.smartxElite}
          </div>

          <div style={{ marginBottom: '8px' }}>
            <div
              className="price-amount animated-gradient-text"
              style={{
                fontSize: '48px',
                fontWeight: 900,
              }}
            >
              59,90€{t.perMonth}
            </div>
          </div>

          <p
            style={{
              fontSize: '16px',
              color: '#737373',
              marginBottom: '32px',
              lineHeight: '1.6',
            }}
          >
            {t.forProfessionals}
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 32px 0',
              flex: 1,
            }}
          >
            {t.features.elite.map((text, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '12px',
                  fontSize: '15px',
                  color: '#4b5563',
                  fontWeight: index === 0 ? 700 : 400,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="#60a5fa"
                  />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <button
            className="btn-tertiary"
            style={{ width: '100%' }}
            onClick={() => onPackageSelect('SmartxElite')}
          >
            {t.selectPackage}
          </button>
        </div>
      </div>
    </section>
  );
}
