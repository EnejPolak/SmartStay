import ForHostsHero from '@/components/for-hosts/ForHostsHero';
import StandOutSection from '@/components/for-hosts/StandOutSection';
import HostMeansMoreSection from '@/components/for-hosts/HostMeansMoreSection';
import GiveGuestsEverythingSection from '@/components/for-hosts/GiveGuestsEverythingSection';
import SmartxStayCertifiedSection from '@/components/for-hosts/SmartxStayCertifiedSection';
import CommunitySection from '@/components/for-hosts/CommunitySection';
import FinalCTASection from '@/components/for-hosts/FinalCTASection';

export default function ForHostsPage() {
  return (
    <main>
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      <div className="page-content">
        <ForHostsHero />
        <StandOutSection />
        <HostMeansMoreSection />
        <GiveGuestsEverythingSection />
        <SmartxStayCertifiedSection />
        <CommunitySection />
        <FinalCTASection />
      </div>
    </main>
  );
}
