import ForGuestsHero from '@/components/for-guests/ForGuestsHero';
import HostCuratedSection from '@/components/for-guests/HostCuratedSection';
import GreatTripSection from '@/components/for-guests/GreatTripSection';
import EverythingYouNeedSection from '@/components/for-guests/EverythingYouNeedSection';
import FindYourStaySection from '@/components/for-guests/FindYourStaySection';
import OurStaysSection from '@/components/for-guests/OurStaysSection';

export default function ForGuestsPage() {
  return (
    <main>
      <div className="fixed-background">
        <div className="circle circle-purple"></div>
        <div className="circle circle-blue"></div>
      </div>

      <div className="page-content">
        <ForGuestsHero />
        <HostCuratedSection />
        <GreatTripSection />
        <EverythingYouNeedSection />
        <FindYourStaySection />
        <OurStaysSection />
      </div>
    </main>
  );
}
