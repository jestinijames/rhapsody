'use client';

import React from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { HeaderThree } from '@/components/layout/header-three';
import HeaderTwo from '@/components/layout/header-two';

const PageLayout = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) => {
  return (
    <div className=' relative z-10' style={{ opacity: 1 }}>
      {header === '1' ? (
        <Header />
      ) : header === '2' ? (
        <HeaderTwo />
      ) : (
        <HeaderThree />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
