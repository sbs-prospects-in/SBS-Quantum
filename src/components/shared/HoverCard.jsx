import { motion } from 'framer-motion';

export default function HoverCard({ icon: Icon, title, description, children, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white dark:bg-[#0a0a0a] border border-brand-muted/20 dark:border-white/10 p-8 rounded-3xl overflow-hidden hover:border-brand-muted/50 dark:hover:border-brand-muted/50 transition-all duration-500 shadow-sm hover:shadow-xl"
    >
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-brand-text dark:text-white">
        <Icon size={120} />
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-brand-muted/10 border border-brand-muted/20 rounded-2xl flex items-center justify-center text-brand-muted mb-6 group-hover:bg-brand-muted group-hover:text-white transition-all duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-text dark:text-white mb-4">{title}</h3>
        <p className="text-brand-text/70 dark:text-brand-text/60 dark:text-white/60 leading-relaxed mb-6">{description}</p>
        
        <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 origin-top">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
