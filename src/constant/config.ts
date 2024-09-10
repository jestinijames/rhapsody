import CelebrateIcon from '@/assets/icons/celebrate-icon';
import ListenIcon from '@/assets/icons/listen-icon';
import MicIcon from '@/assets/icons/mic-icon';
import feedback_bg from '@/assets/images/feedback-image.jpg';
import img_1 from '@/assets/images/gallery-1.jpg';
import img_2 from '@/assets/images/gallery-2.jpg';
import img_3 from '@/assets/images/gallery-3.jpg';
import img_4 from '@/assets/images/gallery-4.jpg';
import hero_2 from '@/assets/images/hero-2.jpg';
import hero_3 from '@/assets/images/hero-3.jpg';
import project_img_1 from '@/assets/images/project-overview-img-1.jpg';
import project_img_2 from '@/assets/images/project-overview-img-2.jpg';
import project_img_3 from '@/assets/images/project-overview-img-3.jpg';
import team_1 from '@/assets/images/team-1.jpg';
import team_2 from '@/assets/images/team-2.jpg';

import { MenuListItem, ProcessItem } from '@/types/types';

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
    service_name: 'Why us',
    service_desc:
      'Our residential design services cover everything from concept to completion',
    link: '/about/why-us',
  },
  {
    id: '02',
    service_name: 'Faculty',
    service_desc:
      'Our expertise in commercial design focuses on optimizing functionality and aesthetics',
    link: '/about/faculty',
  },
  {
    id: '03',
    service_name: 'Frequently Asked Questions',
    service_desc:
      "We maximize the potential of your space, ensuring it's organized, and aesthetically pleasing.",

    link: '/about/frequently-asked-questions',
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
        path: '/about/why-us',
      },
      {
        id: 2,
        name: 'Our Faculty',
        path: '/about/faculty',
      },
      {
        id: 3,
        name: 'Frequently Asked Questions',
        path: '/about/frequently-asked-questions',
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
            path: '/services/piano',
            desc: 'Everything from concept to completion',
          },
          {
            id: 2,
            name: 'Guitar Classes',
            path: '/services/guitar',
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
            path: '/services/drums',
            desc: 'Everything from concept to completion',
          },
          {
            id: 5,
            name: 'Violin Classes',
            path: '/services/violin',
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
  // {
  //   id: 3,
  //   name: 'Contact',
  //   path: '/contact',
  //   isMegaMenu: false,
  //   isDropdown: false,
  //   dropdownContent: [],
  //   megaMenuContent: [],
  // },
];

export const galleryData = [
  {
    id: '01',
    img_title: 'Piano',
    img_desc:
      'Unlock your potential with personalized piano lessons, fostering creativity and technical excellence in every student.',
    img: img_1,
    link: '/services/piano',
  },
  {
    id: '02',
    img_title: 'Guitar',
    img_desc:
      'Master the guitar with tailored lessons, enhancing your skills and passion for this versatile instrument.',
    img: img_2,
    link: '/services/guitar',
  },
  {
    id: '03',
    img_title: 'Violin',
    img_desc:
      'Experience exceptional violin training, designed to nurture your talent and develop your musical expression.',
    img: img_4,
    link: '/services/violin',
  },
  {
    id: '04',
    img_title: 'Drums',
    img_desc:
      'Discover dynamic drumming techniques and rhythms through our engaging, customized drum lessons for all levels.',
    img: img_3,
    link: '/services/drums',
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

export const processList: ProcessItem[] = [
  {
    id: '01',
    process_name:
      "Our experienced faculty will assess your skill level to determine the best starting point and set realistic goals for you within a 3-month semester. They'll guide you step by step, with monthly assignments designed to help you achieve those goals.",
    icon: 'listen',
  },
  {
    id: '02',
    process_name:
      'We celebrate your achievements at each level by sending you surprise musical gifts to motivate and inspire you on your journey.',
    icon: 'celebrate',
  },
  {
    id: '03',
    process_name:
      'We guarantee exceptional support throughout each lesson, ensuring that your learning experience is light, enjoyable, and entirely achievable.',
    icon: 'mic',
  },
];
export const Icons = {
  listen: ListenIcon,
  celebrate: CelebrateIcon,
  mic: MicIcon,
};

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

export const faqData = [
  {
    id: '1',
    question: 'What is your cancellation policy?',
    ans: `
      If you need to cancel a lesson, simply inform your instructor or email us at least 24 hours in advance, and we will arrange a makeup lesson for you on a different date. However, cancellations made without 24 hours' notice will not be eligible for rescheduling and will not be refunded.
      `,
  },
  {
    id: '2',
    question: 'Can I take multiple lessons a week?',
    ans: `
      Yes, you can book as many sessions as you like. The minimum commitment is weekly lessons, and we do not offer bi-weekly or monthly single lessons at this time.
      `,
  },
  {
    id: '3',
    question: 'How do you take payments?',
    ans: `
      We offer a variety of payment methods to make the process as convenient as possible. Payment options will be provided during the registration process or when booking your lessons.
      `,
  },
  {
    id: '4',
    question: 'What ages do you teach?',
    ans: `
      We welcome students from age 5 and up, including young beginners and adults. Our tailored programs ensure that every student, regardless of age, receives the appropriate level of instruction and support.
      `,
  },
  {
    id: '5',
    question: 'Do I need any experience to start?',
    ans: `
      No prior experience is required to begin lessons. Whether you're a complete beginner or have some musical background, our instructors will guide you based on your current skill level and goals.
      `,
  },

  {
    id: '6',
    question: 'Are your teachers/instructors qualified?',
    ans: `
    Yes, all our instructors are highly qualified professionals with extensive experience in both teaching and performing. They are certified by the Trinity College of Music, London, or have proven equivalent certifications, and are passionate about helping students achieve their musical potential.
    `,
  },
];

export const performanceData = [
  {
    id: 1,
    project_name: 'Reel Talent Collabs',
    project_img: hero_2,
    project_desc:
      'Explore dynamic partnerships and creative synergies where our music academy brings together diverse talents to produce inspiring and innovative musical projects.',
    project_story:
      'In today’s social media era, we’re committed to showcasing your talent through performance opportunities, whether solo, duet, or band. We’ll collaborate with students and feature these on our platforms, ensuring your music reaches thousands of enthusiasts, amplifying your presence.',
  },
  {
    id: 2,
    project_name: 'Annual Musical Recitals',
    project_img: hero_3,
    project_desc:
      'Showcase your progress and talent in, where students take the stage to perform, celebrate achievements, and gain valuable experience in a live setting.',
    project_story:
      'Every year, our Annual "Virtual Musical Recital", invites all students to showcase their talent. This event offers a platform for participants to perform, receive support, and connect with an audience that celebrates their musical achievements.',
  },
];

export const tagList = [
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
  {
    id: '5',
    tag: 'Performance Opportunities',
    link: '#performanceOpportunities',
  },
];

export const teamData = [
  {
    id: 1,
    img: team_1,
    name: 'Kuttiyachan',
    position: 'Violin, Piano, Guitar',
    slug: 'thomas-ev',
    email: 'thomasev@gmail.com',
    bio: 'Kuttiyachan (Thomas EV), the Violin Virtuoso at Rhapsody Academy of Music, has over four decades of experience, blending performance excellence with a passion for teaching. His musical journey is deeply rooted in both the classical and contemporary worlds.',
    focus:
      'Kuttiyachan (Thomas EV) specializes in violin, with additional expertise in piano and guitar instruction.',
    specializations:
      'His mastery lies in cultivating a deep understanding of advanced violin techniques, guiding students to blend technical precision with emotional expression.',
    philosophy:
      'Kuttiyachan`s teaching philosophy at Rhapsody revolves around nurturing the unique musical identity of each student, helping them discover and express their artistic voice.',
    approach:
      'Through personalized guidance, Thomas ensures that every lesson resonates with the student`s aspirations, empowering them to excel in their musical journey.',
    background:
      'Kuttiyachan (Thomas EV) began his career as a session violinist at Tharangani Studio, founded by the legendary K.J. Yesudas, and later became the orchestral director for Angel Voice, a renowned ensemble in Muvattupuzha.',
    credentials:
      'Recognized as a mentor and performer, Thomas has been instrumental in shaping the careers of many musicians who have performed in prominent reality shows and collaborated with luminaries like A.R. Rahman.',
    achievements:
      'Kuttiyachan`s contributions to music have been celebrated across the industry, with his students achieving accolades and his work being synonymous with excellence at Rhapsody Academy of Music.',

    social_link: [
      {
        id: 1,
        link: '',
        media: 'FB',
      },
      {
        id: 2,
        link: '',
        media: 'IN',
      },
      {
        id: 3,
        link: '',
        media: 'TW',
      },
      {
        id: 4,
        link: 'TW',
        media: 'LI',
      },
    ],
  },

  {
    id: 2,
    img: team_2,
    name: 'Abel Thomas',
    position: 'Drums, Piano',
    slug: 'abel-thomas',
    email: 'abelThomas@gmail.com',
    bio: 'Abel Thomas, the Rhythm Maestro at Rhapsody Academy of Music, brings over eight years of international experience, infusing his lessons with a blend of diverse drumming styles and a passion for teaching.',
    focus:
      'Abel specializes in drumming across various genres, with additional expertise in piano instruction for beginners to intermediate students.',
    specializations:
      'His expertise lies in crafting personalized lessons that focus on fundamental techniques, rhythmic mastery, and musical expression, ensuring each student builds a solid foundation for future growth.',

    philosophy:
      'Abel’s teaching philosophy at Rhapsody Academy is rooted in fostering a supportive and inspiring environment where students of all ages can explore and develop their musical talents.',
    approach:
      'With a commitment to customizing lessons to align with each student’s unique goals, Abel ensures that every lesson resonates with the learner’s aspirations and enhances their musical journey.',
    background:
      'Abel has taught at esteemed institutions such as the Oakville Academy of Music in Ontario, Canada Music Lessons, and the Dark Mountain School of Music in Alberta, tailoring his approach to students ranging from young children to adults.',
    credentials:
      'Recognized for his dedication and skill, Abel has earned a reputation as a patient and enthusiastic instructor, devoted to guiding students with a passion for the art of music.',
    achievements:
      'Abel Thomas’s contributions to music education have been celebrated across institutions, where his tailored teaching approach continues to inspire and shape aspiring musicians at Rhapsody Academy of Music.',

    social_link: [
      {
        id: 1,
        link: '',
        media: 'FB',
      },
      {
        id: 2,
        link: '',
        media: 'IN',
      },
      {
        id: 3,
        link: '',
        media: 'TW',
      },
      {
        id: 4,
        link: 'TW',
        media: 'LI',
      },
    ],
  },
];

export const visionList = [
  {
    id: '01',
    item: 'Tailored Musical Training',
    item_desc:
      'We provide personalized music education designed to meet your unique needs and elevate your skills to new heights.',
  },
  {
    id: '02',
    item: 'Dedicated to Your Musical Growth',
    item_desc:
      'We are committed to nurturing and developing your musical talents with steadfast dedication and support.',
  },
  {
    id: '03',
    item: 'Harmonizing Passion and Skill',
    item_desc:
      'Our mission is to blend passion with expertise, fostering a deeper connection to music and helping you achieve your fullest potential.',
  },
];
