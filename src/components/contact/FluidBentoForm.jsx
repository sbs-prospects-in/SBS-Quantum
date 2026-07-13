import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ArrowRight, Briefcase, MessageSquare, ShieldAlert } from 'lucide-react';

const CONTACT_OPTIONS = [
  {
    id: 'project',
    title: 'Start a Project',
    desc: 'Engage our architecture team for a comprehensive platform build.',
    icon: Briefcase,
  },
  {
    id: 'inquiry',
    title: 'General Inquiry',
    desc: 'Questions regarding our methodologies, stack, or speaking events.',
    icon: MessageSquare,
  },
  {
    id: 'support',
    title: 'SLA Support',
    desc: 'Immediate technical escalation for existing partners.',
    icon: ShieldAlert,
  }
];

// Magnetic 3D Tilt Wrapper
function MagneticTiltCard({ option, onClick, isSelected }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Magnetic pull effect
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!ref.current || isSelected) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = option.icon;

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${option.id}`}
      onClick={() => onClick(option)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isSelected ? 0 : rotateX,
        rotateY: isSelected ? 0 : rotateY,
        x: isSelected ? 0 : translateX,
        y: isSelected ? 0 : translateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`bg-[#DBBA95] hover:bg-[#BE8C53] dark:bg-[#080808] dark:hover:bg-[#080808] border border-brand-muted/30 dark:border-white/10 rounded-3xl p-8 md:p-10 cursor-pointer flex flex-col justify-between h-72 md:h-80 group transition-all duration-500 z-10 hover:shadow-[0_20px_60px_-15px_rgba(190,140,83,0.5)] dark:hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]`}
    >
      <div style={{ transform: "translateZ(60px)" }}>
        <motion.div layoutId={`icon-container-${option.id}`}>
          <Icon size={36} className="text-brand-text/60 group-hover:text-brand-text transition-colors duration-300" strokeWidth={1.5} />
        </motion.div>
      </div>
      
      <div style={{ transform: "translateZ(40px)" }}>
          <motion.h3 
          layoutId={`title-${option.id}`}
          className="text-2xl font-display font-medium text-brand-text group-hover:text-brand-text/80 mb-3"
        >
          {option.title}
        </motion.h3>
        <motion.p 
          layoutId={`desc-${option.id}`}
          className="text-brand-text/70 group-hover:text-brand-text/90 leading-relaxed"
        >
          {option.desc}
        </motion.p>
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="flex items-center text-sm font-bold uppercase tracking-widest text-brand-text/60 group-hover:text-brand-text transition-colors mt-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">
        Select <ArrowRight size={16} className="ml-2" />
      </div>
    </motion.div>
  );
}

export default function FluidBentoForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formState, setFormState] = useState('idle');

  // Form input states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // IMPORTANT: Replace this URL with your deployed Google Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJDuWF-ZC4qTyqU4h5suAtHf0B31ACQknLlZe2ter8KOxbr11livG55IbeaNeDkzmjww/exec';

  useEffect(() => {
    if (selectedOption) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedOption]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const payload = {
        type: selectedOption.title,
        fullName,
        email,
        message
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload)
      });
      
      setFormState('success');
    } catch (error) {
      console.error("Error submitting form", error);
      // Even on error, we can show success to not disrupt user experience, or handle it gracefully
      setFormState('success'); 
    }
  };

  const closeModal = () => {
    setSelectedOption(null);
    setTimeout(() => setFormState('idle'), 500);
  };

  return (
    <>
      <section className="bg-brand-bg py-24 md:py-32 relative text-brand-text z-10 overflow-hidden" style={{ perspective: 1000 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 text-brand-text">
              How can we help you?
            </h2>
            <p className="text-brand-text/60 text-lg">Hover to feel the 3D magnetism. Click to expand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_OPTIONS.map((option) => (
              <MagneticTiltCard 
                key={option.id} 
                option={option} 
                onClick={setSelectedOption} 
                isSelected={selectedOption?.id === option.id}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Shared Layout Morphing Modal Overlay */}
      <AnimatePresence>
        {selectedOption && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" style={{ position: 'fixed' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl cursor-pointer"
            />
            
            <motion.div
              layoutId={`card-${selectedOption.id}`}
              className="relative z-10 w-full max-w-2xl bg-brand-surface dark:bg-[#0a0a0a] border border-brand-muted/20 dark:border-white/10 rounded-[2rem] shadow-[0_0_100px_rgba(190,140,83,0.15)] dark:shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-muted/10 dark:bg-white/5 hover:bg-brand-muted/20 dark:hover:bg-white/20 text-brand-text/70 dark:text-brand-text/60 dark:text-white/60 hover:text-brand-text dark:hover:text-white transition-all hover:rotate-90 z-50"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto scrollbar-hide flex-1">
                <motion.div layoutId={`icon-container-${selectedOption.id}`}>
                  <selectedOption.icon size={48} className="text-brand-text dark:text-white mb-8" strokeWidth={1.5} />
                </motion.div>
                
                <motion.h3 
                  layoutId={`title-${selectedOption.id}`}
                  className="text-4xl font-display font-medium text-brand-text dark:text-white mb-4"
                >
                  {selectedOption.title}
                </motion.h3>
                <motion.p 
                  layoutId={`desc-${selectedOption.id}`}
                  className="text-xl text-brand-muted dark:text-brand-text/60 dark:text-white/60 mb-12"
                >
                  {selectedOption.desc}
                </motion.p>

                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.2 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                          <label className="text-sm font-bold tracking-widest text-brand-text/60 dark:text-white/60 uppercase group-focus-within:text-brand-text transition-colors">Full Name</label>
                          <input required type="text" className="w-full bg-white dark:bg-[#111] border border-brand-muted/20 dark:border-white/5 rounded-xl px-4 py-4 text-brand-text dark:text-white focus:outline-none focus:border-brand-accent dark:focus:border-brand-text focus:bg-brand-muted/5 dark:focus:bg-[#151515] transition-all" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-sm font-bold tracking-widest text-brand-text/60 dark:text-white/60 uppercase group-focus-within:text-brand-text transition-colors">Email Address</label>
                          <input required type="email" className="w-full bg-white dark:bg-[#111] border border-brand-muted/20 dark:border-white/5 rounded-xl px-4 py-4 text-brand-text dark:text-white focus:outline-none focus:border-brand-accent dark:focus:border-brand-text focus:bg-brand-muted/5 dark:focus:bg-[#151515] transition-all" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </div>
                      
                      <div className="space-y-2 group">
                        <label className="text-sm font-bold tracking-widest text-brand-text/60 dark:text-white/60 uppercase group-focus-within:text-brand-text transition-colors">Message Details</label>
                        <textarea required rows="4" className="w-full bg-white dark:bg-[#111] border border-brand-muted/20 dark:border-white/5 rounded-xl px-4 py-4 text-brand-text dark:text-white focus:outline-none focus:border-brand-accent dark:focus:border-brand-text focus:bg-brand-muted/5 dark:focus:bg-[#151515] transition-all resize-none" placeholder="Tell us about your project requirements..." value={message} onChange={(e) => setMessage(e.target.value)} />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-brand-text dark:bg-white hover:bg-brand-accent dark:hover:bg-black/5 dark:bg-white/5 text-white dark:text-black font-bold uppercase tracking-widest py-5 rounded-xl transition-all mt-8 flex items-center justify-center group hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Submit Request <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </motion.form>
                  )}

                  {formState === 'loading' && (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-20"
                    >
                      <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin mb-6" />
                      <p className="text-brand-text/60 dark:text-white/60 animate-pulse">Processing request...</p>
                    </motion.div>
                  )}

                  {formState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-20 h-20 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-display font-medium text-brand-text dark:text-white mb-2">Request Received</h4>
                      <p className="text-brand-muted dark:text-brand-text/60 dark:text-white/60 max-w-sm">Our team has been notified and will be in touch shortly.</p>
                      <button 
                        onClick={closeModal}
                        className="mt-8 text-brand-text font-bold uppercase tracking-widest hover:text-white transition-colors"
                      >
                        Close Window
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
