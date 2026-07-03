import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Senior-level engineering talent across all practices.",
  "Security-first approach embedded into the SDLC.",
  "Deep expertise in modern cloud architectures.",
  "Transparent, agile delivery methodologies."
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-bg border-t border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-text tracking-tight mb-6">
              Why partner with SBS Quantum?
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              We go beyond writing code. We act as strategic partners to CTOs and technical leaders, ensuring every line of code contributes to the broader business objective while maintaining the highest technical standards.
            </p>
            
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan mr-3 flex-shrink-0" />
                  <span className="text-brand-text/90 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-brand-surface rounded-3xl p-10 lg:p-14 text-brand-text shadow-2xl relative overflow-hidden border border-brand-surface/50">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 grid grid-cols-1 gap-10">
                <div>
                  <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple mb-2">100+</div>
                  <div className="text-lg text-brand-muted font-medium">Enterprise Projects Delivered</div>
                </div>
                
                <div>
                  <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple mb-2">99.9%</div>
                  <div className="text-lg text-brand-muted font-medium">Uptime in Production</div>
                </div>
                
                <div>
                  <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple mb-2">24/7</div>
                  <div className="text-lg text-brand-muted font-medium">Global Support Infrastructure</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
