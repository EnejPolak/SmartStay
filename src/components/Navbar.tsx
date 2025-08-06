'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl px-4 py-3">
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
  );
}