import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCORDION_DATA = [
  {
    id: 1,
    title: 'Interface Layer',
    desc: 'User interfaces are engineered for responsiveness, accessibility, and consistency. We optimize rendering performance, minimize layout instability, and deliver seamless interactions that enhance user experience across devices and platforms.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Distributed Core',
    desc: 'Our application architecture is designed for scalability, resilience, and efficient processing. Modular services and event-driven components enable reliable performance under varying workloads while supporting rapid feature delivery and long-term maintainability.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Cloud Native',
    desc: 'Cloud infrastructure is built for availability, scalability, and operational resilience. We implement containerized workloads, automated deployment pipelines, and multi-region architectures that support business continuity, high availability, and efficient resource utilization.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

export default function HorizontalAccordion() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-brand-bg dark:bg-[#020202] py-32 md:py-48 px-4 sm:px-6 lg:px-8 border-y border-brand-border dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-text dark:text-white uppercase tracking-[-0.03em] leading-[0.9]">
            Architectural <br/>
            <span className="text-brand-accent">Constraints.</span>
          </h2>
          <p className="mt-8 text-xl text-brand-muted dark:text-brand-text/60 dark:text-white/60 max-w-xl">
            We enforce strict performance limits. If a technology doesn't compile to minimal artifacts or process at edge speeds, it doesn't make the cut.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-[60vh] md:h-[75vh] gap-2 md:gap-4 w-full">
          {ACCORDION_DATA.map((item) => {
            const isActive = active === item.id;
            
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActive(item.id)}
                onMouseEnter={() => setActive(item.id)}
                initial={false}
                animate={{
                  flex: isActive ? 4 : 1, // On desktop, active takes 4x the space
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative h-full overflow-hidden cursor-pointer flex-shrink-0 flex-grow group bg-brand-surface dark:bg-[#050505]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity will-change-transform"
                    style={{ willChange: 'transform' }}
                  />
                  <div className={`absolute inset-0 transition-colors duration-700 ease-out ${isActive ? 'bg-black/20' : 'bg-black/80 group-hover:bg-black/60'}`} />
                  {/* Strong gradient at bottom to ensure white text is always visible */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0" />
                </div>
                
                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-end">
                  
                  {/* Expanded Content */}
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col justify-end h-full w-full max-w-md"
                      >
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 whitespace-normal tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed drop-shadow-md">
                          {item.desc}
                        </p>
                      </motion.div>
                    ) : (
                      /* Compressed Vertical Title (Only on Desktop) */
                      <motion.div
                        key="compressed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:flex flex-col items-center justify-end h-full w-full pb-8"
                      >
                        <h3 className="text-2xl font-display font-bold text-white tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {item.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Mobile Compressed Title (Horizontal) */}
                  {!isActive && (
                    <div className="md:hidden absolute bottom-6 left-6 drop-shadow-lg z-20">
                      <h3 className="text-xl font-display font-bold text-white opacity-90">
                        {item.title}
                      </h3>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
