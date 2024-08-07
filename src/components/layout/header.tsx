import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import useActiveNavLink from '@/hooks/use-active-navlink';
import useStickyHeader from '@/hooks/use-sticky-header';

import DropDownMenu from '@/components/layout/drop-down-menu';
import MegaMenu from '@/components/layout/mega-menu';
import MobileNavbar from '@/components/layout/mobile-navbar';
import Offcanvas from '@/components/layout/off-canvas';
import TopNavbar from '@/components/layout/top-navbar';

import Search from '@/assets/icons/search';
import { menuList } from '@/constant/config';

const Header = () => {
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);

  useStickyHeader();
  const pathName = usePathname();
  const home = '/';
  useActiveNavLink(pathName, home);

  return (
    <header className='absolute z-50 top-0 left-0 w-full bg-gray  overflow-x-clip'>
      <div className='hidden xl:block'>
        <TopNavbar />
      </div>
      <div className='border-border border-t border-b hidden xl:block container-fluid'>
        <div className='bottom-navbar'>
          <div className='relative flex justify-between items-center'>
            <div>
              <Link href='/' className='text-primary-foreground'>
                <Image
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
                      <li key={id} className=' group'>
                        <Link
                          href={path}
                          data-id={id}
                          className='nav-link text-xl font-medium px-7 py-[34px] flex items-center gap-2 group-hover:bg-muted group-hover:text-secondary-foreground'
                        >
                          {name}
                          {(isDropdown || isMegaMenu) && (
                            <span
                              className={` transition-all duration-500 rotate-180 group-hover:rotate-0 group-hover:text-secondary-foreground`}
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
                          <MegaMenu
                            dropDownList={megaMenuContent}
                            parentId={id}
                          />
                        )}
                      </li>
                    );
                  }
                )}
                <li
                  className='other_icon text-primary-foreground px-6  cursor-pointer'
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
            bg_muted='bg-muted'
          />
        </div>
      </div>
      <div className='xl:hidden block'>
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
