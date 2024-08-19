'use client';
import React from 'react';
import { ReactTyped } from 'react-typed';

const TextTyped = ({ text }: { text: string[] }) => {
  return (
    <ReactTyped
      strings={text}
      typeSpeed={100}
      loop
      backSpeed={20}
      cursorChar='_'
      showCursor={true}
    />
  );
};

export default TextTyped;
