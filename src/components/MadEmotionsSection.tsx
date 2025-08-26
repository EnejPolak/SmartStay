"use client";
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguageStore } from '../stores/language';



const MadEmotionsSection: React.FC = () => {
  const painPointsHeader = useIntersectionObserver({ threshold: 0.2 });
  const { getTranslation } = useLanguageStore();
  const t = getTranslation();
  
  // Use translated pain points
  const translatedPainPoints = t.madEmotions.painPoints;
  
  // Duplicate cards for seamless loop
  const duplicatedPainPoints = [...translatedPainPoints, ...translatedPainPoints];

  return (
    <section id="mad-emotions" className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={painPointsHeader.targetRef}
          className={`text-center mb-24 transition-all duration-800 ${
            painPointsHeader.isIntersecting 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
            {t.madEmotions.title}
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-medium">
              {t.madEmotions.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            {t.madEmotions.subtitle}
          </p>
        </div>

        {/* Mobile Vertical Scroll Container */}
        <div className="md:hidden relative overflow-hidden h-[500px] mb-24 -mt-12">
          {/* Top fade mask */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"></div>
          {/* Bottom fade mask */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Vertical Scrolling Track */}
          <div 
            className="flex flex-col gap-8 animate-marquee-vertical-scroll"
            style={{ 
              height: `${duplicatedPainPoints.length * 280}px`,
              willChange: 'transform'
            }}
          >
            {duplicatedPainPoints.map((point, index) => (
              <div 
                key={`${point.id}-${index}`}
                className="flex-shrink-0 h-64 text-center flex flex-col justify-center px-6"
              >
                <div 
                  className="w-1 h-16 mx-auto mb-6"
                  style={{ 
                    background: `linear-gradient(to bottom, ${point.color}, transparent)` 
                  }}
                ></div>
                <h3 className="text-xl font-medium text-white mb-6 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-light mb-6">
                  {point.copy}
                </p>
                <div className="pt-4 border-t border-gray-800">
                  <span 
                    className="font-medium text-sm"
                    style={{ color: point.color }}
                  >
                    {point.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Marquee Container */}
        <div className="hidden md:block relative overflow-hidden marquee-container mb-24">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div 
            className="flex gap-8 animate-marquee-scroll"
            style={{ 
              width: `${duplicatedPainPoints.length * 320}px`,
              willChange: 'transform'
            }}
          >
            {duplicatedPainPoints.map((point, index) => (
              <div 
                key={`${point.id}-${index}`}
                className="flex-shrink-0 w-80 text-center"
              >
                <div 
                  className="w-1 h-16 mx-auto mb-8"
                  style={{ 
                    background: `linear-gradient(to bottom, ${point.color}, transparent)` 
                  }}
                ></div>
                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {point.copy}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <span 
                    className="font-medium"
                    style={{ color: point.color }}
                  >
                    {point.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadEmotionsSection;


