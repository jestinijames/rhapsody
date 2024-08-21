import React from 'react';

import SectionTitle from '@/components/ui/craft/section-title';

import { processList } from '@/constant/config';

const Process = () => {
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
          {processList.map(({ id, process_name }) => (
            <li
              key='id'
              className='bg-secondary grid lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary'
            >
              <svg
                strokeWidth='1'
                className='h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation'
              >
                <text x='0%' dominantBaseline='middle' y='70%'>
                  {id}
                </text>
              </svg>
              <div className='w-full'>
                <h2 className='text-2xl font-bold leading-160 text-primary-foreground'>
                  {process_name}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
