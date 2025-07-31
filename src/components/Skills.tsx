import React from 'react';
import { Separator } from './ui/separator';

const Skills = () => {
  return (
    <div
      id='skills'
      className='pt-16 md:pt-20 flex items-center justify-center flex-col gap-8 max-w-11/12 mx-auto'
    >
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Technical Skills</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2' />
      </div>
    </div>
  );
};

export default Skills;
