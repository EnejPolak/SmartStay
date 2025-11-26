'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SmartxStayCertifiedSection = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: '',
      titleSmartxStay: 'SmartxStay',
      certified: 'Certified',
      subtitle: 'Showcase your commitment to exceptional hospitality. Our certification highlights your dedication to guest care and quality, providing a trusted benchmark that helps you stand out.',
      subtitle2: '',
      buildTrust: 'Build Trust',
      buildTrustDesc: 'Gain a competitive edge with a badge that signals quality and reliability to potential guests, assuring them of a superior stay.',
      elevateListing: 'Elevate Your Listing',
      elevateListingDesc: 'Certified hosts get priority placement and greater visibility across our platform and partners, attracting more bookings.',
      accessResources: 'Access Expert Resources',
      accessResourcesDesc: 'Unlock exclusive guides, workshops, and tools to help you refine your hosting skills and enhance guest satisfaction.'
    },
    sl: {
      title: '',
      titleSmartxStay: 'SmartxStay',
      certified: 'Certif',
      subtitle: 'Potrdite svojo premium gostoljubnost. Ne govorite o kakovosti, dokažite jo!',
      subtitle2: 'SmartxStay Certifikat ni le plaketa. Je vaš uradni dokaz, da ponujate najbolj avtomatizirano in brezhibno izkušnjo na trgu. Ta status poudarja vašo predanost skrbi za goste, gradi neposredno zaupanje pri popotnikih in vas postavlja korak pred konkurenco, ki se še vedno zanaša.',
      buildTrust: 'Zgradite zaupanje',
      buildTrustDesc: 'Pridobite konkurenčno prednost z značko, ki potencialnim gostom sporoča kakovost in zanesljivost ter jim zagotavlja vrhunski bivanje.',
      elevateListing: 'Povečajte svoje rezervacije',
      elevateListingDesc: 'Certificirani gostitelji dobijo prednostno umestitev in večjo vidnost na naši platformi in pri partnerjih, kar pritegne več rezervacij.',
      accessResources: 'Dostop do strokovnih virov',
      accessResourcesDesc: 'Odklenite ekskluzivne vodnike, delavnice in orodja, ki vam pomagajo izboljšati svoje gostiteljske spretnosti in povečati zadovoljstvo gostov.'
    },
    hr: {
      title: '',
      titleSmartxStay: 'SmartxStay',
      certified: 'Certif',
      subtitle: 'Potvrdite svoju premium gostoljubnost. Ne govorite o kvaliteti, dokažite je!',
      subtitle2: 'SmartxStay Certifikat nije samo plaketa. Vaš je službeni dokaz da nudite najautomatiziranije i besprijekorno iskustvo na tržištu. Ovaj status naglašava vašu predanost brizi za goste, gradi izravno povjerenje kod putnika i postavlja vas korak ispred konkurencije koja se još uvijek oslanja.',
      buildTrust: 'Izgradite povjerenje',
      buildTrustDesc: 'Steknite konkurentsku prednost s značkom koja potencijalnim gostima prenosi kvalitetu i pouzdanost te im osigurava vrhunski boravak.',
      elevateListing: 'Povećajte svoje rezervacije',
      elevateListingDesc: 'Certificirani domaćini dobivaju prioritetno postavljanje i veću vidljivost na našoj platformi i kod partnera, što privlači više rezervacija.',
      accessResources: 'Pristup stručnim resursima',
      accessResourcesDesc: 'Otključajte ekskluzivne vodiče, radionice i alate koji vam pomažu poboljšati svoje domaćinske vještine i povećati zadovoljstvo gostiju.'
    }
  };

  const t = translations[language] || translations.en;
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
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Certification Badge Icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 32px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gold Medal Background */}
            <circle cx="50" cy="50" r="45" fill="#f4d03f" opacity="0.2" />
            <circle cx="50" cy="50" r="38" fill="#f4d03f" opacity="0.4" />
            <circle cx="50" cy="50" r="32" fill="#f4d03f" />
            
            {/* Star in center */}
            <path
              d="M50 20 L55 40 L75 40 L59 52 L65 72 L50 60 L35 72 L41 52 L25 40 L45 40 Z"
              fill="#ffffff"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Main Title */}
        <h2
          style={{
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            fontWeight: 800,
            color: '#0f0f0f',
            margin: '0 0 48px 0',
            lineHeight: '1.2'
          }}
        >
          <span className="animated-gradient-text">{t.titleSmartxStay}</span> {t.certified}
        </h2>

        {/* Host Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }}
        >
          {/* Smart Pro Host Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <img
              src="/images/hosts/ProHost.png"
              alt="Smart Pro Host"
              style={{
                maxWidth: '200px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Smart Elite Host Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <img
              src="/images/hosts/EliteHost.png"
              alt="Smart Elite Host"
              style={{
                maxWidth: '200px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Description below badges */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            margin: '0 auto 60px auto',
            maxWidth: '740px',
            lineHeight: '1.6',
            textAlign: 'center'
          }}
        >
          {t.subtitle}
          {t.subtitle2 && (
            <>
              <br />
              <br />
              {t.subtitle2}
            </>
          )}
        </p>

        {/* Benefits Cards */}
        <div
          className="benefits-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '60px'
          }}
        >
          {/* Card 1: Build Trust */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              {t.buildTrust}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              {t.buildTrustDesc}
            </p>
          </div>

          {/* Card 2: Elevate Your Listing */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              {t.elevateListing}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              {t.elevateListingDesc}
            </p>
          </div>

          {/* Card 3: Access Expert Resources */}
          <div
            className="benefit-card"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.12)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#7c5fd9';
              if (iconSvg) iconSvg.setAttribute('fill', '#daceff');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              const iconBg = e.currentTarget.querySelector('.icon-bg') as HTMLElement;
              const iconSvg = e.currentTarget.querySelector('.icon-svg') as SVGPathElement;
              if (iconBg) iconBg.style.backgroundColor = '#efeaff';
              if (iconSvg) iconSvg.setAttribute('fill', '#a29eff');
            }}
          >
            {/* Icon */}
            <div
              className="icon-bg"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#efeaff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="icon-svg"
                  d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  fill="#a29eff"
                  style={{ transition: 'fill 0.3s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}
            >
              {t.accessResources}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '16px',
                color: '#737373',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              {t.accessResourcesDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
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
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          section {
            padding: 100px 20px !important;
          }
          
          .benefit-card:last-child {
            grid-column: 1 / -1;
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          section {
            padding: 60px 16px !important;
          }
          
          .benefit-card {
            padding: 32px 24px !important;
            max-width: 100% !important;
          }
          
          .benefit-card:last-child {
            max-width: 100%;
          }
          
          .benefit-card h3 {
            font-size: 20px !important;
          }
          
          .benefit-card p {
            font-size: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 50px 12px !important;
          }
          
          .benefit-card {
            padding: 28px 20px !important;
          }
          
          .benefit-card h3 {
            font-size: 18px !important;
          }
          
          .benefit-card p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SmartxStayCertifiedSection;

