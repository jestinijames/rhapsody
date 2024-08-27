import React from 'react';
import { useSwiper } from 'swiper/react';

import { Button } from '@/components/ui/button';

import RightArrow from '@/assets/icons/right-arrow';

const SwiperNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex items-center gap-[22px]'>
      <Button
        onClick={() => swiper.slidePrev()}
        className='text-primary-foreground rotate-180'
      >
        {' '}
        <RightArrow width='35' height='22' />{' '}
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        className='text-primary-foreground'
      >
        {' '}
        <RightArrow width='35' height='22' />{' '}
      </Button>
    </div>
  );
};

export default SwiperNavigation;
