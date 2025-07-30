import React from 'react';
import { Separator } from './ui/separator';

const Contact = () => {
  return (
    <div id='contact' className='pt-20 md:pt-30 flex items-center justify-center'>
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Contact</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2'/>
      </div>
    </div>
  )
}

export default Contact