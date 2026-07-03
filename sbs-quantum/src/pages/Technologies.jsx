import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import Tabs from '../components/shared/Tabs';
import { Database, Code2, Cloud, Terminal } from 'lucide-react';

const TECH_CATEGORIES = [
  {
    label: 'Frontend',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Code2 className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">React & Next.js</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">We rely on React for dynamic interfaces and Next.js for server-side rendering, delivering sub-100ms Largest Contentful Paint (LCP) times for enterprise applications.</p>
        </div>
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Terminal className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">Tailwind CSS & Framer</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">Our styling architecture relies on utility classes and hardware-accelerated animations. This guarantees zero layout shifts and 60fps interaction models.</p>
        </div>
      </div>
    )
  },
  {
    label: 'Backend & APIs',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Database className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">Node.js & Go</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">We write core microservices in Go for raw computational speed and Node.js for rapid I/O operations, ensuring high throughput across distributed systems.</p>
        </div>
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Code2 className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">GraphQL & REST</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">We implement strictly typed GraphQL endpoints to minimize data over-fetching, coupled with RESTful architectures for external third-party integrations.</p>
        </div>
      </div>
    )
  },
  {
    label: 'Cloud Infrastructure',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Cloud className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">AWS & GCP</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">We deploy entirely cloud-native architectures. Serverless functions, managed Kubernetes clusters, and multi-region failover setups guarantee 99.99% uptime.</p>
        </div>
        <div className="bg-brand-muted/5 p-8 rounded-3xl border border-brand-muted/20">
          <Database className="text-brand-text mb-4" size={32} />
          <h3 className="text-2xl font-display font-bold text-brand-text mb-2">PostgreSQL & Redis</h3>
          <p className="text-brand-text/70 leading-relaxed mb-4">Relational data is strictly structured in PostgreSQL. We layer Redis for in-memory caching to bypass database bottlenecks during high-traffic spikes.</p>
        </div>
      </div>
    )
  }
];

export default function Technologies() {
  return (
    <PageWrapper>
      <div className="bg-white pt-32 pb-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="max-w-3xl mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text tracking-tight mb-6">
              The <span className="text-brand-muted">Stack.</span>
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              We do not chase trends. We rely on proven, stable technologies capable of handling massive concurrency and complex relational data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Tabs tabs={TECH_CATEGORIES} />
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
