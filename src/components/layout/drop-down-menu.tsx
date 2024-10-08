import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

import { DropDownMenuProps } from '@/types/types';

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  dropDownList,
  parentId,
}) => {
  return (
    <div
      className={cn(
        `absolute z-50 bg-secondary-rhapsody flex max-h-0 py-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] group-hover:py-5 `
      )}
    >
      <ul className='min-w-60 px-6'>
        {dropDownList.slice(0, 6).map(({ id, name, path }) => {
          return (
            <li key={id} className='leading-10'>
              <Link
                href={path}
                data-id={parentId}
                className='dropdown-item text-primary-foreground-rhapsody text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full'
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      {dropDownList.length > 6 && (
        <ul className='min-w-52 px-6 relative after:absolute after:top-0 after:-left-5 after:contents-[""] after:bg-primary_rgba after:w-[2px] after:h-full'>
          {dropDownList.slice(6, 11).map(({ id, name, path }) => {
            return (
              <li key={id} className='leading-10'>
                <Link
                  href={path}
                  data-id={parentId}
                  className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full'
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
