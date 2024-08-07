import React from 'react';

import SocialMediaList from '@/components/layout/socials';

import { siteConfig } from '@/constant/config';

const TopNavbar = () => {
  return (
    <div className='container-fluid  py-4 flex justify-between items-center'>
      <p className='font-semibold mb-0 text-primary'>
        Welcome to Rhapsody Academy of Music
      </p>

      <div className='flex items-center gap-[20px] divide-x divide-black'>
        <p className='font-bold text-primary'>
          {' '}
          <span>Email Us:</span> {siteConfig.email}
        </p>
        <div className='pl-5'>
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
