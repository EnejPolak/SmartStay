'use client';

import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
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
      
      // Ensure materials are visible
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
              });
            } else {
              (mesh.material as THREE.Material).transparent = false;
              (mesh.material as THREE.Material).opacity = 1;
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

// Preload the model
useGLTF.preload('/welcomeIphone.glb');

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'hosts' | 'guests'>('hosts');
  const headingRef = useRef<HTMLHeadingElement>(null);
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
    }
  };

  const t = translations[language];

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
        minHeight: 'auto',
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, sans-serif',
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/heroPicture.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay for better text readability - gradient from left (white) to right (transparent) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.8) 55%, rgba(255, 255, 255, 0.5) 70%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)',
          zIndex: 0,
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
              color: activeTab === 'hosts' ? '#a29eff' : '#9a9a9a',
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
                e.currentTarget.style.color = '#9a9a9a';
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
              color: activeTab === 'guests' ? '#a29eff' : '#9a9a9a',
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
                e.currentTarget.style.color = '#9a9a9a';
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
              href="https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012"
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
        className="fade-in-slide-up phone-model-container"
        style={{
          flex: '1',
          minWidth: '350px',
          maxWidth: '600px',
          height: '800px',
          position: 'relative',
          animation: 'fadeInSlideUp 0.8s ease-out 0.8s both',
        }}
      >
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
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ width: '100%', height: '100%', background: 'transparent' }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={5} />
            <directionalLight position={[0, 0, 10]} intensity={10} />
            <directionalLight position={[5, 5, 5]} intensity={8} />
            <directionalLight position={[-5, 5, -5]} intensity={6} />
            <pointLight position={[0, 0, 8]} intensity={8} />
            <pointLight position={[0, 5, 0]} intensity={5} />
            <spotLight position={[0, 0, 10]} angle={0.8} intensity={10} penumbra={0.3} />
            <directionalLight position={[0, -2, 5]} intensity={4} />
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

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .fade-in-slide-up {
          animation-fill-mode: both;
        }

        .animated-gradient-text {
          animation: gradientShift 3s ease-in-out infinite;
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
        }

        .hero-line {
          display: block;
          color: #000000;
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
          animation: gradientShift 3s ease-in-out infinite;
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
            padding: 160px 20px 60px 20px !important;
            min-height: auto !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .phone-model-container {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
          }
          
          .hero-content-section > div:first-child {
            gap: 40px !important;
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
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
            padding: 140px 16px 50px 16px !important;
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
