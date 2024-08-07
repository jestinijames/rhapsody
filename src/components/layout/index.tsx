'use client';

import React from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
