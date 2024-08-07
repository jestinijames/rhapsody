import img_1 from '@/assets/images/gallery-1.jpg';
import img_2 from '@/assets/images/gallery-2.jpg';
import img_3 from '@/assets/images/gallery-3.jpg';
import img_4 from '@/assets/images/gallery-4.jpg';
import menu_image_2 from '@/assets/images/menu-image-2.png';

import { MenuListItem } from '@/types/types';

export const siteConfig = {
  title: 'RHAPSODY ACADEMY OF MUSIC',
  description: 'Fostering the love of music',
  short: 'Start your musical journey today',
  url: 'https://tsnext-tw.thcl.dev',
  email: 'rhpsddmn@gmail.com',
};

export const servicesData = [
  {
    id: '01',
    service_name: 'About Us',
    service_desc:
      'Our residential design services cover everything from concept to completion',
    link: '/service-single',
  },
  {
    id: '02',
    service_name: 'Why Us',
    service_desc:
      'Our expertise in commercial design focuses on optimizing functionality and aesthetics',
    link: '/service-single',
  },
  {
    id: '03',
    service_name: 'Growth Map',
    service_desc:
      "We maximize the potential of your space, ensuring it's organized, and aesthetically pleasing.",

    link: '/service-single',
  },
];

export const menuList: MenuListItem[] = [
  {
    id: 1,
    name: 'About',
    path: '#',
    isMegaMenu: false,
    isDropdown: true,
    dropdownContent: [
      {
        id: 1,
        name: 'About Us',
        path: '/about-us',
      },
      {
        id: 2,
        name: 'Why Us',
        path: '/why-us',
      },
      {
        id: 3,
        name: 'Growth Map',
        path: '/growth-map',
      },
      {
        id: 4,
        name: 'Programs And Opportunities',
        path: '/programs-and-opportunities',
      },
    ],
    megaMenuContent: [],
  },
  {
    id: 1,
    name: 'Services',
    path: '#',
    isDropdown: false,
    isMegaMenu: true,
    dropdownContent: [],
    megaMenuContent: [
      {
        id: 1,
        menus: [
          {
            id: 1,
            name: 'Residential Design',
            path: '/service-single',
            desc: 'Everything from concept to completion',
          },
          {
            id: 2,
            name: 'Commercial Design',
            path: '/service-single',
            desc: 'Focuses on optimizing functionality and aesthetics',
          },
          {
            id: 3,
            name: 'Space Planning',
            path: '/service-single',
            desc: 'Maximize the potential of your space',
          },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: 'Color Consultation',
            path: '/service-single',
            desc: 'We help you choose the perfect palette',
          },
          {
            id: 5,
            name: 'Project Management',
            path: '/service-single',
            desc: 'We oversee every detail for a successful project',
          },
          {
            id: 6,
            name: 'Custom Furnishings',
            path: '/service-single',
            desc: 'Elevate your space with unique furnishings',
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: 'Embark on a Design Journey with Us',
            path: '#',
            desc: 'Let’s Talk',
            img: menu_image_2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact',
    isMegaMenu: false,
    isDropdown: false,
    dropdownContent: [],
    megaMenuContent: [],
  },
];

export const galleryData = [
  {
    id: '01',
    img_title: 'Piano',
    img_desc:
      'Unlock your potential with personalized piano lessons, fostering creativity and technical excellence in every student.',
    img: img_1,
    link: '/programs/piano',
  },
  {
    id: '02',
    img_title: 'Guitar',
    img_desc:
      'Master the guitar with tailored lessons, enhancing your skills and passion for this versatile instrument.',
    img: img_2,
    link: '/programs/guitar',
  },
  {
    id: '03',
    img_title: 'Violin',
    img_desc:
      'Experience exceptional violin training, designed to nurture your talent and develop your musical expression.',
    img: img_3,
    link: '/programs/violin',
  },
  {
    id: '04',
    img_title: 'Drums',
    img_desc:
      'Discover dynamic drumming techniques and rhythms through our engaging, customized drum lessons for all levels.',
    img: img_4,
    link: '/programs/drums',
  },
];
