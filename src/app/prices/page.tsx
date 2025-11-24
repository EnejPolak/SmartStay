'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricesPage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      packagesModules: 'Packages & Modules',
      title: 'Smarter digital experience for',
      yourGuests: 'your guests',
      subtitle: 'Choose a SmartStay package that grows with your needs.',
      description: 'From basic digital welcome to advanced automation and integrations - SmartStay lets you create an experience that delights every guest.',
      comparePackages: 'Compare packages',
      freeConsultation: 'Free consultation',
      recommended: 'Recommended',
      smartxWelcome: 'SmartxWelcome',
      smartxPro: 'SmartxPro',
      smartxElite: 'SmartxElite',
      perMonth: '/month',
      forTesting: 'For testing and basic digitalization.',
      timeSaving: 'Time saving and communication automation.',
      forProfessionals: 'For professionals with integration and revenue growth requirements.',
      selectPackage: 'Select package',
      startNow: 'Start now',
      additionalModules: 'Additional modules for',
      greaterValue: 'greater value',
      modulesDescription: 'Upgrade your SmartStay experience with modules that increase revenue and improve guest satisfaction.',
      sportMode: 'Sport Mode',
      sportModeDesc: 'GPX routes for active guests',
      eventsMode: 'Events Mode',
      eventsModeDesc: 'Automatic display of current events',
      salesMode: 'Sales Mode',
      salesModeDesc: 'Upsell services (breakfast, wine, souvenirs)',
      perService: '/service',
      reservationsMode: 'Reservations mode',
      reservationsModeDesc: 'Reservations for additional services',
      byAgreement: 'By agreement',
      placesKulturaMode: 'Places & Culture Mode',
      placesKulturaModeDesc: 'Show guests the local experience',
      receptionCare: 'Reception/Care',
      receptionCareDesc: 'Request for linen change, towels etc.',
      additionalLanguage: 'Additional Language',
      additionalLanguageDesc: 'Each additional language',
      perLanguage: '/language',
      transportMode: 'Transport Mode',
      transportModeDesc: 'Give guests all info about local transport',
      ecoLabel: 'Eco Label',
      ecoLabelDesc: 'Show your sustainability certificates',
      weatherMode: 'Weather Mode',
      weatherModeDesc: 'Enable tourists to see the weather',
      ratingMode: 'Rating Mode',
      ratingModeDesc: 'Enable guests to leave a rating',
      surveysForms: 'Surveys and forms',
      surveysFormsDesc: 'Insert surveys, forms...',
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
      packagesModules: 'Paketi & Moduli',
      title: 'Pametnejša digitalna izkušnja za',
      yourGuests: 'vaše goste',
      subtitle: 'Izberite SmartStay paket, ki raste z vašimi potrebami.',
      description: 'Od osnovne digitalne dobrodošlice do napredne avtomatizacije in integracij - SmartStay vam omogoča, da ustvarite izkušnjo, ki navduši vsakega gosta.',
      comparePackages: 'Primerjaj pakete',
      freeConsultation: 'Brezplačen posvet',
      recommended: 'Priporočeno',
      smartxWelcome: 'SmartxWelcome',
      smartxPro: 'SmartxPro',
      smartxElite: 'SmartxElite',
      perMonth: '/mesec',
      forTesting: 'Za testiranje in osnovno digitalizacijo.',
      timeSaving: 'Prihranek časa in avtomatizacija komunikacije.',
      forProfessionals: 'Za profesionalce z zahtevami po integraciji in rasti prihodkov.',
      selectPackage: 'Izberite paket',
      startNow: 'Začnite zdaj',
      additionalModules: 'Dodatni moduli za',
      greaterValue: 'večjo vrednost',
      modulesDescription: 'Nadgradite svojo SmartStay izkušnjo z moduli, ki povečajo prihodke in izboljšajo gostovo zadovoljstvo.',
      sportMode: 'Način športa',
      sportModeDesc: 'GPX poti za aktivne goste',
      eventsMode: 'Način dogodkov',
      eventsModeDesc: 'Avtomatsko prikazovanje aktualnih dogodkov',
      salesMode: 'Način prodaje',
      salesModeDesc: 'Upsell storitev (zajtrk, vino, spominki)',
      perService: '/storitev',
      reservationsMode: 'Način rezervacij',
      reservationsModeDesc: 'Rezervacije dodatnih storitev',
      byAgreement: 'Po dogovoru',
      placesKulturaMode: 'Način krajev in kulture',
      placesKulturaModeDesc: 'Prikažite gostom lokalno izkušnjo',
      receptionCare: 'Recepcija/Skrb',
      receptionCareDesc: 'Prošnja za menjavo rjuh, brisač ipd.',
      additionalLanguage: 'Dodatni jezik',
      additionalLanguageDesc: 'Vsak dodaten jezik',
      perLanguage: '/jezik',
      transportMode: 'Način prevoza',
      transportModeDesc: 'Podajte gostom vse info o lokalnem transportu',
      ecoLabel: 'Eko oznaka',
      ecoLabelDesc: 'Pokažite svoje trajnostne certifikate',
      weatherMode: 'Način vremena',
      weatherModeDesc: 'Omogočite turistom vpogled v vreme',
      ratingMode: 'Način ocenjevanja',
      ratingModeDesc: 'Omogočite gostom, da pustijo oceno',
      surveysForms: 'Ankete in obrazci',
      surveysFormsDesc: 'Vstavite ankete, obrazce...',
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
    }
  };

  const t = translations[language];
  // Funkcija za določanje barve glede na pozicijo v gridu (šahovnica)
  const getCardColor = (index: number) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    const isPurple = (row + col) % 2 === 0;
    
    return {
      backgroundColor: isPurple 
        ? 'rgba(234, 221, 255, 0.4)' 
        : 'rgba(221, 243, 255, 0.4)',
      borderColor: isPurple 
        ? 'rgba(162, 158, 255, 0.2)' 
        : 'rgba(59, 130, 246, 0.2)',
      iconBg: isPurple 
        ? 'rgba(162, 158, 255, 0.2)' 
        : 'rgba(59, 130, 246, 0.2)',
      iconColor: isPurple 
        ? '#a29eff' 
        : '#3b82f6',
      hoverBg: isPurple 
        ? 'rgba(234, 221, 255, 0.5)' 
        : 'rgba(221, 243, 255, 0.5)',
      hoverShadow: isPurple 
        ? 'rgba(162, 158, 255, 0.2)' 
        : 'rgba(59, 130, 246, 0.2)',
    };
  };

  return (
    <main>
      {/* Fixed Background - skupno ozadje za celo stran */}
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      {/* Page Content - vse sekcije se scrollajo čez ozadje */}
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
          {/* Paketi & Moduli Button */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(162, 158, 255, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              color: '#a29eff',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(162, 158, 255, 0.3)';
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#a29eff"
              />
            </svg>
            {language === 'sl' ? t.packagesModules : 'Packages & Modules'}
          </button>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              maxWidth: '900px',
            }}
          >
            <span style={{ color: '#0f0f0f' }}>{language === 'sl' ? t.title : 'Smarter digital experience for'}</span>{' '}
            <span 
              className="animated-gradient-text"
              style={{ 
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >{language === 'sl' ? t.yourGuests : 'your guests'}</span>
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 500,
              color: '#737373',
              lineHeight: '1.7',
              margin: '0 0 24px 0',
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            {language === 'sl' ? t.subtitle : 'Choose a SmartStay package that grows with your needs.'}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: 400,
              color: '#9ca3af',
              lineHeight: '1.8',
              margin: '0 0 48px 0',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            {language === 'sl' ? t.description : 'From basic digital welcome to advanced automation and integrations - SmartStay lets you create an experience that delights every guest.'}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {/* Primerjaj pakete Button */}
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {language === 'sl' ? t.comparePackages : 'Compare packages'}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Brezplačen posvet Button */}
            <button className="btn-secondary">
              {language === 'sl' ? t.freeConsultation : 'Free consultation'}
            </button>
          </div>
        </section>

        {/* Pricing Cards Section */}
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
              {/* Title Badge */}
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
                {language === 'sl' ? t.smartxWelcome : 'SmartxWelcome'}
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                {/* Original Price - Strikethrough */}
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '4px',
                  }}
                >
                  17,88€
                </div>
                {/* Current Price */}
              <div
                className="price-amount"
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#1e40af',
                }}
              >
                  14,90€{language === 'sl' ? t.perMonth : '/month'}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#737373',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                }}
              >
                {language === 'sl' ? t.forTesting : 'For testing and basic digitalization.'}
              </p>

              {/* Features List */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px 0',
                  flex: 1,
                }}
              >
                {(language === 'sl' ? t.features.welcome : [
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
                ]).map((feature, index) => (
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

              {/* Button */}
              <button className="btn-tertiary" style={{ width: '100%' }}>
                Izberite paket
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
              {/* Recommended Badge */}
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
                {language === 'sl' ? t.recommended : 'Recommended'}
              </div>

              {/* Title Badge */}
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
                {language === 'sl' ? t.smartxPro : 'SmartxPro'}
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                {/* Original Price - Strikethrough */}
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '4px',
                  }}
                >
                  41,88€
                </div>
                {/* Current Price */}
              <div
                className="price-amount"
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#1e40af',
                  textShadow: '0 2px 4px rgba(255, 255, 255, 0.5)',
                }}
              >
                  34,90€{language === 'sl' ? t.perMonth : '/month'}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                  fontWeight: 500,
                }}
              >
                {language === 'sl' ? t.timeSaving : 'Time saving and communication automation.'}
              </p>

              {/* Features List */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px 0',
                  flex: 1,
                }}
              >
                {(language === 'sl' ? t.features.pro : [
                  'Everything from SmartxWelcome package',
                  '4 languages',
                  'Places module',
                  'Cultural heritage module',
                  'Sustainability module',
                  'Weather module',
                  'Rating module',
                  'Salesmode (1)'
                ]).map((text, index) => {
                  const feature = { text, bold: index === 0 };
                  return (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '15px',
                      color: '#4b5563',
                      fontWeight: feature.bold ? 700 : 400,
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
                    <span>{feature.text}</span>
                  </li>
                  );
                })}
              </ul>

              {/* Button */}
              <button className="btn-primary" style={{ width: '100%' }}>
                {language === 'sl' ? t.startNow : 'Start now'}
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
              {/* Title Badge */}
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
                {language === 'sl' ? t.smartxElite : 'SmartxElite'}
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                {/* Original Price - Strikethrough */}
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    marginBottom: '4px',
                  }}
                >
                  71,88€
                </div>
                {/* Current Price */}
              <div
                className="price-amount"
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#1e40af',
                }}
              >
                  59,90€{language === 'sl' ? t.perMonth : '/month'}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '16px',
                  color: '#737373',
                  marginBottom: '32px',
                  lineHeight: '1.6',
                }}
              >
                {language === 'sl' ? t.forProfessionals : 'For professionals with integration and revenue growth requirements.'}
              </p>

              {/* Features List */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px 0',
                  flex: 1,
                }}
              >
                {(language === 'sl' ? t.features.elite : [
                  'Everything from SmartxPro package',
                  '6 languages',
                  'Salesmode (3)',
                  'Sportsmode',
                  'Events',
                  'Room care',
                  'Surveys/Forms',
                  'Private feedback',
                  'Advanced analytics'
                ]).map((text, index) => {
                  const feature = { text, bold: index === 0 };
                  return (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '15px',
                      color: '#4b5563',
                      fontWeight: feature.bold ? 700 : 400,
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
                    <span>{feature.text}</span>
                  </li>
                  );
                })}
              </ul>

              {/* Button */}
              <button className="btn-tertiary" style={{ width: '100%' }}>
                {language === 'sl' ? t.selectPackage : 'Select package'}
              </button>
            </div>
          </div>
        </section>

        {/* Additional Modules Section */}
        <section
          style={{
            padding: '80px 40px',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '64px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 900,
                lineHeight: '1.2',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#0f0f0f' }}>{language === 'sl' ? t.additionalModules : 'Additional modules for'} </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #a29eff 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {language === 'sl' ? t.greaterValue : 'greater value'}
              </span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                fontWeight: 400,
                color: '#737373',
                lineHeight: '1.8',
                margin: 0,
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {language === 'sl' ? t.modulesDescription : 'Upgrade your SmartStay experience with modules that increase revenue and improve guest satisfaction.'}
            </p>
          </div>

          {/* Modules Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
            className="modules-grid"
          >
            {/* Sport Mode */}
            {(() => {
              const colors = getCardColor(0);
              return (
              <div
                className="module-card"
                style={{
                  backgroundColor: colors.backgroundColor,
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                  e.currentTarget.style.backgroundColor = colors.hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = colors.backgroundColor;
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: colors.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={colors.iconColor}/>
                    </svg>
                  </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.sportMode : 'Sport Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.sportModeDesc : 'GPX routes for active guests'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    12,90 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Events Mode */}
            {(() => {
              const colors = getCardColor(1);
              return (
              <div
                className="module-card"
                style={{
                  backgroundColor: colors.backgroundColor,
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                  e.currentTarget.style.backgroundColor = colors.hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = colors.backgroundColor;
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: colors.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill={colors.iconColor}/>
                    </svg>
                  </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.eventsMode : 'Events Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.eventsModeDesc : 'Automatic display of current events'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    7,00 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Sales Mode */}
            {(() => {
              const colors = getCardColor(2);
              return (
              <div
                className="module-card"
                style={{
                  backgroundColor: colors.backgroundColor,
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid ${colors.borderColor}`,
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                  e.currentTarget.style.backgroundColor = colors.hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = colors.backgroundColor;
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: colors.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill={colors.iconColor}/>
                    </svg>
                  </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.salesMode : 'Sales Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.salesModeDesc : 'Upsell services (breakfast, wine, souvenirs)'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    3,00 €{language === 'sl' ? t.perService : '/service'} {language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Reservations mode */}
            {(() => {
              const colors = getCardColor(3);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.reservationsMode : 'Reservations mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.reservationsModeDesc : 'Reservations for additional services'}
                  </p>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.byAgreement : 'By agreement'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Places & Kultura Mode */}
            {(() => {
              const colors = getCardColor(4);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.placesKulturaMode : 'Places & Culture Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.placesKulturaModeDesc : 'Show guests the local experience'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    9,90 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Reception/Care */}
            {(() => {
              const colors = getCardColor(5);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.receptionCare : 'Reception/Care'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.receptionCareDesc : 'Request for linen change, towels etc.'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    4,00 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Dodatni Jezik */}
            {(() => {
              const colors = getCardColor(6);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.additionalLanguage : 'Additional Language'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.additionalLanguageDesc : 'Each additional language'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    2,50 €{language === 'sl' ? t.perLanguage : '/language'} {language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Transport Mode */}
            {(() => {
              const colors = getCardColor(7);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.transportMode : 'Transport Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.transportModeDesc : 'Give guests all info about local transport'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    3,00 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Eco Label */}
            {(() => {
              const colors = getCardColor(8);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 8C17 5.24 14.76 3 12 3S7 5.24 7 8C7 9.38 7.56 10.65 8.47 11.58L7.1 12.95C5.79 11.64 5 9.88 5 8C5 4.13 8.13 1 12 1S19 4.13 19 8C19 9.88 18.21 11.64 16.9 12.95L15.53 11.58C16.44 10.65 17 9.38 17 8ZM7 17H9.5L10.5 20L11.5 17H17V14L12 9L7 14V17ZM5 19V21H19V19H5Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.ecoLabel : 'Eco Label'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.ecoLabelDesc : 'Show your sustainability certificates'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    3,00 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Vreme Mode */}
            {(() => {
              const colors = getCardColor(9);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.76 4.84L4.96 3.05L3.55 4.46L5.34 6.25C4.55 7.27 4 8.58 4 10C4 13.31 6.69 16 10 16C11.42 16 12.73 15.45 13.75 14.66L15.54 16.45L16.95 15.04L15.16 13.25C15.95 12.23 16.5 10.92 16.5 9.5C16.5 6.19 13.81 3.5 10.5 3.5C9.08 3.5 7.77 4.05 6.76 4.84ZM14.5 9.5C14.5 11.16 13.16 12.5 11.5 12.5C9.84 12.5 8.5 11.16 8.5 9.5C8.5 7.84 9.84 6.5 11.5 6.5C13.16 6.5 14.5 7.84 14.5 9.5ZM19.5 15.5C19.5 17.71 17.71 19.5 15.5 19.5C14.96 19.5 14.44 19.39 13.97 19.18L12.76 20.39L14.17 21.8L16.95 19.02L19.74 21.8L21.15 20.39L18.37 17.61L19.18 16.8C19.39 17.27 19.5 17.79 19.5 18.33C19.5 19.53 18.53 20.5 17.33 20.5C16.13 20.5 15.16 19.53 15.16 18.33C15.16 17.13 16.13 16.16 17.33 16.16C17.87 16.16 18.39 16.27 18.86 16.48L19.67 15.67C19.28 15.36 18.82 15.16 18.33 15.16C15.57 15.16 13.33 17.4 13.33 20.16C13.33 22.92 15.57 25.16 18.33 25.16C21.09 25.16 23.33 22.92 23.33 20.16C23.33 17.4 21.09 15.16 18.33 15.16L19.5 15.5Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.weatherMode : 'Weather Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.weatherModeDesc : 'Enable tourists to see the weather'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    1,90 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Ocena Mode */}
            {(() => {
              const colors = getCardColor(10);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.ratingMode : 'Rating Mode'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.ratingModeDesc : 'Enable guests to leave a rating'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    0,90 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}

            {/* Ankete in obrazci */}
            {(() => {
              const colors = getCardColor(11);
              return (
            <div
              className="module-card"
              style={{
                backgroundColor: colors.backgroundColor,
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: `1px solid ${colors.borderColor}`,
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hoverShadow}`;
                e.currentTarget.style.backgroundColor = colors.hoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = colors.backgroundColor;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V14H17V12ZM17 9H7V11H17V9ZM17 15H7V17H17V15Z" fill={colors.iconColor}/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {language === 'sl' ? t.surveysForms : 'Surveys and forms'}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {language === 'sl' ? t.surveysFormsDesc : 'Insert surveys, forms...'}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    3,00 €{language === 'sl' ? t.perMonth : '/month'}
                  </div>
                </div>
              </div>
            </div>
            );
            })()}
          </div>
        </section>
      </div>

      {/* CSS Animations */}
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

        .animated-gradient-text {
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(162, 158, 255, 0.4);
            transform: translateX(-50%) scale(1);
          }
          50% {
            box-shadow: 0 4px 20px rgba(162, 158, 255, 0.6);
            transform: translateX(-50%) scale(1.02);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(162, 158, 255, 0.1);
          }
          50% {
            box-shadow: 0 8px 40px rgba(162, 158, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(162, 158, 255, 0.2);
          }
        }

        .pricing-card {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .pricing-card:nth-child(1) {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .pricing-card:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .pricing-card:nth-child(3) {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .pricing-card-featured {
          animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards, glow 3s ease-in-out infinite !important;
          animation-delay: 0.2s, 1s !important;
        }

        .recommended-badge {
          animation: pulse 2s ease-in-out infinite;
          animation-delay: 1s;
        }

        @media (max-width: 1024px) {
          .pricing-card-featured {
            transform: scale(1) !important;
          }
          
          .pricing-cards-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 24px !important;
          }
          
          section {
            padding: 60px 30px !important;
          }
        }
        
        @media (max-width: 768px) {
          .price-amount {
            font-size: 36px !important;
          }
          
          .module-price {
            font-size: 15px !important;
          }
          
          .pricing-cards-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          section {
            padding: 50px 20px !important;
          }
          
          .pricing-card {
            padding: 28px 24px !important;
          }
        }
        
        @media (max-width: 480px) {
          .price-amount {
            font-size: 32px !important;
          }
          
          .module-price {
            font-size: 14px !important;
          }
          
          section {
            padding: 40px 16px !important;
          }
          
          .pricing-card {
            padding: 24px 20px !important;
          }
          
          .module-card {
            padding: 20px !important;
          }
          
          h1 {
            font-size: clamp(28px, 6vw, 48px) !important;
          }
        }

        .module-card {
          animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .module-card:nth-child(1) { animation-delay: 0.1s; }
        .module-card:nth-child(2) { animation-delay: 0.15s; }
        .module-card:nth-child(3) { animation-delay: 0.2s; }
        .module-card:nth-child(4) { animation-delay: 0.25s; }
        .module-card:nth-child(5) { animation-delay: 0.3s; }
        .module-card:nth-child(6) { animation-delay: 0.35s; }
        .module-card:nth-child(7) { animation-delay: 0.4s; }
        .module-card:nth-child(8) { animation-delay: 0.45s; }
        .module-card:nth-child(9) { animation-delay: 0.5s; }
        .module-card:nth-child(10) { animation-delay: 0.55s; }
        .module-card:nth-child(11) { animation-delay: 0.6s; }
        .module-card:nth-child(12) { animation-delay: 0.65s; }
      `}</style>
    </main>
  );
}

