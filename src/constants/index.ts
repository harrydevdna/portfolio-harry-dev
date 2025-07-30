import { ITimelineItemProps } from '@/components/timeline/Timeline';

interface IProjectProps {
  title: string;
  isCompany?: false;
  companyName?: string;
  logo: string;
  projectName?: string;
  location?: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: {
    'front-end'?: string,
    'back-end'?: string,
    'others'?: string
  };
  teamSize: number;
  link?: string;
}

export const NAV_ITEMS = [
  { label: 'About me', target: 'about-me' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experiences', target: 'experiences' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' },
];

export type TNAV_TARGET = (typeof NAV_ITEMS)[number]['target'];

export const ABOUT_ME_HI = 'Hi there👋, My name is Huynh Van Phuot and you can call me Harry';
export const ABOUT_ME_MAIN = 'Software Engineer based in Da Nang City, Vietnam';
export const WORK_EXPERIENCE = [
  {
    title: 'Software Engineer',
    name: 'Spartan',
    location: 'Da Nang City, Vietnam',
    period: '08/2025 - Present',
    description: []
  },
  {
    title: 'Junior Game Developer',
    name: 'Nexon',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2024 - 08/2025',
    description: []
  },
  {
    title: 'Full-Stack Developer',
    name: 'FPT Software',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2023 - 08/2024',
    description: []
  }
] as ITimelineItemProps[];

export const EDUCATION = [
  {
    title: 'Software Engineering',
    name: 'FPT University',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2020 - 12/2024',
    description: [
      "Bachelor's degree with a GPA of 8.46/10",
      '100% scholarship for all four years of study',
      'Honorable Student in all 9 out of 9 semesters'
    ],
    isCompany: false
  },
  {
    title: 'Specializing in Mathematics',
    name: 'Nguyen Binh Khiem High School for the Gifted',
    location: 'Quang Nam Province, Vietnam',
    period: '09/2017 - 06/2020',
    description: [],
    isCompany: false
  }
] as ITimelineItemProps[];

export const EXPERIENCE_TITLE = 'I am a Software Engineer from Vietnam with over 2 years of experience working at companies such as Spartan, Nexon, and FPT Software. In addition to my professional roles, I also completed several projects during my university studies.';

export const EXPERIENCE_PROJECTS = [
  {
    title: 'Software Engineer',
    isCompany: true,
    companyName: 'Spartan',
    logo: '/spartan.webp',
    location: 'Da Nang City, Vietnam',
    period: '08/2025 - Present',
    description: 'Developed and maintained high-performance web applications using React, TypeScript, and Node.js',
    responsibilities: [
      'Developed and maintained high-performance web applications using React, TypeScript, and Node.js',
      'Collaborated with cross-functional teams to deliver scalable solutions',
      'Implemented CI/CD pipelines and automated testing strategies',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: {
      'front-end': 'NextJS, NextUI',
      'back-end': 'C#, Entity Framework',
      'others': 'MySQL, AWS'
    },
    teamSize: 10,
  },
  {
    title: 'Junior Game Developer',
    isCompany: true,
    companyName: 'Nexon',
    logo: '/nexon.webp',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2024 - 08/2025',
    description: 'Developed and maintained high-performance web applications using React, TypeScript, and Node.js',
    responsibilities: [
      'Developed and maintained high-performance web applications using React, TypeScript, and Node.js',
      'Collaborated with cross-functional teams to deliver scalable solutions',
      'Implemented CI/CD pipelines and automated testing strategies',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: {
      'front-end': 'NextJS, NextUI',
      'back-end': 'C#, Entity Framework',
      'others': 'MySQL, AWS'
    },
    teamSize: 10,
  },
  {
    title: 'Full-Stack Developer',
    isCompany: true,
    companyName: 'FPT Software',
    logo: '/fpt-university.webp',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2023 - 08/2024',
    description: "CurbWaste is a platform that offers features such as order management, real-time tracking of inventory and ETAs, automated invoicing, data centric reporting, integrated e-commerce, and real-time dispatch. CurbWaste is implemented to help waste hauling businesses improve efficiency, profitability and contribute to waste treatment to protect the environment",
    responsibilities: [
      'Refactor API from MongoDB to PostgreSQL',
      'Communicate directly with customers (USA) and development teams in India',
      'Fix bug and enhance performance by optimizing code',
      'Report work’s status in daily meetings to Project Manager'
    ],
    technologies: {
      'front-end': 'ReactJS, JavaScript',
      'back-end': 'NodeJS',
      'others': 'PostgreSQL, MongoDB, Docker, Bitbucket, Datadog, NestJS'
    },
    teamSize: 30,
  },
  {
    title: 'Front-End Developer',
    projectName: 'VFoody (FPT University)',
    logo: '/fpt-university.webp',
    period: '05/2024 - 12/2024',
    description: "A platform to connect local food and beverage retailers, and restaurants with Vinhome residents",
    responsibilities: [
      'Team Leadership: Led and managed a development team to deliver projects on time',
      'Front-End Development: Developed and maintained front-end code for both mobile and web applications',
      'API Integration: Collaborated with backend teams to integrate APIs into front-end applications',
      'Business Analysis: Conducted requirements gathering, analysis, and business forecasting to inform development efforts',
      'Project Management: Organized and managed project workflows using Jira, including task assignment, progress tracking, and issue resolution'
    ],
    technologies: {
      'front-end': 'NextJS, NextUI, TypeScript, JavaScript, TailwindCSS, Vite, React Native, React Native Paper, Redux Toolkit, Expo',
      'back-end': 'C#, Entity Framework, Dapper, AutoMapper',
      'others': 'MySQL, AWS, EC2, S3, Elastic Load Balancing, Ansible, Docker, Github Actions, RDS, Firebase Service, Google Map, Jira, Figma, Postman'
    },
    teamSize: 5,
  },
  {
    title: 'Front-End Developer',
    projectName: 'TradeNex (Freelance Job)',
    logo: '/freelance.webp',
    period: '03/2024 - 06/2024',
    description: "Stock Market Platform is a comprehensive online platform designed to provide users with up-to-the-minute information and analysis on global stock markets. The platform will offer real-time stock quotes, market indices, detailed company information, and interactive charts to help investors make informed decisions",
    responsibilities: [
      'Implement user-friendly front-end code for the website using modern web technologies',      'Integrate APIs into front-end to enable dynamic content and interactive functionality'
    ],
    technologies: {
      'front-end': 'NextJS, TailwindCSS, MUI, TypeScript',
      'others': 'Jira, GitHub Desktop, Figma'
    },
    teamSize: 2,
  },
  {
    title: 'Front-End Developer',
    projectName: 'Bird Trading Platform (FPT University)',
    logo: '/fpt-university.webp',
    period: '03/2024 - 06/2024',
    description: "This platform dedicated to creating a community for bird enthusiasts. It serves as a comprehensive online marketplace for buying, selling, and trading birds, bird-related products, and services",
    responsibilities: [
      'Team Leadership: Led and managed a development team to deliver projects on time',
      'Front-End Development: Developed and maintained front-end code',
      'API Integration: Collaborated with backend teams to integrate APIs into front-end applications',
      'Business Analysis: Conducted requirements gathering, analysis, and business forecasting to inform development efforts',
      'Project Management: Organized and managed project workflows using Jira, including task assignment, progress tracking, and issue resolution'
    ],
    technologies: {
      'front-end': 'JavaScript, ReactJS, Redux Toolkit, SCSS, Socket.IO, Material UI',
      'back-end': 'Java, Spring Boot, JUnit Test',
      'others': 'MySQL, GitHub Actions, AWS, Kafka, Docker, Jira, Figma, Postman'
    },
    teamSize: 5,
  }
] as IProjectProps[];