'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import StandOutSection from '@/components/StandOutSection';
import HostMeansMoreSection from '@/components/HostMeansMoreSection';
import GiveGuestsEverythingSection from '@/components/GiveGuestsEverythingSection';
import SmartxStayCertifiedSection from '@/components/SmartxStayCertifiedSection';
import CommunitySection from '@/components/CommunitySection';
import FinalCTASection from '@/components/FinalCTASection';

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
      const scale = 3 / maxDim;
      
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

const ForHostsPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      welcome: 'Welcome, Smart',
      stay: 'Stay Hosts.',
      subtitle: 'You\'re more than a host; you\'re a creator of experiences. We\'re here to help you make every guest\'s stay unforgettable through care, connection, and seamless technology.',
      bookPresentation: 'Book a free presentation',
      askQuestion: 'Ask a question',
      loading: 'Loading...'
    },
    sl: {
      welcome: 'Dobrodošli, Smart',
      stay: 'Stay Gostitelji.',
      subtitle: 'Niste le gostitelj; ste ustvarjalec izkušenj. Tu smo, da vam pomagamo narediti vsak gostov obisk nepozaben skozi skrb, povezovanje in brezhibno tehnologijo.',
      bookPresentation: 'Rezervirajte brezplačno predstavitev',
      askQuestion: 'Postavite vprašanje',
      loading: 'Nalaganje...'
    }
  };

  const t = translations[language];

  return (
    <main>
      {/* Fixed Background - skupno ozadje za celo stran */}
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      {/* Page Content - vse sekcije se scrollajo čez ozadje */}
      <div className="page-content">
      {/* Hero Section */}
      <section
        style={{
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Inter, sans-serif',
          padding: '80px 40px 20px 80px',
          position: 'relative',
          gap: '64px',
        }}
      >
        {/* Text Content - Left Side */}
        <div
          className="hero-text-content"
          style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'left',
          }}
        >
          {/* Main Heading */}
          <h1
            className="fade-in-slide-up"
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
              animation: 'fadeInSlideUp 0.5s ease-out both',
            }}
          >
            <span style={{ color: '#0f0f0f' }}>{t.welcome}</span>
            <span 
              className="animated-gradient-text"
              style={{ 
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >x</span>
            <span style={{ color: '#0f0f0f' }}>{t.stay}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="fade-in-slide-up"
            style={{
              color: '#737373',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 400,
              lineHeight: '1.6',
              textAlign: 'left',
              margin: '0 0 40px 0',
              animation: 'fadeInSlideUp 0.5s ease-out 0.2s both',
            }}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="fade-in-slide-up cta-buttons"
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInSlideUp 0.5s ease-out 0.4s both',
            }}
          >
            {/* Primary Button */}
            <Link 
              href="https://hanakucej-qr-space.zohobookings.eu/#/242002000000052012"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.bookPresentation}
            </Link>

            {/* Secondary Button */}
            <Link href="/contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
              {t.askQuestion}
            </Link>
          </div>
        </div>

        {/* Right Side - iPhone 3D Model */}
        <div
          className="fade-in-slide-up phone-model-container"
          style={{
            flex: '1',
            minWidth: '400px',
            maxWidth: '800px',
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
              color: '#737373',
              fontSize: '18px'
            }}>
              {t.loading}
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ width: '100%', height: '100%' }}
            >
              <ambientLight intensity={5} />
              <directionalLight position={[5, 5, 5]} intensity={10} />
              <directionalLight position={[-5, 5, 5]} intensity={8} />
              <directionalLight position={[0, 0, 10]} intensity={10} />
              <pointLight position={[0, 3, 5]} intensity={8} />
              <pointLight position={[0, 0, 8]} intensity={6} />
              <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={10} />
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
      </section>

      {/* Responsive Styles */}
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

        @media (max-width: 1024px) {
          section {
            flex-direction: column !important;
            align-items: center !important;
            padding: 80px 40px 40px 40px !important;
            gap: 40px !important;
          }
          
          .phone-model-container {
            width: 100% !important;
            max-width: 100% !important;
            height: 500px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 160px 20px 60px 20px !important;
            min-height: auto !important;
            align-items: center !important;
            justify-content: center !important;
            flex-direction: column !important;
            gap: 40px !important;
          }
          
          .phone-model-container {
            display: none !important;
          }
          
          .hero-text-content {
            text-align: center !important;
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            min-width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          h1 {
            font-size: clamp(32px, 7vw, 56px) !important;
            text-align: center !important;
            line-height: 1.2 !important;
            margin: 0 0 20px 0 !important;
            width: 100% !important;
          }
          
          p[style*="color: '#737373'"] {
            text-align: center !important;
            margin: 0 0 32px 0 !important;
            max-width: 100% !important;
            padding: 0 10px !important;
          }
          
          .cta-buttons {
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .cta-buttons button,
          .cta-buttons a {
            width: auto !important;
            min-width: 200px !important;
            max-width: 280px !important;
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 140px 16px 50px 16px !important;
          }
          
          .hero-text-content {
            padding: 0 !important;
          }
          
          h1 {
            font-size: clamp(28px, 8vw, 48px) !important;
            line-height: 1.15 !important;
            margin: 0 0 16px 0 !important;
          }
          
          p[style*="color: '#737373'"] {
            font-size: clamp(16px, 4vw, 18px) !important;
            margin: 0 0 28px 0 !important;
            padding: 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
          }
          
          .cta-buttons button,
          .cta-buttons a {
            width: auto !important;
            min-width: 240px !important;
            max-width: 100% !important;
            font-size: 15px !important;
            padding: 12px 24px !important;
          }
        }
      `}</style>

      {/* Stand Out Section */}
      <StandOutSection />

      {/* Host Means More Section */}
      <HostMeansMoreSection />

      {/* Give Guests Everything Section */}
      <GiveGuestsEverythingSection />

      {/* SmartxStay Certified Section */}
      <SmartxStayCertifiedSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Final CTA Section */}
      <FinalCTASection />
      </div>
    </main>
  );
};

export default ForHostsPage;

