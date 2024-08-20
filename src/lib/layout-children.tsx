'use client';

import React from 'react';

import { Toaster } from '@/components/ui/toaster';

import MapDirectionProvider from '@/context-api/map-direction-provider';

import { LayoutChildrenProps } from '@/types/types';

const LayoutChildren: React.FC<LayoutChildrenProps> = ({ children }) => {
  return (
    <>
      <MapDirectionProvider>{children}</MapDirectionProvider>
      <Toaster />
    </>
  );
};

export default LayoutChildren;
