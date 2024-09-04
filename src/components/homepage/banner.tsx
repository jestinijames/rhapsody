import Link from 'next/link';

import { Button } from '@/components/ui/button';
import TextTyped from '@/components/ui/craft/text-typed';

import RightArrow from '@/assets/icons/right-arrow';

const Banner = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <div className='bg-hero-section bg-no-repeat h-screen bg-center bg-cover'>
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 object-cover h-screen w-full'
        >
          <source src='../video.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black bg-opacity-50' />
        <div className='container'>
          <div className='absolute top-1/2 -translate-y-1/2'>
            <h1 className='text-primary-foreground-rhapsody [font-size:_clamp(60px,10vw,150px)] font-extrabold leading-[90%] font-farro'>
              Fostering Musical <br />
              <TextTyped
                text={[
                  'Passion',
                  'Creativity',
                  'Innovation',
                  'Talent',
                  'Inspiration',
                  'Mastery',
                  'Dedication',
                  'Expression',
                  'Artistry',
                  'Excellence',
                ]}
              />
            </h1>
            <Link href='/contact' className='mt-16 inline-block'>
              <Button
                variant='boutline'
                className='sm:px-10 px-4 after:left-0 after:bg-primary-rhapsody text-primary-foreground-rhapsody border-secondary hover:text-primary-foreground-rhapsody'
              >
                Book a free consultation <RightArrow width='35' height='22' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
