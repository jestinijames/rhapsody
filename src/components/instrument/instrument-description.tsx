import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import Link from 'next/link';
import React from 'react';

import Title from '@/components/ui/craft/title';

import RightArrow from '@/assets/icons/right-arrow';

import { SellerContentItem } from '@/types/types';

const InstrumentDescription = ({
  title,
  description,
  image,
  body,
}: {
  title: string;
  description: string;
  image: string | StaticImageData;
  body: SellerContentItem[];
}) => {
  return (
    <section className='blog-single'>
      <div>
        <div className='container-fluid'>
          <div className=' pt-[94px] pb-[60px] '>
            <Image src={image} loading='lazy' alt='img' />
          </div>
        </div>
        <div className='container 2sm:mt-[156px] sm:mt-30 mt-20'>
          <div className='grid lg:grid-cols-[65%_auto] gap-[38px]'>
            <div className='relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5'>
              <h1 className='text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110'>
                {title} Lessons
              </h1>
              <span className='inline-block w-[300px] h-[1px] bg-primary' />
              <p className='text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-30'>
        <div className='grid lg:grid-cols-[auto_427px] xl:gap-x-[132px] gap-x-10 items-start'>
          <div>
            <div>
              <Title title_text={`Why Learn ${title}`} />
              {body.map((content, index) => (
                <>
                  <div key={index} className='pt-7'>
                    <h5 className='font-bold'>{content.header}</h5>
                    <p>{content.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className='bg-primary py-12.5 sm:px-9 px-5 mt-10 lg:mt-0 sticky top-10 '>
            <Title
              title_text='Class Overview'
              className='mb-11 text-secondary-foreground font-semibold'
            />
            <ul className='mb-16 flex flex-col gap-y-[34px]'>
              <li>
                <strong className='text-secondary-foreground block'>
                  Location:
                </strong>
                <span className='text-secondary-foreground block'>
                  Online and In-person (location details as applicable)
                </span>
              </li>
              <li>
                <strong className='text-secondary-foreground block'>
                  Instructor Qualifications
                </strong>

                <span className='text-secondary-foreground block mb-2'>
                  Experienced instructors with professional certifications
                </span>
                <span className='text-secondary-foreground block'>
                  Specialized in various genres and techniques
                </span>
              </li>
              <li>
                <strong className='text-secondary-foreground block'>
                  Enrollment And Scheduling
                </strong>
                <span className='text-secondary-foreground block mb-2'>
                  Flexible scheduling options
                </span>
                <span className='text-secondary-foreground block'>
                  Contact us for availability
                </span>
              </li>
              <li>
                <strong className='text-secondary-foreground block'>
                  Additional Information:
                </strong>
                <span className='text-secondary-foreground block'>
                  Reach out to us to schedule your lesson or for more details.
                </span>
              </li>
            </ul>
            <Link href='/contact'>
              <button className='flex items-center justify-center gap-3 text-2xl font-bold text-secondary-foreground  border-2 border-secondary  hover:text-primary-foreground px-10 py-[15px] whitespace-nowrap w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bg-secondary after:w-full after:h-0 hover:after:h-full after:transition-all after:duration-500 after:z-[-1] hover:after:bg-secondary transition-all duration-500'>
                Contact Now <RightArrow height='25' width='22' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrumentDescription;
