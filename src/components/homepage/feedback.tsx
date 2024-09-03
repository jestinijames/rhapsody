import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import RightArrow from '@/assets/icons/right-arrow';
import feedback_bg from '@/assets/images/feedback-image.jpg';

const Feedback = () => {
  return (
    <section className='container py-20'>
      <div
        className='relative bg-cover bg-no-repeat lg:pt-[117px] pt-20 pb-[69px] lg:pl-[148px] pl-10 lg:pr-[133px] 2sm:pr-24 pr-10 flex md:flex-row flex-col justify-between md:items-end items-start'
        style={{ backgroundImage: `url(${feedback_bg.src})` }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-50 z-0'></div>

        {/* Content */}
        <h1 className='font-farro relative z-10 [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-rhapsody max-w-[600px]'>
          Have a Question?
        </h1>
        <Link href='/contact' className='relative z-10'>
          <Button
            variant='boutline'
            className='flex items-center justify-center gap-3 text-2xl font-bold text-primary-foreground-rhapsody  border-2 border-primary-foreground-rhapsody  hover:text-primary-rhapsody px-10 py-[15px] whitespace-nowrap w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bg-secondary after:w-full after:h-0 hover:after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:bg-primary-foreground-rhapsody transition-all duration-500'
          >
            Let’s Talk <RightArrow width='35' height='22' />{' '}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Feedback;
