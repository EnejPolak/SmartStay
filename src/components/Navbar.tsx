'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navText = {
    en: {
      home: 'Home',
      forHosts: 'For hosts',
      forGuests: 'For guests',
      pricing: 'Pricing',
      aboutUs: 'About us',
      contact: 'Contact'
    },
    sl: {
      home: 'Domov',
      forHosts: 'Za gostitelje',
      forGuests: 'Za goste',
      pricing: 'Cenik',
      aboutUs: 'O nas',
      contact: 'Kontakt'
    }
  };

  const t = navText[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/for-hosts', label: t.forHosts },
    { href: '/for-guests', label: t.forGuests },
    { href: '/prices', label: t.pricing },
    { href: '/about', label: t.aboutUs },
    { href: '/contact', label: t.contact }
  ];

  return (
    <>
    <nav 
      className="navbar fixed top-0 w-full flex items-center px-4 md:px-12 z-50"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(25px) saturate(180%)',
        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
        height: '80px',
        fontFamily: 'Inter, sans-serif',
        borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar {
            padding: 0 16px !important;
            height: 70px !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .desktop-lang-toggle {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
          
          .navbar > div:first-child {
            width: 100px !important;
            min-width: 100px !important;
          }
          
          .navbar > div:first-child img {
            width: 100px !important;
            height: auto !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
          
          .mobile-menu-overlay {
            display: none !important;
          }
          
          .desktop-nav {
            display: flex !important;
          }
          
          .desktop-lang-toggle {
            display: flex !important;
          }
        }
        
        @media (max-width: 480px) {
          .navbar {
            padding: 0 12px !important;
          }
          
          .navbar > div:first-child {
            width: 80px !important;
            min-width: 80px !important;
          }
          
          .navbar > div:first-child img {
            width: 80px !important;
          }
        }
      `}</style>
      {/* Logo */}
      <div className="flex items-center" style={{ width: '100px', minWidth: '100px' }}>
        <Link href="/">
          <Image 
            src="/logo__1__720.png" 
            alt="SmartStay Logo" 
            width={100} 
            height={50}
            className="object-contain"
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '40px', marginLeft: '-100px' }}>
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className="transition-colors duration-200"
            style={{ 
              color: pathname === link.href ? '#b8a1ff' : '#333',
              fontWeight: 500,
              textDecoration: 'none',
              fontSize: '15px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
            onMouseLeave={(e) => e.currentTarget.style.color = pathname === link.href ? '#b8a1ff' : '#333'}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Language Toggle - Desktop */}
      <div className="desktop-lang-toggle" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button
          onClick={() => setLanguage('en')}
          style={{
            padding: '6px 12px',
            border: language === 'en' ? '2px solid #b8a1ff' : '2px solid transparent',
            borderRadius: '6px',
            backgroundColor: language === 'en' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
            color: language === 'en' ? '#b8a1ff' : '#333',
            fontWeight: language === 'en' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('sl')}
          style={{
            padding: '6px 12px',
            border: language === 'sl' ? '2px solid #b8a1ff' : '2px solid transparent',
            borderRadius: '6px',
            backgroundColor: language === 'sl' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
            color: language === 'sl' ? '#b8a1ff' : '#333',
            fontWeight: language === 'sl' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          SL
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={toggleMenu}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          flexDirection: 'column',
          gap: '5px',
          marginLeft: 'auto',
          zIndex: 100
        }}
        aria-label="Toggle menu"
      >
        <span
          style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#333',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}
        />
        <span
          style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#333',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }}
        />
        <span
          style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#333',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}
        />
      </button>
    </nav>

    {/* Mobile Menu Overlay */}
    <div
      className="mobile-menu-overlay"
      style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(25px) saturate(180%)',
        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
        zIndex: 40,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        overflowY: 'auto',
        padding: '40px 24px'
      }}
    >
      {/* Mobile Navigation Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: pathname === link.href ? '#b8a1ff' : '#333',
              fontWeight: pathname === link.href ? 600 : 500,
              textDecoration: 'none',
              fontSize: '18px',
              padding: '12px 0',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              transition: 'color 0.2s ease'
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Language Toggle */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '12px', 
          alignItems: 'center',
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, color: '#333', marginRight: '8px' }}>
          {language === 'en' ? 'Language:' : 'Jezik:'}
        </span>
        <button
          onClick={() => {
            setLanguage('en');
            setIsMenuOpen(false);
          }}
          style={{
            padding: '8px 16px',
            border: language === 'en' ? '2px solid #b8a1ff' : '2px solid transparent',
            borderRadius: '6px',
            backgroundColor: language === 'en' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
            color: language === 'en' ? '#b8a1ff' : '#333',
            fontWeight: language === 'en' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          EN
        </button>
        <button
          onClick={() => {
            setLanguage('sl');
            setIsMenuOpen(false);
          }}
          style={{
            padding: '8px 16px',
            border: language === 'sl' ? '2px solid #b8a1ff' : '2px solid transparent',
            borderRadius: '6px',
            backgroundColor: language === 'sl' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
            color: language === 'sl' ? '#b8a1ff' : '#333',
            fontWeight: language === 'sl' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          SL
        </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;

