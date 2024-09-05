'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import useOverflowHidden from '@/hooks/use-overflow-hidden';

import Offcanvas from '@/components/layout/off-canvas';
import OptimizedImage from '@/components/ui/craft/optimized-image';

import MenuIcon from '@/assets/icons/menu-icon';
import { menuList } from '@/constant/config';

import { MenuListItem } from '@/types/types';

const MobileNavbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dropDownActive, setDropDownActive] = useState<number | null>(null);
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);

  useOverflowHidden(isMenuActive);

  const handleDropDown = (
    id: number,
    isDropdown: boolean,
    isMegaMenu: boolean
  ) => {
    if (isDropdown || isMegaMenu) {
      setDropDownActive(dropDownActive === id ? null : id);
    } else {
      setIsMenuActive(false);
    }
  };

  return (
    <div className='mobile-navbar'>
      <div className='bg-[#f9f9f9] relative overflow-x-clip px-2.5'>
        <div className='container-fluid '>
          <div className='flex items-center justify-between py-4'>
            <Link href='/' className='text-secondary-rhapsody'>
              <OptimizedImage
                useSkeleton
                height='31'
                width='219'
                alt='Rhapsody'
                src='/logo/logo-full.png'
              />
            </Link>
            <div>
              <nav
                className={`max-h-screen min-h-screen overflow-y-auto bg-[#f9fffc] absolute transition-all duration-500 ${
                  isMenuActive ? 'right-0' : 'sm:-right-full -right-[150%]'
                } top-0 z-[1000] py-4 px-4`}
              >
                <div className='flex justify-between items-center'>
                  <Link href='/' className='text-secondary-rhapsody'>
                    <OptimizedImage
                      useSkeleton
                      height='31'
                      width='219'
                      alt='Rhapsody'
                      src='/logo/logo-full.png'
                    />
                  </Link>
                  <div onClick={() => setIsMenuActive(false)}>
                    <IoMdClose className='text-2xl cursor-pointer' />
                  </div>
                </div>
                <ul className='mt-7'>
                  {menuList.map(
                    ({
                      id,
                      isDropdown,
                      name,
                      path,
                      isMegaMenu,
                      megaMenuContent,
                      dropdownContent,
                    }: MenuListItem) => {
                      return (
                        <li
                          key={id}
                          onClick={() =>
                            handleDropDown(id, isDropdown, isMegaMenu)
                          }
                        >
                          <Link
                            href={path}
                            data-id={id}
                            className={`nav-link text-xl font-medium px-4 py-4 flex items-center gap-2 transition-all duration-500  ${
                              dropDownActive === id
                                ? 'bg-secondary-rhapsody text-primary-foreground-rhapsody'
                                : ''
                            }`}
                          >
                            {name}
                            {(isDropdown || isMegaMenu) && (
                              <span
                                className={` transition-all duration-500 rotate-180 ${
                                  dropDownActive === id
                                    ? 'rotate-0 text-secondary-foreground'
                                    : ''
                                }`}
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
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? 'max-h-[500px] bg-secondary-rhapsody text-primary-foreground-rhapsody '
                                  : ''
                              }`}
                            >
                              {isDropdown &&
                                dropdownContent.map(({ id, name, path }) => {
                                  return (
                                    <li key={id} className='leading-10'>
                                      <Link
                                        data-id={id.toString()}
                                        onClick={() => setIsMenuActive(false)}
                                        href={path}
                                        className='dropdown-item text-secondary-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                      >
                                        {name}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          )}
                          {isMegaMenu && (
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? 'max-h-[700px] bg-secondary-rhapsody text-primary-foreground-rhapsody '
                                  : ''
                              }`}
                            >
                              {isMegaMenu &&
                                megaMenuContent.map(({ id, menus }) => {
                                  return (
                                    <ul key={id}>
                                      {menus.map(({ id, name, path, desc }) => {
                                        return (
                                          <li key={id} className='pb-5'>
                                            <Link
                                              data-id={id.toString()}
                                              onClick={() =>
                                                setIsMenuActive(false)
                                              }
                                              href={path}
                                              className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                            >
                                              {name}
                                            </Link>
                                            <span className='block text-secondary-foreground_rgba text-sm'>
                                              {desc}
                                            </span>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  );
                                })}
                            </ul>
                          )}
                        </li>
                      );
                    }
                  )}

                  <li
                    onClick={() => {
                      setOffcanvaseActive(true), setIsMenuActive(false);
                    }}
                  >
                    <span className='nav-link text-xl font-medium px-4 py-4 flex items-center gap-2 transition-all duration-500 text-primary-foreground '>
                      Search
                    </span>
                  </li>
                </ul>
              </nav>
              <div
                className='text-primary-foreground'
                onClick={() => setIsMenuActive(true)}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
        <Offcanvas
          setOffcanvaseActive={setOffcanvaseActive}
          offcanvaseActive={offcanvaseActive}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
