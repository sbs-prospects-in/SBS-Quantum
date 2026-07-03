import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Target, Clock, Code2, ArrowRight } from 'lucide-react';
import HoverCard from '../components/shared/HoverCard';
import { Link } from 'react-router-dom';
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

      <div className="bg-white pb-32">
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
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-8 leading-tight">
                Software should not be an afterthought.
              </h3>
              <p className="text-brand-text/70 mb-6 leading-relaxed text-lg">
                <strong className="text-brand-text font-bold">Urval Shash</strong> founded SBS Quantum to fix a specific problem: enterprise systems are too often built with conflicting priorities. Design agencies focus on aesthetics while ignoring architecture. Development shops write logic while ignoring the user interface.
              </p>
              <p className="text-brand-text/70 mb-8 leading-relaxed text-lg">
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

          {/* Core Principles using HoverCard */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-brand-text mb-4">Core Principles</h2>
              <p className="text-xl text-brand-text/70">The axioms that govern every line of code we write.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle, idx) => (
                <HoverCard
                  key={idx}
                  icon={principle.icon}
                  title={principle.title}
                  description={principle.desc}
                  delay={idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Refined Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl font-display font-bold text-brand-text mb-16 text-center">Company Milestones</h2>
            <div className="relative border-l-2 border-brand-muted/20 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex justify-between pt-8 md:pt-16">
              
              {[
                { year: '2020', title: 'The Launch', desc: 'SBS Quantum opens its doors in New York, securing three enterprise contracts in month one.' },
                { year: '2022', title: 'European Expansion', desc: 'Opened our London office to handle the growing European client base and recruit global engineering talent.' },
                { year: '2024', title: 'AI Integration Practice', desc: 'Launched our dedicated AI division, implementing custom LLMs for Fortune 500 logistics firms.' },
                { year: '2026', title: 'Proprietary Cloud', desc: 'Released our internal cloud optimization tooling to all active clients, cutting AWS costs by 30%.' }
              ].map((milestone, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative mb-12 md:mb-0 ml-8 md:ml-0 md:w-1/4 md:px-6 group"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-brand-text -left-[41px] md:left-1/2 md:-top-[74px] md:-translate-x-1/2 ring-4 ring-white group-hover:scale-150 transition-transform duration-300 shadow-md"></div>
                  <h3 className="text-brand-muted font-black text-2xl mb-3">{milestone.year}</h3>
                  <h4 className="text-brand-text font-bold text-lg mb-2">{milestone.title}</h4>
                  <p className="text-brand-text/70 text-sm leading-relaxed">{milestone.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
