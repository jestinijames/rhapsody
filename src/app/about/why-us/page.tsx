import Feedback from '@/components/homepage/feedback';
import PageLayout from '@/components/layout';
import GrowthProgram from '@/components/why-us/growth-program';
import HolisiticMusicianshipProgram from '@/components/why-us/holistic-musicianship-program';
import OtherCurriculums from '@/components/why-us/other-curriculums';
import PageTags from '@/components/why-us/page-tags';
import PerformanceOpportunities from '@/components/why-us/performance-opportunities';
import Process from '@/components/why-us/process';

export default function WhyUsPage() {
  return (
    <PageLayout header='2'>
      <main>
        <PageTags />
        <HolisiticMusicianshipProgram />
        <GrowthProgram />
        <Process />
        <OtherCurriculums />
        <PerformanceOpportunities />
        <Feedback />
      </main>
    </PageLayout>
  );
}
