'use client';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
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
            {pricingList.map(
              ({ id, onlinePrice, inHomePrice, features }, index) => (
                <PricingCard
                  key={index}
                  id={id}
                  onlinePrice={onlinePrice}
                  inHomePrice={inHomePrice}
                  features={features}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function PricingCard({
  id,
  onlinePrice,
  inHomePrice,
  features,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-secondary-rhapsody bg-primary-foreground-rhapsody
      ${id === '45' ? ' transform scale-105' : ''} 
      rounded-lg border border-gray-200 shadow-md xl:p-8 
      ${
        id === '45'
          ? 'border-4 border-primary-rhapsody shadow-2xl animate-glow'
          : ''
      } transition-transform duration-300`}
    >
      <h2 className='mb-4 text-2xl font-extrabold leading-110 text-primary-rhapsody font-farro'>
        {id} Minutes
      </h2>

      {/* Online Pricing Section */}
      <div className='mb-4'>
        <h4 className='font-bold text-lg'>ONLINE </h4>
        <p className='font-semibold'>{onlinePrice}/LESSON</p>
        <ul className='my-4 space-y-2 text-left'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center space-x-3'>
              <svg
                className='flex-shrink-0 w-5 h-5 text-primary-rhapsody'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* In-Home Pricing Section - HIDING FOR NOW */}
      <div className='hidden'>
        <h4 className='font-bold text-lg'>IN-HOME</h4>
        <p className='font-semibold'>{inHomePrice}/LESSON</p>
      </div>

      {/* Call to action */}
      <div className='mt-6'>
        <Link href='/contact'>
          <Button
            variant='boutline'
            className='flex items-center justify-center gap-3 text-xl font-bold text-secondary-rhapsody  border-2 border-secondary-rhapsody  hover:text-primary-rhapsody !px-5 !py-[7.5px] whitespace-nowrap w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bg-secondary after:w-full after:h-0 hover:after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:bg-secondary-rhapsody transition-all duration-500'
          >
            Book Now
          </Button>
        </Link>
      </div>

      {/* Additional information */}
      <p className='mt-6 text-xs italic'>
        All prices are in Canadian dollars (CAD).
      </p>
    </div>
  );
}

export default InstrumentPricing;
