'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { cardSlideAnimation } from '@/lib/utils';

import OptimizedImage from '@/components/ui/craft/optimized-image';

import { SectionSidebarImgProps } from '@/types/types';
const SectionSidebarImg: React.FC<SectionSidebarImgProps> = ({
  img,
  section_name,
  className,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      variants={cardSlideAnimation()}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      <OptimizedImage
        useSkeleton
        src={img}
        loading='lazy'
        sizes='auto'
        alt={section_name}
        className='h-auto sm:min-h-[750px] min-h-[420px] w-auto object-cover'
      />
    </motion.div>
  );
};

export default SectionSidebarImg;
