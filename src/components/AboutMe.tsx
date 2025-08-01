'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ABOUT_ME_HI,
  ABOUT_ME_MAIN,
  EDUCATION,
  WORK_EXPERIENCE,
} from '@/constants';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Timeline from './timeline/Timeline';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

const AboutMe = () => {
  const words = ABOUT_ME_HI.split(' ');
  const [visibleWordCount, setVisibleWordCount] = useState(0);

  useEffect(() => {
    if (visibleWordCount < words.length) {
      const timer = setTimeout(() => {
        setVisibleWordCount(visibleWordCount + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleWordCount, words.length]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch("/resume/demo.pdf");
      if (!response.ok) {
        throw new Error("Resume file not found");
      }
      const blob = await response.blob();
      
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Huynh-Van-Phuot_Resume_Software-Engineer.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Oops, something went wrong 😢", {
        description: "Please try again or contact me directly!",
        duration: 2000,
      })
    }
  }

  return (
    <section
      id='about-me'
      className='pt-16 md:pt-20 flex items-center justify-center flex-col gap-8 max-w-11/12 mx-auto'
    >
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>About Me</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2' />
      </div>
      <Image
        src={'/common/avatar.webp'}
        width={200}
        height={200}
        alt='avatar'
        className='w-28 h-28 md:w-40 md:h-40 rounded-full object-cover'
      />
      <h4 className='md:text-xl lg:text-2xl text-center h-8 md:h-[25px] lg:h-[30px]'>
        {words.slice(0, visibleWordCount).map((word, idx) => (
          <span
            key={idx}
            className='fade-in-word'
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {word}{' '}
          </span>
        ))}
      </h4>
      <h1 className='text-2xl md:text-4xl lg:text-5xl max-w-[750px] text-center'>
        {ABOUT_ME_MAIN}
      </h1>
      <div className='flex gap-4'>
        <Button
          className='md:text-xl border-[1px] !px-4 !py-6 md:!p-8 rounded-full cursor-pointer'
          onClick={handleContactClick}
        >
          Connect with me
          <ArrowRight className='!w-5 !h-5 md:!w-8 md:!h-8' />
        </Button>
        <Button
          variant='secondary'
          className='md:text-xl border-[1px] border-black dark:border-white !px-4 !py-6 md:!p-8 rounded-full cursor-pointer'
          onClick={handleResumeDownload}
        >
          My resume
          <Download className='!w-5 !h-5 md:!w-8 md:!h-8' />
        </Button>
      </div>

      <Accordion
        type='multiple'
        className='w-11/12 md:w-5/6 lg:w-2/3 max-w-6xl'
        defaultValue={[]}
      >
        <AccordionItem value='work-experience'>
          <AccordionTrigger className='text-xl md:text-2xl hover:no-underline cursor-pointer'>
            Work Experience
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <Timeline items={WORK_EXPERIENCE} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='education'>
          <AccordionTrigger className='text-xl md:text-2xl hover:no-underline cursor-pointer'>
            Education
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <Timeline items={EDUCATION} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default AboutMe;
