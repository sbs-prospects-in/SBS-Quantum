import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Search, Database, Layout, Smartphone, Cloud, Cog, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverCard from '../components/shared/HoverCard';
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

export default function Services() {
  return (
    <PageWrapper>
      <ServicesHero />
      
      <div className="bg-white py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-40">
            {CORE_SERVICES.map((service, index) => (
              <HoverCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                delay={index * 0.1}
              >
                <Link to={service.link} className="inline-flex items-center text-sm font-bold text-brand-text hover:text-brand-muted transition-colors mt-4 group">
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </HoverCard>
            ))}
          </div>
          
          {/* Vertical Alternate Timeline Methodology */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-24 border-t-2 border-brand-text"
          >
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl font-display font-bold text-brand-text mb-6">Our Methodology</h2>
              <p className="text-xl text-brand-text/70">
                We engineer software with absolute precision. This is the exact process we use to guarantee results for enterprise clients.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Center Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-muted/20 hidden md:block" />

              {METHODOLOGY_STEPS.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-text border-4 border-white flex items-center justify-center shadow-2xl z-10 hidden md:flex">
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.3 }}
                    className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full text-center md:text-left`}
                  >
                    <div className="bg-brand-muted/5 p-10 rounded-3xl border border-brand-muted/20 hover:border-brand-muted transition-colors duration-300 shadow-sm relative overflow-hidden group">
                      <div className="absolute inset-0 bg-brand-muted/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 md:hidden mx-auto text-brand-text">
                          <step.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-brand-text mb-4">
                          <span className="text-brand-muted mr-3">0{idx + 1}.</span> 
                          {step.title}
                        </h3>
                        <p className="text-brand-text/70 text-lg leading-relaxed">{step.desc}</p>
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
