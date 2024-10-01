'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import useOverflowHidden from '@/hooks/use-overflow-hidden';

import DropDownMenu from '@/components/layout/drop-down-menu';
import MegaMenu from '@/components/layout/mega-menu';
import SocialMediaList from '@/components/layout/socials';

import logo from '@/assets/images/logo-full.png';
import { menuList } from '@/constant/config';

import { MenuListItem } from '@/types/types';
export function HeaderThree() {
  // Mobile Menu Toggle functionality
  // State of our Menu
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State of our button
  const [disabled, setDisabled] = useState(false);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    setIsOpen(!isOpen);
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dropDownActive, setDropDownActive] = useState<number | null>(null);

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
    <header
      className={`main-header fixed top-0 left-0 w-full z-20 pointer-events-none ${
        scrolled ? 'scrolled' : ''
      }
      ${isOpen ? 'mobile-nav-open' : ''}
      
      `}
    >
      <div className='nav-dropdown-overlay hidden xl:block fixed w-full h-full top-26 left-0 z-10 bg-secondary-rhapsody bg-opacity-75 opacity-0 transition-opacity pointer-events-none' />
      {/* Desktop navigation */}
      <div className='desktop-nav hidden xl:block xl:py-2 text-primary-foreground-rhapsody bg-transparent pointer-events-auto transition-header duration-500'>
        <div className='flex flex-wrap items-center'>
          {/* Logo and other menu items */}
          <div>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              <li className='ml-10 mr-4 mt-1 hidden xl:block'>
                <Link className='no-child-pointers block' href='/'>
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    src={logo}
                    alt='Rhapsody Logo'
                    height='31'
                    width='219'
                  />
                </Link>
              </li>
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
                          `nav-link text-xl font-medium px-7 py-[34px] flex items-center gap-2 text-primary-rhapsody  group-hover:bg-secondary-rhapsody group-hover:text-primary-foreground-rhapsody `
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
                        <MegaMenu
                          dropDownList={megaMenuContent}
                          parentId={id}
                        />
                      )}
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className='ml-auto mr-8'>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              {/* <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <p className='font-bold'>
                  <span>Call Us:</span> {siteConfig.phone1} /{' '}
                  {siteConfig.phone2}
                </p>
              </li> */}
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4 !text-primary-rhapsody hover:!text-primary-foreground-rhapsody'>
                <div className='pl-5'>
                  <SocialMediaList />
                </div>
              </li>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <p>
                  <Link
                    className='btn items-center group -my-4 btn-nav-contact !text-primary-rhapsody hover:!text-primary-foreground-rhapsody'
                    href='/contact'
                  >
                    <span>Contact</span>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className='mobile-nav block h-screen pointer-events-none xl:hidden'>
        {/* Mobile Nav - top bar */}
        <div className='mobile-nav-top-bar relative z-20'>
          <div className='bg-secondary-rhapsody text-primary-foreground-rhapsody flex flex-wrap items-center justify-between px-4 py-3 sm:py-4 pointer-events-auto'>
            {/* Hamburger menu */}
            <div onClick={handleMenu} className='mobile-nav-toggle'>
              <div className='hamburger'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>
            </div>
            <Link className='block no-child-pointers ml-2' href='/'>
              <Image
                data-loaded='false'
                onLoad={(event) => {
                  event.currentTarget.setAttribute('data-loaded', 'true');
                }}
                className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                src={logo}
                alt='Rhapsody Logo'
                width={150}
                height={62}
              />
            </Link>
            <Link className='block  font-bold text-sm' href='/contact'>
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Nav - Content */}
        <div className='mobile-nav-content absolute top-0 left-0 w-full h-full text-primary-foreground-rhapsody z-10'>
          <div className='mobile-nav-content-bg absolute top-0 left-0 w-full h-full bg-secondary-rhapsody z-10' />
          {/* Links */}
          <div className='mobile-nav-content-inner relative pt-20 sm:pt-24 z-20'>
            <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              {/* Logo again for some reason */}
              <li className='ml-10 mr-4 mt-1 hidden xl:block'>
                <Link className='no-child-pointers block' href='/'>
                  <Image
                    data-loaded='false'
                    onLoad={(event) => {
                      event.currentTarget.setAttribute('data-loaded', 'true');
                    }}
                    className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
                    src={logo}
                    alt='Rhapsody Logo'
                    width={32}
                    height={8}
                  />
                </Link>
              </li>
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
                      onClick={() => handleDropDown(id, isDropdown, isMegaMenu)}
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
                          className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-0 ${
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
                                          onClick={() => setIsMenuActive(false)}
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
            </ul>

            {/* <ul className='flex flex-wrap flex-col xl:flex-row xl:items-center list-none pl-0 my-0'>
              <li className='block mx-4 my-0 xl:mx-2 xl:my-4 xl:ml-4'>
                <p>
                  <Link
                    className='btn items-center group -my-4 btn-nav-contact'
                    href='/contact'
                  >
                    <span>Contact us</span>
                  </Link>
                </p>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </header>
  );
}
