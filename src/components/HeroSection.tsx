"use client";
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] animate-on-load animate-fade-in-up delay-200">
                Smart<span 
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >x</span>Stay
              </h1>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-bold leading-tight animate-on-load animate-fade-in-up delay-400">
                  Transform Guest Experience with 
                  <span className="text-violet-400"> Digital Innovation</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl animate-on-load animate-fade-in-up delay-500">
                  Stop endless guest questions. Create seamless digital guides with house rules, 
                  local recommendations, and instant support.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 animate-on-load animate-scale-in delay-600">
                <button 
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 ease-out overflow-hidden transform hover:scale-105"
                  style={{background: 'var(--gradient-primary)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 tracking-wide flex items-center space-x-2">
                    <span>SCHEDULE CALL</span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
                <button className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <span>▶</span>
                    <span>Watch 2min Demo</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
              <iframe 
                src="https://my.spline.design/iphoneprocopy-R0IJdgxrF9sgMnOGYoUOwmPE/"
                width="100%" 
                height="100%"
                className="relative z-10 rounded-2xl bg-transparent"
                frameBorder="0"
                title="3D iPhone SmartStay Demo"
                style={{ background: 'transparent' }}
                allowTransparency={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


