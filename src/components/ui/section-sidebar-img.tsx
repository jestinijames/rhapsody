'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { cardSlideAnimation } from '@/lib/utils';

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
      <Image
        src={img}
        loading='lazy'
        width={500} // Set a default width or use a specific width
        height={300} // Set a default height or use a specific height
        alt={section_name}
      />
    </motion.div>
  );
};

export default SectionSidebarImg;
