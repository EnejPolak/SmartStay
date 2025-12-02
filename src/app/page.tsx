import HeroSection from '@/components/home/HeroSection';
import WhatIsSmartxStay from '@/components/home/WhatIsSmartxStay';
import ProblemsSection from '@/components/home/ProblemsSection';
import FeaturesOverviewSection from '@/components/home/FeaturesOverviewSection';
import OurHostsSection from '@/components/home/OurHostsSection';
import LocalExperienceSection from '@/components/home/LocalExperienceSection';
import CTAContactSection from '@/components/home/CTAContactSection';

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

