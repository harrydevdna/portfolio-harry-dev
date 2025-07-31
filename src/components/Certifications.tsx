import { CERTIFICATIONS } from '@/constants';
import { Award, BadgeCheckIcon, Building2, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Separator } from './ui/separator';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

const Certifications = () => {
  return (
    <div id='certifications' className='pt-18 md:pt-24 flex items-center justify-center flex-col gap-8 md:gap-12 max-w-11/12 mx-auto'>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Certifications</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2'/>
      </div>

      <Accordion
        type="multiple"
        className="w-11/12"
        defaultValue={[]}
      >
        {CERTIFICATIONS.map((cert, key) => 
          <AccordionItem key={key} value={cert.name}>
            <AccordionTrigger className="hover:no-underline cursor-pointer py-4 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 text-xl lg:text-3xl">
                <Trophy className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400" />
                {cert.name}
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Card className="shadow-sm dark:border-1 dark:border-gray-600">
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex lg:flex-col justify-between">
                      <div className='flex flex-col gap-4'>
                        <div className="flex items-center gap-5">
                          <Building2 className="w-5 h-5 lg:w-8 lg:h-8 text-muted-foreground" />
                          <div>
                            <p className="text-sm lg:text-lg text-muted-foreground">Issued by</p>
                            <p className="font-semibold text-base lg:text-2xl">{cert.issuer}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-5">
                          <Calendar className="w-5 h-5 lg:w-8 lg:h-8 text-muted-foreground" />
                          <div>
                            <p className="text-sm lg:text-lg text-muted-foreground">Date Received</p>
                            <p className="font-semibold text-base lg:text-2xl">{cert.dateReceived}</p>
                          </div>
                        </div>

                        {cert.validUntil && (
                          <div className="flex items-center gap-5">
                            <Calendar className="w-5 h-5 lg:w-8 lg:h-8 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Valid Until</p>
                              <p className="font-semibold text-base lg:text-2xl">{cert.validUntil}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {cert.certificateLink && (
                        <div>
                          <Button asChild variant="outline" className="w-full lg:w-1/3 h-10 lg:h-16 bg-transparent">
                            <Link
                              href={cert.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center lg:gap-3"
                            >
                              <ExternalLink className="lg:!w-7 lg:!h-7" />
                              <span className='text-sm lg:text-xl'>View Details</span>
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center lg:justify-end">
                      <div className="relative w-full max-w-xl">
                        <Image
                          src={cert.certificateImage}
                          alt={`${cert.name} certificate`}
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg shadow-lg border border-border object-contain bg-white"
                        />
                        <div className="absolute top-2 right-2">
                        <Badge
                          variant="secondary"
                          className="bg-emerald-600 text-white dark:bg-emerald-500"
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
        )}
      </Accordion>
    </div>
  )
}

export default Certifications;
