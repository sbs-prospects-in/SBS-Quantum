import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function HeroRings({ title, description }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col lg:flex-row bg-brand-bg overflow-hidden pt-20 lg:pt-0 border-b border-brand-muted/10">
      
      {/* Left Text Half */}
      <div className="lg:w-1/2 w-full pt-12 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-16 flex flex-col justify-center relative z-10">
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

      {/* Right Visual Half - Premium Abstract Geometry */}
      <div className="lg:w-1/2 w-full min-h-[40vh] lg:min-h-full relative overflow-hidden flex items-center justify-center bg-brand-surface">
        
        {/* Soft glowing background orbs */}
        <div className="absolute w-[800px] h-[800px] bg-brand-muted/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-brand-text/5 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Generative Golden Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[80%] max-w-[600px] aspect-square border-[1px] border-brand-muted/30 rounded-full flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full bg-brand-muted absolute -top-2 blur-[2px]"></div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[80%] aspect-square border-[1px] border-brand-text/20 rounded-full flex items-center justify-center border-dashed"
          >
            <div className="w-3 h-3 rounded-full bg-brand-text absolute -right-1.5 blur-[1px]"></div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-[60%] aspect-square border-[1px] border-brand-muted/40 rounded-full flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-full bg-brand-muted/30 absolute -bottom-3 blur-[4px]"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Center Core */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }}
          className="absolute w-32 h-32 bg-gradient-to-br from-brand-muted/40 to-brand-text/20 rounded-full backdrop-blur-3xl border border-white/50 shadow-2xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-16 h-16 bg-brand-muted rounded-full blur-xl opacity-60"
        />
      </div>
      
    </section>
  );
}
