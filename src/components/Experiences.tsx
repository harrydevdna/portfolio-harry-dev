'use client';

import { EXPERIENCE_PROJECTS, EXPERIENCE_TITLE } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Separator } from './ui/separator';

const Experiences = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div
      id='experiences'
      className='pt-16 md:pt-20 flex flex-col gap-8 items-center justify-center'
    >
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Work Experience</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2' />
      </div>
      <p className='text-xl md:text-2xl w-3/4 max-w-[1000px] text-center'>
        {EXPERIENCE_TITLE}
      </p>

      <Carousel
        plugins={[plugin.current]}
        className='w-2/3 md:w-10/12'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {EXPERIENCE_PROJECTS.map((experience, index) => (
            <CarouselItem
              key={index}
              className='basis-1/1 md:basis-1/2 lg:basis-1/3'
            >
              <Card className='h-[32vh] md:h-[30vh] lg:h-[60vh] lg:max-h-[350px] py-4 md:py-8 flex justify-between dark:border-1 dark:border-gray-600'>
                <CardHeader>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={experience.logo}
                      width={80}
                      height={80}
                      alt='company logo'
                      className='w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 border-1 border-gray-300 dark:border-white dark:bg-white rounded-sm object-contain'
                    />
                    <div className='flex flex-col gap-1 md:gap-3'>
                      <CardTitle className='text-xs md:text-lg lg:text-xl font-semibold'>
                        {experience.companyName ?? experience.projectName}
                      </CardTitle>
                      <Badge
                        variant='secondary'
                        className='text-[8px] md:text-xs lg:text-sm dark:bg-gray-700 bg-gray-200'
                      >
                        {experience.title}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Calendar className='w-4 h-4 lg:w-5 lg:h-5' />
                      <span className='text-xs lg:text-lg'>{experience.period}</span>
                    </div>
                    {experience.location && (
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <MapPin className='w-4 h-4 lg:w-5 lg:h-5' />
                        <span className='text-xs lg:text-lg'>
                          {experience.location}
                        </span>
                      </div>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant='outline'
                        className='w-full h-8 md:h-10 lg:h-12 shadow-md text-[12px] md:text-base lg:text-lg cursor-pointer'
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      className='w-5/6 !max-w-3xl flex flex-col gap-8 max-h-[80dvh] overflow-y-auto px-10'
                      showCloseButton={false}
                    >
                      <DialogHeader>
                        <DialogTitle className='flex items-center gap-4'>
                          <Image
                            src={experience.logo}
                            width={80}
                            height={80}
                            alt='company logo'
                            className='w-20 h-20 md:w-30 md:h-30 lg:w-36 lg:h-36 border-1 border-gray-300 dark:border-white dark:bg-white rounded-sm object-contain'
                          />
                          <div className='flex flex-col gap-2 lg:gap-4'>
                            <p className='text-base md:text-2xl lg:text-4xl font-bold text-start'>
                              {experience.companyName ?? experience.projectName}
                            </p>
                            <Badge
                              variant='secondary'
                              className='text-[10px] md:text-sm lg:text-base dark:bg-gray-700 bg-gray-200'
                            >
                              {experience.title}
                            </Badge>
                          </div>
                        </DialogTitle>
                      </DialogHeader>
                      <div className='space-y-3'>
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                          <Calendar className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' />
                          <span className='md:text-lg'>
                            {experience.period}
                          </span>
                        </div>
                        {experience.location && (
                          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <MapPin className='w-4 h-4 lg:w-6 lg:h-6' />
                            <span className='md:text-lg lg:text-xl'>
                              {experience.location}
                            </span>
                          </div>
                        )}
                        <div>
                          <h4 className='font-semibold mb-2 text-lg md:text-xl lg:text-2xl'>
                            Description:
                          </h4>
                          <p className='md:text-lg lg:text-xl'>{experience.description}</p>
                        </div>
                        <div>
                          <h4 className='font-semibold mb-2 text-lg md:text-xl lg:text-2xl'>
                            Technologies:
                          </h4>
                          <ul className='list-disc list-inside space-y-1 md:text-lg lg:text-xl'>
                            {experience.technologies['front-end'] && (
                              <li>
                                <strong>Front-end:</strong>{' '}
                                {experience.technologies['front-end']}
                              </li>
                            )}
                            {experience.technologies['back-end'] && (
                              <li>
                                <strong>Back-end:</strong>{' '}
                                {experience.technologies['back-end']}
                              </li>
                            )}
                            {experience.technologies['others'] && (
                              <li>
                                <strong>Others:</strong>{' '}
                                {experience.technologies['others']}
                              </li>
                            )}
                          </ul>
                        </div>
                        {experience.responsibilities &&
                          experience.responsibilities.length > 0 && (
                            <div>
                              <h4 className='font-semibold mb-2 text-lg md:text-xl lg:text-2xl'>
                                Responsibilities:
                              </h4>
                              <ul className='list-disc list-inside space-y-1 md:text-lg lg:text-xl'>
                                {experience.responsibilities.map(
                                  (item, idx) => (
                                    <li key={idx}>{item}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        {experience.teamSize && (
                          <h4 className='font-semibold mb-2 text-lg md:text-xl lg:text-2xl'>
                            Team size:{' '}
                            <span className='text-base md:text-lg lg:text-xl font-thin'>
                              {experience.teamSize} members
                            </span>
                          </h4>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Experiences;
