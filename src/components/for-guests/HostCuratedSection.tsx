'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function HostCuratedSection() {
  const { language } = useLanguage();

  const translations = {
    en: {
      hostCurated: 'Your host curated',
      everything: 'everything.',
      youJust: 'You just',
      enjoy: 'enjoy.',
      curatedSubtitle: 'Local experiences, curated by someone who actually knows. No more guessing, no more googling—just authentic moments waiting for you.',
      noTouristTraps: 'No more tourist traps',
      noTouristTrapsDesc: 'Discover authentic local spots your host personally recommends',
      trustedInfo: 'Trusted info from your host',
      trustedInfoDesc: 'Get insider tips from locals who know the area best',
      hiddenGems: 'Hidden gems you\'d never find alone',
      hiddenGemsDesc: 'Access secret spots only locals know about',
      easyDecisions: 'Easy decisions, unforgettable moments',
      easyDecisionsDesc: 'Spend less time planning, more time creating memories'
    },
    sl: {
      hostCurated: 'Vaš gostitelj je poskrbel za',
      everything: 'vse.',
      youJust: 'Vi samo',
      enjoy: 'ustvarjate spomine.',
      curatedSubtitle: 'Lokalne izkušnje, pripravljene s strani nekoga, ki res ve. Ni več ugibanja, ni več googlanja—samo pristni trenutki, ki vas čakajo.',
      noTouristTraps: 'Ni več turističnih pasti',
      noTouristTrapsDesc: 'Odkrijte pristne lokalne kraje, ki jih vaš gostitelj osebno priporoča',
      trustedInfo: 'Zaupanja vredne informacije od vašega gostitelja',
      trustedInfoDesc: 'Pridobite notranje nasvete od domačinov, ki najbolje poznajo območje',
      hiddenGems: 'Skriti biseri, ki jih nikoli ne bi našli sami',
      hiddenGemsDesc: 'Dostop do skritih krajev, ki jih poznajo le domačini',
      easyDecisions: 'Enostavne odločitve, nepozabni trenutki',
      easyDecisionsDesc: 'Porabite manj časa za načrtovanje, več časa za ustvarjanje spominov'
    },
    hr: {
      hostCurated: 'Vaš domaćin je pripremio',
      everything: 'sve.',
      youJust: 'Vi samo',
      enjoy: 'stvarate uspomene.',
      curatedSubtitle: 'Lokalna iskustva, pripremljena od strane nekoga tko stvarno zna. Nema više nagađanja, nema više googlanja—samo autentični trenutci koji vas čekaju.',
      noTouristTraps: 'Nema više turističkih zamki',
      noTouristTrapsDesc: 'Otkrijte autentična lokalna mjesta koja vaš domaćin osobno preporučuje',
      trustedInfo: 'Pouzdane informacije od vašeg domaćina',
      trustedInfoDesc: 'Dobijte unutarnje savjete od domaćina koji najbolje poznaju područje',
      hiddenGems: 'Skriveni dragulji koje nikada ne biste pronašli sami',
      hiddenGemsDesc: 'Pristup tajnim mjestima koja samo domaćini znaju',
      easyDecisions: 'Lake odluke, nezaboravni trenutci',
      easyDecisionsDesc: 'Potrošite manje vremena na planiranje, više vremena na stvaranje uspomena'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="host-curated-section">
      <h2 className="section-heading">
        <span>{t.hostCurated}</span>{' '}
        <span className="animated-gradient-text">{t.everything}</span>
        <br />
        <span>{t.youJust}</span>{' '}
        <span className="animated-gradient-text">{t.enjoy}</span>
      </h2>

      <p className="section-subtitle">{t.curatedSubtitle}</p>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#a8c5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.noTouristTraps}</h3>
          <p>{t.noTouristTrapsDesc}</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#a8c5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.trustedInfo}</h3>
          <p>{t.trustedInfoDesc}</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#a8c5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.hiddenGems}</h3>
          <p>{t.hiddenGemsDesc}</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#a8c5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>{t.easyDecisions}</h3>
          <p>{t.easyDecisionsDesc}</p>
        </div>
      </div>

      <style jsx>{`
        .host-curated-section {
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
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          text-align: center;
          max-width: 1600px;
          letter-spacing: -0.02em;
        }

        .section-heading span:first-of-type,
        .section-heading span:nth-of-type(3) {
          color: #0f0f0f;
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .section-subtitle {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 500;
          color: #737373;
          line-height: 1.7;
          margin: 0 0 60px 0;
          text-align: center;
          max-width: 700px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 1000px;
        }

        .feature-card {
          background-color: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.45);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(168, 197, 255, 0.2);
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          margin: 0;
          line-height: 1.3;
        }

        .feature-card p {
          font-size: 15px;
          font-weight: 400;
          color: #737373;
          margin: 0;
          line-height: 1.5;
        }

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
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

