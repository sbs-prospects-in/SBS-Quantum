import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function MagneticWord({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of element to mouse
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Move the element 30% of the distance towards the mouse
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className="inline-block cursor-pointer px-2"
    >
      {children}
    </motion.div>
  );
}

export default function MagneticHero() {
  const words1 = "JOIN THE".split(" ");
  const words2 = "COLLECTIVE".split(" ");

  return (
    <section className="relative w-full min-h-screen bg-brand-bg dark:bg-[#050505] transition-colors duration-300 flex flex-col items-center justify-center text-brand-text dark:text-white overflow-hidden px-4 py-32">
      
      {/* Background radial gradient to give depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="z-10 text-center flex flex-col items-center select-none">
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-[0.9] flex flex-wrap justify-center">
          {words1.map((word, i) => (
            <MagneticWord key={i}>
              <span className="text-brand-text hover:text-brand-accent transition-colors duration-300 block">{word}</span>
            </MagneticWord>
          ))}
        </h1>
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-[0.9] flex flex-wrap justify-center text-brand-text">
          {words2.map((word, i) => (
            <MagneticWord key={i}>
              <span className="block">{word}</span>
            </MagneticWord>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-xl md:text-2xl text-brand-muted dark:text-brand-accent max-w-2xl text-center font-medium tracking-wide pointer-events-none"
        >
          Hover over the text. Feel the physics. We build interfaces that breathe.
        </motion.p>
      </div>

    </section>
  );
}
