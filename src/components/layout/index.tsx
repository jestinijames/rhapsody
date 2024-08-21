'use client';

import React from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import HeaderTwo from '@/components/layout/header-two';

const PageLayout = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) => {
  return (
    <div>
      {header === '1' ? <Header /> : <HeaderTwo />}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
