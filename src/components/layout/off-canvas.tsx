'use client';
import React from 'react';

//import useOverflowHidden from '@/hooks/useOverflowHidden';
import { cn } from '@/lib/utils';

import CloseIcon from '@/assets/icons/close-icon';
import Search from '@/assets/icons/search';

import { OffcanvasProps } from '@/types/types';

const Offcanvas: React.FC<OffcanvasProps> = ({
  setOffcanvaseActive,
  offcanvaseActive,
  bg_muted,
}) => {
  // useOverflowHidden(offcanvaseActive)
  return (
    <div
      className={cn(
        `w-full min-h-screen h-full bg-secondary-rhapsody ${bg_muted} fixed z-40 ${
          offcanvaseActive ? 'top-0 visible ' : '-top-[400%] invisible'
        } left-0 transition-all duration-700`
      )}
    >
      <div className='w-full relative'>
        <button
          onClick={() => setOffcanvaseActive(false)}
          className='absolute right-10 top-10 text-secondary-foreground'
        >
          <CloseIcon />
        </button>
      </div>
      <hr />
      <form className='container h-full mx-auto flex justify-center  flex-col'>
        <h1 className=' [font-size:_clamp(90px,14vw,200px)] font-extrabold text-primary-foreground-rhapsody leading-[100%] mb-5'>
          Search
        </h1>
        <div className='relative'>
          <input
            type='text'
            placeholder='Type & Hit Enter'
            required
            className='w-full border-[1.5px] border-primary-foreground-rhapsody bg-transparent outline-none px-9  py-[19px] 2sm:text-[35px] text-2xl font-medium text-primary-foreground-rhapsody placeholder:text-primary-foreground-rhapsody  '
          />
          <span className='text-primary-foreground-rhapsody absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer'>
            {' '}
            <Search height='38' width='38' />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Offcanvas;
