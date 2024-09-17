'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

import '/node_modules/react-modal-video/css/modal-video.css';

import { cardSlideAnimation, cn } from '@/lib/utils';
import useOverflowHidden from '@/hooks/use-overflow-hidden';

import PlayIcon from '@/assets/icons/play-icon';
import RightArrow from '@/assets/icons/right-arrow';
import video_thumb from '@/assets/images/video-image.png';

import { VideoPortfolioProps } from '@/types/types';

const VideoPortfolio = ({ after_bg_muted }: VideoPortfolioProps) => {
  return (
    <section className='pt-20'>
      {/* <div className='container-fluid '>
        <SectionTitle
          sectionName='Video'
          sectionTitle='Symphony of Learning'
          sectionDesc='Where Music Meets Mastery, and Passion Takes Center Stage'
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
      </div> */}
      <div className='container-fluid lg:pt-30 2sm:pt-20 pt-14'>
        <div
          className={cn(
            `after:border-4 after:border-primary-rhapsody relative after:contents-[""] after:absolute after:left-0 after:top-0 after:max-w-[1320px] after:w-full z-[1] after:h-full after:bg-secondary-rhapsody ${after_bg_muted} pt-[90px] pb-[110px]`
          )}
        >
          <div className='container flex lg:flex-row flex-col justify-between relative z-10'>
            <div className='2xl:max-w-[637px] lg:max-w-[500px] w-full'>
              <h4 className='text-primary-foreground-rhapsody text-3xl 2sm:text-4xl font-bold leading-135'>
                Discover the Power of Music
              </h4>
              <p className='text-primary-foreground-rhapsody mt-5'>
                Immerse yourself in the profound impact of music in every moment
                of life. Join us as we explore how melodies shape our
                experiences and how we can help you unlock your musical
                potential.
              </p>
              <ul className='mt-[35px]'>
                <li className='text-primary-foreground-rhapsody flex items-center gap-[27px]'>
                  <RightArrow width='35' height='22' />{' '}
                  <span className='text-primary-foreground-rhapsody text-2xl leading-160 font-bold'>
                    Inspiration and Composition
                  </span>{' '}
                </li>
                <li className='text-primary-foreground-rhapsody flex items-center gap-[27px] mt-4'>
                  <RightArrow width='35' height='22' />{' '}
                  <span className='text-primary-foreground-rhapsody text-2xl leading-160 font-bold'>
                    Collaborative Creativity
                  </span>{' '}
                </li>
                <li className='text-primary-foreground-rhapsody flex items-center gap-[27px] mt-4'>
                  <RightArrow width='35' height='22' />{' '}
                  <span className='text-primary-foreground-rhapsody text-2xl leading-160 font-bold'>
                    Masterful Performances
                  </span>{' '}
                </li>
              </ul>
            </div>
            <VideoPlay img={video_thumb} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;

function VideoPlay({ img }: { img: string | StaticImageData }) {
  const [isOpen, setOpen] = useState(false);
  useOverflowHidden(isOpen);
  return (
    <>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        variants={cardSlideAnimation()}
        viewport={{ once: true, amount: 0.2 }}
        className='relative max-h-[400px] mt-10 lg:mt-0 border-4 border-primary-rhapsody'
      >
        <Image
          src={img}
          loading='lazy'
          alt='video'
          width={649}
          height={400}
          className='w-full max-w-[698px] mx-auto h-full'
        />
        <ModalVideo
          channel='youtube'
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId='YlIEVA3VG2M'
          onClose={() => setOpen(false)}
        />

        <div
          onClick={() => setOpen(true)}
          className=' md:w-[60px] md:h-[60px] w-[60px] h-[60px] rounded-full text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-foreground-rhapsody cursor-pointer flex justify-center items-center'
        >
          <span className='ml-2'>
            <PlayIcon width='15' height='18' />
          </span>
        </div>
      </motion.div>
    </>
  );
}
