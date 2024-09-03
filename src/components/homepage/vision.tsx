import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils';

import SectionSidebarImg from '@/components/ui/craft/section-sidebar-img';
import SectionTitle from '@/components/ui/craft/section-title';

import DrumIcon from '@/assets/icons/drum-icon';
import about_img from '@/assets/images/about-image.jpg';
import { visionList } from '@/constant/config';

const Vision = ({
  text_muted,
  bg_muted,
}: {
  text_muted?: string;
  bg_muted?: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });
  return (
    <section className='pt-20'>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Our Mission'
          sectionTitle='Music: The Universal Language '
          sectionDesc='Music is a constant presence in our lives—from weddings and graduations to quiet moments and celebrations. It’s always with us, whether in joy or sorrow. We are dedicated to nurturing and developing your musical talents with unwavering commitment.'
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
        <div
          className={cn(
            `bg-secondary-rhapsody xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0 ${bg_muted}`
          )}
        >
          <div className='container'>
            <div className='flex lg:flex-row flex-col items-center gap-[66px]'>
              <SectionSidebarImg
                img={about_img}
                section_name='about-bg'
                className='md:-mt-25 -mt-[470px] -mb-25'
              />
              <ul className='lg:mt-0 mt-20 lg:pb-0 pb-10'>
                {visionList.map(({ id, item, item_desc }) => {
                  return (
                    <li
                      key={id}
                      className='lg:flex gap-10 pb-10 last:pb-0 justify-between'
                    >
                      <DrumIcon
                        ref={ref}
                        className={`h-[65px] w-20 relative -top-2 left-3 xl:text-6xl text-5xl mb-3 lg:mb-0 inline-block font-extrabold leading-120  ${
                          inView
                            ? 'animate-text-line-animation stroke-primary-rhapsody stroke-dasharray-1000 stroke-dashoffset-1000'
                            : ' fill-transparent stroke-primary-rhapsody '
                        }`}
                      />

                      <div className='max-w-[534px]'>
                        <h4 className='text-3xl 2sm:text-4xl font-bold leading-135 text-primary-rhapsody font-farro'>
                          {item}
                        </h4>
                        <p className='text-lg  font-normal text-primary-foreground-rhapsody font-poppins'>
                          {item_desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
