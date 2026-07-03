import { motion } from 'framer-motion';

const features = [
  {
    title: 'Enterprise Architecture',
    description: 'Scalable, secure, and resilient systems designed for the demands of modern business operations.',
  },
  {
    title: 'Data Intelligence',
    description: 'Transforming raw information into actionable insights through advanced analytics and modeling.',
  },
  {
    title: 'Cloud Transformation',
    description: 'Seamless migration and optimization across AWS, Azure, and GCP for peak performance.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="absolute inset-0 bg-brand-surface/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="text-4xl md:text-6xl font-display font-bold text-brand-text tracking-tight mb-6"
          >
            Engineering the future of enterprise tech.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.1 }}
            className="text-lg text-brand-muted leading-relaxed"
          >
            We don't just build software; we architect solutions that become the backbone of your operations. Our approach combines rigorous technical standards with premium design sensibilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: index * 0.15 }}
              className="group p-8 rounded-2xl bg-brand-surface/30 border border-brand-surface hover:bg-brand-surface/60 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-bg border border-brand-surface flex items-center justify-center mb-6 group-hover:border-brand-cyan/50 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-brand-cyan group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(var(--color-brand-cyan),0.8)] transition-all duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brand-text mb-4">{feature.title}</h3>
              <p className="text-brand-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
