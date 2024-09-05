'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/homepage/banner';
import Counter from '@/components/homepage/counter';
import Feedback from '@/components/homepage/feedback';
import Programs from '@/components/homepage/programs';
import Vision from '@/components/homepage/vision';
import WhyUs from '@/components/homepage/why-us';
import PageLayout from '@/components/layout';

export default function HomePage() {
  return (
    <PageLayout header='3'>
      <main role='main' className='main relative z-10'>
        <Banner />
        <Vision />
        <Counter />
        <WhyUs />
        <Programs />
        <Feedback />
      </main>
    </PageLayout>
  );
}
