'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AdditionalModules() {
  const { language } = useLanguage();

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

  const translations = {
    en: {
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
      perMonth: '/month'
    },
    sl: {
      additionalModules: 'Dodatni moduli za',
      greaterValue: 'večjo vrednost',
      modulesDescription: 'Nadgradite svojo SmartxStay izkušnjo z moduli, ki povečajo prihodke in izboljšajo gostovo zadovoljstvo.',
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
      perMonth: '/mesec'
    },
    hr: {
      additionalModules: 'Dodatni moduli za',
      greaterValue: 'veću vrijednost',
      modulesDescription: 'Nadogradite svoje SmartStay iskustvo s modulima koji povećavaju prihod i poboljšavaju zadovoljstvo gostiju.',
      sportMode: 'Sportski način',
      sportModeDesc: 'GPX rute za aktivne goste',
      eventsMode: 'Način događaja',
      eventsModeDesc: 'Automatski prikaz trenutnih događaja',
      salesMode: 'Način prodaje',
      salesModeDesc: 'Upsell usluge (doručak, vino, suveniri)',
      perService: '/usluga',
      reservationsMode: 'Način rezervacija',
      reservationsModeDesc: 'Rezervacije za dodatne usluge',
      byAgreement: 'Po dogovoru',
      placesKulturaMode: 'Način mjesta i kulture',
      placesKulturaModeDesc: 'Pokažite gostima lokalno iskustvo',
      receptionCare: 'Recepcija/Njega',
      receptionCareDesc: 'Zahtjev za promjenu posteljine, ručnika itd.',
      additionalLanguage: 'Dodatni jezik',
      additionalLanguageDesc: 'Svaki dodatni jezik',
      perLanguage: '/jezik',
      transportMode: 'Način prijevoza',
      transportModeDesc: 'Dajte gostima sve informacije o lokalnom prijevozu',
      ecoLabel: 'Eko oznaka',
      ecoLabelDesc: 'Pokažite svoje certifikate održivosti',
      weatherMode: 'Način vremena',
      weatherModeDesc: 'Omogućite turistima da vide vrijeme',
      ratingMode: 'Način ocjenjivanja',
      ratingModeDesc: 'Omogućite gostima da ostave ocjenu',
      surveysForms: 'Ankete i formulari',
      surveysFormsDesc: 'Umetnite ankete, formulare...',
      perMonth: '/mjesec'
    }
  };

  // Header and description translate, but module titles stay in English
  const t = translations[language] || translations.en;
  const tModules = translations.en; // Always English for module titles

  const modules = [
    {
      index: 0,
      title: tModules.sportMode,
      description: t.sportModeDesc,
      price: '12,90 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
      )
    },
    {
      index: 1,
      title: tModules.eventsMode,
      description: t.eventsModeDesc,
      price: '7,00 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
      )
    },
    {
      index: 2,
      title: tModules.salesMode,
      description: t.salesModeDesc,
      price: '3,00 €',
      priceSuffix: `${t.perService} ${t.perMonth}`,
      icon: (
        <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
      )
    },
    {
      index: 3,
      title: tModules.reservationsMode,
      description: t.reservationsModeDesc,
      price: t.byAgreement,
      priceSuffix: '',
      icon: (
        <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor"/>
      )
    },
    {
      index: 4,
      title: tModules.placesKulturaMode,
      description: t.placesKulturaModeDesc,
      price: '9,90 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
      )
    },
    {
      index: 5,
      title: tModules.receptionCare,
      description: t.receptionCareDesc,
      price: '4,00 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
      )
    },
    {
      index: 6,
      title: tModules.additionalLanguage,
      description: t.additionalLanguageDesc,
      price: '2,50 €',
      priceSuffix: `${t.perLanguage} ${t.perMonth}`,
      icon: (
        <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="currentColor"/>
      )
    },
    {
      index: 7,
      title: tModules.transportMode,
      description: t.transportModeDesc,
      price: '3,00 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor"/>
      )
    },
    {
      index: 8,
      title: tModules.ecoLabel,
      description: t.ecoLabelDesc,
      price: '3,00 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M17 8C17 5.24 14.76 3 12 3S7 5.24 7 8C7 9.38 7.56 10.65 8.47 11.58L7.1 12.95C5.79 11.64 5 9.88 5 8C5 4.13 8.13 1 12 1S19 4.13 19 8C19 9.88 18.21 11.64 16.9 12.95L15.53 11.58C16.44 10.65 17 9.38 17 8ZM7 17H9.5L10.5 20L11.5 17H17V14L12 9L7 14V17ZM5 19V21H19V19H5Z" fill="currentColor"/>
      )
    },
    {
      index: 9,
      title: tModules.weatherMode,
      description: t.weatherModeDesc,
      price: '1,90 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M6.76 4.84L4.96 3.05L3.55 4.46L5.34 6.25C4.55 7.27 4 8.58 4 10C4 13.31 6.69 16 10 16C11.42 16 12.73 15.45 13.75 14.66L15.54 16.45L16.95 15.04L15.16 13.25C15.95 12.23 16.5 10.92 16.5 9.5C16.5 6.19 13.81 3.5 10.5 3.5C9.08 3.5 7.77 4.05 6.76 4.84ZM14.5 9.5C14.5 11.16 13.16 12.5 11.5 12.5C9.84 12.5 8.5 11.16 8.5 9.5C8.5 7.84 9.84 6.5 11.5 6.5C13.16 6.5 14.5 7.84 14.5 9.5ZM19.5 15.5C19.5 17.71 17.71 19.5 15.5 19.5C14.96 19.5 14.44 19.39 13.97 19.18L12.76 20.39L14.17 21.8L16.95 19.02L19.74 21.8L21.15 20.39L18.37 17.61L19.18 16.8C19.39 17.27 19.5 17.79 19.5 18.33C19.5 19.53 18.53 20.5 17.33 20.5C16.13 20.5 15.16 19.53 15.16 18.33C15.16 17.13 16.13 16.16 17.33 16.16C17.87 16.16 18.39 16.27 18.86 16.48L19.67 15.67C19.28 15.36 18.82 15.16 18.33 15.16C15.57 15.16 13.33 17.4 13.33 20.16C13.33 22.92 15.57 25.16 18.33 25.16C21.09 25.16 23.33 22.92 23.33 20.16C23.33 17.4 21.09 15.16 18.33 15.16L19.5 15.5Z" fill="currentColor"/>
      )
    },
    {
      index: 10,
      title: tModules.ratingMode,
      description: t.ratingModeDesc,
      price: '0,90 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
      )
    },
    {
      index: 11,
      title: tModules.surveysForms,
      description: t.surveysFormsDesc,
      price: '3,00 €',
      priceSuffix: t.perMonth,
      icon: (
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V14H17V12ZM17 9H7V11H17V9ZM17 15H7V17H17V15Z" fill="currentColor"/>
      )
    }
  ];

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
          <span style={{ color: '#0f0f0f' }}>{t.additionalModules} </span>
          <span style={{ 
            background: 'linear-gradient(135deg, #a29eff 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {t.greaterValue}
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
          {t.modulesDescription}
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
        {modules.map((module) => {
          const colors = getCardColor(module.index);
          return (
            <div
              key={module.index}
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: colors.iconColor }}>
                    {module.icon}
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 700, color: '#0f0f0f' }}>
                    {module.title}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                    {module.description}
                  </p>
                  <div className="module-price" style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f0f' }}>
                    {module.price}{module.priceSuffix && ` ${module.priceSuffix}`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
