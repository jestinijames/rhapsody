'use client';
import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='flex h-screen'>
      {/* Left Section (Text) */}
      <div className='w-1/2 flex flex-col justify-center items-start p-12'>
        <h1 className='text-5xl font-bold mb-4'>404</h1>
        <p className='text-2xl mb-8'>Page not found</p>
        <p className='text-lg mb-8'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a href='/' className='text-lg text-blue-600 underline'>
          ← Back to home
        </a>
      </div>

      {/* Right Section (Image) */}
      <div className='w-1/2 relative'>
        <Image
          src='/path-to-your-image.jpg' // Update with the correct path to your image
          alt='404 Background'
          layout='fill'
          objectFit='cover'
          quality={100} // Optional: Adjust image quality (1-100)
          priority
        />
      </div>
    </div>
  );
}
