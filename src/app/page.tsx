import HeroSection from '@/components/HeroSection';
import WhatIsSmartxStay from '@/components/WhatIsSmartxStay';
import ProblemsSection from '@/components/ProblemsSection';
import FeaturesOverviewSection from '@/components/FeaturesOverviewSection';
import OurHostsSection from '@/components/OurHostsSection';
import LocalExperienceSection from '@/components/LocalExperienceSection';
import CTAContactSection from '@/components/CTAContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIsSmartxStay />
      <ProblemsSection />
      <FeaturesOverviewSection />
      <OurHostsSection />
      <LocalExperienceSection />
      <CTAContactSection />
    </main>
  );
}

