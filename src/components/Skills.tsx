'use client';

import { TECHNICAL_SKILLS_DARK, TECHNICAL_SKILLS_LIGHT } from '@/constants';
import { IParticle } from '@/types';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Separator } from './ui/separator';

const Skills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const particlesRef = useRef<IParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    const createParticles = () => {
      const particles: IParticle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        })
      }
      particlesRef.current = particles;
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");
      const particleColor = isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.4)";
      const lineColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        })
      })
    }

    const animate = () => {
      drawParticles()
      animationRef.current = requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div
      id='skills'
      className='pt-16 md:pt-20 relative flex items-center justify-center flex-col gap-8 max-w-11/12 mx-auto'
    >
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>Technical Skills</h1>
        <Separator className='bg-cyan-400 py-[1px] mt-2' />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full pointer-events-none max-w-11/12 mx-auto"
      />

      {/* Light mode skills */}
      <div className="dark:hidden mx-auto perspective-midrange w-full lg:w-[1000px] h-[150px] md:h-[300px] lg:h-[500px]">
        <div className="w-full h-full transform-3d animate-rotate3d">
          {TECHNICAL_SKILLS_LIGHT.map((skill, index) => {
            const angle = `${(360 / TECHNICAL_SKILLS_LIGHT.length) * index}deg`;
            return (
              <Image
                key={skill.name}
                src={skill.imageUrl}
                alt={skill.name}
                width={24}
                height={24}
                className="absolute top-1/2 left-1/2 w-10 md:w-20 lg:w-24 object-contain origin-center -translate-x-1/2 -translate-y-1/2 rotate-angle"
                style={{ '--angle': angle } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>

      {/* Dark mode skills */}
      <div className="hidden dark:block mx-auto perspective-midrange w-full lg:w-[1000px] h-[150px] md:h-[300px] lg:h-[500px]">
        <div className="w-full h-full transform-3d animate-rotate3d">
          {TECHNICAL_SKILLS_DARK.map((skill, index) => {
            const angle = `${(360 / TECHNICAL_SKILLS_DARK.length) * index}deg`;
            return (
              <Image
                key={skill.name}
                src={skill.imageUrl}
                alt={skill.name}
                width={24}
                height={24}
                className="absolute top-1/2 left-1/2 w-10 md:w-20 lg:w-24 object-contain origin-center -translate-x-1/2 -translate-y-1/2 rotate-angle"
                style={{ '--angle': angle } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
