'use client';
import React from 'react';

import SectionTitle from '@/components/ui/craft/section-title';

import { PricingCardProps } from '@/types/types';

const InstrumentPricing = ({
  pricingList,
}: {
  pricingList: PricingCardProps[];
}) => {
  return (
    <section className='mb-30'>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Pricing'
          sectionTitle='Choose the Perfect Plan for Your Musical Journey'
          sectionDesc="Explore our flexible pricing options tailored to fit your needs, whether you're a beginner or an aspiring professional. Find the right plan that suits your schedule and goals."
        />
      </div>
      <div className='container lg:pt-30 2sm:pt-20 pt-14'>
        <div>
          <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
            {pricingList.map(({ id, price, minutes, features }, index) => (
              <PricingCard
                key={index}
                id={id}
                price={price}
                minutes={minutes}
                features={features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function PricingCard({
  id,

  price,
  minutes,
  features,
}: PricingCardProps) {
  return (
    // <div className='-mt-6 lg:-mt-0'>
    //   <OutlineSvgText text={id} />
    //   <Title title_text={minutes} className='mb-1' />
    //   <div>
    //     <p className='font-semibold'>{price}</p>
    //   </div>
    //   <div className='mt-5 mb-7.5'>

    <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-transparent rounded-lg border border-gray-100 shadow  xl:p-8  '>
      <h3 className='mb-4 text-2xl font-semibold'>{id + ' ' + minutes}</h3>
      {/* <p className='font-light text-gray-500 sm:text-lg'>
        Best option for personal use & for your next project.
      </p> */}
      <div className='flex justify-center items-baseline my-8'>
        <span className='mr-2 text-5xl font-extrabold'>{price}</span>
        <span className='text-gray-500'>/session</span>
      </div>
      <ul role='list' className='mb-8 space-y-4 text-left'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center space-x-3'>
            <svg
              className='flex-shrink-0 w-5 h-5 text-green-500 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstrumentPricing;
