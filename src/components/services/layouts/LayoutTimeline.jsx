import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalDeliverables from '../../shared/TerminalDeliverables';

export default function LayoutTimeline({ service }) {
  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen py-16 md:py-32 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-muted/20 md:-translate-x-1/2"></div>

          {/* Problem Node */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-center mb-16 md:mb-32"
          >
            <div className="hidden md:block md:w-1/2 pr-16 text-right">
              <h2 className="text-4xl font-display font-bold text-brand-text dark:text-white mb-4">The Status Quo</h2>
              <p className="text-brand-text/50 dark:text-brand-text/60 dark:text-white/60 uppercase tracking-widest text-sm font-bold">What is broken</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-muted/20 border-4 border-white dark:border-[#050505] shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px] transition-colors duration-500"></div>
            
            <div className="pl-16 md:pl-16 md:w-1/2 w-full">
              <div className="md:hidden mb-4">
                <h2 className="text-3xl font-display font-bold text-brand-text dark:text-white">The Status Quo</h2>
              </div>
              <div className="bg-brand-surface dark:bg-[#0a0a0a] border border-brand-border dark:border-white/5 p-8 rounded-2xl transition-colors duration-500">
                <p className="text-xl text-brand-text/60 dark:text-white/60 dark:text-brand-text/60 dark:text-white/60 leading-relaxed font-medium">
                  {service.problem}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Approach Node */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row-reverse items-center mb-16 md:mb-32"
          >
            <div className="hidden md:block md:w-1/2 pl-16 text-left">
              <h2 className="text-4xl font-display font-bold text-brand-text dark:text-white mb-4">Our Intervention</h2>
              <p className="text-brand-muted uppercase tracking-widest text-sm font-bold">How we fix it</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-muted border-4 border-white dark:border-[#050505] shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px] transition-colors duration-500"></div>
            
            <div className="pl-16 md:pr-16 md:pl-0 md:w-1/2 w-full">
              <div className="md:hidden mb-4">
                <h2 className="text-3xl font-display font-bold text-brand-text dark:text-white">Our Intervention</h2>
              </div>
              <div className="bg-brand-text dark:bg-brand-muted/10 p-8 rounded-2xl shadow-xl border border-transparent dark:border-brand-muted/20 transition-colors duration-500">
                <p className="text-xl text-white dark:text-brand-text leading-relaxed font-medium">
                  {service.approach}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Deliverables Node */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col md:flex-row items-start mb-16 md:mb-32"
          >
            <div className="hidden md:block md:w-1/2 pr-16 text-right pt-8">
              <h2 className="text-4xl font-display font-bold text-brand-text dark:text-white mb-4">The Output</h2>
              <p className="text-brand-accent uppercase tracking-widest text-sm font-bold">What is delivered</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-accent/20 border-4 border-white dark:border-[#050505] shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px] top-10 transition-colors duration-500"></div>
            
            <div className="pl-16 md:pl-16 md:w-1/2 w-full pt-6">
              <div className="md:hidden mb-6">
                <h2 className="text-3xl font-display font-bold text-brand-text dark:text-white">The Output</h2>
              </div>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-white dark:bg-[#111] border border-brand-muted/20 dark:border-white/5 p-4 rounded-xl shadow-sm transition-colors duration-500">
                    <CheckCircle2 className="text-brand-muted mr-4 flex-shrink-0" size={20} />
                    <span className="text-brand-text dark:text-brand-text/60 dark:text-white/60 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* End Node CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-16 md:mt-32"
          >
            <div className="bg-white dark:bg-[#050505] p-2 z-10 relative transition-colors duration-500">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-brand-text dark:border-white text-brand-text dark:text-white font-bold text-lg hover:bg-brand-text hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                Engage this service <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
