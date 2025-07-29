export const NAV_ITEMS = [
  { label: "About me", target: "about-me" },
  { label: "Skills", target: "skills" },
  { label: "Experiences", target: "experiences" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact", target: "contact" },
];

export type TNAV_TARGET = (typeof NAV_ITEMS)[number]['target'];