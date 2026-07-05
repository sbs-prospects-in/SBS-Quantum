import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

const WORDS = ["SCALE", "DOMINATE", "NEVER BREAK"];

// Magnetic Character Physics
function MagneticChar({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 200, damping: 10, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 200, damping: 10, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      // Repel force if mouse is near
      if (distance < 120) {
        const repelStrength = (120 - distance) / 120;
        x.set(-distanceX * repelStrength * 0.8);
        y.set(-distanceY * repelStrength * 0.8);
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

// Floating Orbit Node
function OrbitNode({ size, color, delay, duration, radiusX, radiusY }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full mix-blend-screen pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: 'blur(2px)',
        marginTop: -size / 2,
        marginLeft: -size / 2
      }}
      animate={{
        x: [0, radiusX, 0, -radiusX, 0],
        y: [radiusY, 0, -radiusY, 0, radiusY],
        scale: [1, 1.2, 1, 0.8, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "linear"
      }}
    />
  );
}

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const text1 = "WE ENGINEER".split("");
  const text2 = "SYSTEMS THAT".split("");

  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-bg overflow-hidden pt-20 border-b border-brand-border/10">
      
      {/* Background Interactive Orbit Nodes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <OrbitNode size={40} color="rgba(212,175,55,0.4)" delay={0} duration={8} radiusX={300} radiusY={200} />
        <OrbitNode size={80} color="rgba(212,175,55,0.2)" delay={2} duration={12} radiusX={500} radiusY={150} />
        <OrbitNode size={20} color="rgba(255,255,255,0.5)" delay={1} duration={6} radiusX={200} radiusY={300} />
        <OrbitNode size={120} color="rgba(212,175,55,0.1)" delay={4} duration={15} radiusX={600} radiusY={400} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#BE8C53] dark:text-[#463b26] tracking-tighter leading-[1.1] mb-6">
              <div className="flex flex-wrap">
                {text1.map((char, i) => <MagneticChar key={`t1-${i}`}>{char}</MagneticChar>)}
              </div>
              <div className="flex flex-wrap">
                {text2.map((char, i) => <MagneticChar key={`t2-${i}`}>{char}</MagneticChar>)}
              </div>
              
              <span className="inline-block relative h-[1.2em] w-full overflow-hidden text-brand-text mt-2">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    style={{ transformOrigin: 'center center -50px' }}
                    className="absolute inset-0"
                  >
                    {WORDS[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-text/60 leading-relaxed font-medium max-w-2xl mt-12 relative z-20 pointer-events-none">
              No generic templates. No out-of-the-box limitations. We build proprietary, bespoke infrastructure designed specifically for your operational reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
