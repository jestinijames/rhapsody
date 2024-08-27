'use client';
import React from 'react';

import SectionSidebarImg from '@/components/ui/craft/section-sidebar-img';
import SectionTitle from '@/components/ui/craft/section-title';

import RightArrow from '@/assets/icons/right-arrow';
import about_bg from '@/assets/images/about.jpg';

const HolisiticMusicianshipProgram = () => {
  return (
    <section>
      <div className='container-fluid'>
        <SectionTitle
          sectionName='Why Us?'
          sectionTitle='HOLISTIC MUSICIANSHIP PROGRAM'
          sectionDesc='Unlocking the Creativity, Discipline, and Mastery Within Every Musician.'
        />
        <div className='bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0'>
          <div className='container'>
            <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
              <div className='md:-mt-25 -mt-[470px] -mb-25'>
                <SectionSidebarImg img={about_bg} section_name='about-bg' />
              </div>
              <div
                id='howItWorks'
                className='max-w-[600px] lg:pt-0 pt-20 lg:pb-0 pb-10'
              >
                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px] mt-10'>
                  How It Works
                </h2>
                <p className=' text-secondary-foreground'>
                  Music is a universal language, a powerful medium to express
                  your deepest feelings and emotions. Unlike a competitive
                  sport, music is experienced and learned uniquely by each
                  individual. This belief is the foundation of our educational
                  approach, embodied in the “HMP – Holistic Musicianship
                  Program.”
                </p>
                <br />
                <p className=' text-secondary-foreground'>
                  The HMP is a thoughtfully designed curriculum that nurtures
                  you into a well-rounded musician, equipping you with essential
                  skills such as:
                </p>
                <ul className='mt-[35px]'>
                  <li className='text-secondary-foreground flex items-center gap-[27px]'>
                    <RightArrow width='35' height='22' />{' '}
                    <span className='text-secondary-foreground text-2xl leading-160 font-bold'>
                      Primary Skills: Ear training, music reading, and writing
                    </span>{' '}
                  </li>
                  <li className='text-secondary-foreground flex items-center gap-[27px] mt-4'>
                    <RightArrow width='35' height='22' />{' '}
                    <span className='text-secondary-foreground text-2xl leading-160 font-bold'>
                      Sound Creation: Producing a rich, quality sound from your
                      instrument
                    </span>{' '}
                  </li>
                  <li className='text-secondary-foreground flex items-center gap-[27px] mt-4'>
                    <RightArrow width='35' height='22' />{' '}
                    <span className='text-secondary-foreground text-2xl leading-160 font-bold'>
                      Precision: Mastery of articulation, intonation, phrasing,
                      and feel
                    </span>{' '}
                  </li>
                  <li className='text-secondary-foreground flex items-center gap-[27px] mt-4'>
                    <RightArrow width='35' height='22' />{' '}
                    <span className='text-secondary-foreground text-2xl leading-160 font-bold'>
                      Instrumental Performance: Elevating your performance
                      abilities
                    </span>{' '}
                  </li>
                </ul>
                <p className='text-secondary-foreground mt-7 mb-10'>
                  Whether you're a beginner just starting your musical journey,
                  an intermediate student seeking to overcome a plateau, or an
                  advanced player striving for mastery, HMP will be your
                  steadfast support system at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisiticMusicianshipProgram;
