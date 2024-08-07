'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import MapDirectionProvider from '@/context-api/map-direction-provider';

import { LayoutChildrenProps } from '@/types/types';

const LayoutChildren: React.FC<LayoutChildrenProps> = ({ children }) => {
  return (
    <>
      <MapDirectionProvider>{children}</MapDirectionProvider>
      <Toaster
        position='top-right'
        containerStyle={{
          top: 60,
        }}
      />
    </>
  );
};

export default LayoutChildren;
