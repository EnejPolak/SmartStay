'use client';

import React from 'react';
import HeroSection from './HeroSection';
import MadEmotionsSection from '@/components/MadEmotionsSection';
import SolutionSection from '@/components/SolutionSection';
import DemoFeaturesSection from './DemoFeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import ReviewsSection from './reviews';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <HeroSection />
      <MadEmotionsSection />
      <SolutionSection />
      <DemoFeaturesSection />
      <HowItWorksSection />
      <ReviewsSection />
    </div>
  );
}


