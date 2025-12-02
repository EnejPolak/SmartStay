'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      contact: 'Contact',
      followUs: 'Follow us',
      menu: 'Menu',
      home: 'Home',
      forGuests: 'For guests',
      forHosts: 'For hosts',
      pricing: 'Pricing',
      aboutUs: 'About us',
      contactLink: 'Contact',
      terms: 'Terms and conditions',
      privacy: 'Privacy Policy'
    },
    sl: {
      contact: 'Kontakt',
      followUs: 'Sledite nam',
      menu: 'Meni',
      home: 'Domov',
      forGuests: 'Za goste',
      forHosts: 'Za gostitelje',
      pricing: 'Cenik',
      aboutUs: 'O nas',
      contactLink: 'Kontakt',
      terms: 'Pogoji uporabe',
      privacy: 'Pravilnik o zasebnosti'
    },
    hr: {
      contact: 'Kontakt',
      followUs: 'Pratite nas',
      menu: 'Izbornik',
      home: 'Početna',
      forGuests: 'Za goste',
      forHosts: 'Za domaćine',
      pricing: 'Cijene',
      aboutUs: 'O nama',
      contactLink: 'Kontakt',
      terms: 'Uvjeti korištenja',
      privacy: 'Pravilnik o privatnosti'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <footer
      id="site-footer"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(25px) saturate(180%)',
        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.05)',
        color: '#333',
        borderTop: '1px solid rgba(255, 255, 255, 0.5)'
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '64px',
          alignItems: 'start'
        }}
      >
        {/* Brand & Contact - Left Column */}
        <div className="footer-brand-contact">
          {/* Logo */}
          <div className="footer-logo" style={{ marginBottom: '32px' }}>
            <Image
              src="/logo__1__720.png"
              alt="SmartxStay Logo"
              width={120}
              height={32}
              style={{ height: '32px', width: 'auto', maxWidth: '180px' }}
              sizes="(max-width: 768px) 100px, 120px"
            />
          </div>

          {/* Contact Section */}
          <h3
            className="footer-section-title"
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#333',
              marginBottom: '12px',
              marginTop: 0
            }}
          >
            {t.contact}
          </h3>

          <div style={{ marginBottom: '24px' }}>
            <a
              href="mailto:info@qr-space.si"
              style={{
                display: 'block',
                color: '#4a4a4a',
                textDecoration: 'none',
                fontSize: '15px',
                marginBottom: '8px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b8a1ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4a4a')}
            >
              info@qr-space.si
            </a>
            <a
              href="tel:+38669415493"
              style={{
                display: 'block',
                color: '#4a4a4a',
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b8a1ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4a4a')}
            >
              +386 69 415 493
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ marginTop: '32px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: '#4a4a4a',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {t.followUs}
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/smartxstay/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmartxStay on LinkedIn"
                style={{
                  color: '#b8a1ff',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a291ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b8a1ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/smartxstay.si/?hl=am-et"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmartxStay on Instagram"
                style={{
                  color: '#b8a1ff',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a291ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b8a1ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/SmartxStay?locale=sl_SI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SmartxStay on Facebook"
                style={{
                  color: '#b8a1ff',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a291ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b8a1ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Menu - Middle Column */}
        <div className="footer-menu">
          <h3
            className="footer-section-title"
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#333',
              marginBottom: '12px',
              marginTop: 0
            }}
          >
            {t.menu}
          </h3>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: t.home, href: '/' },
                { label: t.forGuests, href: '/for-guests' },
                { label: t.forHosts, href: '/for-hosts' },
                { label: t.pricing, href: '/prices' },
                { label: t.aboutUs, href: '/about' },
                { label: t.contactLink, href: '/contact' }
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#4a4a4a',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      position: 'relative',
                      paddingBottom: '2px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#b8a1ff';
                      const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                      if (underline) underline.style.width = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#4a4a4a';
                      const underline = e.currentTarget.querySelector('.underline') as HTMLElement;
                      if (underline) underline.style.width = '0';
                    }}
                  >
                    {link.label}
                    <span
                      className="underline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0',
                        height: '1px',
                        backgroundColor: '#b8a1ff',
                        transition: 'width 0.2s ease'
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal + Copyright - Right Column */}
        <div className="footer-legal" style={{ textAlign: 'right', paddingRight: '24px' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#333',
              marginBottom: '12px',
              marginTop: 0
            }}
          >
            © SmartxStay 2025
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <Link
              href="/terms"
              style={{
                color: '#4a4a4a',
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b8a1ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4a4a')}
            >
              {t.terms}
            </Link>
            <Link
              href="/privacy"
              style={{
                color: '#4a4a4a',
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#b8a1ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4a4a')}
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .footer-section-title {
          margin-top: 0 !important;
        }
        
        .footer-brand-contact .footer-section-title {
          margin-top: 0 !important;
        }
        
        .footer-menu .footer-section-title {
          margin-top: 0 !important;
        }

        /* Desktop: Menu na sredini */
        @media (min-width: 769px) {
          .footer-menu {
            text-align: center !important;
          }
          
          .footer-menu h3 {
            text-align: center !important;
          }
          
          .footer-menu ul {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .footer-menu ul li {
            text-align: center !important;
          }
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
            margin: 0 0 0 auto !important;
          }

          .footer-brand-contact {
            grid-column: 1;
          }

          .footer-menu {
            grid-column: 2;
          }
          
          .footer-section-title {
            margin-top: 0 !important;
          }

          .footer-legal {
            grid-column: 1 / -1;
            text-align: center !important;
            padding-right: 0 !important;
            margin-top: 20px;
          }

          .footer-legal > div {
            align-items: center !important;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 48px 20px !important;
            display: grid !important;
          }
          
          .footer-menu {
            display: none !important;
          }

          /* Logo na sredini zgoraj */
          .footer-logo {
            display: flex !important;
            justify-content: center !important;
            margin-bottom: 32px !important;
            width: 100% !important;
          }
          
          .footer-brand-contact {
            grid-column: 1 !important;
            display: block !important;
            margin-bottom: 0 !important;
            width: 100% !important;
          }

          .footer-brand-contact h3 {
            text-align: center !important;
            margin-bottom: 12px !important;
            margin-top: 0 !important;
          }

          .footer-brand-contact > div:nth-child(3) {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 24px !important;
          }

          .footer-brand-contact > div:nth-child(3) a {
            text-align: center !important;
          }

          /* Follow us pod Contact, na sredini */
          .footer-brand-contact > div:last-child {
            display: block !important;
            text-align: center !important;
            margin-top: 0 !important;
          }

          .footer-brand-contact > div:last-child > p {
            text-align: center !important;
          }

          .footer-brand-contact > div:last-child > div {
            justify-content: center !important;
            margin-top: 12px !important;
          }

          /* Legal na sredini spodaj */
          .footer-legal {
            grid-column: 1 / -1 !important;
            text-align: center !important;
            padding-right: 0 !important;
            margin-top: 32px !important;
            border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
            padding-top: 24px !important;
            width: 100% !important;
          }

          .footer-legal h3 {
            text-align: center !important;
            margin-bottom: 12px !important;
          }

          .footer-legal > div {
            align-items: center !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 40px 16px !important;
            gap: 28px !important;
          }

          .footer-brand-contact > div:first-child img {
            max-width: 140px !important;
            height: auto !important;
          }

          .footer-brand-contact h3,
          .footer-legal h3 {
            font-size: 15px !important;
          }

          .footer-brand-contact > div:nth-child(3) a,
          .footer-legal > div a {
            font-size: 14px !important;
          }
        }

        a:focus-visible {
          outline: 3px solid rgba(184, 161, 255, 0.45);
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

