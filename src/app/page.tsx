'use client';

import * as React from 'react';
import '@/lib/env';

import Banner from '@/components/homepage/banner';
import Counter from '@/components/homepage/counter';
import Feedback from '@/components/homepage/feedback';
import Programs from '@/components/homepage/programs';
import Vision from '@/components/homepage/vision';
import PageLayout from '@/components/layout';

export default function HomePage() {
  return (
    <PageLayout>
      <main>
        <Banner />
        <Vision />
        <Counter />
        <Programs />
        <Feedback />
      </main>
    </PageLayout>
  );
}