'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

export default function Home() {
  // Intersection observers for each section
  const painPointsHeader = useIntersectionObserver({ threshold: 0.2 });
  const painPoint1 = useIntersectionObserver({ threshold: 0.3 });
  const painPoint2 = useIntersectionObserver({ threshold: 0.3 });
  const painPoint3 = useIntersectionObserver({ threshold: 0.3 });
  const solutionsHeader = useIntersectionObserver({ threshold: 0.2 });
  const solution1 = useIntersectionObserver({ threshold: 0.3 });
  const solution2 = useIntersectionObserver({ threshold: 0.3 });
  const solution3 = useIntersectionObserver({ threshold: 0.3 });
  const howItWorksHeader = useIntersectionObserver({ threshold: 0.2 });
  const step1 = useIntersectionObserver({ threshold: 0.2 });
  const step2 = useIntersectionObserver({ threshold: 0.2 });
  const step3 = useIntersectionObserver({ threshold: 0.2 });
  const ctaSection = useIntersectionObserver({ threshold: 0.2 });
  const statsSection = useIntersectionObserver({ threshold: 0.3 });
  const demoHeader = useIntersectionObserver({ threshold: 0.2 });

  // Counting animations for stats
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [setupTime, setSetupTime] = useState(0);
  const [questionsPercent, setQuestionsPercent] = useState(0);

  useEffect(() => {
    if (statsSection.isIntersecting) {
      // Properties count animation (0 to 200)
      const propertiesInterval = setInterval(() => {
        setPropertiesCount(prev => {
          if (prev >= 200) {
            clearInterval(propertiesInterval);
            return 200;
          }
          return prev + 5;
        });
      }, 20);

      // Setup time animation (0 to 24)
      const setupInterval = setInterval(() => {
        setSetupTime(prev => {
          if (prev >= 24) {
            clearInterval(setupInterval);
            return 24;
          }
          return prev + 1;
        });
      }, 50);

      // Questions percentage animation (0 to 95)
      const questionsInterval = setInterval(() => {
        setQuestionsPercent(prev => {
          if (prev >= 95) {
            clearInterval(questionsInterval);
            return 95;
          }
          return prev + 2;
        });
      }, 25);

      return () => {
        clearInterval(propertiesInterval);
        clearInterval(setupInterval);
        clearInterval(questionsInterval);
      };
    }
  }, [statsSection.isIntersecting]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0">
        {/* Primary elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900"></div>
        
        {/* Subtle brand accent - single static glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        
        {/* Minimal texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Bottom fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              {/* Title */}
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
                
                {/* Value Proposition */}
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

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 animate-on-load animate-scale-in delay-600">
                  {/* Primary CTA */}
                  <button 
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 ease-out overflow-hidden transform hover:scale-105"
                    style={{background: 'var(--gradient-primary)'}}
                  >
                    {/* Enhanced fill animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    
                    <span className="relative z-10 tracking-wide flex items-center space-x-2">
                      <span>SCHEDULE CALL</span>
                      <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>

                  {/* Secondary CTA */}
                  <button className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300">
                    <span className="flex items-center space-x-2">
                      <span>▶</span>
                      <span>Watch 2min Demo</span>
                    </span>
                  </button>
                </div>


              </div>
            </div>

            {/* Right Content - 3D iPhone Model */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[600px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
                
                {/* Spline 3D iPhone */}
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

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
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

          {/* Pain Points Grid */}
          <div className="grid lg:grid-cols-3 gap-16 mb-24">
            
            {/* Pain Point 1 - Time Loss */}
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

            {/* Pain Point 2 - Revenue Loss */}
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

            {/* Pain Point 3 - Operational Stress */}
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

          {/* Solution Section */}
          <div className="mt-32 mb-24">
            <div 
              ref={solutionsHeader.targetRef}
              className={`text-center mb-16 transition-all duration-800 ${
                solutionsHeader.isIntersecting 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                SmartStay solves this
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  automatically
                </span>
              </h3>
              <p className="text-lg text-gray-500 max-w-xl mx-auto font-light">
                One digital guide eliminates 95% of guest questions while you sleep
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Solution 1 */}
              <div 
                ref={solution1.targetRef}
                className={`text-center group transition-all duration-800 ${
                  solution1.isIntersecting 
                    ? 'animate-slide-in-left opacity-100' 
                    : 'opacity-0 -translate-x-12'
                }`}
              >
                <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-transparent mx-auto mb-8"></div>
                <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
                  Instant answers, 24/7
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Guests find WiFi passwords, house rules, and local recommendations instantly. 
                  No more 2AM interruptions to your family time.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <span className="text-green-400 font-medium">Get your life back</span>
                </div>
              </div>

              {/* Solution 2 */}
              <div 
                ref={solution2.targetRef}
                className={`text-center group transition-all duration-800 ${
                  solution2.isIntersecting 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent mx-auto mb-8"></div>
                <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
                  Focus on what matters
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Stop answering the same questions repeatedly. Spend time growing your business 
                  or enjoying life while guests help themselves.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <span className="text-blue-400 font-medium">Work smarter, not harder</span>
                </div>
              </div>

              {/* Solution 3 */}
              <div 
                ref={solution3.targetRef}
                className={`text-center group transition-all duration-800 ${
                  solution3.isIntersecting 
                    ? 'animate-slide-in-right opacity-100' 
                    : 'opacity-0 translate-x-12'
                }`}
              >
                <div className="w-1 h-16 bg-gradient-to-b from-violet-400 to-transparent mx-auto mb-8"></div>
                <h4 className="text-2xl font-medium text-white mb-6 tracking-tight">
                  Set it and forget it
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Once set up, SmartStay runs automatically. No maintenance, no updates, 
                  no technical headaches. Pure passive income.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <span className="text-violet-400 font-medium">True automation</span>
                </div>
              </div>

            </div>
          </div>

          {/* Simple Stats */}
          <div 
            ref={statsSection.targetRef}
            className={`border-t border-gray-800 pt-16 transition-all duration-800 ${
              statsSection.isIntersecting 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-light text-white mb-3">
                  {propertiesCount}+
                </div>
                <div className="text-gray-500 font-light">Properties served</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-3">
                  {setupTime}h
                </div>
                <div className="text-gray-500 font-light">Setup time</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-3">
                  {questionsPercent}%
                </div>
                <div className="text-gray-500 font-light">Questions eliminated</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Features Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
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

          {/* Demo Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Feature 1 - Digital Guest Guide */}
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-violet-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:rotate-1">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-violet-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
              
              {/* Icon with modern design */}
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-600 rounded-3xl flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-violet-500/25">
                  <span className="text-white text-3xl filter drop-shadow-lg">📱</span>
                </div>
                <div className="w-2 h-2 bg-violet-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              
              {/* Title with premium styling */}
              <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200 group-hover:from-violet-300 group-hover:to-white transition-all duration-500 tracking-tight">
                Digital Guest Guide
              </h3>
              
              {/* Interactive line */}
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-violet-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
            </div>

            {/* Feature 2 - Instant Access */}
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-blue-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:-rotate-1">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
              
              {/* Icon with modern design */}
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-3xl flex items-center justify-center mb-2 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-blue-500/25">
                  <span className="text-white text-3xl filter drop-shadow-lg">🗝️</span>
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              
              {/* Title with premium styling */}
              <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 group-hover:from-blue-300 group-hover:to-white transition-all duration-500 tracking-tight">
                Instant Access Info
              </h3>
              
              {/* Interactive line */}
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
            </div>

            {/* Feature 3 - Local Recommendations */}
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-green-400/40 transition-all duration-700 hover:bg-white/8 hover:transform hover:scale-[1.02] hover:rotate-1">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-600/10 to-transparent rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
              
              {/* Icon with modern design */}
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-green-500/25">
                  <span className="text-white text-3xl filter drop-shadow-lg">📍</span>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full absolute top-0 right-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              
              {/* Title with premium styling */}
              <h3 className="relative z-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 group-hover:from-green-300 group-hover:to-white transition-all duration-500 tracking-tight">
                Local Recommendations
              </h3>
              
              {/* Interactive line */}
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-green-400 to-transparent group-hover:w-20 transition-all duration-500"></div>
            </div>



          </div>

          {/* CTA Button */}
          <div className="text-center">
            <div className="space-y-8">
              {/* Professional Premium CTA */}
              <div className="relative">
                {/* Subtle background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <a 
                  href="/demo"
                  className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 ease-out bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  {/* Fluid fill effect from left to right */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1400 ease-out"></div>
                  
                  {/* Fluid wave effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/60 via-purple-400/60 to-blue-400/60 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-1600 ease-out delay-200"></div>
                  
                  {/* Liquid ripple effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800">
                    <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -translate-y-1/2 scale-y-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1800 ease-out delay-400"></div>
                  </div>
                  
                  {/* Liquid bubbles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-600">
                    <div className="absolute top-3 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute top-6 right-8 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-4 left-1/3 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Final shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 ease-out delay-800"></div>
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center space-x-3 tracking-wide">
                    {/* Minimal icon with subtle animation */}
                    <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-current rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    
                    <span className="font-medium group-hover:text-white transition-colors duration-300">
                      Explore SmartStay
                    </span>
                    
                    {/* Clean arrow */}
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  
                  {/* Corner highlights */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-transparent group-hover:w-8 transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-blue-400 to-transparent group-hover:w-8 transition-all duration-500 delay-200"></div>
                </a>
              </div>
              
              {/* Professional status indicators */}
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

      {/* How It Works Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-load animate-fade-in-up delay-200">
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              From setup to success
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-medium">
                in under 24 hours
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Three simple steps. Zero technical knowledge required. Maximum results.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            
            {/* Step 1 - Slide from Right */}
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
                  Share your property details
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                  Tell us about your property in a quick 10-minute call. WiFi passwords, 
                  house rules, local favorites—we handle the rest.
                </p>
                <div className="inline-flex items-center text-violet-400 font-medium text-lg">
                  <span className="w-3 h-3 bg-violet-400 rounded-full mr-3"></span>
                  10 minutes of your time
                </div>
              </div>
            </div>

            {/* Step 2 - Slide from Left */}
            <div 
              ref={step2.targetRef}
              className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-800 ${
                step2.isIntersecting 
                  ? 'animate-slide-in-left opacity-100' 
                  : 'opacity-0 -translate-x-16'
              }`}
            >
              <div className="text-right lg:order-1">
                <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">
                  We build your digital guide
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                  Our team creates a beautiful, mobile-optimized guide with all your 
                  property information. No work required from you.
                </p>
                <div className="inline-flex items-center text-blue-400 font-medium text-lg">
                  <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                  Built in 24 hours
                </div>
              </div>
              <div className="flex justify-center lg:justify-start lg:order-2">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                    02
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Step 3 - Slide from Right */}
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
                  Enjoy complete automation
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light mb-8">
                  Guests automatically receive your guide before check-in. No more questions, 
                  no more interruptions. Pure passive income.
                </p>
                <div className="inline-flex items-center text-green-400 font-medium text-lg">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  Set it and forget it
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div 
            ref={ctaSection.targetRef}
            className={`text-center mt-20 transition-all duration-800 ${
              ctaSection.isIntersecting 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-violet-400 rounded-full"></span>
                <span>Schedule a Call</span>
              </span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}