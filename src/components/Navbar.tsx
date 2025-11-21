'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav 
      className="fixed top-0 w-full flex items-center px-12 z-50"
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
      {/* Logo */}
      <div className="flex items-center" style={{ width: '150px' }}>
        <Image 
          src="/logo__1__720.png" 
          alt="SmartStay Logo" 
          width={120} 
          height={60}
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center flex-1" style={{ gap: '40px', marginLeft: '-150px' }}>
        <Link 
          href="/" 
          className="transition-colors duration-200"
          style={{ 
            color: pathname === '/' ? '#b8a1ff' : '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = pathname === '/' ? '#b8a1ff' : '#333'}
        >
          Home
        </Link>
        <a 
          href="/for-hosts" 
          className="transition-colors duration-200"
          style={{ 
            color: pathname === '/for-hosts' ? '#b8a1ff' : '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = pathname === '/for-hosts' ? '#b8a1ff' : '#333'}
        >
          For hosts
        </a>
        <a 
          href="/for-guests" 
          className="transition-colors duration-200"
          style={{ 
            color: pathname === '/for-guests' ? '#b8a1ff' : '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = pathname === '/for-guests' ? '#b8a1ff' : '#333'}
        >
          For guests
        </a>
        <Link 
          href="/prices" 
          className="transition-colors duration-200"
          style={{ 
            color: pathname === '/prices' ? '#b8a1ff' : '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = pathname === '/prices' ? '#b8a1ff' : '#333'}
        >
          Pricing
        </Link>
        <a 
          href="#about" 
          className="transition-colors duration-200"
          style={{ 
            color: '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
        >
          About us
        </a>
        <a 
          href="#contact" 
          className="transition-colors duration-200"
          style={{ 
            color: '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
        >
          Contact
        </a>
        <a 
          href="#blog" 
          className="transition-colors duration-200"
          style={{ 
            color: '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

