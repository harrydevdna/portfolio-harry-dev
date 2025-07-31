export interface ITimelineItemProps {
  title: string;
  name: string;
  location: string;
  period: string;
  description: string[];
  isCompany?: boolean;
}

export interface ITimelineProps {
  items: ITimelineItemProps[];
}

export interface IProjectProps {
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
    'front-end'?: string;
    'back-end'?: string;
    'others'?: string;
  };
  teamSize: number;
  link?: string;
}

export interface ICertificateProps {
  name: string;
  issuer: string;
  dateReceived: string;
  validUntil?: string;
  certificateImage: string;
  certificateLink: string;
}
