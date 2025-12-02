
'use client';
'use client';

import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      <div className="page-content">
        <section className="contact-section">
          <ContactHero />
          <div className="contact-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 40px 80px 40px;
          font-family: 'Inter', sans-serif;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          width: 100%;
          align-items: start;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          .contact-section {
            padding: 100px 20px 60px 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
