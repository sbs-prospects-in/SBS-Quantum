import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function AboutHero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Handle cursor tracking for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-surface cursor-crosshair pt-20 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Spotlight / Halo Effect (Von Restorff / Interactive) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(219, 186, 149, 0.15), transparent 80%)`
        }}
      />

      {/* Grid Pattern that fades based on scroll */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0]) }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNkYmJhOTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-[length:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        <motion.div style={{ y, opacity }} className="text-center max-w-5xl mx-auto">
          {/* Aesthetic-Usability: Aggressive, confident typography */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-7xl lg:text-9xl font-display font-black text-brand-text tracking-tighter leading-[0.85]"
            >
              ONE SPACE,
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-12 flex justify-center items-center gap-4 md:gap-8">
            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="h-[2px] w-8 md:w-16 bg-brand-muted hidden sm:block"
            />
            <motion.h1 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-brand-muted tracking-tighter leading-[0.85]"
            >
              YOUR VISION'S PLACE.
            </motion.h1>
            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="h-[2px] w-8 md:w-16 bg-brand-muted hidden sm:block"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Discover our methodology</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
