import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import OptimizedImage from '@/components/ui/craft/optimized-image';

import notFoundImage from '@/assets/images/nowhere.jpg';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='relative flex flex-col h-screen'>
      {/* Header with Logo */}
      <header className='flex justify-between items-center p-6 w-full fixed top-0 left-0 bg-white z-10'>
        <div className='text-2xl font-bold'>
          {/* Logo Placeholder */}
          <Link href='/' className='logo text-primary-foreground'>
            <OptimizedImage
              useSkeleton
              height='31'
              width='219'
              alt='Rhapsody'
              src='/logo/logo-full.png'
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className='flex flex-1 pt-16 pb-16'>
        {/* Left Section (Text) */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-12 relative z-20'>
          <h1 className='text-5xl font-bold mb-4'>404</h1>
          <p className='text-2xl mb-8'>Page not found</p>
          <p className='text-lg mb-8'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <a
            href='/'
            className='text-lg flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl  font-bold border-2 border-primary px-10 sm:py-[15px] py-3 relative overflow-hidden after:absolute after:right-0 after:bottom-0 after:top-0 after:z-[-1] after:bg-primary after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:text-secondary-foreground transition-all duration-500 text-primary'
          >
            ← Back to home
          </a>
        </div>

        {/* Right Section (Image) */}
        <div className='hidden md:block absolute inset-y-0 right-0 w-1/2'>
          <Image
            src={notFoundImage} // Update with the correct path to your image
            alt='404 Background'
            layout='fill'
            objectFit='cover'
            quality={100} // Optional: Adjust image quality (1-100)
            priority
          />
        </div>
      </div>

      {/* Footer with Links */}
      <footer className='flex justify-between items-center p-6 w-full fixed bottom-0 left-0 bg-white z-10'>
        <a href='/contact' className='text-lg text-gray-600'>
          Contact support
        </a>
      </footer>
    </div>
  );
}
