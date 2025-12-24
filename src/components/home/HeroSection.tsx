'use client';

import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// iPhone Model Component
function IPhoneModel() {
  const gltf = useGLTF('/welcomeIphone.glb');
  
  React.useEffect(() => {
    if (gltf && gltf.scene) {
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3/ maxDim;
      
      gltf.scene.scale.multiplyScalar(scale);
      gltf.scene.position.sub(center.multiplyScalar(scale));
      
      // Ensure materials are visible and bright
      gltf.scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((mat: THREE.Material) => {
                mat.transparent = false;
                mat.opacity = 1;
                // Enhance brightness for MeshStandardMaterial and MeshPhysicalMaterial
                if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial || 
                    (mat as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial) {
                  const standardMat = mat as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial;
                  if (standardMat.emissive) {
                    standardMat.emissive.multiplyScalar(1.2);
                  }
                  standardMat.needsUpdate = true;
                }
              });
            } else {
              const mat = mesh.material as THREE.Material;
              mat.transparent = false;
              mat.opacity = 1;
              // Enhance brightness for MeshStandardMaterial and MeshPhysicalMaterial
              if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial || 
                  (mat as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial) {
                const standardMat = mat as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial;
                if (standardMat.emissive) {
                  standardMat.emissive.multiplyScalar(1.2);
                }
                standardMat.needsUpdate = true;
              }
            }
          }
        }
      });
    }
  }, [gltf]);
  
  if (!gltf || !gltf.scene) return null;
  
  return (
    <primitive 
      object={gltf.scene} 
      rotation={[0, -Math.PI / 6, 0]}
    />
  );
}

// Lazy load model - only preload when needed (client-side only)
if (typeof window !== 'undefined') {
  // Only preload after initial page load to avoid hydration issues
  const preloadTimer = setTimeout(() => {
    try {
      useGLTF.preload('/welcomeIphone.glb');
    } catch (error) {
      // Silently fail if preload fails
      console.debug('GLB preload skipped');
    }
  }, 2000);
  
  // Cleanup on unmount
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('beforeunload', () => {
      clearTimeout(preloadTimer);
    });
  }
}

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'hosts' | 'guests'>('hosts');
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const translations = {
    en: {
      forHosts: 'For hosts',
      forGuests: 'For guests',
      hostsHeading: {
        line1: 'Customized app',
        line2: 'for your property.',
        line3: 'For hosts who love',
        line4: 'their guests.'
      },
      guestsHeading: {
        line1: 'Stress free travel',
        line2: 'with local tips.',
        line3: 'For guests who',
        line4: 'dont like to stress.'
      },
      hostsButton: 'Book a free presentation',
      guestsButton: 'Find your next stay',
      readMore: 'Read more'
    },
    sl: {
      forHosts: 'Za gostitelje',
      forGuests: 'Za goste',
      hostsHeading: {
        line1: 'Aplikacija prilagojena',
        line2: 'za vašo nastanitev.',
        line3: 'Za gostitelje, ki obožujejo',
        line4: 'svoje goste.'
      },
      guestsHeading: {
        line1: 'Brezstresno potovanje',
        line2: 'z lokalnimi nasveti.',
        line3: 'Za goste, ki',
        line4: 'ne marajo stresa.'
      },
      hostsButton: 'Rezervirajte brezplačno predstavitev',
      guestsButton: 'Poiščite vaš naslednji bivališče',
      readMore: 'Preberite več'
    },
    hr: {
      forHosts: 'Za domaćine',
      forGuests: 'Za goste',
      hostsHeading: {
        line1: 'Aplikacija prilagođena',
        line2: 'za vaš smještaj.',
        line3: 'Za domaćine koji obožavaju',
        line4: 'svoje goste.'
      },
      guestsHeading: {
        line1: 'Putovanje bez stresa',
        line2: 's lokalnim savjetima.',
        line3: 'Za goste koji',
        line4: 'ne vole stres.'
      },
      hostsButton: 'Rezervirajte besplatnu prezentaciju',
      guestsButton: 'Pronađite svoj sljedeći smještaj',
      readMore: 'Pročitajte više'
    }
  };

  const t = translations[language] || translations.en;

  // Check if container is visible and should render Canvas (skip on mobile)
  useEffect(() => {
    // Skip on server-side
    if (typeof window === 'undefined') return;
    
    const checkVisibility = () => {
      // Skip 3D models on mobile for performance
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        setShouldRenderCanvas(false);
        return;
      }
      
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.width > 0 && rect.height > 0 && 
                         window.getComputedStyle(containerRef.current).display !== 'none';
        // Add delay for better initial load performance
        const timer = setTimeout(() => {
          setShouldRenderCanvas(isVisible);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        // Wait for container to mount
        const timer = setTimeout(checkVisibility, 100);
        return () => clearTimeout(timer);
      }
    };
    
    const cleanup = checkVisibility();
    const handleResize = () => checkVisibility();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) cleanup();
    };
  }, []);

  // Animate heading when tab changes
  useEffect(() => {
    if (headingRef.current) {
      const lines = headingRef.current.querySelectorAll('.hero-line');
      
      // Reset all lines
      lines.forEach((line) => {
        (line as HTMLElement).style.opacity = '0';
        (line as HTMLElement).style.transform = 'translateY(20px)';
      });
      
      // Animate each line with stagger
      lines.forEach((line, index) => {
        setTimeout(() => {
          (line as HTMLElement).style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          (line as HTMLElement).style.opacity = '1';
          (line as HTMLElement).style.transform = 'translateY(0)';
        }, 100 + (index * 100)); // Stagger: 100ms delay between each line
      });
    }
  }, [activeTab]);

  return (
    <section 
      className="hero-content-section"
      style={{
        padding: '80px 40px 20px 80px',
        minHeight: '600px',
        height: 'auto',
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, sans-serif',
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        contain: 'layout style paint',
      }}
    >
      {/* Optimized Background Image */}
      <div
        className="hero-background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          overflow: 'hidden',
          aspectRatio: '16/9',
          minHeight: '600px',
        }}
      >
        <Image
          src="/heroPicture.png"
          alt="SmartxStay Hero Background"
          fill
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      {/* Overlay for better text readability - gradient from left (white) to center, stops before phone area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: '30%',
          bottom: 0,
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Main Content Row - Text Left, iPhone Right */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '64px',
          width: '100%',
          flexWrap: 'wrap',
          overflow: 'visible',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Text Content - Left Aligned */}
        <div
          className="hero-text-content"
          style={{
            flex: '1 1 60%',
            minWidth: '300px',
            maxWidth: '2000px',
            textAlign: 'left',
            position: 'relative',
            paddingLeft: '20px',
            paddingRight: '60px',
            overflow: 'visible',
            width: '100%',
          }}
        >
        {/* Tabs Navigation */}
        <div
          className="fade-in-slide-up"
          style={{
            display: 'flex',
            gap: '32px',
            marginBottom: '48px',
            position: 'relative',
            animation: 'fadeInSlideUp 0.8s ease-out',
          }}
        >
          <button
            onClick={() => setActiveTab('hosts')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: activeTab === 'hosts' ? '#7c5fd9' : '#4a4a4a',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0 0 8px 0',
              position: 'relative',
              transition: 'color 0.3s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'hosts') {
                e.currentTarget.style.color = '#a29eff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'hosts') {
                e.currentTarget.style.color = '#4a4a4a';
              }
            }}
          >
            {t.forHosts}
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                backgroundColor: activeTab === 'hosts' ? '#a29eff' : '#d0d0d0',
                borderRadius: '2px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                transform: activeTab === 'hosts' ? 'scaleX(1)' : 'scaleX(0.8)',
              }}
            />
          </button>
          <button
            onClick={() => setActiveTab('guests')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: activeTab === 'guests' ? '#7c5fd9' : '#4a4a4a',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0 0 8px 0',
              position: 'relative',
              transition: 'color 0.3s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'guests') {
                e.currentTarget.style.color = '#a29eff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'guests') {
                e.currentTarget.style.color = '#4a4a4a';
              }
            }}
          >
            {t.forGuests}
            <span
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                backgroundColor: activeTab === 'guests' ? '#a29eff' : '#d0d0d0',
                borderRadius: '2px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                transform: activeTab === 'guests' ? 'scaleX(1)' : 'scaleX(0.8)',
              }}
            />
          </button>
        </div>
        <h1
          ref={headingRef}
          key={activeTab}
          className="hero-heading"
        >
          {activeTab === 'hosts' ? (
            <>
              <span className="hero-line hero-line-black">{t.hostsHeading.line1}</span>
              <span className="hero-line hero-line-black">{t.hostsHeading.line2}</span>
              <span className="hero-line hero-line-gradient">{t.hostsHeading.line3}</span>
              <span className="hero-line hero-line-gradient">{t.hostsHeading.line4}</span>
            </>
          ) : (
            <>
              <span className="hero-line hero-line-black">{t.guestsHeading.line1}</span>
              <span className="hero-line hero-line-black">{t.guestsHeading.line2}</span>
              <span className="hero-line hero-line-gradient">{t.guestsHeading.line3}</span>
              <span className="hero-line hero-line-gradient">{t.guestsHeading.line4}</span>
            </>
          )}
        </h1>

        {/* CTA Buttons */}
        <div
          className="cta-buttons"
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginTop: '24px',
            width: '100%',
          }}
        >
          {activeTab === 'hosts' ? (
            <Link 
              href={language === 'hr' 
                ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000057014"
                : language === 'sl'
                ? "https://meetings-smartxstay.zohobookings.eu/#/242002000000063002"
                : "https://meetings-smartxstay.zohobookings.eu/#/242002000000041016"}
              className="btn-primary"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hostsButton}
            </Link>
          ) : (
          <button className="btn-primary">
              {t.guestsButton}
          </button>
          )}
          <Link 
            href={activeTab === 'hosts' ? '/for-hosts' : '/for-guests'}
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            {t.readMore}
          </Link>
        </div>
        </div>

        {/* Right Side - iPhone 3D Model */}
      <div
        ref={containerRef}
        className="fade-in-slide-up phone-model-container"
        style={{
          flex: '1',
          minWidth: '350px',
          maxWidth: '600px',
          height: '800px',
          position: 'relative',
          animation: 'fadeInSlideUp 0.8s ease-out 0.8s both',
          zIndex: 2,
          isolation: 'isolate',
        }}
      >
        {shouldRenderCanvas && (
        <Suspense fallback={
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a29eff',
            fontSize: '18px',
            backgroundColor: 'rgba(244, 241, 254, 0.5)',
            borderRadius: '12px',
          }}>
            Loading iPhone...
          </div>
        }>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: '100%', height: '100%', background: 'transparent' }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
              logarithmicDepthBuffer: false,
              preserveDrawingBuffer: false,
              premultipliedAlpha: false,
              failIfMajorPerformanceCaveat: false,
            }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.2;
              // Force maximum pixel ratio for sharpest rendering
              const maxPixelRatio = Math.min(window.devicePixelRatio || 2, 3);
              gl.setPixelRatio(maxPixelRatio);
              
              // Force higher resolution rendering
              const setSize = () => {
                const container = gl.domElement.parentElement;
                if (container) {
                  const width = container.clientWidth;
                  const height = container.clientHeight;
                  // Prevent WebGL errors by checking for valid dimensions
                  if (width > 0 && height > 0) {
                    gl.setSize(width * maxPixelRatio, height * maxPixelRatio, false);
                    gl.domElement.style.width = width + 'px';
                    gl.domElement.style.height = height + 'px';
                  }
                }
              };
              
              // Handle WebGL context loss
              const handleContextLost = (event: Event) => {
                event.preventDefault();
              };
              
              const handleContextRestored = () => {
                // Re-initialize WebGL settings after context is restored
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1.2;
                gl.setPixelRatio(maxPixelRatio);
                setSize();
              };
              
              const canvas = gl.domElement;
              canvas.addEventListener('webglcontextlost', handleContextLost);
              canvas.addEventListener('webglcontextrestored', handleContextRestored);
              
              // Use requestAnimationFrame to ensure container is ready
              requestAnimationFrame(() => {
                setSize();
              });
              const handleResize = () => {
                requestAnimationFrame(setSize);
              };
              window.addEventListener('resize', handleResize);
              return () => {
                window.removeEventListener('resize', handleResize);
                canvas.removeEventListener('webglcontextlost', handleContextLost);
                canvas.removeEventListener('webglcontextrestored', handleContextRestored);
              };
            }}
          >
            <ambientLight intensity={6} />
            <directionalLight position={[0, 0, 10]} intensity={12} />
            <directionalLight position={[5, 5, 5]} intensity={10} />
            <directionalLight position={[-5, 5, -5]} intensity={8} />
            <pointLight position={[0, 0, 8]} intensity={10} />
            <pointLight position={[0, 5, 0]} intensity={6} />
            <spotLight position={[0, 0, 10]} angle={0.8} intensity={12} penumbra={0.3} />
            <directionalLight position={[0, -2, 5]} intensity={5} />
            <Suspense fallback={null}>
              <IPhoneModel />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate={false}
            />
          </Canvas>
        </Suspense>
        )}
      </div>
      </div>

      {/* Animations and Responsive Styles */}
      <style jsx>{`
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShiftOpacity {
          0%, 100% {
            opacity: 1;
            filter: hue-rotate(0deg);
          }
          50% {
            opacity: 0.9;
            filter: hue-rotate(10deg);
          }
        }

        .fade-in-slide-up {
          animation-fill-mode: both;
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          will-change: opacity;
          animation: gradientShiftOpacity 3s ease-in-out infinite;
        }

        .phone-model-container {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
          filter: none;
          -webkit-filter: none;
        }

        .phone-model-container canvas {
          image-rendering: -webkit-optimize-contrast !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          filter: none !important;
          -webkit-filter: none !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
        }
        
        @media (max-width: 768px) {
          .hero-background-image {
            aspect-ratio: auto !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
            height: 100vh !important;
            height: 100dvh !important;
          }
          
          .hero-content-section {
            min-height: 100vh !important;
            min-height: 100dvh !important;
          }
        }

        .hero-heading {
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 900;
          line-height: 1.3;
          margin-bottom: 0px;
          letter-spacing: -0.02em;
          text-align: left;
          overflow: visible;
          padding: 8px 8px 16px 0;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          min-height: 200px;
          contain: layout style;
        }

        .hero-line {
          display: block;
          color: #000000;
          min-height: 1.3em;
          contain: layout style;
          will-change: auto;
        }

        .hero-line-black {
          color: #000000;
        }

        .hero-line-gradient {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          will-change: opacity;
          animation: gradientShiftOpacity 3s ease-in-out infinite;
        }
        
        @keyframes gradientShiftOpacity {
          0%, 100% {
            opacity: 1;
            filter: hue-rotate(0deg);
          }
          50% {
            opacity: 0.9;
            filter: hue-rotate(10deg);
          }
        }

        /* Desktop: enforce nowrap to maintain 4-line layout */
        @media (min-width: 1024px) {
          .hero-line {
            white-space: nowrap;
          }
        }

        /* Smaller screens: allow wrapping if needed */
        @media (max-width: 1023px) {
          .hero-line {
            white-space: normal;
          }
        }

        @media (max-width: 1200px) {
          .hero-heading {
            font-size: clamp(38px, 4.5vw, 68px);
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: clamp(32px, 4vw, 56px);
          }
        }

        @media (max-width: 1024px) {
          .hero-content-section > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          
          .phone-model-container {
            width: 100% !important;
            max-width: 100% !important;
            height: 500px !important;
            min-width: 100% !important;
          }
          
          .hero-text-content {
            padding-left: 40px !important;
            padding-right: 40px !important;
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 20px 120px 20px !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .hero-content-section > div:first-child {
            min-height: calc(100vh - 150px) !important;
            min-height: calc(100dvh - 150px) !important;
            gap: 40px !important;
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
          }
          
          .phone-model-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
          }
          
          .hero-text-content {
            padding-left: 0 !important;
            padding-right: 0 !important;
            min-width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .hero-heading {
            font-size: clamp(32px, 7vw, 56px) !important;
            line-height: 1.2 !important;
            text-align: center !important;
            width: 100% !important;
          }
          
          .fade-in-slide-up {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-bottom: 40px !important;
          }
          
          .fade-in-slide-up button {
            font-size: 16px !important;
          }
          
          .cta-buttons {
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }
          
          .cta-buttons button,
          .cta-buttons a {
            width: auto !important;
            min-width: 200px !important;
            max-width: 320px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 70px 16px 100px 16px !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
          }
          
          .hero-content-section > div:first-child {
            min-height: calc(100vh - 170px) !important;
            min-height: calc(100dvh - 170px) !important;
          }
          
          .phone-model-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
          }
          
          .hero-heading {
            font-size: clamp(28px, 8vw, 48px) !important;
            line-height: 1.15 !important;
          }
          
          .fade-in-slide-up {
            gap: 24px !important;
            margin-bottom: 32px !important;
          }
          
          .fade-in-slide-up button {
            font-size: 15px !important;
            padding: 0 0 6px 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .cta-buttons button,
          .cta-buttons a {
            width: auto !important;
            min-width: 280px !important;
            max-width: 100% !important;
            padding: 12px 20px !important;
            white-space: normal !important;
            word-wrap: break-word !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
