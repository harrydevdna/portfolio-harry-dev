import { ITimelineItemProps } from "@/components/timeline/Timeline";

export const NAV_ITEMS = [
  { label: "About me", target: "about-me" },
  { label: "Skills", target: "skills" },
  { label: "Experiences", target: "experiences" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact", target: "contact" },
];

export type TNAV_TARGET = (typeof NAV_ITEMS)[number]['target'];

export const ABOUT_ME_HI = 'Hi there👋, My name is Huynh Van Phuot and you can call me Harry';
export const ABOUT_ME_MAIN = 'Software Engineer based in Da Nang City, Vietnam';
export const ABOUT_ME_DESCRIPTION = 'I am a Software Engineer from Vietnam with over 2 years of experiences in multiple companies including Spartan, Nexon and FPT Software';
export const WORK_EXPERIENCE = [
  {
    title: "Software Engineer",
    name: "Spartan",
    location: "Da Nang City, Vietnam",
    period: "8/2025 - Present",
    description: []
  },
  {
    title: "Junior Game Developer",
    name: "Nexon",
    location: "Ho Chi Minh City, Vietnam",
    period: "9/2024 - 8/2025",
    description: []
  },
  {
    title: "Full-Stack Developer",
    name: "FPT Software",
    location: "Ho Chi Minh City, Vietnam",
    period: "9/2023 - 8/2024",
    description: []
  }
] as ITimelineItemProps[];

export const EDUCATION = [
  {
    title: "Software Engineering",
    name: "FPT University",
    location: "Ho Chi Minh City, Vietnam",
    period: "9/2020 - 12/2024",
    description: [
      "Bachelor's degree with a GPA of 8.46/10",
      "100% scholarship for all four years of study",
      "Honorable Student in all 9 out of 9 semesters"
    ],
    isCompany: false
  },
  {
    title: "Specializing in Mathematics",
    name: "Nguyen Binh Khiem High School for the Gifted",
    location: "Quang Nam Province, Vietnam",
    period: "9/2017 - 6/2020",
    description: [],
    isCompany: false
  }
] as ITimelineItemProps[];