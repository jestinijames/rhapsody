import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SocialMediaList from '@/components/layout/socials';

import RightArrow from '@/assets/icons/right-arrow';
import { servicesData, siteConfig } from '@/constant/config';

const Footer = () => {
  return (
    <footer className=' container-fluid  mx-auto '>
      <div className=' bg-secondary '>
        <div className='container'>
          <div className='grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20'>
            <div>
              <Link href='' className='text-primary-foreground'>
                {/* <Logo height='30' width='218' /> */}
                <Image
                  height='30'
                  width='218'
                  alt='Rhapsody'
                  src='/logo/logo-full.png'
                />
              </Link>
              <h5 className='xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3'>
                Fostering the love of music
              </h5>
              <SocialMediaList />
            </div>
            <div className='mt-12 lg:mt-0 flex gap-x-10'>
              <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
              <div>
                {/* <h5 className='text-2xl font-extrabold block text-primary-foreground leading-160 '>
                  Address Spain:
                </h5>
                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                <div className=''>
                  <p className='text-xl font-bold text-primary-foreground'>
                    Architronix,{' '}
                  </p>
                  <p className='text-lg text-primary-foreground'>
                    Avda. Valencia, 3, 46891,{' '}
                  </p>
                  <p className='text-lg  text-primary-foreground'>
                    Palomar (Valencia), SPAIN{' '}
                  </p>
                </div>
                <div className='mt-[17px]'>
                  <Link
                    href='tel:+34962398486'
                    className='text-lg block text-primary-foreground hover-underline'
                  >
                    Phone: <span>+34 96 239 84 86</span>
                  </Link>
                  <Link
                    href='mailto:hello@architronix.com'
                    className='text-lg block text-primary-foreground hover-underline'
                  >
                    Email: <span>hello@architronix.com</span>
                  </Link>
                </div> */}

                <h5 className='text-2xl font-extrabold block text-primary-foreground leading-160 '>
                  Quick Links
                </h5>
                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                <ul>
                  {servicesData.map(({ id, link, service_name }) => {
                    return (
                      <li
                        key={id}
                        className='text-primary-foreground flex items-center gap-[27px] mb-[22px] last:mb-0'
                      >
                        <RightArrow width='20' height='20' />
                        <Link
                          href={link}
                          className='text-xl leading-160 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full '
                        >
                          <span className='font-medium text-primary-foreground'>
                            {service_name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='mt-12 lg:mt-0 flex gap-x-10'>
              <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
              <div>
                <h5 className='text-2xl font-extrabold inline-block text-primary-foreground leading-160 '>
                  Contact us
                </h5>
                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                <div className='mt-[18px]'>
                  <p className='text-xl font-bold text-primary-foreground'>
                    Have a question? Drop us a mail,{' '}
                  </p>
                </div>
                <div className='mt-[17px]'>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className='text-lg block text-primary-foreground  hover-underline'
                  >
                    Email: <span>{siteConfig.email}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className='bg-primary-foreground' />
          <div className='py-8 lg:flex justify-between items-center'>
            <span className='text-sm text-primary-foreground block'>
              All Rights Reserved
            </span>
            <span className='text-sm text-primary-foreground block mt-3 lg:mt-0'>
              Copyright © {new Date().getFullYear()}, Rhapsody, All Rights
              Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
