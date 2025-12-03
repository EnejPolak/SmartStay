'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  const navText = {
    en: {
      home: 'Home',
      forHosts: 'For hosts',
      forGuests: 'For guests',
      pricing: 'Pricing',
      aboutUs: 'About us',
      blog: 'Blog',
      contact: 'Contact'
    },
    sl: {
      home: 'Domov',
      forHosts: 'Za gostitelje',
      forGuests: 'Za goste',
      pricing: 'Cenik',
      aboutUs: 'O nas',
      blog: 'Blog',
      contact: 'Kontakt'
    },
    hr: {
      home: 'Početna',
      forHosts: 'Za domaćine',
      forGuests: 'Za goste',
      pricing: 'Cijene',
      aboutUs: 'O nama',
      blog: 'Blog',
      contact: 'Kontakt'
    }
  };

  const t = navText[language] || navText.en;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/for-hosts', label: t.forHosts },
    { href: '/for-guests', label: t.forGuests },
    { href: '/prices', label: t.pricing },
    { href: '/about', label: t.aboutUs },
    { href: '/blog', label: t.blog },
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
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        paddingRight: 'clamp(16px, 3vw, 48px)'
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
      <div className="flex items-center" style={{ width: '75px', minWidth: '75px' }}>
        <Link href="/">
        <Image 
          src="/logo__1__720.png" 
          alt="SmartStay Logo" 
          width={75} 
          height={38}
          className="object-contain"
          priority
          style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
        />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: '40px', marginLeft: '-75px' }}>
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

      {/* Language Toggle - Desktop with Dropdown */}
      <div 
        ref={langDropdownRef}
        className="desktop-lang-toggle" 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          marginRight: '20px'
        }}
      >
        <button
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          style={{ 
            padding: '6px 12px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: 'rgba(184, 161, 255, 0.1)',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            minWidth: '50px',
            justifyContent: 'center'
          }}
        >
          <span>{language === 'en' ? '🇬🇧' : language === 'sl' ? '🇸🇮' : '🇭🇷'}</span>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isLangDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}
          >
            <path 
              d="M3 4.5L6 7.5L9 4.5" 
              stroke="#b8a1ff" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        {isLangDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(184, 161, 255, 0.3)',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              minWidth: '120px',
              zIndex: 1000,
              overflow: 'hidden'
            }}
          >
            <button
              onClick={() => {
                setLanguage('en');
                setIsLangDropdownOpen(false);
              }}
              style={{
                width: '100%',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: language === 'en' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                color: language === 'en' ? '#b8a1ff' : '#333',
                fontWeight: language === 'en' ? 600 : 400,
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'left'
          }}
              onMouseEnter={(e) => {
                if (language !== 'en') {
                  e.currentTarget.style.backgroundColor = 'rgba(184, 161, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== 'en') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>🇬🇧</span>
              <span>English</span>
            </button>
            <button
              onClick={() => {
                setLanguage('sl');
                setIsLangDropdownOpen(false);
              }}
              style={{
                width: '100%',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: language === 'sl' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
                border: 'none',
                borderTop: '1px solid rgba(184, 161, 255, 0.1)',
                cursor: 'pointer',
                fontSize: '15px',
                color: language === 'sl' ? '#b8a1ff' : '#333',
                fontWeight: language === 'sl' ? 600 : 400,
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (language !== 'sl') {
                  e.currentTarget.style.backgroundColor = 'rgba(184, 161, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== 'sl') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>🇸🇮</span>
              <span>Slovenščina</span>
            </button>
            <button
              onClick={() => {
                setLanguage('hr');
                setIsLangDropdownOpen(false);
              }}
              style={{
                width: '100%',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: language === 'hr' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
                border: 'none',
                borderTop: '1px solid rgba(184, 161, 255, 0.1)',
                cursor: 'pointer',
                fontSize: '15px',
                color: language === 'hr' ? '#b8a1ff' : '#333',
                fontWeight: language === 'hr' ? 600 : 400,
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (language !== 'hr') {
                  e.currentTarget.style.backgroundColor = 'rgba(184, 161, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== 'hr') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '20px' }}>🇭🇷</span>
              <span>Hrvatski</span>
            </button>
          </div>
        )}
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
          {language === 'en' ? 'Language:' : language === 'sl' ? 'Jezik:' : 'Jezik:'}
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
            fontSize: '20px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '50px',
            height: '40px'
          }}
        >
          🇬🇧
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
            fontSize: '20px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '50px',
            height: '40px'
          }}
        >
          🇸🇮
        </button>
        <button
          onClick={() => {
            setLanguage('hr');
            setIsMenuOpen(false);
          }}
          style={{ 
            padding: '8px 16px',
            border: language === 'hr' ? '2px solid #b8a1ff' : '2px solid transparent',
            borderRadius: '6px',
            backgroundColor: language === 'hr' ? 'rgba(184, 161, 255, 0.1)' : 'transparent',
            color: language === 'hr' ? '#b8a1ff' : '#333',
            fontWeight: language === 'hr' ? 600 : 400,
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'all 0.2s ease',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '50px',
            height: '40px'
          }}
        >
          🇭🇷
        </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;

