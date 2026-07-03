import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertOctagon, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LayoutBrutalist({ service }) {
  return (
    <div className="bg-white min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem & Approach Interlocking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-text text-white p-12 md:p-16 rounded-3xl relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <AlertOctagon size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
                The Problem
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
            className="bg-brand-muted/5 border-2 border-brand-muted/20 p-12 md:p-16 rounded-3xl relative overflow-hidden group lg:mt-16"
          >
            <div className="absolute top-0 right-0 p-8 text-brand-muted opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Target size={160} />
            </div>
            <div className="relative z-10">
              <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-brand-muted mr-4 inline-block"></span>
                Our Approach
              </h2>
              <p className="text-2xl md:text-3xl leading-relaxed font-medium text-brand-text">
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
            <h2 className="text-4xl font-display font-bold text-brand-text mb-12">Concrete Deliverables</h2>
            <div className="space-y-6">
              {service.deliverables.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center bg-white border border-brand-muted/20 p-6 rounded-2xl hover:border-brand-muted transition-colors shadow-sm group"
                >
                  <div className="w-12 h-12 bg-brand-muted/10 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="text-brand-muted flex-shrink-0" size={24} />
                  </div>
                  <span className="text-xl text-brand-text font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="bg-brand-text text-white p-12 rounded-3xl sticky top-32 shadow-2xl">
              <h3 className="text-4xl font-display font-bold mb-6 leading-tight">Ready to execute?</h3>
              <p className="text-white/70 mb-10 text-lg leading-relaxed font-medium">
                Tell us about your specific constraints. We respond within 24 hours with an actionable path forward.
              </p>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-5 rounded-full bg-white text-brand-text font-bold text-lg overflow-hidden w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
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
