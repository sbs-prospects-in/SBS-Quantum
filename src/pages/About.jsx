import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Target, Clock, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../components/shared/HoverCard';
import StickyStackingPrinciples from '../components/about/StickyStackingPrinciples';
import aboutHeroImg from '../assets/about-hero.png';
import AboutHero from '../components/about/AboutHero';

export default function About() {
  const PRINCIPLES = [
    {
      icon: Target,
      title: "Architect for scale immediately",
      desc: "We write code that handles your next million users, not just your first hundred. We eliminate technical debt before it is written."
    },
    {
      icon: Clock,
      title: "Respect the user's time",
      desc: "Sub-100ms response times. Zero layout shift. Fast software is good software. We optimize assets at the build step."
    },
    {
      icon: Code2,
      title: "Clarity over cleverness",
      desc: "We write maintainable, documented code. Your internal team can read it, understand it, and expand it without requiring our constant supervision."
    }
  ];

  return (
    <PageWrapper>
      {/* Brand new Out-of-the-box interactive Hero */}
      <AboutHero />

      <div className="bg-brand-bg dark:bg-[#050505] transition-colors duration-500 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* The Vision (Image + Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm uppercase tracking-widest font-bold text-brand-muted mb-4">The Founder's Vision</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-text dark:text-brand-accent-light mb-8 leading-tight">
                Software should not be an afterthought.
              </h3>
              <p className="text-brand-accent dark:text-white/80 mb-6 leading-relaxed text-lg">
                <strong className="text-brand-text font-bold">Urval Shah</strong> founded SBS Quantum to fix a specific problem: enterprise systems are too often built with conflicting priorities. Design agencies focus on aesthetics while ignoring architecture. Development shops write logic while ignoring the user interface.
              </p>
              <p className="text-brand-muted dark:text-white/70 mb-8 leading-relaxed text-lg">
                SBS Quantum merges rigorous backend engineering with premium frontend design. We build tools people actually want to use, backed by infrastructure that never fails.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center text-lg font-bold text-brand-text hover:text-brand-muted transition-colors group"
              >
                Discuss your vision <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <div className="absolute inset-0 bg-brand-text/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
              <img 
                src={aboutHeroImg} 
                alt="Abstract architectural luxury design representing SBS Quantum" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </motion.div>
          </div>

          {/* Core Principles using StickyStackingPrinciples component */}
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <StickyStackingPrinciples principles={PRINCIPLES} />
          </div>


        </div>
      </div>
    </PageWrapper>
  );
}
