import { CERTIFICATIONS } from '@/constants';
import {
  Award,
  BadgeCheckIcon,
  Building2,
  Calendar,
  ExternalLink,
  Trophy,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

const Certifications = () => {
  return (
    <div
      id='certifications'
      className='pt-16 md:pt-20 flex items-center justify-center flex-col gap-8 max-w-11/12 mx-auto'
    >
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Certifications</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2' />
      </div>

      <Accordion type='multiple' className='w-11/12 md:w-5/6 lg:w-2/3 max-w-6xl' defaultValue={[]}>
        {CERTIFICATIONS.map((cert, key) => (
          <AccordionItem key={key} value={cert.name}>
            <AccordionTrigger className='hover:no-underline cursor-pointer py-4 md:p-6 lg:p-8'>
              <div className='flex items-center gap-3 text-xl md:text-2xl'>
                <Trophy className='w-5 h-5 lg:w-7 lg:h-7 text-orange-400' />
                {cert.name}
              </div>
            </AccordionTrigger>

            <AccordionContent className='flex flex-col gap-4 text-balance md:px-6 lg:px-18'>
              <Card className='shadow-sm dark:border-1 dark:border-gray-600 group hover:shadow-xl hover:scale-[102%] transition-all duration-300'>
                <CardContent>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='flex lg:flex-col justify-between'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2 md:gap-5'>
                          <Building2 className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-muted-foreground' />
                          <div>
                            <p className='text-[10px] md:text-sm lg:text-base text-muted-foreground'>
                              Issued by
                            </p>
                            <p className='font-semibold text-xs md:text-base lg:text-xl'>
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className='flex items-center gap-2 md:gap-5'>
                          <Calendar className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-muted-foreground' />
                          <div>
                            <p className='text-[10px] md:text-sm lg:text-base text-muted-foreground'>
                              Date Received
                            </p>
                            <p className='font-semibold text-xs md:text-base lg:text-xl'>
                              {cert.dateReceived}
                            </p>
                          </div>
                        </div>

                        {cert.validUntil && (
                          <div className='flex items-center gap-2 md:gap-5'>
                            <Calendar className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-muted-foreground' />
                            <div>
                              <p className='text-[10px] md:text-sm lg:text-base text-muted-foreground'>
                                Valid Until
                              </p>
                              <p className='font-semibold text-xs md:text-base lg:text-xl'>
                                {cert.validUntil}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {cert.certificateLink && (
                        <div>
                          <Button
                            asChild
                            variant='outline'
                            className='w-full lg:w-2/3 h-7 md:h-10 lg:h-12 bg-transparent'
                          >
                            <Link
                              href={cert.certificateLink}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center lg:gap-3'
                            >
                              <ExternalLink className='!w-3 !h-3 lg:!w-5 lg:!h-5' />
                              <span className='text-[10px] md:text-base lg:text-lg'>
                                View Details
                              </span>
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className='flex justify-center lg:justify-end'>
                      <div className='relative w-full max-w-xl'>
                        <Image
                          src={cert.certificateImage}
                          alt={`${cert.name} certificate`}
                          width={350}
                          height={200}
                          className='w-full h-auto rounded-lg shadow-lg border border-border object-contain bg-white'
                        />
                        <div className='absolute top-2 right-2'>
                          <Badge
                            variant='secondary'
                            className='bg-emerald-600 text-white dark:bg-emerald-500'
                          >
                            <BadgeCheckIcon /> Verified
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Certifications;
