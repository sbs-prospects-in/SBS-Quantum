import React, { useRef, useEffect } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Layers, Zap, Shield, Search, Database, Layout, Smartphone, Cloud, Cog, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverRevealList from '../components/services/HoverRevealList';
import ServicesHero from '../components/services/ServicesHero';

const CORE_SERVICES = [
  {
    icon: Database,
    title: 'Custom Software Development',
    desc: 'We build proprietary systems from scratch. When off-the-shelf software fails your complex business logic, we engineer a solution that fits your exact operational model.',
    link: '/services/custom-software'
  },
  {
    icon: Cog,
    title: 'Workflow Automation',
    desc: 'We identify manual bottlenecks and script them out of existence. Your team spends less time on data entry and more time on high-leverage tasks.',
    link: '/services/workflow-automation'
  },
  {
    icon: Layout,
    title: 'Web & Mobile Development',
    desc: 'Native iOS applications and high-performance React web apps. We prioritize sub-100ms load times and intuitive user paths.',
    link: '/services/web-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Ops',
    desc: 'We move legacy on-premise databases to AWS or Azure, set up zero-trust security, and optimize your monthly compute spend.',
    link: '/services/cloud-services'
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Teams',
    desc: 'Need to scale fast? We drop pre-vetted, senior engineering pods directly into your workflow to ship features alongside your internal team.',
    link: '/services/hire-developers'
  },
  {
    icon: Smartphone,
    title: 'UI/UX Engineering',
    desc: 'We design interfaces that respect the user. High contrast, clear hierarchy, and interaction patterns that reduce cognitive load.',
    link: '/services/ui-ux-design'
  }
];

const METHODOLOGY_STEPS = [
  { icon: Search, title: "Discovery & Audit", desc: "We don't start writing code until we understand your exact operational bottlenecks. We map your business logic to technical constraints." },
  { icon: Layers, title: "Architecture Design", desc: "We design resilient blueprints that plan for scale from day one. Zero legacy infrastructure. Pure cloud-native performance." },
  { icon: Zap, title: "Agile Execution", desc: "Transparent, aggressive development sprints. You see working software every week, not a PowerPoint presentation." },
  { icon: Shield, title: "Hardened Handover", desc: "Secure deployment, SOC2 compliant pipelines, and comprehensive documentation for your internal team to take ownership." }
];

// Magnetic Node Physics
function MagneticTimelineNode({ icon: Icon, idx }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      // Pull towards mouse if within 150px
      if (distance < 150) {
        const pullStrength = (150 - distance) / 150;
        x.set(distanceX * pullStrength * 0.4);
        y.set(distanceY * pullStrength * 0.4);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div 
      ref={ref}
      style={{ x: springX, y: springY }}
      className="absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-brand-surface border border-brand-text/50 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)] z-20 hidden md:flex cursor-crosshair group-hover:bg-brand-text transition-colors duration-500"
    >
      <Icon size={28} className="text-brand-text group-hover:text-brand-bg transition-colors duration-500" />
      
      {/* Elastic String Line (Visual only, attached to node) */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-gradient-to-b from-brand-text/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-gradient-to-t from-brand-text/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <PageWrapper>
      <ServicesHero />
      
      <div className="bg-brand-bg py-32 relative text-brand-text border-t border-brand-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 text-brand-text">
              Core Capabilities
            </h2>
            <p className="text-brand-text/60 text-lg uppercase tracking-widest font-mono">
              Hover cards for 3D spatial tilt.
            </p>
          </div>

          {/* 3D Parallax Bento Grid (Replaced with Bespoke HoverRevealList) */}
          <div className="relative z-10 mb-40">
            <HoverRevealList services={CORE_SERVICES} />
          </div>
          
          {/* Elastic Methodology Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-24 border-t border-brand-border/10"
          >
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 text-brand-text">
                Execution Methodology
              </h2>
              <p className="text-brand-text/60 text-lg leading-relaxed">
                Move your cursor near the central nodes to feel the magnetic pull. We engineer software with absolute precision.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto py-10">
              
              {/* Static Center Line fallback */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-muted/20 hidden md:block z-0" />

              {METHODOLOGY_STEPS.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-32 last:mb-0 group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Magnetic Interactive Node */}
                  <MagneticTimelineNode icon={step.icon} idx={idx} />

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.3 }}
                    className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-20' : 'md:pr-20 text-left md:text-right'} w-full text-center md:text-left z-10`}
                  >
                    <div className="bg-brand-surface p-10 rounded-[2rem] border border-brand-muted/20 hover:border-brand-text/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.05)] relative overflow-hidden transform group-hover:-translate-y-2">
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-brand-muted/10 rounded-2xl flex items-center justify-center mb-6 md:hidden mx-auto text-brand-text border border-brand-muted/20">
                          <step.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-display font-medium text-brand-text mb-4">
                          <span className="text-brand-text/60 mr-3 font-mono text-xl">0{idx + 1}.</span> 
                          {step.title}
                        </h3>
                        <p className="text-brand-text/60 text-lg leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </PageWrapper>
  );
}
