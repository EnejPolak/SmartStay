'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav 
      className="sticky top-0 w-full flex items-center px-12 z-50"
      style={{ 
        backgroundColor: '#f4f1fe',
        height: '80px',
        fontFamily: 'Inter, sans-serif'
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
        <a 
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
        </a>
        <a 
          href="#features" 
          className="transition-colors duration-200"
          style={{ 
            color: '#333',
            fontWeight: 500,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#b8a1ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
        >
          Features
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
      </div>
    </nav>
  );
};

export default Navbar;

