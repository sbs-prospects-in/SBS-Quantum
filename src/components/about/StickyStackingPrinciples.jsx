import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PrincipleCard = ({ principle, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start -100%"]
  });

  // Scale down when scrolling past the stick point to create the stacking parallax effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        top: `calc(15vh + ${index * 30}px)`
      }}
      className="sticky w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20 bg-brand-surface border border-brand-border rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden origin-top mb-32 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-brand-bg/50 backdrop-blur-3xl z-0 pointer-events-none" />
      
      {/* Decorative large icon in background */}
      <div className="absolute -right-10 -bottom-20 text-brand-muted opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
        <principle.icon size={450} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 md:w-1/2 mb-12 md:mb-0 md:pr-16">
        <div className="w-20 h-20 rounded-3xl bg-brand-text/5 border border-brand-border flex items-center justify-center mb-10 shadow-inner">
          <principle.icon className="text-brand-text" size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-text leading-tight tracking-tight mb-6">
          {principle.title}
        </h3>
      </div>
      
      <div className="relative z-10 md:w-1/2 md:pl-16 md:border-l border-brand-border/50 h-full flex items-center">
        <p className="text-xl md:text-2xl lg:text-3xl text-brand-text/80 leading-relaxed font-medium">
          {principle.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function StickyStackingPrinciples({ principles }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-32">
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-6 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
            Axioms
            <span className="w-8 h-[2px] bg-brand-muted ml-4 inline-block"></span>
          </h2>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-text mb-8 tracking-tighter">Core Principles</h2>
          <p className="text-xl md:text-2xl text-brand-accent max-w-3xl mx-auto leading-relaxed">
            We don't build minimum viable products. We engineer resilient infrastructure. These are the rules that govern every line of code we write.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {principles.map((principle, idx) => (
          <PrincipleCard 
            key={idx} 
            principle={principle} 
            index={idx} 
            total={principles.length}
          />
        ))}
      </div>
    </div>
  );
}