'use client';
import React from 'react';

import SectionTitle from '@/components/ui/craft/section-title';
import ServiceCard from '@/components/ui/craft/service-card';

import { growthData } from '@/constant/config';

const GrowthProgram = () => {
  return (
    <section className='pt-20'>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Growth'
          sectionTitle='Growth Map'
          sectionDesc='To make it easier to analyze and track your progress, we have divided our MVS Curriculum into 12 levels'
        />
        <div className='lg:pt-30 2sm:pt-20 pt-14  '>
          <div className='grid xl:grid-cols-4 lg:grid-cols-2 2sm:grid-cols-2 gap-x-[32px] gap-y-10'>
            {growthData.map(({ id, link, service_desc, service_name }) => (
              <ServiceCard
                key={id}
                id={id}
                service_desc={service_desc}
                service_name={service_name}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthProgram;
