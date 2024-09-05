import Faq from '@/components/faq';
import Feedback from '@/components/homepage/feedback';
import PageLayout from '@/components/layout';

export default function FAQPage() {
  return (
    <PageLayout header='3'>
      <main>
        <Faq />
        <Feedback />
      </main>
    </PageLayout>
  );
}
