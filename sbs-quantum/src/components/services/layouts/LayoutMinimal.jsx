import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LayoutMinimal({ service }) {
  return (
    <div className="bg-[#fcfaf8] min-h-screen py-32 relative overflow-hidden">
      
      {/* Soft background glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-muted/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-muted/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-32"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase mb-8 border border-red-100">The Friction</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-text leading-tight mb-8">
            {service.problem}
          </h2>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-32 bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-brand-muted/10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-muted/10 text-brand-text text-xs font-bold tracking-widest uppercase mb-8">The Solution</span>
          <p className="text-2xl md:text-3xl leading-relaxed font-medium text-brand-text/80">
            {service.approach}
          </p>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-32 text-left bg-white p-12 rounded-[3rem] shadow-sm border border-brand-muted/10"
        >
          <h3 className="text-2xl font-display font-bold text-brand-text mb-8">What you receive:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle2 className="text-brand-muted mr-4 mt-1" size={20} />
                <span className="text-lg text-brand-text/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-text text-white font-bold text-xl hover:bg-black transition-colors shadow-xl hover:shadow-2xl active:scale-95 duration-300"
          >
            Start this project <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
