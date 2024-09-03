'use client';
import SlotCounter from 'react-slot-counter';

import { cn } from '@/lib/utils';
const counterList = [
  {
    id: 1,
    count: '12+',
    title: 'Years of Experience',
  },
  {
    id: 2,
    count: '5+',
    title: 'Professional Teachers',
  },
  {
    id: 3,
    count: '100+',
    title: 'Lessons covered',
  },
  {
    id: 4,
    count: '93%',
    title: 'Positive Feedbacks',
  },
];
const Counter = ({
  text_muted,
  bg_muted,
}: {
  text_muted?: string;
  bg_muted?: string;
}) => {
  return (
    <div className='pt-20'>
      <div className='container'>
        <ul className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-10 '>
          {counterList.map(({ id, count, title }) => {
            return (
              <li key={id} className='flex flex-col'>
                <span
                  className={cn(
                    `[font-size:_clamp(48px,9vw,90px)] font-extrabold text-primary-rhapsody font-farro leading-120  ${text_muted}`
                  )}
                >
                  <SlotCounter
                    startValue={0}
                    value={count}
                    debounceDelay={5000}
                    duration={2}
                    animateOnVisible={{
                      triggerOnce: true,
                      rootMargin: '0px 0px -100px 0px',
                    }}
                  />
                </span>
                <span
                  className={cn(
                    `w-[150px] h-[1px] bg-primary 2sm:mt-3.5 2sm:mb-4 mt-1 mb-2 ${bg_muted}`
                  )}
                ></span>
                <span
                  className={cn(
                    `2sm:text-2xl text-xl font-bold text-secondary-rhapsody ${text_muted}`
                  )}
                >
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
