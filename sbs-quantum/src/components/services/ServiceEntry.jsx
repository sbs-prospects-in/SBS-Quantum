import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceEntry({ title, description, details, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="py-24 border-b border-brand-surface/30 last:border-0 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-1 text-sm font-display font-bold text-brand-surface group-hover:text-brand-cyan transition-colors duration-500">
          0{index + 1}
        </div>
        
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-6">{title}</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-8">{description}</p>
          <Link to="/contact" className="inline-flex items-center text-brand-cyan font-medium hover:text-brand-purple transition-colors active:scale-[0.97] ease-[var(--ease-out)] duration-200">
            Discuss this service 
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="lg:col-span-6 mt-8 lg:mt-0">
          <div className="bg-brand-surface/20 p-10 rounded-3xl h-full border border-brand-surface/30 hover:border-brand-cyan/20 transition-colors duration-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <h3 className="font-semibold text-brand-text mb-6 tracking-tight relative z-10">Core Capabilities</h3>
            <ul className="space-y-4 relative z-10">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(var(--color-brand-cyan),0.8)]" />
                  <span className="text-brand-muted text-sm leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
