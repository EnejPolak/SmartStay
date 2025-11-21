'use client';

import React, { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

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
useGLTF.preload('/iphone.glb');

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'hosts' | 'guests'>('hosts');


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
      }}
    >
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
        }}
      >
        {/* Text Content - Left Aligned */}
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'left',
            position: 'relative',
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
            For hosts
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
            For guests
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
          key={activeTab}
          className="fade-in-slide-up"
          style={{
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 900,
            lineHeight: '1.1',
            marginBottom: '0px',
            animation: 'fadeInSlideUp 0.5s ease-out both',
            letterSpacing: '-0.02em',
          }}
        >
          {activeTab === 'hosts' ? (
            <>
              <span style={{ color: '#0f0f0f' }}>Customized app for your</span>{' '}
              <span 
                className="animated-gradient-text"
                style={{ 
                  background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >property.</span>
            </>
          ) : (
            <>
              <span style={{ color: '#0f0f0f' }}>Stress free travel with</span>{' '}
              <span 
                className="animated-gradient-text"
                style={{ 
                  background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >local tips.</span>
            </>
          )}
        </h1>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginTop: '24px',
          }}
        >
          <button
            className="glossy-button"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              color: '#a29eff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            {activeTab === 'hosts' 
              ? 'Book a free presentation'
              : 'Find your next stay'
            }
          </button>
          <button
            className="glossy-button"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              color: '#a29eff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '12px',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(162, 158, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            Read more
          </button>
        </div>
        </div>

        {/* Right Side - iPhone 3D Model */}
      <div
        className="fade-in-slide-up"
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
            <ambientLight intensity={3} />
            <directionalLight position={[0, 0, 10]} intensity={6} />
            <directionalLight position={[5, 5, 5]} intensity={4} />
            <directionalLight position={[-5, 5, -5]} intensity={2.5} />
            <pointLight position={[0, 0, 8]} intensity={5} />
            <pointLight position={[0, 5, 0]} intensity={2} />
            <spotLight position={[0, 0, 10]} angle={0.8} intensity={6} penumbra={0.3} />
            <Suspense fallback={null}>
              <IPhoneModel />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
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

        @media (max-width: 1024px) {
          section {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          div[style*="height: 800px"] {
            width: 100% !important;
            max-width: 100% !important;
            height: 500px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 20px 40px 40px !important;
          }
          
          div[style*="height: 800px"] {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
