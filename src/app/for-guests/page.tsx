'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import EverythingYouNeedSection from '@/components/EverythingYouNeedSection';
import FindYourStaySection from '@/components/FindYourStaySection';
import OurStaysSection from '@/components/OurStaysSection';

// iPhone Model Component
function IPhoneModel() {
  const gltf = useGLTF('/guestIphone.glb');
  
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
useGLTF.preload('/guestIphone.glb');

const ForGuestsPage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      yourStay: 'Your stay,',
      madeSmarter: 'made smarter.',
      subtitle: 'Explore more, relax better, and feel connected wherever you go. With SmartxStay, everything you need for a perfect stay is right at your fingertips.',
      findYourStay: 'Find your Stay',
      askQuestion: 'Ask a question',
      loading: 'Loading iPhone...',
      hostCurated: 'Your host curated',
      everything: 'everything.',
      youJust: 'You just',
      enjoy: 'enjoy.',
      curatedSubtitle: 'Local experiences, curated by someone who actually knows. No more guessing, no more googling—just authentic moments waiting for you.',
      noTouristTraps: 'No more tourist traps',
      noTouristTrapsDesc: 'Discover authentic local spots your host personally recommends',
      trustedInfo: 'Trusted info from your host',
      trustedInfoDesc: 'Get insider tips from locals who know the area best',
      hiddenGems: 'Hidden gems you\'d never find alone',
      hiddenGemsDesc: 'Access secret spots only locals know about',
      easyDecisions: 'Easy decisions, unforgettable moments',
      easyDecisionsDesc: 'Spend less time planning, more time creating memories',
      greatTrip: 'Because a great trip starts with',
      someoneOnYourSide: 'someone who\'s on your side.',
      greatTripDesc: 'When you book with a SmartxStay host, you\'re not just getting a place to sleep, you\'re getting someone who genuinely cares about your experience.',
      greatTripDesc2: 'SmartxStay hosts don\'t leave you guessing, googling, or stressing.',
      greatTripDesc3: 'They guide you, support you, and make sure your stay feels effortless.',
      travelWithHosts: 'Travel with hosts who go the extra mile. Travel with SmartxStay.'
    },
    sl: {
      yourStay: 'Vaše potovanje,',
      madeSmarter: 'načrtovano pametneje.',
      subtitle: 'Raziščite več, sprostite se bolje in se počutite povezani, kamor koli greste. Z SmartxStay je vse, kar potrebujete za popolno potovanje – od navodil do lokalnih biserov – na dosegu roke.',
      findYourStay: 'Poiščite svoj obisk',
      askQuestion: 'Postavite vprašanje',
      loading: 'Nalaganje iPhone...',
      hostCurated: 'Vaš gostitelj je poskrbel za',
      everything: 'vse.',
      youJust: 'Vi samo',
      enjoy: 'ustvarjate spomine.',
      curatedSubtitle: 'Lokalne izkušnje, pripravljene s strani nekoga, ki res ve. Ni več ugibanja, ni več googlanja—samo pristni trenutki, ki vas čakajo.',
      noTouristTraps: 'Ni več turističnih pasti',
      noTouristTrapsDesc: 'Odkrijte pristne lokalne kraje, ki jih vaš gostitelj osebno priporoča',
      trustedInfo: 'Zaupanja vredne informacije od vašega gostitelja',
      trustedInfoDesc: 'Pridobite notranje nasvete od domačinov, ki najbolje poznajo območje',
      hiddenGems: 'Skriti biseri, ki jih nikoli ne bi našli sami',
      hiddenGemsDesc: 'Dostop do skritih krajev, ki jih poznajo le domačini',
      easyDecisions: 'Enostavne odločitve, nepozabni trenutki',
      easyDecisionsDesc: 'Porabite manj časa za načrtovanje, več časa za ustvarjanje spominov',
      greatTrip: 'Vaše potovanje se začne z',
      someoneOnYourSide: 'zaupanjem in brezskrbnostjo.',
      greatTripDesc: 'Ko rezervirate pri SmartxStay gostitelju, ne dobite le kraja za spanje, ampak nekoga, ki mu je mar in je za vas pripravil vse.',
      greatTripDesc2: 'SmartxStay gostitelji vas ne puščajo ugibati, iskati po Googlu in se stresirati.',
      greatTripDesc3: 'Z našo tehnologijo celostno poskrbijo za vašo izkušnjo.',
      travelWithHosts: 'Potujte z gostitelji, ki grejo korak dlje. Potujte z SmartxStay.'
    },
    hr: {
      yourStay: 'Vaše putovanje,',
      madeSmarter: 'planirano pametnije.',
      subtitle: 'Istražite više, opustite se bolje i osjećajte se povezano, kamo god idete. Sa SmartxStay je sve što trebate za savršeno putovanje – od uputa do lokalnih dragulja – na dohvat ruke.',
      findYourStay: 'Pronađite svoj boravak',
      askQuestion: 'Postavite pitanje',
      loading: 'Učitavanje iPhone...',
      hostCurated: 'Vaš domaćin je pripremio',
      everything: 'sve.',
      youJust: 'Vi samo',
      enjoy: 'stvarate uspomene.',
      curatedSubtitle: 'Lokalna iskustva, pripremljena od strane nekoga tko stvarno zna. Nema više nagađanja, nema više googlanja—samo autentični trenutci koji vas čekaju.',
      noTouristTraps: 'Nema više turističkih zamki',
      noTouristTrapsDesc: 'Otkrijte autentična lokalna mjesta koja vaš domaćin osobno preporučuje',
      trustedInfo: 'Pouzdane informacije od vašeg domaćina',
      trustedInfoDesc: 'Dobijte unutarnje savjete od domaćina koji najbolje poznaju područje',
      hiddenGems: 'Skriveni dragulji koje nikada ne biste pronašli sami',
      hiddenGemsDesc: 'Pristup tajnim mjestima koja samo domaćini znaju',
      easyDecisions: 'Lake odluke, nezaboravni trenutci',
      easyDecisionsDesc: 'Potrošite manje vremena na planiranje, više vremena na stvaranje uspomena',
      greatTrip: 'Vaše putovanje počinje s',
      someoneOnYourSide: 'povjerenjem i bezbrižnošću.',
      greatTripDesc: 'Kada rezervirate kod SmartxStay domaćina, ne dobivate samo mjesto za spavanje, već nekoga tko mu je stalo i tko je za vas pripremio sve.',
      greatTripDesc2: 'SmartxStay domaćini vas ne ostavljaju da nagađate, tražite na Googlu i stresirate se.',
      greatTripDesc3: 'S našom tehnologijom sveobuhvatno se brinu za vaše iskustvo.',
      travelWithHosts: 'Putujte s domaćinima koji idu korak dalje. Putujte sa SmartxStay.'
    }
  };

  const t = translations[language] || translations.en;

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
            <span style={{ color: '#0f0f0f', whiteSpace: 'nowrap' }}>{t.yourStay}</span>
            <br />
            <span 
              className="animated-gradient-text"
              style={{ 
                background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                whiteSpace: 'nowrap',
              }}
            >{t.madeSmarter}</span>
          </h1>

          {/* Description */}
          <p
            className="fade-in-slide-up"
            style={{
              color: '#737373',
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: '1.6',
              margin: '0 0 40px 0',
              fontWeight: 400,
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
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              animation: 'fadeInSlideUp 0.5s ease-out 0.4s both',
            }}
          >
            {/* Primary Button */}
            <button className="btn-primary">
              {t.findYourStay}
            </button>

            {/* Secondary Button */}
            <Link href="/contact" className="btn-tertiary" style={{ textDecoration: 'none' }}>
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
              color: '#a29eff',
              fontSize: '18px',
              backgroundColor: 'rgba(244, 241, 254, 0.5)',
              borderRadius: '12px',
            }}>
              {t.loading}
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
          }
          
          .phone-model-container {
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
          
          h2 {
            font-size: 32px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
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

      {/* Host Curated Section */}
      <section
        style={{
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          marginTop: '0px',
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
            maxWidth: '1600px',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#0f0f0f' }}>{t.hostCurated}</span>{' '}
          <span 
            className="animated-gradient-text"
            style={{ 
              background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >{t.everything}</span>
          <br />
          <span style={{ color: '#0f0f0f' }}>{t.youJust}</span>{' '}
          <span 
            className="animated-gradient-text"
            style={{ 
              background: 'linear-gradient(90deg, #7db8ff 0%, #a29eff 50%, #7c5fd9 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >{t.enjoy}</span>
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
          {t.curatedSubtitle}
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
              {t.noTouristTraps}
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
              {t.noTouristTrapsDesc}
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
              {t.trustedInfo}
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
              {t.trustedInfoDesc}
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
              {t.hiddenGems}
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
              {t.hiddenGemsDesc}
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
              {t.easyDecisions}
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
              {t.easyDecisionsDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Great Trip Starts Section */}
      <section
        style={{
          minHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 40px',
          marginTop: '0px',
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
          {t.greatTrip}<br />
          {t.someoneOnYourSide}
        </h2>

        {/* Description */}
        <div
          style={{
            margin: '0 0 48px 0',
            textAlign: 'center',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.8',
              margin: '0 0 16px 0',
            }}
          >
            {t.greatTripDesc}
          </p>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.8',
              margin: '0 0 16px 0',
            }}
          >
            {t.greatTripDesc2}
          </p>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: 400,
              color: '#737373',
              lineHeight: '1.8',
              margin: '0',
            }}
          >
            {t.greatTripDesc3}
          </p>
        </div>

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
          {t.travelWithHosts}
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
