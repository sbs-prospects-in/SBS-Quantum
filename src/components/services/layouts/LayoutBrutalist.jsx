import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertOctagon, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalDeliverables from '../../shared/TerminalDeliverables';

export default function LayoutBrutalist({ service }) {
  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen py-16 md:py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem & Approach Interlocking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-40">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-text dark:bg-[#0a0a0a] text-white p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden group shadow-2xl dark:border dark:border-white/5 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <AlertOctagon size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
                {service.labels?.problemTitle || 'The Problem'}
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed font-medium">
                {service.problem}
              </p>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-brand-muted/5 dark:bg-[#111] border-2 border-brand-muted/20 dark:border-white/5 p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden group lg:mt-16 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-muted opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Target size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
                {service.labels?.approachTitle || 'Our Approach'}
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed font-medium text-brand-text dark:text-brand-text/60 dark:text-white/60">
                {service.approach}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Deliverables and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text dark:text-white mb-8 md:mb-12">{service.labels?.deliverablesTitle || 'Concrete Deliverables'}</h2>
            <TerminalDeliverables deliverables={service.deliverables} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="bg-[#DBBA95] dark:bg-brand-muted/10 dark:border dark:border-brand-muted/20 text-white p-8 md:p-12 rounded-3xl sticky top-32 shadow-[0_20px_60px_-15px_rgba(190,140,83,0.3)] dark:shadow-none transition-colors duration-500">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight text-[#463B26] dark:text-white">Ready to execute?</h3>
              <p className="text-[#463B26]/80 dark:text-brand-text/60 dark:text-white/60 mb-10 text-lg leading-relaxed font-medium">
                Tell us about your specific constraints. We respond within 24 hours with an actionable path forward.
              </p>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-5 rounded-full bg-white dark:bg-brand-text text-brand-text dark:text-black font-bold text-lg overflow-hidden w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg dark:hover:bg-white"
              >
                <span className="relative z-10 flex items-center">
                  Discuss this service <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
