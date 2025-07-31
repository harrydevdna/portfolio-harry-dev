import React from 'react';
import { Separator } from './ui/separator';

const Skills = () => {
  return (
    <div id='skills' className='pt-20 md:pt-30 flex items-center justify-center'>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Technical Skills</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2'/>
      </div>
    </div>
  )
}

export default Skills;
