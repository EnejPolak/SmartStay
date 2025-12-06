'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

// iPhone Model Component
function IPhoneModel() {
  const gltf = useGLTF('/guestIphone.glb');
  
  React.useEffect(() => {
    if (gltf && gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxDim;
      
      gltf.scene.scale.multiplyScalar(scale);
      gltf.scene.position.sub(center.multiplyScalar(scale));
      
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
                if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial || 
                    (mat as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial) {
                  (mat as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial).emissiveIntensity = 1.2;
                }
              });
            } else {
              (mesh.material as THREE.Material).transparent = false;
              (mesh.material as THREE.Material).opacity = 1;
              if ((mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial || 
                  (mesh.material as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial) {
                (mesh.material as THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial).emissiveIntensity = 1.2;
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

// Preload the model
useGLTF.preload('/guestIphone.glb');

export default function ForGuestsHero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      yourStay: 'Your stay,',
      madeSmarter: 'made smarter.',
      subtitle: 'Explore more, relax better, and feel connected wherever you go. With SmartxStay, everything you need for a perfect stay is right at your fingertips.',
      findYourStay: 'Find your Stay',
      askQuestion: 'Ask a question',
      loading: 'Loading iPhone...'
    },
    sl: {
      yourStay: 'Vaše potovanje,',
      madeSmarter: 'načrtovano pametneje.',
      subtitle: 'Raziščite več, sprostite se bolje in se počutite povezani, kamor koli greste. Z SmartxStay je vse, kar potrebujete za popolno potovanje – od navodil do lokalnih biserov – na dosegu roke.',
      findYourStay: 'Poiščite svoj obisk',
      askQuestion: 'Postavite vprašanje',
      loading: 'Nalaganje iPhone...'
    },
    hr: {
      yourStay: 'Vaše putovanje,',
      madeSmarter: 'planirano pametnije.',
      subtitle: 'Istražite više, opustite se bolje i osjećajte se povezano, kamo god idete. Sa SmartxStay je sve što trebate za savršeno putovanje – od uputa do lokalnih dragulja – na dohvat ruke.',
      findYourStay: 'Pronađite svoj boravak',
      askQuestion: 'Postavite pitanje',
      loading: 'Učitavanje iPhone...'
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section className="for-guests-hero">
      <div className="hero-text-content">
        <h1 className="fade-in-slide-up">
          <span style={{ color: '#0f0f0f', whiteSpace: 'nowrap' }}>{t.yourStay}</span>
          <br />
          <span className="animated-gradient-text" style={{ whiteSpace: 'nowrap' }}>{t.madeSmarter}</span>
        </h1>

        <p className="fade-in-slide-up subtitle">
          {t.subtitle}
        </p>

        <div className="fade-in-slide-up cta-buttons">
          <button className="btn-primary">
            {t.findYourStay}
          </button>

          <Link href="/contact" className="btn-tertiary" style={{ textDecoration: 'none' }}>
            {t.askQuestion}
          </Link>
        </div>
      </div>

      <div className="fade-in-slide-up phone-model-container">
        <Suspense fallback={
          <div className="loading-fallback">
            {t.loading}
          </div>
        }>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            className="canvas-3d"
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
              const maxPixelRatio = Math.min(window.devicePixelRatio || 2, 3);
              gl.setPixelRatio(maxPixelRatio);
              
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
      </div>

      <style jsx>{`
        .for-guests-hero {
          min-height: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          padding: 80px 40px 20px 80px;
          position: relative;
          gap: 64px;
        }

        .hero-text-content {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          text-align: left;
        }

        h1 {
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          animation: fadeInSlideUp 0.5s ease-out both;
        }

        .subtitle {
          color: #737373;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.6;
          margin: 0 0 40px 0;
          font-weight: 400;
          animation: fadeInSlideUp 0.5s ease-out 0.2s both;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: flex-start;
          animation: fadeInSlideUp 0.5s ease-out 0.4s both;
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .phone-model-container {
          flex: 1;
          min-width: 400px;
          max-width: 800px;
          height: 800px;
          position: relative;
          animation: fadeInSlideUp 0.8s ease-out 0.8s both;
          z-index: 2;
          isolation: isolate;
        }

        .loading-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a29eff;
          font-size: 18px;
          background-color: rgba(244, 241, 254, 0.5);
          border-radius: 12px;
        }

        .canvas-3d {
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .fade-in-slide-up {
          animation-fill-mode: both;
        }

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

        .phone-model-container {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
          filter: none;
          -webkit-filter: none;
        }

        .phone-model-container :global(canvas) {
          image-rendering: -webkit-optimize-contrast !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          filter: none !important;
          -webkit-filter: none !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
        }

        @media (max-width: 1024px) {
          .for-guests-hero {
            flex-direction: column !important;
            align-items: center !important;
            padding: 80px 40px 40px 40px !important;
          }
          
          .phone-model-container {
            width: 100% !important;
            max-width: 100% !important;
            height: 500px !important;
          }
        }
        
        @media (max-width: 768px) {
          .for-guests-hero {
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
          
          .subtitle {
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
          
          .cta-buttons :global(button),
          .cta-buttons :global(a) {
            width: auto !important;
            min-width: 200px !important;
            max-width: 280px !important;
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .for-guests-hero {
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
          
          .subtitle {
            font-size: clamp(16px, 4vw, 18px) !important;
            margin: 0 0 28px 0 !important;
            padding: 0 !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
          }
          
          .cta-buttons :global(button),
          .cta-buttons :global(a) {
            width: auto !important;
            min-width: 240px !important;
            max-width: 100% !important;
            font-size: 15px !important;
            padding: 12px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

