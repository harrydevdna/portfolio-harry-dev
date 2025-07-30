import { Building, MapPin, School } from 'lucide-react';
import React from 'react';

export interface ITimelineItemProps {
  title: string;
  name: string;
  location: string;
  period: string;
  description: string[];
  isCompany?: boolean;
}

const TimelineItem: React.FC<ITimelineItemProps> = ({
  title,
  name,
  location,
  period,
  description,
  isCompany = true
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>
        <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>
      </div>
      
      <div className="flex-1 pb-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold text-foreground max-w-7/12">{title}</h3>
          <span className="text-xs md:text-sm dark:text-white dark:border-white border-1 border-black text-black px-4 py-2 rounded-full">
            {period}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
          {isCompany ? <Building className="w-4 h-4" /> : <School className="w-4 h-4" />}
          <span className="text-sm md:text-base font-medium">{name}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm md:text-base">{location}</span>
        </div>
        
        <ul className="space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-sm md:text-base text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ITimelineProps {
  items: ITimelineItemProps[];
}

const Timeline: React.FC<ITimelineProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default Timeline; 