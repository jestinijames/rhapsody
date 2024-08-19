import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import RightArrow from '@/assets/icons/right-arrow';
import feedback_bg from '@/assets/images/feedback-image.jpg';

const Feedback = () => {
  return (
    <section className='container py-20'>
      <div
        className='bg-cover bg-no-repeat lg:pt-[117px] pt-20 pb-[69px] lg:pl-[148px] pl-10 lg:pr-[133px] 2sm:pr-24 pr-10 flex md:flex-row flex-col justify-between md:items-end items-start'
        style={{ backgroundImage: `url(${feedback_bg.src})` }}
      >
        <h1 className='[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary max-w-[600px]'>
          Have a Question?
        </h1>
        <Link href='/contact'>
          <Button className='after:left-0 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground mt-6 md:mt-0'>
            {' '}
            Let’s Talk <RightArrow width='35' height='22' />{' '}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Feedback;
