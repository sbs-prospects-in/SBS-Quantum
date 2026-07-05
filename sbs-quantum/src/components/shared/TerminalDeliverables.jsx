import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TerminalDeliverables({ deliverables }) {
  const [lines, setLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let isActive = true;
    const animateLines = async () => {
      for (let i = 0; i < deliverables.length; i++) {
        await new Promise(r => setTimeout(r, 600)); // Delay between lines
        if (!isActive) break;
        setLines(prev => [...prev, deliverables[i]]);
      }
      if (isActive) setIsComplete(true);
    };
    
    animateLines();

    return () => { isActive = false; };
  }, [deliverables, isInView]);

  return (
    <div ref={ref} className="w-full bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm md:text-base">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-brand-muted/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-brand-accent/20"></div>
        </div>
        <div className="mx-auto text-white/40 text-xs">quantum_pipeline.sh</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 md:p-8 min-h-[300px]">
        <div className="mb-6 text-white/50 select-none">
          sbs-quantum@deploy:~$ ./generate_deliverables.sh --compile
        </div>
        
        {lines.map((line, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-start"
          >
            <span className="text-brand-accent mr-4 select-none">[{String(idx + 1).padStart(2, '0')}]</span>
            <span className="text-white/90">{line}</span>
          </motion.div>
        ))}
        
        {!isComplete && isInView && (
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-5 bg-brand-accent mt-2 inline-block"
          />
        )}
        
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-brand-accent font-bold"
          >
            sbs-quantum@deploy:~$ PROCESS COMPLETED SUCCESSFULLY _
          </motion.div>
        )}
      </div>
    </div>
  );
}