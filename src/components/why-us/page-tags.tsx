import { ArrowDownIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { tagList } from '@/constant/config';

const PageTags = () => {
  return (
    <div className='container mt-20 '>
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
