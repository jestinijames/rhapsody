'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  cardSlideAnimation,
  cardSlideAnimationDelay,
  cardSlideAnimationRight,
  cardSlideAnimationRightDelay,
} from '@/lib/utils';

import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/craft/optimized-image';
import SectionTitle from '@/components/ui/craft/section-title';

import RightArrow from '@/assets/icons/right-arrow';
import { collegesData } from '@/constant/config';

import { ProjectCardProps } from '@/types/types';

const OtherCurriculums = () => {
  return (
    <section>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Others'
          sectionTitle='Other Curriculums'
          sectionDesc='We are very flexible in offering quality lessons. Moreover, we provide multiple choices for students who want to select a particular syllabus and take their grade exams.'
        />
      </div>
      <div className='lg:pt-30 2sm:pt-20 pt-14'>
        <div>
          {collegesData.map(
            ({ id, college_desc, college_img, college_name, link }) => {
              if (id % 2 === 0) {
                return (
                  <ProjectCard
                    key={id}
                    college_desc={college_desc}
                    college_img={college_img}
                    link={link}
                    college_name={college_name}
                    order='lg:order-1 order-0'
                    position='lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2'
                    imageVariants={cardSlideAnimationRight()}
                    cardVariants={cardSlideAnimationRightDelay()}
                  />
                );
              } else {
                return (
                  <ProjectCard
                    key={id}
                    college_desc={college_desc}
                    college_img={college_img}
                    link={link}
                    college_name={college_name}
                    order=''
                    position='lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2'
                    imageVariants={cardSlideAnimation()}
                    cardVariants={cardSlideAnimationDelay()}
                  />
                );
              }
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default OtherCurriculums;

const ProjectCard: React.FC<ProjectCardProps> = ({
  order,
  position,
  college_desc,
  college_img,
  college_name,
  link,
  imageVariants,
  cardVariants,
}) => {
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
                  src={college_img}
                  loading='lazy'
                  alt={college_name}
                  fill
                  sizes='auto'
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
              <h3 className='xl:text-5xl md:text-[40px] text-4xl font-extrabold leading-120 text-secondary-foreground pb-10'>
                {college_name}
              </h3>
              <p className='text-secondary-foreground mb-7'>{college_desc}</p>
              {/* <ul className='mb-9'>
                <li className='flex  items-center mb-[6px]'>
                  <span className='inline-block font-extrabold min-w-32 text-secondary-foreground'>
                    Focus Areas:
                  </span>
                  <span className='font-medium text-secondary-foreground'>
                    {focus_areas}
                  </span>
                </li>
                <li className='flex  items-center mb-[6px]'>
                  <span className='inline-block font-extrabold min-w-32 text-secondary-foreground'>
                    Global Reach:
                  </span>
                  <span className='font-medium text-secondary-foreground'>
                    {global_reach}
                  </span>
                </li>
              </ul> */}
              <Link target='_blank' href={link}>
                <Button className='border-secondary text-primary-foreground hover:text-secondary-foreground after:left-0 after:bg-secondary'>
                  Visit <RightArrow width='35' height='22' />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
