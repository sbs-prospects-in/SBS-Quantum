import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, GitBranch, Database, Globe, Smartphone, PenTool, Users, Monitor, Cloud } from 'lucide-react';
import { NAV_ITEMS } from '../../lib/constants';
import clsx from 'clsx';
import logoImg from '../../assets/logo.png';

const SERVICES = [
  { name: 'Custom Software Development', icon: Code, slug: 'custom-software' },
  { name: 'Work Flow Automation', icon: GitBranch, slug: 'workflow-automation' },
  { name: 'CRM & ERP Development', icon: Database, slug: 'crm-erp' },
  { name: 'Web Development', icon: Globe, slug: 'web-development' },
  { name: 'Mobile Application Development', icon: Smartphone, slug: 'mobile-development' },
  { name: 'UI/UX Design', icon: PenTool, slug: 'ui-ux-design' },
  { name: 'Hire Dedicated Developers', icon: Users, slug: 'hire-developers' },
  { name: 'IT Consulting', icon: Monitor, slug: 'it-consulting' },
  { name: 'Cloud Based Services', icon: Cloud, slug: 'cloud-services' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 z-50">
      <div className="flex items-center justify-between h-16 bg-white/90 backdrop-blur-xl rounded-full px-6 lg:px-8 shadow-sm border border-brand-muted/30">
        
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center active:scale-[0.97] transition-transform duration-200 ease-[var(--ease-out)]">
            <img src={logoImg} alt="SBS Quantum Logo" className="h-10 w-auto" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center justify-center space-x-1">
          {NAV_ITEMS.filter(item => item.label !== 'Contact Us').map((item) => {
            if (item.label === 'Services') {
              return (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={clsx(
                      "flex items-center px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-full active:scale-[0.97]",
                      isServicesOpen || location.pathname.startsWith('/services')
                        ? "text-brand-text bg-brand-muted/10" 
                        : "text-brand-text/70 hover:text-brand-text hover:bg-brand-muted/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} className={clsx("ml-1 transition-transform", isServicesOpen && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        style={{ transformOrigin: 'top center' }}
                        className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[800px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-xl border border-brand-muted/30 overflow-hidden flex"
                      >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        
                        <div className="w-2/3 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.name}
                              to={`/services/${service.slug}`}
                              className="group flex items-start space-x-4 active:scale-[0.97] transition-transform duration-150 ease-[var(--ease-out)]"
                            >
                              <div className="p-2.5 rounded-xl bg-brand-bg border border-brand-muted/20 text-brand-text group-hover:bg-brand-text group-hover:text-brand-bg transition-colors duration-300 shadow-sm">
                                <service.icon size={20} strokeWidth={2} />
                              </div>
                              <div className="pt-1.5">
                                <h4 className="text-sm font-semibold text-brand-text/80 group-hover:text-brand-text transition-colors leading-snug">{service.name}</h4>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="w-1/3 bg-brand-muted/10 p-6 flex flex-col justify-center border-l border-brand-muted/20">
                          <Link to="/services" className="rounded-2xl bg-brand-bg border border-brand-muted/30 p-8 text-brand-text h-full flex flex-col justify-center relative overflow-hidden group shadow-sm hover:shadow-md hover:border-brand-text transition-all active:scale-[0.97] ease-[var(--ease-out)] duration-200">
                            <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">Explore All Services</h3>
                            <p className="text-brand-text/70 text-sm mb-6 leading-relaxed">Discover how we can transform your business with our tailored expertise.</p>
                            <span className="inline-flex items-center text-sm font-bold text-brand-text group-hover:translate-x-1 transition-transform">
                              View full catalog <span className="ml-2">&rarr;</span>
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={clsx(
                  "px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 rounded-full active:scale-[0.97] ease-[var(--ease-out)]",
                  location.pathname === item.href 
                    ? "text-brand-text bg-brand-muted/10" 
                    : "text-brand-text/70 hover:text-brand-text hover:bg-brand-muted/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <Link 
            to="/services"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-brand-text border border-brand-text/30 hover:bg-brand-muted/10 transition-colors active:scale-[0.97] ease-[var(--ease-out)] duration-200"
          >
            Explore
          </Link>
          <Link 
            to="/contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand-text text-brand-bg shadow-md hover:bg-brand-muted hover:text-brand-bg transition-colors active:scale-[0.97] ease-[var(--ease-out)] duration-200"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full text-brand-text hover:bg-brand-muted/10 focus:outline-none active:scale-[0.97]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-brand-muted/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={clsx(
                    "block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors active:scale-[0.97] ease-[var(--ease-out)] duration-200",
                    location.pathname === item.href 
                      ? "text-brand-text bg-brand-muted/10" 
                      : "text-brand-text/70 hover:text-brand-text hover:bg-brand-muted/10"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
