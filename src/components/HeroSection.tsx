"use client";
import React, { useEffect, useRef } from 'react';
import { useCountryDetection } from '../hooks/useCountryDetection';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { getBookingLink } = useCountryDetection();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    let gsap: any;
    let ScrollTrigger: any;

    (async () => {
      try {
        const [{ gsap: gsapCore }, stModule] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        gsap = gsapCore;
        ScrollTrigger = stModule.ScrollTrigger || stModule.default;
        
        if (!gsap || !ScrollTrigger) return;
        
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance animations
        const tl = gsap.timeline({ delay: 0.3 });
        
        tl.fromTo(titleRef.current, 
          { y: 50, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(descriptionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(buttonsRef.current,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.2)" },
          "-=0.3"
        );

        // Parallax effect for hero content on scroll
        gsap.to(heroRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });

      } catch (error) {
        console.log("GSAP loading failed:", error);
      }
    })();
  }, []);

  return (
    <div ref={heroRef} className="hero-section relative z-10 min-h-screen flex items-center pt-20">
      <div className="hero-container max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="hero-content text-center lg:text-left space-y-12">
            <div className="space-y-8">
              <h1 ref={titleRef} className="hero-title hero-animate-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] animate-on-load animate-fade-in-up delay-200">
                Smart<span 
                  className="hero-title-gradient"
                  style={{
                    background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >x</span>Stay
              </h1>
              <div className="space-y-6">
                <h2 ref={subtitleRef} className="hero-subtitle hero-animate-subtitle text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-200 font-bold leading-tight animate-on-load animate-fade-in-up delay-400">
                  Transform Guest Experience with{' '}
                  <span 
                    className="hero-subtitle-gradient text-violet-400"
                    style={{
                      background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Digital Innovation
                  </span>
                </h2>
                <p ref={descriptionRef} className="hero-description hero-animate-description text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-md lg:max-w-2xl mx-auto lg:mx-0 animate-on-load animate-fade-in-up delay-500">
                  Stop endless guest questions. Create seamless digital guides with house rules, 
                  local recommendations, and instant support.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div ref={buttonsRef} className="hero-cta-container hero-animate-cta flex flex-col sm:flex-row gap-4 animate-on-load animate-scale-in delay-600">
                <a 
                  href={getBookingLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero-cta-primary group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 ease-out overflow-hidden transform hover:scale-105"
                  style={{background: 'var(--gradient-primary)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 tracking-wide flex items-center space-x-2">
                    <span>SCHEDULE CALL</span>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
                <button className="hero-cta-secondary inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-violet-300 border-2 border-violet-400/30 rounded-2xl hover:bg-violet-400/10 hover:border-violet-400/50 transition-all duration-300">
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


