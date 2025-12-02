'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactHero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Contact us',
      subtitle: 'Have a question or want to learn more about SmartxStay? Write to us and we will be happy to answer you.'
    },
    sl: {
      title: 'Kontaktirajte nas',
      subtitle: 'Imate vprašanje ali želite izvedeti več o SmartxStay? Pišite nam in z veseljem vam bomo odgovorili.'
    },
    hr: {
      title: 'Kontaktirajte nas',
      subtitle: 'Imate pitanje ili želite saznati više o SmartxStay? Pišite nam i rado ćemo vam odgovoriti.'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <>
      <h1 className="contact-title">
        <span className="gradient-text">{t.title}</span>
      </h1>
      <p className="contact-subtitle">{t.subtitle}</p>
      <style jsx>{`
        .contact-title {
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-subtitle {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 400;
          color: #737373;
          line-height: 1.7;
          margin: 0 0 60px 0;
          text-align: center;
          max-width: 700px;
        }
      `}</style>
    </>
  );
}

