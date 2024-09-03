'use client';
import { StaticImageData } from 'next/image'; // Import StaticImageData
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import OptimizedImage from '@/components/ui/craft/optimized-image';

import portfolio_1 from '@/assets/images/portfolio-1.jpg';
import portfolio_2 from '@/assets/images/portfolio-2.jpg';
import portfolio_3 from '@/assets/images/portfolio-3.jpg';
import portfolio_4 from '@/assets/images/portfolio-4.jpg';

const portfolio = [
  {
    id: 1,
    img: portfolio_1,
    instrument_name: 'Piano',
    link: '/services/piano',
  },
  {
    id: 2,
    img: portfolio_2,
    instrument_name: 'Guitar',
    link: '/services/guitar',
  },
  {
    id: 3,
    img: portfolio_3,
    instrument_name: 'Violin',
    link: '/services/violin',
  },
  {
    id: 4,
    img: portfolio_4,
    instrument_name: 'Drums',
    link: '/services/drums',
  },
];

const OtherInstruments = ({ title }: { title: string }) => {
  // Filter out the item that matches the title
  const filteredPortfolio = portfolio.filter(
    (item) => item.instrument_name !== title
  );
  return (
    <div className='container pt-20'>
      <h2 className='font-farro [font-size:_clamp(40px,7vw,90px)] text-primary-rhapsody font-extrabold leading-120 max-w-[651px]'>
        Other Instruments:
      </h2>
      <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-5 pt-10'>
        {filteredPortfolio.map(({ id, img, link, instrument_name }) => (
          <InstrumentCard
            key={id}
            instrument_name={instrument_name}
            img={img}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherInstruments;

function InstrumentCard({
  instrument_name,
  img,
  link,
}: {
  instrument_name: string;
  img: string | StaticImageData;
  link: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(instrument_name.toLowerCase())}
      className='relative hover-underline cursor-pointer'
    >
      <OptimizedImage
        useSkeleton
        src={img}
        loading='lazy'
        alt={instrument_name}
      />
      <div className='absolute bottom-0 left-0 w-full h-full bg-white-liner flex items-end px-7.5 pb-6'>
        <Link href={link}>
          <span className='md:text-4xl sm:text-3xl text-2xl font-bold text-secondary-rhapsody'>
            {instrument_name}
          </span>
        </Link>
      </div>
    </div>
  );
}
