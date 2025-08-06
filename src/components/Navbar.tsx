'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Hide navbar after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar visibility
  const shouldShowNavbar = !isScrolled || isHovered;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* iPhone-style Trigger Indicator - shown when scrolled and navbar is hidden */}
      {isScrolled && !isHovered && (
        <div 
          className="flex justify-center mb-3 animate-fade-in"
          onMouseEnter={() => setIsHovered(true)}
        >
          {/* iPhone-style pill indicator */}
          <div className="bg-white/15 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 hover:bg-white/25 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center space-x-1">
              {/* Three dots indicator like iPhone */}
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white/70 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-1 h-1 bg-white/70 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <div className="w-1 h-1 bg-white/70 rounded-full group-hover:bg-white transition-colors duration-300"></div>
              </div>
              {/* Small chevron */}
              <svg 
                className="w-3 h-3 text-white/70 group-hover:text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-500 ease-in-out ${
          shouldShowNavbar 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl px-4 py-3 animate-on-load animate-navbar-drop">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/pictures/logo/smartStay_logo.png"
              alt="SmartStay Logo"
              width={40}
              height={40}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation - pushed more to the right */}
                                           <div className="hidden md:flex items-center space-x-1 ml-12 ">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group px-3 py-2 font-semibold text-gray-400 hover:text-white transition-all duration-500 ease-out"
              >
                {/* Text with advanced effects */}
                <span className="relative z-10 tracking-wide text-sm uppercase font-bold transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400">
                  {item.name}
                </span>
                
                {/* Sliding underline from center */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent group-hover:w-full transition-all duration-700 ease-out"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-4 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-4 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="space-y-1 border-t border-white/10 pt-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group block px-4 py-2 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Mobile background fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-blue-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out rounded-lg"></div>
                
                <span className="relative z-10 text-sm uppercase font-bold tracking-wide">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
}