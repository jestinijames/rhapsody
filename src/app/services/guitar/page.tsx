import Feedback from '@/components/homepage/feedback';
import InstrumentDescription from '@/components/instrument/instrument-description';
import InstrumentPricing from '@/components/instrument/instrument-pricing';
import OtherInstruments from '@/components/instrument/other-instruments';
import PageLayout from '@/components/layout';

import bg_banner from '@/assets/images/guitar-hero-image.jpg';

const sellerContent = [
  {
    id: '1',
    header: 'Enhances Coordination and Motor Skills',
    description:
      'Playing the guitar involves intricate finger movements, hand-eye coordination, and the ability to synchronize both hands. These skills enhance your motor abilities and improve your overall coordination. Regular practice strengthens muscle memory, leading to smoother transitions and faster playing.',
  },
  {
    id: '2',
    header: 'Builds Confidence and Stage Presence',
    description:
      'As you progress in your guitar journey, you’ll gain confidence in your abilities. Performing in front of others, whether in a small group or on stage, helps build self-assurance and stage presence. This newfound confidence often translates into other areas of life, helping you face challenges with poise.',
  },
  {
    id: '3',
    header: 'Versatility Across Genres',
    description:
      'The guitar is a versatile instrument that spans across multiple genres, from rock and blues to classical and jazz. Whether you aspire to play soulful ballads, energetic rock anthems, or intricate classical pieces, the guitar allows you to explore and master the genre that resonates with you most.',
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

export default function GuitarPage() {
  return (
    <PageLayout header='3'>
      <main>
        <InstrumentDescription
          title='Guitar'
          description='Unlock the world of rhythm and harmony with Rhapsody Academy of Music`s exceptional guitar lessons. Whether you`re strumming your first chord or refining your technique, our personalized lessons will help you master the guitar and express your musical creativity!'
          image={bg_banner}
          body={sellerContent}
        />
        <InstrumentPricing pricingList={pricingList} />
        <OtherInstruments title='Guitar' />
        <Feedback />
      </main>
    </PageLayout>
  );
}
