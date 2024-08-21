import feedback_bg from '@/assets/images/feedback-image.jpg';
import img_1 from '@/assets/images/gallery-1.jpg';
import img_2 from '@/assets/images/gallery-2.jpg';
import img_3 from '@/assets/images/gallery-3.jpg';
import img_4 from '@/assets/images/gallery-4.jpg';
import project_img_1 from '@/assets/images/project-overview-img-1.jpg';
import project_img_2 from '@/assets/images/project-overview-img-2.jpg';
import project_img_3 from '@/assets/images/project-overview-img-3.jpg';

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
  // {
  //   id: 1,
  //   name: 'Why Us?',
  //   path: '/why-us',
  //   isMegaMenu: false,
  //   isDropdown: false,
  //   dropdownContent: [],
  //   megaMenuContent: [],
  // },

  {
    id: 1,
    name: 'About',
    path: '#',
    isMegaMenu: false,
    isDropdown: true,
    dropdownContent: [
      {
        id: 1,
        name: 'Why Us',
        path: '/why-us',
      },
      {
        id: 2,
        name: 'Our Faculty',
        path: '/faculty',
      },
      {
        id: 3,
        name: 'FAQ',
        path: '/faq',
      },
      // {
      //   id: 4,
      //   name: 'Programs And Opportunities',
      //   path: '/programs-and-opportunities',
      // },
    ],
    megaMenuContent: [],
  },
  {
    id: 2,
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
            name: 'Piano Classes',
            path: '/programs/piano',
            desc: 'Everything from concept to completion',
          },
          {
            id: 2,
            name: 'Guitar Classes',
            path: '/programs/guitar',
            desc: 'Everything from concept to completion',
          },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: 'Drum Classes',
            path: '/programs/drums',
            desc: 'Everything from concept to completion',
          },
          {
            id: 5,
            name: 'Violin Classes',
            path: '/programs/violin',
            desc: 'Everything from concept to completion',
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: 'Embark on a Musical Journey with Us',
            path: '#',
            desc: 'Let’s Talk',
            img: feedback_bg,
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
    img: img_4,
    link: '/programs/violin',
  },
  {
    id: '04',
    img_title: 'Drums',
    img_desc:
      'Discover dynamic drumming techniques and rhythms through our engaging, customized drum lessons for all levels.',
    img: img_3,
    link: '/programs/drums',
  },
];

export const growthData = [
  {
    id: '01',
    service_name: 'Grave',
    service_desc:
      'Introductory level tailored for beginners, focusing on foundational music skills.',
    link: '#',
  },
  {
    id: '02',
    service_name: 'Largo',
    service_desc:
      'Early beginner level emphasizing slow, deliberate practice and developing basic techniques.',
    link: '#',
  },
  {
    id: '03',
    service_name: 'Lento',
    service_desc:
      'Beginner level focusing on slow tempos to build fundamental skills and confidence.',
    link: '#',
  },
  {
    id: '04',
    service_name: 'Adagio',
    service_desc:
      'Early intermediate stage, introducing slightly faster tempos and nuanced musical expression.',
    link: '#',
  },
  {
    id: '05',
    service_name: 'Andante',
    service_desc:
      'Intermediate level, developing steady rhythm and deeper understanding of musical phrasing.',
    link: '#',
  },
  {
    id: '06',
    service_name: 'Moderato',
    service_desc:
      'Mid-intermediate level encouraging balanced tempo, dynamic control, and expressive playing.',
    link: '#',
  },
  {
    id: '07',
    service_name: 'Allegretto',
    service_desc:
      'Intermediate-advanced stage, focusing on lively tempos and more complex musical pieces.',
    link: '#',
  },
  {
    id: '08',
    service_name: 'Allegro Moderato',
    service_desc:
      'Advanced intermediate level, combining moderate fast tempo with precision and expression.',
    link: '#',
  },
  {
    id: '09',
    service_name: 'Allegro',
    service_desc:
      'Advanced level, emphasizing fast tempos, technical skills, and expressive performance.',
    link: '#',
  },
  {
    id: '10',
    service_name: 'Vivace',
    service_desc:
      'High advanced stage, focusing on vibrant tempos, agility, and energetic performance.',
    link: '#',
  },
  {
    id: '11',
    service_name: 'Allegro Vivace',
    service_desc:
      'Expert level, blending fast tempos with vivacious expression and technical mastery.',
    link: '#',
  },
  {
    id: '12',
    service_name: 'Presto',
    service_desc:
      'Mastery level, showcasing rapid tempos, advanced techniques, and virtuosic performance.',
    link: '#',
  },
];

export const instruments = [
  {
    label: 'Piano',
    value: 'piano',
  },
  {
    label: 'Guitar',
    value: 'guitar',
  },
  {
    label: 'Drums',
    value: 'drums',
  },
  {
    label: 'Violin',
    value: 'violin',
  },
];

export const lessonDuration = [
  {
    label: '30 Minutes',
    value: '30',
  },
  {
    label: '60 Minutes',
    value: '60',
  },
  {
    label: '90 Minutes',
    value: '90',
  },
  {
    label: '120 Minutes',
    value: '120',
  },
];

export const processList = [
  {
    id: '01',
    process_name:
      "Our experienced faculty will assess your skill level to determine the best starting point and set realistic goals for you within a 3-month semester. They'll guide you step by step, with monthly assignments designed to help you achieve those goals.",
  },
  {
    id: '02',
    process_name:
      'We celebrate your achievements at each level by sending you surprise musical gifts to motivate and inspire you on your journey.',
  },

  {
    id: '03',
    process_name:
      'We guarantee exceptional support throughout each lesson, ensuring that your learning experience is light, enjoyable, and entirely achievable.',
  },
];

export const collegesData = [
  {
    id: 1,
    college_name: 'Trinity College London',
    college_desc:
      'Trinity College London is an international exam board offering assessments in music, drama, and English language, renowned for its rigorous standards and global recognition.',
    college_img: project_img_1,
    focus_areas:
      'Trinity College London focuses on music, drama, and English language assessments, emphasizing creativity, performance, and communication skills.',
    global_reach:
      'Trinity operates in over 60 countries, with a strong presence in Europe, Asia, and the Americas, offering internationally recognized qualifications.',
    link: 'https://www.trinitycollege.com/',
  },
  {
    id: 2,
    college_name: 'The Royal Conservatory',
    college_desc:
      'The Royal Conservatory is a globally recognized Canadian institution dedicated to music education, offering graded exams, teacher certifications, and performance opportunities in classical music.',
    college_img: project_img_2,
    focus_areas:
      'The Royal Conservatory specializes in music education, offering graded exams, teacher certification, and performance opportunities, emphasizing classical training and comprehensive musicianship.',
    global_reach:
      'Headquartered in Canada, The Royal Conservatory has a significant influence in North America and globally through its examinations, publications, and educational programs.',
    link: 'https://www.rcmusic.com/',
  },
  {
    id: 3,
    college_name: 'ABRSM (Associated Board of the Royal Schools of Music)',
    college_desc:
      'ABRSM is the world`s leading music examination board, providing graded exams and diplomas in classical music, with a strong emphasis on educational excellence and global reach.',
    college_img: project_img_3,
    focus_areas:
      'ABRSM focuses on music education, providing graded exams, diplomas, and professional development for musicians, with a strong emphasis on classical music.',
    global_reach:
      'ABRSM operates in over 90 countries, making it one of the world`s leading music examination boards, with a robust international presence in Europe, Asia, and beyond.',
    link: 'https://www.abrsm.org/',
  },
];
