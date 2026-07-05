import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionTemplate, useTransform, useMotionValue } from 'framer-motion';

// Magnetic text character that pushes away from the cursor
function MagneticChar({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      // If mouse is within 100px, repel the character
      if (distance < 100) {
        const repelStrength = (100 - distance) / 100;
        x.set(-distanceX * repelStrength * 0.5);
        y.set(-distanceY * repelStrength * 0.5);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.span 
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className="cursor-default hover:text-brand-text transition-colors duration-300"
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
}

export default function AmbientHero() {
  const mouseX = useSpring(0, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(212,175,55,0.2), transparent 80%)`;
  const backgroundBlue = useMotionTemplate`radial-gradient(1000px circle at calc(${mouseX}px - 200px) calc(${mouseY}px + 200px), rgba(255,255,255,0.08), transparent 80%)`;

  const text1 = "Let's build something".split("");
  const text2 = "extraordinary.".split("");

  return (
    <section className="relative w-full min-h-[70vh] bg-brand-bg dark:bg-[#020202] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-brand-border dark:border-white/5 transition-colors duration-500">
      
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{ background }}
      />
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        style={{ background: backgroundBlue }}
      />

      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-brand-text leading-[1.1] mb-8">
          <div>
            {text1.map((char, i) => <MagneticChar key={i}>{char}</MagneticChar>)}
          </div>
          <div>
            {text2.map((char, i) => <MagneticChar key={i}>{char}</MagneticChar>)}
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-brand-text/60 font-medium tracking-wide max-w-2xl"
        >
          Move your cursor over the text to experience magnetic typography. Grab and throw the location cards below.
        </motion.p>
      </div>

    </section>
  );
}
