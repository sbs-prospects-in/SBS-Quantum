import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function HeroTerminal({ title, description }) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `> INITIALIZING PROTOCOL...\n> LOADING ${title.toUpperCase()}...\n> ESTABLISHING SECURE CONNECTION...\n> READY.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#1a150e] overflow-hidden pt-32 pb-20">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNkYmJhOTUiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] bg-[length:30px_30px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <Link to="/services" className="inline-flex items-center text-brand-muted/70 hover:text-brand-muted font-bold text-sm mb-12 transition-colors uppercase tracking-widest group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 80 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-[1.1]"
          >
            {title}.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black border border-brand-muted/30 rounded-xl p-8 shadow-2xl font-mono text-brand-muted min-h-[250px] flex flex-col relative"
          >
            <div className="absolute top-0 left-0 right-0 h-10 border-b border-brand-muted/30 flex items-center px-4 bg-white/5 rounded-t-xl">
              <Terminal size={16} className="text-brand-muted/50 mr-2" />
              <span className="text-xs text-brand-muted/50 tracking-widest">system32/cmd.exe</span>
            </div>
            <div className="mt-8 whitespace-pre-wrap text-sm md:text-base leading-relaxed">
              {displayedText}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-5 bg-brand-muted ml-1 align-middle"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
