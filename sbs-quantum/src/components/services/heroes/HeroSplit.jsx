import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity, Box, Database } from 'lucide-react';

export default function HeroSplit({ title, description }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col lg:flex-row bg-brand-surface overflow-hidden pt-20 lg:pt-0 border-b border-brand-muted/10">
      
      {/* Left Text Half */}
      <div className="lg:w-1/2 w-full pt-12 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-16 flex flex-col justify-center relative z-20 bg-brand-bg shadow-[20px_0_50px_rgba(0,0,0,0.03)]">
        <Link to="/services" className="inline-flex items-center text-brand-text/70 hover:text-brand-text font-bold text-sm mb-12 transition-colors uppercase tracking-widest group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 80 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brand-text tracking-tight mb-8 leading-[1.1]"
        >
          {title}.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-brand-text/70 leading-relaxed font-medium"
        >
          {description}
        </motion.p>
      </div>

      {/* Right Visual Half - Interactive Glassmorphism Fan */}
      <div className="lg:w-1/2 w-full min-h-[50vh] lg:min-h-full relative overflow-hidden flex items-center justify-center bg-brand-surface group perspective-[1000px] cursor-crosshair">
        
        {/* Abstract Background Elements */}
        <div className="absolute w-[600px] h-[600px] bg-brand-muted/10 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-110"></div>
        
        {/* Card 1 (Back/Left) */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 20, x: 50, z: -100 }}
          animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute w-64 md:w-72 h-96 bg-brand-surface/40 backdrop-blur-md border border-brand-muted/20 rounded-[2rem] shadow-xl flex flex-col p-6 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-12 group-hover:-translate-x-24 group-hover:translate-y-12 group-hover:-translate-z-10 group-hover:bg-brand-surface/60"
        >
          <div className="flex items-center justify-between mb-8 opacity-40">
            <Database size={24} className="text-brand-text" />
            <div className="w-12 h-4 rounded-full bg-brand-muted/30"></div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-3 rounded-full bg-brand-text/10"></div>
            <div className="w-5/6 h-3 rounded-full bg-brand-text/10"></div>
            <div className="w-4/6 h-3 rounded-full bg-brand-text/10"></div>
          </div>
        </motion.div>

        {/* Card 2 (Middle/Right) */}
        <motion.div 
          initial={{ opacity: 0, rotateY: 20, x: 50, z: -50 }}
          animate={{ opacity: 1, rotateY: 0, x: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute w-64 md:w-72 h-96 bg-brand-surface/60 backdrop-blur-lg border border-brand-muted/30 rounded-[2rem] shadow-2xl flex flex-col p-6 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-12 group-hover:translate-x-24 group-hover:-translate-y-8 group-hover:bg-brand-surface/80"
        >
          <div className="flex items-center justify-between mb-8 opacity-60">
            <Box size={24} className="text-brand-text" />
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-brand-muted/40"></div>
              <div className="w-4 h-4 rounded-full bg-brand-muted/40"></div>
            </div>
          </div>
          <div className="w-full h-32 rounded-xl border-2 border-dashed border-brand-muted/30 flex items-center justify-center mb-4">
             <div className="w-16 h-16 rounded-full border-4 border-brand-muted/20 border-t-brand-muted animate-spin"></div>
          </div>
          <div className="w-full h-12 rounded-xl bg-brand-text/5 mt-auto"></div>
        </motion.div>

        {/* Card 3 (Front/Center) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute z-10 w-64 md:w-80 h-[26rem] bg-brand-surface backdrop-blur-2xl border border-brand-muted/40 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(190,140,83,0.25)] flex flex-col p-8 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-4 group-hover:scale-105"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-text text-brand-bg flex items-center justify-center shadow-lg">
              <Activity size={24} />
            </div>
            <div>
              <div className="w-24 h-3 rounded-full bg-brand-text/20 mb-2"></div>
              <div className="w-16 h-2 rounded-full bg-brand-muted/30"></div>
            </div>
          </div>

          <div className="w-full h-40 bg-brand-muted/5 rounded-2xl overflow-hidden relative mb-6 border border-brand-muted/10">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }} 
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-muted/20 to-transparent skew-x-12" 
            />
            {/* Mock Chart Bars */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2 h-full">
              <motion.div animate={{ height: ['40%', '70%', '40%'] }} transition={{ duration: 3, repeat: Infinity }} className="w-full bg-brand-muted/40 rounded-t-sm" />
              <motion.div animate={{ height: ['60%', '30%', '60%'] }} transition={{ duration: 4, repeat: Infinity }} className="w-full bg-brand-text/40 rounded-t-sm" />
              <motion.div animate={{ height: ['80%', '50%', '80%'] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-full bg-brand-muted/60 rounded-t-sm" />
              <motion.div animate={{ height: ['30%', '90%', '30%'] }} transition={{ duration: 3.5, repeat: Infinity }} className="w-full bg-brand-text/60 rounded-t-sm" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="w-full h-12 bg-brand-text text-brand-bg rounded-xl flex items-center justify-center text-sm font-bold tracking-widest shadow-md">
              INITIALIZING
            </div>
          </div>
        </motion.div>

        {/* Hover Hint */}
        <div className="absolute bottom-8 text-brand-muted/60 text-xs font-bold tracking-[0.2em] uppercase transition-opacity duration-300 group-hover:opacity-0">
          Hover to expand
        </div>

      </div>
      
    </section>
  );
}
