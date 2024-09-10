'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import SectionTitle from '@/components/ui/craft/section-title';

import { Icons, processList } from '@/constant/config';

const Process = () => {
  const { ref, inView } = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });

  return (
    <section>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Process'
          sectionTitle='Guided Musical Growth'
          sectionDesc='If you would like to proceed with our system:'
        />
      </div>
      <div className='container mt-30'>
        <ul>
          {processList.map(({ process_name, icon }) => {
            const Icon = Icons[icon];

            return (
              <li
                key='id'
                className='bg-secondary-rhapsody grid lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary'
              >
                <Icon
                  ref={ref}
                  className={`h-[65px] w-20 relative -top-2 left-3 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120  ${
                    inView
                      ? 'animate-text-line-animation stroke-primary-rhapsody stroke-dasharray-1000 stroke-dashoffset-1000'
                      : ' fill-transparent stroke-primary-rhapsody '
                  }`}
                />

                <div className='w-full'>
                  <h2 className='text-2xl font-bold leading-160 text-primary-foreground-rhapsody'>
                    {process_name}
                  </h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Process;
