'use client';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';
import 'swiper/css';

import ProgressAndNavigation from '@/components/ui/craft/progress-and-navigation';
import SectionTitle from '@/components/ui/craft/section-title';
import ServiceCard from '@/components/ui/craft/service-card';

import { growthData } from '@/constant/config';

const ServicesSlider = ({
  text_muted,
  bg_muted,
}: {
  text_muted?: string;
  bg_muted?: string;
}) => {
  const pagination: PaginationOptions = {
    clickable: true,
    el: '.progressbar-pagination',
    type: 'progressbar',
  };
  return (
    <section className='pt-20'>
      <div className='container-fluid'>
        <SectionTitle
          sectionName='Growth Program'
          sectionTitle='Elevate Your Musical Journey'
          sectionDesc='Progress through expertly designed levels, mastering the art of music step by step'
          link='/services'
          button_text='View All'
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
        <div className='lg:pt-30 2sm:pt-20 pt-14'>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              560: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            className=''
          >
            {growthData.map(({ id, service_name, service_desc, link }) => (
              <SwiperSlide key={id}>
                {' '}
                <ServiceCard
                  id={id}
                  service_desc={service_desc}
                  service_name={service_name}
                  text_muted={text_muted}
                  link={link}
                />{' '}
              </SwiperSlide>
            ))}
            <div className='container'>
              <ProgressAndNavigation />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
