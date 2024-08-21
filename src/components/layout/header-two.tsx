import React from 'react';

import BottomNavbar from '@/components/layout/bottom-navbar';
import MobileNavbar from '@/components/layout/mobile-navbar';

const HeaderTwo = () => {
  return (
    <header className='w-full bg-background shadow-md'>
      <div className=' hidden xl:block'>
        <div className='container-fluid'>
          <BottomNavbar />
        </div>
      </div>
      <div className='xl:hidden block'>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default HeaderTwo;
