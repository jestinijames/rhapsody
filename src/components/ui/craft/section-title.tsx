'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import RightArrow from '@/assets/icons/right-arrow';

import { SectionTitleProps } from '@/types/types';

const SectionTitle: React.FC<SectionTitleProps> = ({
  sectionName,
  sectionTitle,
  sectionDesc,
  text_muted,
  bg_muted,
  link,
  button_text,
}) => {
  const [scroll, setScroll] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.0'],
  });

  // Always call useTransform unconditionally
  const scrollValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', scroll ? '15%' : `${scrollHeight / 3}px`]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScrollHeight(window.scrollY);
        setScroll(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHeight]); // Depend on scrollHeight to update as needed

  const nameWithoutSpace = formatString(sectionTitle);

  return (
    <>
      <div
        id={nameWithoutSpace}
        ref={containerRef}
        className='overflow-x-hidden'
      >
        <motion.div
          style={{ translateX: scrollValue, transitionDuration: '1s' }}
        >
          <h1 className='font-farro mt-16 text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary opacity-20 xl:text-[324px] lg:text-[200px] md:text-[170px] sm:text-[140px] text-[100px] whitespace-nowrap font-extrabold leading-135 '>
            {sectionName}
          </h1>
        </motion.div>
      </div>
      <div className='container relative'>
        <div
          className={cn(
            `xl:-mt-52 mt-16 xl:ml-12.5 lg:ml-9 md:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary`
          )}
        >
          <h2
            className={cn(
              `[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-rhapsody mb-5 font-farro ${text_muted}`
            )}
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <span
            className={cn(`block w-[300px] h-[1px] bg-primary ${bg_muted}`)}
          ></span>
          <div className='flex md:flex-row flex-col justify-between md:items-center'>
            <h5
              className={cn(
                ` lg:text-[35px] sm:text-3xl text-2xl font-semibold mt-4 max-w-[690px] md:mb-0 mb-7 !leading-160 font-poppins text-secondary-rhapsody ${text_muted}`
              )}
            >
              {sectionDesc}
            </h5>
            {button_text && (
              <Link href={link || '#'}>
                {' '}
                {/* Handle missing link */}
                <Button
                  variant='boutline'
                  className={cn(
                    `2sm:px-10 px-3 after:left-0 after:${bg_muted}`
                  )}
                >
                  {button_text} <RightArrow height='22' width='35' />{' '}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;

const formatString = (sectionName: string) => {
  // Remove symbols, spaces, and make the first letter lowercase
  const cleanString = sectionName
    .replace(/[^\w\s]/g, '') // Remove all symbols except word characters and spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim(); // Remove leading and trailing spaces

  // Convert to camelCase
  const camelCaseString = cleanString
    .split(' ') // Split by spaces
    .map(
      (
        word,
        index // Capitalize each word except the first one
      ) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(''); // Join back into a single string without spaces

  return camelCaseString;
};
