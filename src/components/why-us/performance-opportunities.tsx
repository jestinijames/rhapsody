/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useRef } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import OptimizedImage from '@/components/ui/craft/optimized-image';
import SectionTitle from '@/components/ui/craft/section-title';

import RightArrow from '@/assets/icons/right-arrow';
import hero_vector from '@/assets/images/hero-vector-bg.png';
import { performanceData } from '@/constant/config';

const PerformanceOpportunities = ({
  text_muted,
  bg_muted,
}: {
  text_muted?: string;
  bg_muted?: string;
}) => {
  // Using SwiperCore as the type for the ref
  const swiperRef = useRef<SwiperCore | null>(null);
  const pagination = {
    clickable: true,
    el: '.hero-pagination',
    renderBullet: function (index: any, className: string) {
      return `<span class='${className} text-primary-rhapsody translate-y-16 opacity-0 absolute h-0 leading-[90%] [font-size:_clamp(60px,10vw,150px)] font-extrabold lg:text-right'>${performanceData[index].project_name}</span>`;
    },
  };
  return (
    <section className='pt-20 banner-two'>
      <div className='container-fluid pb-20 '>
        <SectionTitle
          sectionName='Opportunities'
          sectionTitle='Performance Opportunities'
          sectionDesc='Where Imagination Meets Reality'
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
      </div>
      <div className='grid grid-cols-2'>
        {/* --------- Banner left side */}
        <div
          className='bg-secondary-rhapsody pt-[136px] pb-[148px] bg-cover bg-no-repeat bg-right'
          style={{ backgroundImage: `url(${hero_vector.src})` }}
        >
          <div className='z-10 relative px-3 md:px-0 '>
            <div className='hero-pagination flex ' />
          </div>
        </div>
        {/* ------- Banner right side */}
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={pagination}
            onBeforeInit={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            speed={1500}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className='h-full'
          >
            {performanceData.map(
              ({ id, project_img, project_story, project_name }) => {
                return (
                  <SwiperSlide key={id} className='relative'>
                    <div className='h-full flex items-center justify-center text-center relative'>
                      {/* Image with cover */}
                      <OptimizedImage
                        useSkeleton
                        src={project_img}
                        loading='lazy'
                        alt={project_name}
                        width={1920}
                        height={999}
                        className='h-full object-cover absolute inset-0 z-0'
                      />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black opacity-50 z-5'></div>
                      {/* Text */}
                      <p className='relative z-10 text-primary-foreground-rhapsody px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold leading-none sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose'>
                        {project_story}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
            <div className='flex justify-between absolute right-0 bottom-0 z-40'>
              {/* ------- Next and prev arrow */}
              <div className='flex flex-col sm:w-[90px] w-[70px] xl:h-[181px] h-[136px] '>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`bg-secondary-rhapsody text-primary-foreground-rhapsody flex justify-center items-center h-1/2 `}
                >
                  {' '}
                  <RightArrow width='35' height='22' />{' '}
                </button>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className='bg-primary-foreground-rhapsody text-primary-rhapsody flex justify-center items-center h-1/2 rotate-180'
                >
                  {' '}
                  <RightArrow width='35' height='22' />{' '}
                </button>
              </div>
              {/* ------- Next and prev arrow */}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOpportunities;
