"use client";
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const DemoFeaturesSection: React.FC = () => {
  const demoHeader = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={demoHeader.targetRef}
          className={`text-center mb-20 transition-all duration-800 ${
            demoHeader.isIntersecting 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center bg-violet-500/10 border border-violet-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-violet-400 text-sm font-semibold tracking-wide uppercase">Revolutionary Technology</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
            The future of
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-medium">
              guest experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how SmartStay transforms traditional hospitality with cutting-edge automation, 
            intelligent guest support, and seamless digital experiences that delight guests while saving you time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-violet-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:rotate-1">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-violet-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-600 rounded-3xl flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-violet-500/25">
                <span className="text-white text-3xl filter drop-shadow-lg">📱</span>
              </div>
              <div className="w-2 h-2 bg-violet-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200 group-hover:from-violet-300 group-hover:to-white transition-all duration-500 tracking-tight">
              Digital Guest Guide
            </h3>
            <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-violet-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-blue-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:-rotate-1">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-3xl flex items-center justify-center mb-2 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-blue-500/25">
                <span className="text-white text-3xl filter drop-shadow-lg">🗝️</span>
              </div>
              <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 group-hover:from-blue-300 group-hover:to-white transition-all duration-500 tracking-tight">
              Instant Access Info
            </h3>
            <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
          </div>

          <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-green-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:rotate-1">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
            <div className="relative z-10 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-green-500/25">
                <span className="text-white text-3xl filter drop-shadow-lg">📍</span>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 group-hover:from-green-300 group-hover:to-white transition-all duration-500 tracking-tight">
              Local Recommendations
            </h3>
            <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-green-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>

        <div className="text-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <a 
                href="/demo"
                className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 ease-out bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1400 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/60 via-purple-400/60 to-blue-400/60 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-1600 ease-out delay-200"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800">
                  <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -translate-y-1/2 scale-y-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1800 ease-out delay-400"></div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-600">
                  <div className="absolute top-3 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute top-6 right-8 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-4 left-1/3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 ease-out delay-800"></div>
                <span className="relative z-10 flex items-center space-x-3 tracking-wide">
                  <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-current rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <span className="font-medium group-hover:text-white transition-colors duration-300">
                    Explore SmartStay
                  </span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-transparent group-hover:w-8 transition-all duration-500 delay-200"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-blue-400 to-transparent group-hover:w-8 transition-all duration-500 delay-200"></div>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live Demo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>No Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <span>2 Min Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFeaturesSection;


