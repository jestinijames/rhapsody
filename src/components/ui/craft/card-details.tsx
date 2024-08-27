'use client';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

import {
  cardSlideAnimationRight,
  cardSlideAnimationRightDelay,
} from '@/lib/utils';

import OptimizedImage from '@/components/ui/craft/optimized-image';

import { CardDetailsProps } from '@/types/types';
const CardDetails: FC<CardDetailsProps> = ({
  order,
  position,
  card_desc,
  card_img,
}) => {
  const imageVariants = cardSlideAnimationRight();
  const cardVariants = cardSlideAnimationRightDelay();

  return (
    <div className='xl:max-w-[95%] w-full mx-auto relative overflow-hidden '>
      <div className='container'>
        <div className='flex lg:flex-row flex-col items-center lg:pb-[170px] pb-25 '>
          <div className={`${order} lg:w-1/2 `}>
            <div
              className={`${position} w-full xl:max-w-[1100px] max-w-[800px] max-h-[700px] h-full`}
            >
              <motion.div
                initial='offscreen'
                whileInView='onscreen'
                variants={imageVariants}
                viewport={{ once: true, amount: 0 }}
              >
                <OptimizedImage
                  useSkeleton
                  src={card_img}
                  loading='lazy'
                  alt='card-img-1'
                  width='1050'
                  height='700'
                  className=' h-full'
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            variants={cardVariants}
            viewport={{ once: true, amount: 0 }}
            className='lg:w-1/2 lg:mt-[187px] relative z-[1]'
          >
            <div
              className={`bg-primary xl:px-16 px-8 xl:pt-[78px] pt-10 xl:pb-[58px] pb-7  `}
            >
              {/* <p className='text-secondary-foreground mb-7'>{card_desc}</p> */}
              {card_desc}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
