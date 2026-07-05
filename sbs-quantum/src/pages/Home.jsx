import PageWrapper from '../components/layout/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe2, ShieldCheck, Zap, BarChart, Apple, Hexagon, PenTool, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../components/shared/HoverCard';
import HorizontalFeatureGallery from '../components/home/HorizontalFeatureGallery';
import Ticker from '../components/shared/Ticker';
import AtomLoader from '../components/home/AtomLoader';

const FEATURES = [
  { icon: Code2, title: 'Clean Architecture', desc: 'Codebases built for scale. We decouple logic, eliminate technical debt, and ensure maintainability.' },
  { icon: Cpu, title: 'AI Integration', desc: 'Custom machine learning models embedded directly into your operational pipelines.' },
  { icon: Globe2, title: 'Cloud Native', desc: 'Deployed across AWS, GCP, or Azure with zero-trust security and infinite scaling.' },
  { icon: ShieldCheck, title: 'Bank-grade Security', desc: 'SOC2 compliant infrastructure. We build secure data pipelines by default.' },
  { icon: Zap, title: 'High Performance', desc: 'Sub-100ms API responses. Optimized assets and edge caching at scale.' },
  { icon: BarChart, title: 'Data Analytics', desc: 'Real-time telemetry and business intelligence dashboards that dictate strategy.' }
];

const TECHNOLOGIES = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Code2 },
  { name: 'Node.js', icon: Hexagon },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Globe2 },
  { name: 'iOS', icon: Apple },
  { name: 'Design Systems', icon: PenTool }
];

const UX_LAWS = [
  'Aesthetic-Usability',
  'Halo Effect',
  'Von Restorff',
  'Zeigarnik',
  'Peak-End Rule'
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-bg transition-colors duration-500">
        {/* Minimalist Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#DBBA9522_1px,transparent_1px),linear-gradient(to_bottom,#DBBA9522_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              style={{ y: y1, opacity }}
              className="text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 80 }}
                className="text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-display font-bold text-brand-text dark:text-brand-accent-light tracking-tighter leading-[0.9] mb-8"
              >
                Quantum <br />
                <span className="text-brand-muted">Engineering.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-xl md:text-2xl text-brand-accent dark:text-white/80 mb-10 max-w-xl font-medium leading-relaxed"
              >
                We engineer enterprise systems that scale to millions of requests. No legacy code. No architectural compromises.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: 'spring', damping: 20, stiffness: 100 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
              >
                {/* Von Restorff Effect: This CTA is heavily isolated and highly contrasting */}
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-text text-brand-bg font-bold text-lg overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(190,140,83,0.5)] active:scale-[0.97] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Start Building <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[var(--ease-out)]"></div>
                </Link>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-brand-text/20 text-brand-text font-bold text-lg hover:border-brand-text hover:bg-brand-muted/10 active:scale-[0.97] transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>

              {/* UX Laws Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex flex-wrap gap-3"
              >
                {UX_LAWS.map((law, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-muted bg-brand-muted/10 border border-brand-muted/20 rounded-full">
                    {law}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - AtomLoader */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="hidden lg:flex justify-end items-center relative"
            >
              <div className="w-full max-w-lg">
                <AtomLoader />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      {/* Ticker Section */}
      <Ticker items={TECHNOLOGIES} speed={30} />

      {/* Horizontal Scrolling Gallery for Features */}
      <HorizontalFeatureGallery features={FEATURES} />
      
      {/* Testimonials / Proof Section */}
      <section className="py-20 bg-brand-muted/5 border-y border-brand-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-text dark:text-brand-accent-light mb-12">Built for high-stakes environments.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold text-brand-text mb-2">99.99%</p>
              <p className="text-brand-muted font-medium">Uptime guarantee across all managed infrastructure.</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-text mb-2">&lt;100ms</p>
              <p className="text-brand-muted font-medium">Global API response times via edge computing.</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-text mb-2">SOC2</p>
              <p className="text-brand-muted font-medium">Type II compliant development pipelines.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
