// Import the fonts
import { Metadata } from 'next';
import { Farro, Poppins } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import LayoutChildren from '@/lib/layout-children';

import ProgressCircle from '@/components/ui/scrollCircle';

import { siteConfig } from '@/constant/config';

const farro = Farro({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-farro',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,

  authors: [
    {
      name: 'Jestin James',
      url: 'https://github.com/jestinijames',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${farro.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
      >
        <div id='page-wapper' className='!relative '>
          {/* ------ body line start */}
          <div className='w-full h-full fixed -z-[1] top-0 left-0 page-lines'>
            <div className='container relative h-full'>
              <span className='absolute left-3 top-0 h-full w-[1px] bg-secondary_rgba'></span>
              <span className='absolute right-[28%] top-0 h-full w-[1px] bg-secondary_rgba'></span>
              <span className='absolute right-3 top-0 h-full w-[1px] bg-secondary_rgba'></span>
            </div>
          </div>
          {/* ------ body line end */}
          <ProgressCircle />
          <LayoutChildren>{children}</LayoutChildren>
        </div>
      </body>
    </html>
  );
}
