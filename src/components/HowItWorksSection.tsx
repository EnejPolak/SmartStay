"use client";
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguageStore } from '../stores/language';

const HowItWorksSection: React.FC = () => {
  const step1 = useIntersectionObserver({ threshold: 0.2 });
  const step2 = useIntersectionObserver({ threshold: 0.2 });
  const step3 = useIntersectionObserver({ threshold: 0.2 });
  const ctaSection = useIntersectionObserver({ threshold: 0.2 });
  const { getBookingLink, getTranslation } = useLanguageStore();
  const t = getTranslation();

  return (
    <section className="py-32 px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-on-load animate-fade-in-up delay-200">
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
            {t.howItWorks.title}
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-medium">
              {t.howItWorks.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="space-y-24">
          <div 
            ref={step1.targetRef}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-800 ${
              step1.isIntersecting 
                ? 'animate-slide-in-right opacity-100' 
                : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  01
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-violet-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">
                {t.howItWorks.steps[0].title}
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                {t.howItWorks.steps[0].description}
              </p>
              <div className="inline-flex items-center text-violet-400 font-medium text-lg">
                <span className="w-3 h-3 bg-violet-400 rounded-full mr-3"></span>
                {t.howItWorks.steps[0].time}
              </div>
            </div>
          </div>

          <div 
            ref={step2.targetRef}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-800 ${
              step2.isIntersecting 
                ? 'animate-slide-in-left opacity-100' 
                : 'opacity-0 -translate-x-16'
            }`}
          >
            {/* Mobile: Number on top, text below */}
            <div className="text-right lg:hidden">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                    02
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">
                {t.howItWorks.steps[1].title}
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                {t.howItWorks.steps[1].description}
              </p>
              <div className="inline-flex items-center text-blue-400 font-medium text-lg">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                {t.howItWorks.steps[1].time}
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="text-right lg:order-1 hidden lg:block">
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">
                {t.howItWorks.steps[1].title}
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                {t.howItWorks.steps[1].description}
              </p>
              <div className="inline-flex items-center text-blue-400 font-medium text-lg">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                {t.howItWorks.steps[1].time}
              </div>
            </div>
            <div className="justify-center lg:justify-start lg:order-2 hidden lg:flex">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  02
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div 
            ref={step3.targetRef}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-800 ${
              step3.isIntersecting 
                ? 'animate-slide-in-right opacity-100' 
                : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  03
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">
                {t.howItWorks.steps[2].title}
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                {t.howItWorks.steps[2].description}
              </p>
              <div className="inline-flex items-center text-green-400 font-medium text-lg">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                {t.howItWorks.steps[2].time}
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={ctaSection.targetRef}
          className={`text-center mt-20 transition-all duration-800 ${
            ctaSection.isIntersecting 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href={getBookingLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-violet-400 rounded-full"></span>
              <span>{t.howItWorks.ctaButton}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


