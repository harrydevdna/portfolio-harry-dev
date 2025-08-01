import getYearOfExperiences from '@/lib/yoe';
import { ICertificateProps, IProjectProps, ITimelineItemProps } from '@/types';

export const NAV_ITEMS = [
  { label: 'About me', target: 'about-me' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experiences', target: 'experiences' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' },
];

export type TNAV_TARGET = (typeof NAV_ITEMS)[number]['target'];

export const ABOUT_ME_HI =
  'Hi there👋, My name is Huynh Van Phuot and you can call me Harry';
export const ABOUT_ME_MAIN =
  'Software Engineer based in Ho Chi Minh City, Vietnam';
export const WORK_EXPERIENCE = [
  {
    title: 'Software Engineer',
    name: 'Spartan',
    location: 'Da Nang City, Vietnam',
    period: '08/2025 - Present',
    description: [],
  },
  {
    title: 'Game Developer',
    name: 'Nexon',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2024 - 08/2025',
    description: [],
  },
  {
    title: 'Full-Stack Developer',
    name: 'FPT Software',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2023 - 08/2024',
    description: [],
  },
] as ITimelineItemProps[];

export const EDUCATION = [
  {
    title: 'Software Engineering',
    name: 'FPT University',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2020 - 12/2024',
    description: [
      "Bachelor's degree with a GPA of 8.46/10 (Very Good)",
      '100% scholarship for all four years of study',
      'Honorable Student in all 9 out of 9 semesters',
    ],
    isCompany: false,
  },
  {
    title: 'Specializing in Mathematics',
    name: 'Nguyen Binh Khiem High School for the Gifted',
    location: 'Quang Nam Province, Vietnam',
    period: '09/2017 - 06/2020',
    description: [],
    isCompany: false,
  },
] as ITimelineItemProps[];

export const EXPERIENCE_TITLE = `I am a Software Engineer from Vietnam with ${getYearOfExperiences()} of experience working at companies such as Spartan, Nexon, and FPT Software. In addition to my professional roles, I also completed several projects during my university studies`;

export const EXPERIENCE_PROJECTS = [
  {
    title: 'Software Engineer',
    isCompany: true,
    companyName: 'Spartan',
    logo: '/experience/spartan.webp',
    location: 'Da Nang City, Vietnam',
    period: '08/2025 - Present',
    description: 'Wait for update...',
    responsibilities: ['Wait for update...'],
    technologies: {
      'front-end': 'ReactJS, NextJS, Ant Design',
    },
    teamSize: 10,
  },
  {
    title: 'Game Developer',
    isCompany: true,
    companyName: 'Nexon',
    logo: '/experience/nexon.webp',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2024 - 08/2025',
    description:
      'As a Junior Game Developer at Nexon (the largest game company in Korea and ranks among the top 10 globally). I contributed to the development and implementation of in-game events and promotional content for popular Nexon titles, including FIFA Online 4, Crazy Arcade BnB, Blue Archive, The Kingdom of the Winds, and Mabinogi',
    responsibilities: [
      'Oversee task progress for the team and report product completion to Nexon Korea',
      'Coordinate with Nexon Korea to clarify requirements and request necessary assets',
      'Collaborate with a small team (typically 2–4 members, sometimes solo) on product development',
      'Resolved bugs and make improvements based on feedback or changes requested by Nexon Korea during their review',
    ],
    technologies: {
      'front-end': 'JavaScript, TypeScript, ReactJS, Phaser',
      others: 'Jira, GitLab, Slack, MS Teams',
    },
    teamSize: 12,
  },
  {
    title: 'Full-Stack Developer',
    isCompany: true,
    companyName: 'FPT Software',
    logo: '/experience/fpt-software.webp',
    location: 'Ho Chi Minh City, Vietnam',
    period: '09/2023 - 08/2024',
    description:
      'As a Full-stack developer at FPT Software (largest outsourcing company in Vietnam). I contributed to the development and implementation of the CurbWaste project - a comprehensive platform designed to optimize operations for waste hauling businesses. CurbWaste helps improve operational efficiency and profitability while supporting more effective and sustainable waste treatment practices',
    responsibilities: [
      'Implemented user interfaces based on provided prototypes',
      'Communicate directly with customers (USA) and development teams in India',
      'Resolved bugs and optimized code to enhance application performance',
      'Provided regular progress updates in daily meetings with the Project Manager',
    ],
    technologies: {
      'front-end': 'ReactJS, JavaScript',
      'back-end': 'NodeJS, NestJS',
      others:
        'PostgreSQL, MongoDB, Bitbucket, Postman, Docker, Datadog, MS Teams',
    },
    teamSize: 30,
  },
  {
    title: 'Front-End Developer',
    projectName: 'Meal Sync (FPT University)',
    logo: '/experience/fpt-university.webp',
    period: '05/2024 - 12/2024',
    description:
      'A platform to connect local food and beverage retailers, and restaurants with Vinhome residents',
    responsibilities: [
      'Team Leadership: Led and managed a development team to deliver projects on time',
      'Front-End Development: Developed and maintained front-end code for both mobile and web applications',
      'API Integration: Collaborated with backend teams to integrate APIs into front-end applications',
      'Business Analysis: Conducted requirements gathering, analysis, and business forecasting to inform development efforts',
      'Project Management: Organized and managed project workflows using Jira, including task assignment, progress tracking, and issue resolution',
    ],
    technologies: {
      'front-end':
        'NextJS, NextUI, TypeScript, JavaScript, TailwindCSS, Vite, React Native, React Native Paper, Redux Toolkit, Expo',
      'back-end': 'C#, Entity Framework, Dapper, AutoMapper',
      others:
        'MySQL, AWS, EC2, S3, Elastic Load Balancing, Ansible, Docker, Github Actions, RDS, Firebase Service, Google Map, Jira, Figma, Postman',
    },
    teamSize: 5,
  },
  {
    title: 'Front-End Developer',
    projectName: 'TradeNex (Freelance Job)',
    logo: '/experience/freelance.webp',
    period: '03/2024 - 06/2024',
    description:
      'Stock Market Platform is a comprehensive online platform designed to provide users with up-to-the-minute information and analysis on global stock markets. The platform will offer real-time stock quotes, market indices, detailed company information, and interactive charts to help investors make informed decisions',
    responsibilities: [
      'Implement user-friendly front-end code for the website using modern web technologies',
      'Integrate APIs into front-end to enable dynamic content and interactive functionality',
    ],
    technologies: {
      'front-end': 'NextJS, TailwindCSS, MUI, TypeScript',
      others: 'Jira, GitHub Desktop, Figma',
    },
    teamSize: 2,
  },
  {
    title: 'Front-End Developer',
    projectName: 'Bird Trading Platform (FPT University)',
    logo: '/experience/fpt-university.webp',
    period: '03/2024 - 06/2024',
    description:
      'This platform dedicated to creating a community for bird enthusiasts. It serves as a comprehensive online marketplace for buying, selling, and trading birds, bird-related products, and services',
    responsibilities: [
      'Team Leadership: Led and managed a development team to deliver projects on time',
      'Front-End Development: Developed and maintained front-end code',
      'API Integration: Collaborated with backend teams to integrate APIs into front-end applications',
      'Business Analysis: Conducted requirements gathering, analysis, and business forecasting to inform development efforts',
      'Project Management: Organized and managed project workflows using Jira, including task assignment, progress tracking, and issue resolution',
    ],
    technologies: {
      'front-end':
        'JavaScript, ReactJS, Redux Toolkit, SCSS, Socket.IO, Material UI',
      'back-end': 'Java, Spring Boot, JUnit Test',
      others: 'MySQL, GitHub Actions, AWS, Kafka, Docker, Jira, Figma, Postman',
    },
    teamSize: 5,
  },
] as IProjectProps[];

export const CERTIFICATIONS = [
  {
    name: 'Test of English for International Communication (TOEIC)',
    issuer: 'IIG Vietnam',
    dateReceived: '15/08/2024',
    validUntil: '15/08/2026',
    certificateImage: '/certification/TOEIC.webp',
    certificateLink:
      'https://github.com/harrydevdna/awards?tab=readme-ov-file#toeic-certification-655-overall',
  },
  {
    name: 'User Experience Research and Design',
    issuer: 'University of Michigan',
    dateReceived: '05/2024',
    certificateImage: '/certification/user-experience-research-and-design.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/26T2J4MTLUK8',
  },
  {
    name: 'Project Management Principles and Practices',
    issuer: 'University of California, Irvine',
    dateReceived: '01/2024',
    certificateImage:
      '/certification/project-management-principles-and-practices.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/MQEQNWWKARMK',
  },
  {
    name: 'Academic English: Writing',
    issuer: 'University of California, Irvine',
    dateReceived: '09/2023',
    certificateImage: '/certification/academic-english-writing.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/QP99579DACD8',
  },
  {
    name: 'CertNexus Certified Ethical Emerging Technologist',
    issuer: 'CertNexus',
    dateReceived: '05/2023',
    certificateImage:
      '/certification/certnexus-certified-ethical-emerging-technologist.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/professional-cert/LUV2HLZFSB7M',
  },
  {
    name: 'Software Development Lifecycle',
    issuer: 'University of Minnesota',
    dateReceived: '01/2023',
    certificateImage: '/certification/software-development-lifecycle.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/Y9UZWEVQFS2Z',
  },
  {
    name: 'Web Design for Everybody_Basics of Web Development & Coding',
    issuer: 'University of Michigan',
    dateReceived: '10/2022',
    certificateImage:
      '/certification/web-design-for-everybody-basics-of-web-development-coding.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/84F383ZA2LQT',
  },
  {
    name: 'Computer Communications',
    issuer: 'University of Colorado System',
    dateReceived: '07/2022',
    certificateImage: '/certification/computer-communications.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/8GMKFMUAABQ2',
  },
  {
    name: 'Academic Skills for University Success',
    issuer: 'The University of Sydney',
    dateReceived: '01/2022',
    certificateImage:
      '/certification/academic-skills-for-university-success.webp',
    certificateLink:
      'https://www.coursera.org/account/accomplishments/specialization/9Y549KYYPF3P',
  },
] as ICertificateProps[];

export const CONTACT_INFORMATION = {
  phoneNumber: '0372485570',
  email: 'phuothuynh2002@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harrydevdna',
  github: 'https://github.com/harrydevdna',
  leetcode: 'https://leetcode.com/u/harrydevdna',
  facebook: 'https://www.facebook.com/harrydevdna',
};

export const CONTACT_CONTENT = {
  title: 'Ready to work together?',
  content: `I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life!`,
};
