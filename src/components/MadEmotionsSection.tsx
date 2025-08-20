"use client";
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const painPoints = [
  {
    id: 1,
    title: '"WiFi password?" at 2AM',
    copy: "Midnight calls about basic info destroy your work–life balance. You shouldn't repeat the same answers every stay.",
    stat: "270+ hours wasted per season",
    color: "#dc2626" // red-600
  },
  {
    id: 2,
    title: "Bad reviews = lost revenue",
    copy: "Frustrated guests leave poor reviews when they can't find information. One 1-star review can cost you future bookings.",
    stat: "€3,000+ lost per bad review",
    color: "#ea580c" // orange-600
  },
  {
    id: 3,
    title: "Always on, never off",
    copy: "Being available 24/7 for guest questions creates constant stress. Your property business should be passive, not draining.",
    stat: "Zero work–life balance",
    color: "#d97706" // amber-600
  },
  {
    id: 4,
    title: "Guests don't read emails",
    copy: "Pre-arrival emails have low open rates. Guests still arrive asking the same questions.",
    stat: "Information doesn't reach guests",
    color: "#e11d48" // rose-600
  },
  {
    id: 5,
    title: "Check-in / check-out confusion",
    copy: "Unclear steps trigger avoidable calls and delays. Clear guidance reduces friction for everyone.",
    stat: "Avoidable handover delays",
    color: "#b91c1c" // red-700
  },
  {
    id: 6,
    title: "Where is parking / trash / AC?",
    copy: "Micro-questions interrupt your day and multiply with each booking. Centralize answers once.",
    stat: "Constant micro-interruptions",
    color: "#c2410c" // orange-700
  },
  {
    id: 7,
    title: "Local recommendations?",
    copy: "Unstructured tips lead to mediocre experiences and more follow-up questions. Curate what truly matters nearby.",
    stat: "Lower guest satisfaction",
    color: "#b45309" // amber-700
  },
  {
    id: 8,
    title: "Maintenance & emergencies",
    copy: "Without simple instructions, small issues become urgent calls. Standardize fixes before problems escalate.",
    stat: "Unnecessary support calls",
    color: "#be185d" // rose-700
  }
];

const MadEmotionsSection: React.FC = () => {
  const painPointsHeader = useIntersectionObserver({ threshold: 0.2 });
  
  // Duplicate cards for seamless loop
  const duplicatedPainPoints = [...painPoints, ...painPoints];

  return (
    <section id="mad-emotions" className="py-32 px-6 lg:px-8">
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
            Stop losing money on
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-medium">
              endless guest questions
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Property owners waste 270+ hours per season answering the same questions. 
            SmartStay eliminates this completely.
          </p>
        </div>

        {/* Mobile Vertical Scroll Container */}
        <div className="md:hidden relative overflow-hidden h-[500px] mb-24">
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


