"use client";
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const MadEmotionsSection: React.FC = () => {
  const painPointsHeader = useIntersectionObserver({ threshold: 0.2 });
  const painPoint1 = useIntersectionObserver({ threshold: 0.3 });
  const painPoint2 = useIntersectionObserver({ threshold: 0.3 });
  const painPoint3 = useIntersectionObserver({ threshold: 0.3 });

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

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div 
            ref={painPoint1.targetRef}
            className={`text-center group transition-all duration-800 ${
              painPoint1.isIntersecting 
                ? 'animate-slide-in-left opacity-100' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="w-1 h-16 bg-gradient-to-b from-red-400 to-transparent mx-auto mb-8"></div>
            <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
              "WiFi password?" at 2AM
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Midnight calls about basic information destroy your work-life balance. 
              49% of property managers are considering career changes due to burnout.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-red-400 font-medium">270+ hours wasted per season</span>
            </div>
          </div>

          <div 
            ref={painPoint2.targetRef}
            className={`text-center group transition-all duration-800 ${
              painPoint2.isIntersecting 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-transparent mx-auto mb-8"></div>
            <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Bad reviews = lost revenue
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Frustrated guests leave poor reviews when they can't find information. 
              Each 1-star review costs you thousands in future bookings.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-orange-400 font-medium">€3,000+ lost per bad review</span>
            </div>
          </div>

          <div 
            ref={painPoint3.targetRef}
            className={`text-center group transition-all duration-800 ${
              painPoint3.isIntersecting 
                ? 'animate-slide-in-right opacity-100' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="w-1 h-16 bg-gradient-to-b from-yellow-400 to-transparent mx-auto mb-8"></div>
            <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Always on, never off
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Being available 24/7 for guest questions creates constant stress. 
              Your property business should generate passive income, not anxiety.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <span className="text-yellow-400 font-medium">Zero work-life balance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadEmotionsSection;


