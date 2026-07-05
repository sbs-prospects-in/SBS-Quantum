import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionTemplate, useTransform } from 'framer-motion';
import { X, ArrowUpRight, MapPin, Clock } from 'lucide-react';

const JOBS = [
  { 
    id: 'frontend',
    title: 'Senior Frontend Engineer', 
    type: 'Full-time', 
    location: 'Remote (US/EU)',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    desc: 'You will architect the visual layer of our core infrastructure platform. We expect sub-100ms interactions, zero layout shifts, and an obsessive attention to motion engineering.'
  },
  { 
    id: 'backend',
    title: 'Backend Infrastructure Engineer', 
    type: 'Full-time', 
    location: 'New York, NY',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    desc: 'Go microservices, raw computational speed, and edge processing. You will design systems that scale flawlessly under extreme concurrency.'
  },
  { 
    id: 'design',
    title: 'Principal UI/UX Designer', 
    type: 'Full-time', 
    location: 'Remote (US)',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    desc: 'Drive the aesthetic direction of our enterprise tools. Turn complex data matrices into intuitive, beautiful, and tactile interfaces.'
  },
  { 
    id: 'sre',
    title: 'Site Reliability Engineer', 
    type: 'Full-time', 
    location: 'London, UK',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    desc: 'Keep the lights on when the world depends on it. Manage our multi-region Kubernetes clusters and ensure absolute 99.99% uptime.'
  }
];

function JobCard({ job, onClick }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  }

  // Spotlight effect
  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`;

  return (
    <motion.div 
      ref={ref}
      layoutId={`card-container-${job.id}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-80 overflow-hidden cursor-pointer bg-[#DBBA95] rounded-2xl shadow-sm hover:shadow-xl border border-white/20"
      whileHover={{ scale: 0.98, backgroundColor: '#BE8C53' }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {job.img && (
        <motion.img 
          layoutId={`card-image-${job.id}`}
          src={job.img} 
          alt={job.title}
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
        />
      )}
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.h3 
            layoutId={`card-title-${job.id}`}
            className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-3 drop-shadow-md"
          >
            {job.title}
          </motion.h3>
          <motion.div 
            layoutId={`card-meta-${job.id}`}
            className="flex items-center space-x-4 text-white/90 text-sm font-bold tracking-widest uppercase"
          >
            <span className="flex items-center"><Clock size={16} className="mr-2"/> {job.type}</span>
            <span className="flex items-center"><MapPin size={16} className="mr-2"/> {job.location}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hover reveal text */}
      <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-white flex items-center space-x-2 font-bold drop-shadow-md">
        <span className="text-sm font-bold uppercase tracking-widest">Explore</span>
        <ArrowUpRight size={20} />
      </div>
    </motion.div>
  );
}

export default function ExpandableJobGrid() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className="bg-brand-bg dark:bg-[#020202] py-32 text-brand-text dark:text-white border-t border-brand-border dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-[-0.02em] text-brand-text dark:text-white">
            Open <span className="text-brand-text">Positions.</span>
          </h2>
          <p className="mt-4 text-xl text-brand-accent dark:text-white/80 max-w-xl">
            Hover over a card to illuminate it. Click to expand into the spatial grid.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedJob(null)}
            />
            
            <motion.div 
              layoutId={`card-container-${selectedJob.id}`}
              className="relative z-10 bg-brand-surface dark:bg-[#050505] w-full max-w-5xl h-[80vh] md:h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(212,175,55,0.1)] rounded-3xl border border-brand-muted/20 dark:border-white/10"
            >
              
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group">
                <motion.img 
                  layoutId={`card-image-${selectedJob.id}`}
                  src={selectedJob.img} 
                  alt={selectedJob.title}
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-surface hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-1/2 h-full flex flex-col p-8 md:p-16 overflow-y-auto">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 p-3 bg-brand-muted/10 dark:bg-white/5 hover:bg-brand-muted/20 dark:hover:bg-white/10 hover:rotate-90 text-brand-text dark:text-white rounded-full transition-all duration-300 z-50"
                >
                  <X size={24} />
                </button>

                <div className="mt-8 md:mt-16">
                  <motion.h3 
                    layoutId={`card-title-${selectedJob.id}`}
                    className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-brand-text dark:text-white mb-6"
                  >
                    {selectedJob.title}
                  </motion.h3>
                  
                  <motion.div 
                    layoutId={`card-meta-${selectedJob.id}`}
                    className="flex flex-wrap gap-4 text-brand-text text-sm font-semibold tracking-widest uppercase mb-12"
                  >
                    <span className="flex items-center px-4 py-2 border border-brand-text/30 rounded-full"><Clock size={16} className="mr-2"/> {selectedJob.type}</span>
                    <span className="flex items-center px-4 py-2 border border-brand-text/30 rounded-full"><MapPin size={16} className="mr-2"/> {selectedJob.location}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xl font-display font-bold text-brand-text dark:text-white mb-4">The Role</h4>
                    <p className="text-brand-muted dark:text-brand-text/60 dark:text-white/60 leading-relaxed text-lg mb-8">
                      {selectedJob.desc}
                    </p>

                    <h4 className="text-xl font-display font-bold text-brand-text dark:text-white mb-4">Requirements</h4>
                    <ul className="list-disc list-inside text-brand-text/70 dark:text-brand-text/60 dark:text-white/60 space-y-3 mb-12 text-lg">
                      <li>5+ years of experience in high-performance environments.</li>
                      <li>Deep understanding of systems architecture.</li>
                      <li>Ability to operate with complete autonomy.</li>
                    </ul>

                    <button className="group w-full flex items-center justify-center py-5 bg-brand-text hover:bg-brand-bg text-white dark:text-[#050505] text-lg font-bold uppercase tracking-widest transition-colors duration-300 rounded-xl overflow-hidden relative">
                      <span className="relative z-10 flex items-center">
                        Submit Application 
                        <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
