import { ArrowDownIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const tagList = [
  {
    id: '1',
    tag: 'How it Works',
    link: '#howItWorks',
  },
  {
    id: '2',
    tag: 'Growth Map',
    link: '#growthMap',
  },
  {
    id: '3',
    tag: 'Guided Growth',
    link: '#guidedMusicalGrowth',
  },
  {
    id: '4',
    tag: 'Other Curriculums',
    link: '#otherCurriculums',
  },
];

const PageTags = () => {
  return (
    <div className='container '>
      <div>
        <div className='pt-[54px] flex gap-3 flex-wrap'>
          {tagList.map(({ id, link, tag }) => {
            return (
              <Link href={link} key={id}>
                <Button
                  variant='boutline'
                  className='font-normal px-2.5 sm:py-[5px] py-[5px] border'
                >
                  <span className='text-lg'>{tag}</span> <ArrowDownIcon />
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageTags;
