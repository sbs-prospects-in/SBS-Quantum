import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ["SCALE", "DOMINATE", "NEVER BREAK"];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#1a150e] overflow-hidden pt-20">
      {/* Abstract dark architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DBBA9510_1px,transparent_1px),linear-gradient(to_bottom,#DBBA9510_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-brand-muted font-bold tracking-widest uppercase text-sm mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
              Core Practices
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[1.1] mb-6">
              WE ENGINEER <br />
              SYSTEMS THAT
              <br />
              <span className="inline-block relative h-[1.2em] w-full overflow-hidden text-brand-muted">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                    className="absolute inset-0"
                  >
                    {WORDS[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium max-w-2xl mt-8">
              No generic templates. No out-of-the-box limitations. We build proprietary, bespoke infrastructure designed specifically for your operational reality.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-muted/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen translate-x-1/3"></div>
    </section>
  );
}
