import Feedback from '@/components/homepage/feedback';
import InstrumentDescription from '@/components/instrument/instrument-description';
import InstrumentPricing from '@/components/instrument/instrument-pricing';
import OtherInstruments from '@/components/instrument/other-instruments';
import PageLayout from '@/components/layout';

import bg_banner from '@/assets/images/piano-hero-image.jpg';
import { pricingList, sellerContent } from '@/constant/config';

export default function PianoPage() {
  return (
    <PageLayout header='3'>
      <main>
        <InstrumentDescription
          title='Piano'
          description='Discover the art of piano playing through Rhapsody Academy of Music`s exclusive piano lessons. Select your desired lesson duration and schedule. Embark on a personalized journey that will unlock your hidden musical abilities!'
          image={bg_banner}
          body={sellerContent}
        />
        <InstrumentPricing pricingList={pricingList} />
        <OtherInstruments title='Piano' />
        <Feedback />
      </main>
    </PageLayout>
  );
}
