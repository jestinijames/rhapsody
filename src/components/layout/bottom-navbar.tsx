'use client';
import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import { useState } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';
import useStickyHeader from '@/hooks/use-sticky-header';

import DropDownMenu from '@/components/layout/drop-down-menu';
import MegaMenu from '@/components/layout/mega-menu';
import Offcanvas from '@/components/layout/off-canvas';
import OptimizedImage from '@/components/ui/craft/optimized-image';

import Search from '@/assets/icons/search';
import { menuList } from '@/constant/config';

const BottomNavbar = ({ linkColor }: { linkColor?: string }) => {
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);

  useStickyHeader(linkColor);
  //const pathName = usePathname();
  //useActiveNavLink(pathName);

  return (
    <>
      <div className='bottom-navbar flex justify-between items-center'>
        <div>
          <Link
            href='/'
            className={cn(`logo text-secondary-rhapsody ${linkColor}`)}
          >
            <OptimizedImage
              useSkeleton
              height='31'
              width='219'
              alt='Rhapsody'
              src='/logo/logo-full.png'
            />
          </Link>
        </div>
        <nav>
          <ul className='flex items-center'>
            {menuList.map(
              ({
                id,
                isDropdown,
                name,
                path,
                isMegaMenu,
                dropdownContent,
                megaMenuContent,
              }) => {
                return (
                  <li key={id} className='group'>
                    <Link
                      href={path}
                      data-id={id}
                      className={cn(
                        `nav-link text-xl font-medium px-7 py-[34px] flex items-center gap-2 text-secondary-rhapsody  group-hover:bg-secondary-rhapsody group-hover:text-primary-foreground-rhapsody ${linkColor}`
                      )}
                    >
                      {name}
                      {(isDropdown || isMegaMenu) && (
                        <span
                          className={` transition-all duration-500 rotate-180 group-hover:rotate-0 group-hover:text-primary-foreground-rhapsody`}
                        >
                          <svg
                            width='12'
                            height='9'
                            viewBox='0 0 12 9'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M11 8L6 2L1 8' />
                          </svg>
                        </span>
                      )}
                    </Link>
                    {isDropdown && (
                      <DropDownMenu
                        dropDownList={dropdownContent}
                        parentId={id}
                        bgColor='bg-muted'
                      />
                    )}
                    {isMegaMenu && (
                      <MegaMenu dropDownList={megaMenuContent} parentId={id} />
                    )}
                  </li>
                );
              }
            )}
            <li
              className={cn(
                `other_icon text-primary-foreground px-6 cursor-pointer ${linkColor}`
              )}
              onClick={() => setOffcanvaseActive(true)}
            >
              <Search height='24' width='24' />
            </li>
          </ul>
        </nav>
      </div>
      <Offcanvas
        setOffcanvaseActive={setOffcanvaseActive}
        offcanvaseActive={offcanvaseActive}
      />
    </>
  );
};

export default BottomNavbar;
