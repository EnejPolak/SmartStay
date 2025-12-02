'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function GreatTripSection() {
  const { language } = useLanguage();

  const translations = {
    en: {
      greatTrip: 'Because a great trip starts with',
      someoneOnYourSide: 'someone who\'s on your side.',
      greatTripDesc: 'When you book with a SmartxStay host, you\'re not just getting a place to sleep, you\'re getting someone who genuinely cares about your experience.',
      greatTripDesc2: 'SmartxStay hosts don\'t leave you guessing, googling, or stressing.',
      greatTripDesc3: 'They guide you, support you, and make sure your stay feels effortless.',
      travelWithHosts: 'Travel with hosts who go the extra mile. Travel with SmartxStay.'
    },
    sl: {
      greatTrip: 'Vaše potovanje se začne z',
      someoneOnYourSide: 'zaupanjem in brezskrbnostjo.',
      greatTripDesc: 'Ko rezervirate pri SmartxStay gostitelju, ne dobite le kraja za spanje, ampak nekoga, ki mu je mar in je za vas pripravil vse.',
      greatTripDesc2: 'SmartxStay gostitelji vas ne puščajo ugibati, iskati po Googlu in se stresirati.',
      greatTripDesc3: 'Z našo tehnologijo celostno poskrbijo za vašo izkušnjo.',
      travelWithHosts: 'Potujte z gostitelji, ki grejo korak dlje. Potujte z SmartxStay.'
    },
    hr: {
      greatTrip: 'Vaše putovanje počinje s',
      someoneOnYourSide: 'povjerenjem i bezbrižnošću.',
      greatTripDesc: 'Kada rezervirate kod SmartxStay domaćina, ne dobivate samo mjesto za spavanje, već nekoga tko mu je stalo i tko je za vas pripremio sve.',
      greatTripDesc2: 'SmartxStay domaćini vas ne ostavljaju da nagađate, tražite na Googlu i stresirate se.',
      greatTripDesc3: 'S našom tehnologijom sveobuhvatno se brinu za vaše iskustvo.',
      travelWithHosts: 'Putujte s domaćinima koji idu korak dalje. Putujte sa SmartxStay.'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="great-trip-section">
      <h2 className="section-heading">
        {t.greatTrip}<br />
        {t.someoneOnYourSide}
      </h2>

      <div className="description-wrapper">
        <p>{t.greatTripDesc}</p>
        <p>{t.greatTripDesc2}</p>
        <p>{t.greatTripDesc3}</p>
      </div>

      <p className="tagline">{t.travelWithHosts}</p>

      <style jsx>{`
        .great-trip-section {
          min-height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          margin-top: 0px;
          font-family: 'Inter', sans-serif;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-heading {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 32px 0;
          text-align: center;
          max-width: 900px;
          color: #0f0f0f;
        }

        .description-wrapper {
          margin: 0 0 48px 0;
          text-align: center;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .description-wrapper p {
          font-size: clamp(16px, 2vw, 18px);
          font-weight: 400;
          color: #737373;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }

        .description-wrapper p:last-of-type {
          margin-bottom: 0;
        }

        .tagline {
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 500;
          font-style: italic;
          color: #a29eff;
          line-height: 1.6;
          margin: 0;
          text-align: center;
          max-width: 700px;
        }
      `}</style>
    </section>
  );
}

