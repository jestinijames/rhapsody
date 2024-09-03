'use client';

import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <NextTopLoader color='#d67d29' />
    </>
  );
};

export default PageLoader;
