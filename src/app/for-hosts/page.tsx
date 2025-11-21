'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import StandOutSection from '@/components/StandOutSection';
import HostMeansMoreSection from '@/components/HostMeansMoreSection';
import GiveGuestsEverythingSection from '@/components/GiveGuestsEverythingSection';
import SmartxStayCertifiedSection from '@/components/SmartxStayCertifiedSection';
import CommunitySection from '@/components/CommunitySection';
import FinalCTASection from '@/components/FinalCTASection';

// iPhone Model Component
function IPhoneModel() {
  const gltf = useGLTF('/iphone.glb');
  
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
useGLTF.preload('/iphone.glb');

const ForHostsPage = () => {
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
          style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'left',
          }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#0f0f0f' }}>Welcome, Smart</span>
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
            <span style={{ color: '#0f0f0f' }}>Stay Hosts.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: '#737373',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              fontWeight: 400,
              lineHeight: '1.6',
              textAlign: 'left',
              margin: '0 0 40px 0'
            }}
          >
            You&apos;re more than a host; you&apos;re a creator of experiences. We&apos;re here to help you make every guest&apos;s stay unforgettable through care, connection, and seamless technology.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {/* Primary Button */}
            <button
              style={{
                background: 'linear-gradient(135deg, rgba(184, 161, 255, 0.9) 0%, rgba(124, 95, 217, 0.9) 100%)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '16px',
                padding: '16px 40px',
                border: 'none',
                cursor: 'pointer',
                minWidth: '220px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 4px 16px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(124, 95, 217, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(124, 95, 217, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(124, 95, 217, 0.2)';
              }}
            >
              Book a free presentation
            </button>

            {/* Secondary Button */}
            <button
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                color: '#7c5fd9',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '16px',
                padding: '16px 40px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderTop: '1px solid rgba(255, 255, 255, 0.5)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                minWidth: '180px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              }}
            >
              Ask a question
            </button>
          </div>
        </div>

        {/* Right Side - iPhone 3D Model */}
        <div
          style={{
            flex: '1',
            minWidth: '400px',
            maxWidth: '800px',
            height: '800px',
            position: 'relative',
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
              Loading...
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ width: '100%', height: '100%' }}
            >
              <ambientLight intensity={2} />
              <directionalLight position={[5, 5, 5]} intensity={3} />
              <directionalLight position={[-5, 5, 5]} intensity={2} />
              <pointLight position={[0, 3, 5]} intensity={4} />
              <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={3} />
              <Suspense fallback={null}>
                <IPhoneModel />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                minDistance={4}
                maxDistance={8}
                autoRotate={false}
              />
            </Canvas>
          </Suspense>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
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

        .animated-gradient-text {
          animation: gradientShift 3s ease-in-out infinite;
        }

        @media (max-width: 1024px) {
          section {
            flex-direction: column !important;
            padding: 60px 40px !important;
            gap: 40px !important;
          }
          
          section > div:last-child {
            height: 500px !important;
            min-width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
            gap: 32px !important;
          }
          
          section > div:first-child {
            min-width: 100% !important;
            max-width: 100% !important;
          }
          
          section > div:last-child {
            height: 400px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 40px 16px !important;
          }
          
          section > div:last-child {
            height: 350px !important;
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

