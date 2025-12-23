import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import WhatIsSmartxStay from '@/components/home/WhatIsSmartxStay';
import ProblemsSection from '@/components/home/ProblemsSection';
import FeaturesOverviewSection from '@/components/home/FeaturesOverviewSection';
import OurHostsSection from '@/components/home/OurHostsSection';
import LocalExperienceSection from '@/components/home/LocalExperienceSection';
import CTAContactSection from '@/components/home/CTAContactSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'SmartxStay is a digital guest experience platform that helps vacation rental hosts share all essential information, recommendations, and services in one place by simply scanning a QR code or tapping an NFC tag.',
  openGraph: {
    title: 'SmartxStay - Digital Guest Experience Platform',
    description: 'Transform your vacation rental with SmartxStay. Share all essential information, recommendations, and services in one place with QR codes and NFC tags.',
    url: 'https://smartxstay.com',
    images: [
      {
        url: '/logo__1__720.png',
        width: 1200,
        height: 630,
        alt: 'SmartxStay - Digital Guest Experience Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartxStay - Digital Guest Experience Platform',
    description: 'Transform your vacation rental with SmartxStay. Share all essential information with QR codes and NFC tags.',
    images: ['/logo__1__720.png'],
  },
  alternates: {
    canonical: 'https://smartxstay.com',
  },
};

export default function Home() {
  return (
    <main>
      {/* Fixed Background - skupno ozadje za celo stran */}
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      {/* Page Content - vse sekcije se scrollajo čez ozadje */}
      <div className="page-content">
      <HeroSection />
      <WhatIsSmartxStay />
      <ProblemsSection />
      <FeaturesOverviewSection />
      <OurHostsSection />
      <LocalExperienceSection />
      <CTAContactSection />
      </div>
    </main>
  );
}

