import Feedback from '@/components/homepage/feedback';
import InstrumentDescription from '@/components/instrument/instrument-description';
import InstrumentPricing from '@/components/instrument/instrument-pricing';
import OtherInstruments from '@/components/instrument/other-instruments';
import PageLayout from '@/components/layout';

import bg_banner from '@/assets/images/piano-hero-image.jpg';

const sellerContent = [
  {
    id: '1',
    header: 'Improves Cognitive Skills',
    description:
      'Learning to play the piano offers profound cognitive benefits that extend beyond music. Studies have shown that musicians, particularly pianists, tend to have expanded vocabularies, improved reading proficiency, and a heightened ability to perceive emotions in spoken language. The intricate process of reading music, coordinating hand movements, and maintaining rhythm engages multiple areas of the brain simultaneously. This mental workout can enhance memory, concentration, and problem-solving skills, making piano lessons a valuable investment in your overall cognitive development.',
  },
  {
    id: '2',
    header: 'Freedom of Creative Expression',
    description:
      'The piano is a powerful medium for expressing creativity and emotions. Whether you`re a beginner or an advanced player, the piano allows you to translate your innermost feelings into sound. As you progress, you`ll discover how the instrument can serve as a tool for storytelling, allowing you to convey complex emotions through melody, harmony, and rhythm. The ability to improvise and compose your own music further enhances this creative freedom, opening up endless possibilities for self-expression. Playing the piano is not just about following notes on a page. its about connecting with the music on a personal level and sharing your unique voice with the world.',
  },
  {
    id: '3',
    header: 'Versatility',
    description:
      'One of the piano`s greatest strengths is its versatility. Whether you`re interested in classical music, jazz, pop, or any other genre, the piano can accommodate your musical preferences. Its wide range and ability to produce both melody and harmony make it an ideal instrument for exploring various styles. Whether you want to master Beethoven`s symphonies, perform your favorite pop songs, or experiment with jazz improvisation, the piano provides the perfect platform to delve into the music of your choice. This versatility ensures that every pianist, regardless of their taste or skill level, can find joy and satisfaction in playing the instrument.',
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
