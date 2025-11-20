'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import EverythingYouNeedSection from '@/components/EverythingYouNeedSection';
import FindYourStaySection from '@/components/FindYourStaySection';
import OurStaysSection from '@/components/OurStaysSection';

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

const ForGuestsPage = () => {
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
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'Inter, sans-serif',
          padding: '80px 40px 40px 80px',
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
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 900,
              lineHeight: '1.1',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#0f0f0f' }}>Your stay,</span>{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #a29eff 0%, #b8a1ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>made smarter.</span>
          </h1>

          {/* Description */}
          <p
            style={{
              color: '#737373',
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: '1.6',
              margin: '0 0 40px 0',
              fontWeight: 400
            }}
          >
            Explore more, relax better, and feel connected wherever you go. With SmartxStay, 
            everything you need for a perfect stay is right at your fingertips.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}
          >
            {/* Primary Button */}
            <button
              style={{
                backgroundColor: '#daceff',
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '16px',
                borderRadius: '40px',
                padding: '12px 32px',
                border: 'none',
                cursor: 'pointer',
                minWidth: '150px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c9baff';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 206, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#daceff';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Find your Stay
            </button>

            {/* Secondary Button */}
            <button
              style={{
                backgroundColor: '#ffffff',
                color: '#b399ff',
                fontWeight: 500,
                fontSize: '16px',
                borderRadius: '40px',
                padding: '12px 32px',
                border: 'none',
                cursor: 'pointer',
                minWidth: '150px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f6ff';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 206, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.boxShadow = 'none';
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
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 60px 40px 40px 40px !important;
          }
          
          div[style*="height: 800px"] {
            width: 100% !important;
            max-width: 100% !important;
            height: 500px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 60px 20px 40px 40px !important;
          }
          
          h1 {
            font-size: 36px !important;
          }
          
          h2 {
            font-size: 32px !important;
          }
          
          div[style*="height: 800px"] {
            height: 400px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* Host Curated Section */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 40px',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 900,
            lineHeight: '1.1',
            margin: '0 0 24px 0',
            textAlign: 'center',
            maxWidth: '900px',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#0f0f0f' }}>Your host curated</span>{' '}
          <span style={{ 
            color: '#a29eff',
            background: 'linear-gradient(135deg, #a29eff 0%, #b8a1ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>everything.</span>{' '}
          <br />
          <span style={{ color: '#0f0f0f' }}>You just</span>{' '}
          <span style={{ 
            color: '#a29eff',
            background: 'linear-gradient(135deg, #a29eff 0%, #b8a1ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>enjoy.</span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: 500,
            color: '#737373',
            lineHeight: '1.7',
            margin: '0 0 60px 0',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Local experiences, curated by someone who actually knows. No more guessing, no more googling—just authentic moments waiting for you.
        </p>

        {/* Feature List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(168, 197, 255, 0.2)',
                borderRadius: '12px',
                marginBottom: '8px',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#a8c5ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: 0,
                lineHeight: '1.3',
              }}
            >
              No more tourist traps
            </h3>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: '#737373',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Discover authentic local spots your host personally recommends
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(168, 197, 255, 0.2)',
                borderRadius: '12px',
                marginBottom: '8px',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#a8c5ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: 0,
                lineHeight: '1.3',
              }}
            >
              Trusted info from your host
            </h3>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: '#737373',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Get insider tips from locals who know the area best
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(168, 197, 255, 0.2)',
                borderRadius: '12px',
                marginBottom: '8px',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#a8c5ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: 0,
                lineHeight: '1.3',
              }}
            >
              Hidden gems you&apos;d never find alone
            </h3>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: '#737373',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Access secret spots only locals know about
            </p>
          </div>

          {/* Feature 4 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.5)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(162, 158, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(162, 158, 255, 0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(162, 158, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(162, 158, 255, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(168, 197, 255, 0.2)',
                borderRadius: '12px',
                marginBottom: '8px',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#a8c5ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#0f0f0f',
                margin: 0,
                lineHeight: '1.3',
              }}
            >
              Easy decisions, unforgettable moments
            </h3>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: '#737373',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Spend less time planning, more time creating memories
            </p>
          </div>
        </div>
      </section>

      {/* Great Trip Starts Section */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 800,
            lineHeight: '1.2',
            margin: '0 0 32px 0',
            textAlign: 'center',
            maxWidth: '900px',
            color: '#0f0f0f',
          }}
        >
          Because a great trip starts with<br />
          someone who&apos;s on your side.
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#737373',
            lineHeight: '1.8',
            margin: '0 0 48px 0',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          When you book with a SmartxStay host, you&apos;re not just getting a place to sleep, you&apos;re
          getting someone who genuinely cares about your experience. SmartxStay hosts don&apos;t
          leave you guessing, googling, or stressing. They guide you, support you, and make
          sure your stay feels effortless.
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 500,
            fontStyle: 'italic',
            color: '#a29eff',
            lineHeight: '1.6',
            margin: 0,
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Travel with hosts who go the extra mile. Travel with SmartxStay.
        </p>
      </section>

      {/* Everything You Need Section */}
      <EverythingYouNeedSection />

      {/* Find Your Stay Section */}
      <FindYourStaySection />

      {/* Our Stays Section */}
      <OurStaysSection />
    </div>
    </main>
  );
};

export default ForGuestsPage;
