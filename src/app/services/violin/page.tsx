import Feedback from '@/components/homepage/feedback';
import InstrumentDescription from '@/components/instrument/instrument-description';
import InstrumentPricing from '@/components/instrument/instrument-pricing';
import OtherInstruments from '@/components/instrument/other-instruments';
import PageLayout from '@/components/layout';

import bg_banner from '@/assets/images/violin-hero-image.jpg';

const sellerContent = [
  {
    id: '1',
    header: 'Develops Patience and Discipline',
    description:
      'Learning to play the violin requires a high level of patience and discipline. Mastering the correct posture, bowing technique, and finger placements takes time and dedication. This journey teaches valuable life skills, such as perseverance and attention to detail, which can benefit you in various aspects of life.',
  },
  {
    id: '2',
    header: 'Expressive and Emotional Range',
    description:
      'The violin is known for its expressive and emotional capabilities. From the hauntingly beautiful sounds of a slow piece to the vibrant energy of a fast-paced composition, the violin can convey a wide range of emotions. This ability to express feelings through music makes the violin a deeply personal instrument.',
  },
  {
    id: '3',
    header: 'Rich Historical and Cultural Significance',
    description:
      'The violin has a rich history and is deeply rooted in various cultures around the world. By learning the violin, you connect with a long tradition of musicianship and cultural heritage. Whether you’re playing classical masterpieces or folk tunes, the violin allows you to be part of a timeless musical legacy.',
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

export default function ViolinPage() {
  return (
    <PageLayout header='2'>
      <main>
        <InstrumentDescription
          title='Violin'
          description="Explore the elegance and precision of violin playing with Rhapsody Academy of Music. Our tailored violin lessons are designed to guide you through the complexities of the instrument, whether you're a beginner or an experienced musician looking to refine your skills."
          image={bg_banner}
          body={sellerContent}
        />
        <InstrumentPricing pricingList={pricingList} />
        <OtherInstruments title='Violin' />
        <Feedback />
      </main>
    </PageLayout>
  );
}
