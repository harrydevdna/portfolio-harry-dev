'use client';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_ITEMS, TNAV_TARGET } from '@/constants';
import { AlignRight, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from './providers/theme-toggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<TNAV_TARGET>(NAV_ITEMS[0].target);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.transform =  'translateX(-12rem)';
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.transform =  'translateX(12rem)';
    }  }

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLImageElement, MouseEvent>, id: TNAV_TARGET) => {
    e.preventDefault();
    if (menuRef) {
      closeMenu();
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    (e.target as HTMLAnchorElement).blur();
  };

  return (
    <div className='flex justify-between items-center fixed w-full z-50 md:px-4 px-4 backdrop-blur-sm '>
      <Image src={'/common/logo.webp'} alt='logo' width={100} height={100} className='w-18 h-18 md:w-25 md:h-25 cursor-pointer object-contain' onClick={e => handleNavClick(e, NAV_ITEMS[0].target)}/>
      <NavigationMenu className='hidden md:block'>
        <NavigationMenuList className='bg-background/50 py-4 px-12 lg:px-20 shadow-2xl rounded-full'>
          {NAV_ITEMS.map((item) => (
            <NavigationMenuItem key={item.target}>
              <NavigationMenuLink
                href={`#${item.target}`}
                onClick={e => handleNavClick(e, item.target)}
                className={`text-lg lg:text-2xl px-2 rounded-md font-medium transition-colors
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
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <Button variant='ghost' className='rounded-full hover:bg-transparent w-10 h-10 block md:hidden' size='icon' onClick={openMenu}><AlignRight className="!w-8 !h-8"/></Button>
      </div>

      {/* Mobile menu */}
      <ul ref={menuRef} className='md:hidden fixed bg-sky-200 dark:bg-gray-600 top-0 bottom-0 h-screen w-48 -right-48 flex flex-col px-6 py-8 font-medium transition duration-500'>
        <Button variant='ghost' className='rounded-full hover:bg-transparent block md:hidden right-0 absolute top-0' size='icon' onClick={closeMenu}><X className="!w-8 !h-8" color='red'/></Button>
        <a className='py-2 text-xl' href='#about-me' onClick={closeMenu}>About me</a>
        <a className='py-2 text-xl' href='#skills' onClick={closeMenu}>Skills</a>
        <a className='py-2 text-xl' href='#experiences' onClick={closeMenu}>Experiences</a>
        <a className='py-2 text-xl' href='#certifications' onClick={closeMenu}>Certifications</a>
        <a className='py-2 text-xl' href='#contact' onClick={closeMenu}>Contact</a>
      </ul>
    </div>
  )
}

export default Navbar;
