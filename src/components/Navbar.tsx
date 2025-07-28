'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_ITEMS } from '@/constants';
import { Icon, Send } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0].target);

  useEffect(() => {
    const handleScroll = () => {
      let current = NAV_ITEMS[0].target;
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          
          if (rect.top <= 200 && rect.bottom > 200) {
            current = item.target;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    (e.target as HTMLAnchorElement).blur();
  };

  return (
    <div className='flex justify-between items-center fixed w-full z-50 px-20'>
      <Image src='/logo.png' alt='logo' width={100} height={100} />
      <NavigationMenu>
        <NavigationMenuList className='bg-background/50 backdrop-blur-sm py-4 px-12 shadow-lg rounded-xl'>
          {NAV_ITEMS.map((item) => (
            <NavigationMenuItem key={item.target}>
              <NavigationMenuLink
                href={`#${item.target}`}
                onClick={e => handleNavClick(e, item.target)}
                className={`px-4 text-lg rounded-md font-medium transition-colors
                  data-[active=true]:!bg-transparent focus:!bg-transparent
                  ${activeSection === item.target ? 'font-bold' : 'text-gray-500'}
                `}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant='outline' className='rounded-2xl text-lg font-thin !p-8 shadow-lg'>Connect me <Send /></Button>
    </div>
  )
}

export default Navbar;