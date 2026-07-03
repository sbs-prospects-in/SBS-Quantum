import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LayoutTimeline({ service }) {
  return (
    <div className="bg-white min-h-screen py-32 relative">
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
            className="relative flex flex-col md:flex-row items-center mb-32"
          >
            <div className="hidden md:block md:w-1/2 pr-16 text-right">
              <h2 className="text-4xl font-display font-bold text-brand-text mb-4">The Status Quo</h2>
              <p className="text-brand-text/50 uppercase tracking-widest text-sm font-bold">What is broken</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-white shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px]"></div>
            
            <div className="pl-16 md:pl-16 md:w-1/2 w-full">
              <div className="md:hidden mb-4">
                <h2 className="text-3xl font-display font-bold text-brand-text">The Status Quo</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
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
            className="relative flex flex-col md:flex-row-reverse items-center mb-32"
          >
            <div className="hidden md:block md:w-1/2 pl-16 text-left">
              <h2 className="text-4xl font-display font-bold text-brand-text mb-4">Our Intervention</h2>
              <p className="text-brand-muted uppercase tracking-widest text-sm font-bold">How we fix it</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-muted border-4 border-white shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px]"></div>
            
            <div className="pl-16 md:pr-16 md:pl-0 md:w-1/2 w-full">
              <div className="md:hidden mb-4">
                <h2 className="text-3xl font-display font-bold text-brand-text">Our Intervention</h2>
              </div>
              <div className="bg-brand-text p-8 rounded-2xl shadow-xl">
                <p className="text-xl text-white leading-relaxed font-medium">
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
            className="relative flex flex-col md:flex-row items-start mb-32"
          >
            <div className="hidden md:block md:w-1/2 pr-16 text-right pt-8">
              <h2 className="text-4xl font-display font-bold text-brand-text mb-4">The Output</h2>
              <p className="text-green-600 uppercase tracking-widest text-sm font-bold">What is delivered</p>
            </div>
            
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm md:-translate-x-1/2 z-10 -translate-x-[7px] top-10"></div>
            
            <div className="pl-16 md:pl-16 md:w-1/2 w-full pt-6">
              <div className="md:hidden mb-6">
                <h2 className="text-3xl font-display font-bold text-brand-text">The Output</h2>
              </div>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center bg-white border border-brand-muted/20 p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="text-brand-muted mr-4 flex-shrink-0" size={20} />
                    <span className="text-brand-text font-medium">{item}</span>
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
            className="relative flex justify-center mt-32"
          >
            <div className="bg-white p-2 z-10 relative">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-brand-text text-brand-text font-bold text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
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
