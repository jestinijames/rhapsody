import Feedback from '@/components/homepage/feedback';
import InstrumentDescription from '@/components/instrument/instrument-description';
import InstrumentPricing from '@/components/instrument/instrument-pricing';
import OtherInstruments from '@/components/instrument/other-instruments';
import PageLayout from '@/components/layout';

import bg_banner from '@/assets/images/drums-hero-image.jpg';

const sellerContent = [
  {
    id: '1',
    header: 'Improves Rhythm and Timing',
    description:
      'Playing the drums is all about rhythm and timing. Drummers are the backbone of any musical ensemble, providing the beat that keeps everything together. Learning to play the drums sharpens your sense of timing and rhythm, making you an essential part of any band or group.',
  },
  {
    id: '2',
    header: 'Enhances Physical Coordination',
    description:
      'Drumming is a full-body workout that improves your physical coordination. It involves using all four limbs independently and in sync, which enhances your motor skills and muscle coordination. Regular practice not only improves your drumming but also contributes to better overall physical fitness.',
  },
  {
    id: '3',
    header: 'Boosts Creativity and Stress Relief',
    description:
      'Drumming is a powerful outlet for creativity and stress relief. The physical act of playing the drums can release tension and provide a sense of accomplishment. Moreover, experimenting with different beats and rhythms encourages creativity, allowing you to express yourself in unique and innovative ways.',
  },
];

const pricingList = [
  {
    id: '35',
    minutes: 'Minutes Per Session',
    price: '$100',
    features: [
      'Perfect for beginners',
      'All age groups',
      'Ideal for hobbyists/weekend warriors',
      'Short and crisp',
      'Affordable price',
    ],
  },
  {
    id: '50',
    minutes: 'Minutes Per Session',
    price: '$200',
    features: [
      'Ideal for any level',
      'Best option for Grade Exam preparations',
      'Best Value',
    ],
  },
  {
    id: '60',
    minutes: 'Minutes Per Session',
    price: '$300',
    features: [
      'For aspiring professionals',
      'In-depth focus',
      'Best option for seniors/adult learners',
    ],
  },
];

export default function DrumsPage() {
  return (
    <PageLayout header='2'>
      <main>
        <InstrumentDescription
          title='Drums'
          description="Dive into the rhythm with Rhapsody Academy of Music's dynamic drum lessons. Whether you're a beginner eager to learn the basics or an advanced drummer refining your technique, our lessons will help you master the beat and bring your energy to every performance!"
          image={bg_banner}
          body={sellerContent}
        />
        <InstrumentPricing pricingList={pricingList} />
        <OtherInstruments title='Drums' />
        <Feedback />
      </main>
    </PageLayout>
  );
}
