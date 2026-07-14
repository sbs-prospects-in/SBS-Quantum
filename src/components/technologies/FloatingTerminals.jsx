import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const TECH_DATA = [
  { id: 'aws', label: 'Amazon Web Services', stat: '99.99%', metric: 'Uptime SLA', x: -250, y: -50, z: 10, statColor: 'text-[#27c93f]', metricColor: 'text-white/70' },
  { id: 'react', label: 'React / Next.js', stat: '<100ms', metric: 'LCP', x: 200, y: 50, z: 15, statColor: 'text-[#27c93f]', metricColor: 'text-white/70' },
  { id: 'go', label: 'Go Runtime', stat: '1M+', metric: 'RPS Limit', x: -150, y: 200, z: 20, statColor: 'text-[#27c93f]', metricColor: 'text-white/70' },
  { id: 'postgres', label: 'PostgreSQL', stat: 'ACID', metric: 'Compliance', x: 150, y: 250, z: 25, statColor: 'text-[#27c93f]', metricColor: 'text-white/70' },
  { id: 'redis', label: 'Redis Cache', stat: 'Sub-ms', metric: 'Latency', x: 0, y: 100, z: 30, statColor: 'text-[#27c93f]', metricColor: 'text-[#ff5f56]' },
];

const FloatingTerminal = ({ tech, constraintsRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      whileDrag={{ scale: 1.05, zIndex: 100, cursor: 'grabbing' }}
      initial={{ opacity: 0, scale: 0.5, x: tech.x, y: tech.y }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      style={{ zIndex: tech.z }}
      className="absolute bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-2xl w-72 md:w-80 cursor-grab"
    >
      <div className="flex items-center px-4 py-3 bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="mx-auto text-white/30 text-xs font-mono select-none">{tech.id}.exe</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white tracking-tight">{tech.label}</h3>
          <Terminal className="text-brand-accent" size={20} />
        </div>
        <div className="space-y-3 font-mono text-sm bg-black/50 p-4 rounded-lg border border-white/5">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-white/40">SLA:</span>
            <span className={`${tech.statColor} font-bold`}>{tech.stat}</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-white/40">Metric:</span>
            <span className={`${tech.metricColor} font-bold`}>{tech.metric}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FloatingTerminals() {
  const constraintsRef = useRef(null);
  
  return (
    <section className="bg-brand-bg py-24 md:py-32 overflow-hidden relative min-h-[1000px] flex flex-col items-center">
      
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(190,140,83,0.3)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative text-center z-20 w-full max-w-3xl px-4 mt-8 md:mt-12 mb-16">
        <p className="text-brand-text font-mono text-sm tracking-widest uppercase mb-4">SYSTEM INFRASTRUCTURE ARCHITECTURE</p>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-text dark:text-brand-accent-light uppercase tracking-tight mb-6">
          Interactive<br/>Simulation
        </h2>
        <p className="text-brand-text/60 text-xl font-medium">Interact with the environment by dragging the individual service nodes.</p>
      </div>

      <div ref={constraintsRef} className="w-full max-w-6xl h-[600px] relative z-10 mx-auto flex items-center justify-center">
        {TECH_DATA.map((tech) => (
          <FloatingTerminal key={tech.id} tech={tech} constraintsRef={constraintsRef} />
        ))}
      </div>
      
    </section>
  );
}