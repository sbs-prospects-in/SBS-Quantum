import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';

const INTERVIEW_PROCESS = [
  {
    step: '01',
    title: 'The Alignment Call',
    content: 'A 30-minute conversation with our technical recruiter. We discuss your background, our current technical challenges, and ensure our compensation bands align with your expectations. No BS.'
  },
  {
    step: '02',
    title: 'The Architecture Review',
    content: 'A 90-minute system design session with two senior engineers. No leetcode tricks or whiteboard coding. We review a complex system you built previously or architect a hypothetical system relevant to our stack.'
  },
  {
    step: '03',
    title: 'The Cultural Fit',
    content: 'A 45-minute meeting with a founding partner. We evaluate how you handle disagreement, scope creep, and architectural trade-offs. We are looking for absolute ownership.'
  },
  {
    step: '04',
    title: 'The Offer',
    content: 'We make decisions within 48 hours of the final interview. If we extend an offer, we provide a detailed breakdown of salary, equity, and benefits without exploding deadlines.'
  }
];

function TiltCard({ step, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, backgroundColor: "#BE8C53" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="w-[300px] md:w-[450px] h-[400px] md:h-[550px] bg-[#DBBA95] dark:bg-[#0a0a0a] border border-brand-muted/20 dark:border-white/10 p-8 md:p-12 flex flex-col justify-between shrink-0 hover:shadow-[0_20px_60px_-15px_rgba(190,140,83,0.5)] dark:hover:shadow-[0_0_50px_rgba(212,175,55,0.05)] transition-all pointer-events-auto select-none rounded-2xl group"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <span className="text-6xl md:text-8xl font-display font-bold text-brand-muted/20 dark:text-white/5 mb-8 block group-hover:text-brand-text/20 dark:group-hover:text-white/10 transition-colors">
          {step.step}
        </span>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-text dark:text-white mb-6 uppercase tracking-tight transition-colors">
          {step.title}
        </h3>
      </div>
      <p 
        style={{ transform: "translateZ(30px)" }}
        className="text-lg md:text-xl text-brand-text/70 dark:text-brand-text/60 dark:text-white/60 leading-relaxed"
      >
        {step.content}
      </p>
    </motion.div>
  );
}

export default function DraggableProcess() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-brand-bg dark:bg-[#050505] py-32 text-brand-text dark:text-white border-t border-brand-border dark:border-white/5 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-[-0.03em] max-w-2xl leading-none text-brand-text dark:text-white">
              How we <span className="text-brand-muted">hire.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-8 md:mt-0 flex items-center space-x-4 bg-brand-muted/10 dark:bg-white/5 px-6 py-4 rounded-full border border-brand-muted/20 dark:border-white/10"
          >
            <MousePointerClick className="text-brand-muted animate-pulse" />
            <p className="text-lg text-brand-text/70 dark:text-brand-text/60 dark:text-white/60 font-bold uppercase tracking-widest">
              Grab & Drag Cards
            </p>
          </motion.div>
        </div>

        {/* Draggable Physics Container */}
        <motion.div 
          ref={carouselRef} 
          className={`pb-12 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          whileTap={{ cursor: "grabbing" }}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            dragElastic={0.15}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
            className="flex space-x-6 md:space-x-12 w-max px-4 md:px-0"
            style={{ perspective: 1000 }}
          >
            {INTERVIEW_PROCESS.map((step, idx) => (
              <TiltCard key={step.step} step={step} index={idx} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
