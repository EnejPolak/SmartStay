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

