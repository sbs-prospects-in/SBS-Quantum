import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown, Code, GitBranch, Database, Globe, Smartphone, PenTool, Users, Monitor, Cloud, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../../lib/constants';
import { useTheme } from '../../context/ThemeContext';
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

const DigitalEntity = ({ targetX }) => {
  // If targetX is null, it patrols. If it has a value, it snaps to it.
  const springX = useSpring(0, { stiffness: 200, damping: 20 });
  const [patrol, setPatrol] = useState(0);

  useEffect(() => {
    if (targetX !== null) {
      springX.set(targetX);
    }
  }, [targetX, springX]);

  // Patrol loop
  useEffect(() => {
    if (targetX === null) {
      const interval = setInterval(() => {
        // Ping pong between 20 and 1000 pixels (approx nav width)
        setPatrol(p => p === 20 ? 800 : 20);
      }, 4000);
      springX.set(patrol);
      return () => clearInterval(interval);
    }
  }, [targetX, patrol, springX]);

  return (
    <motion.div
      className="absolute bottom-0 h-[2px] bg-brand-text shadow-[0_0_20px_rgba(212,175,55,1)] pointer-events-none z-50 rounded-full"
      style={{
        left: springX,
        width: targetX !== null ? 40 : 10,
        translateX: "-50%",
        opacity: targetX !== null ? 1 : 0.5,
      }}
      animate={{
        height: targetX !== null ? 4 : 2,
        boxShadow: targetX !== null ? "0 0 30px rgba(212,175,55,1)" : "0 0 10px rgba(212,175,55,0.5)"
      }}
    />
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const navRef = useRef(null);
  const [hoverX, setHoverX] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small grace period
  };

  const handleNavClick = (href, e) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleHoverLink = (e) => {
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = e.currentTarget.getBoundingClientRect();
    setHoverX((linkRect.left - navRect.left) + linkRect.width / 2);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 z-50">
      
      <div 
        ref={navRef}
        onMouseLeave={() => setHoverX(null)}
        className="relative flex items-center justify-between h-16 lg:h-20 bg-brand-surface/90 backdrop-blur-2xl rounded-full lg:rounded-2xl px-6 lg:px-8 shadow-2xl border border-brand-border transition-colors duration-500"
      >
        <DigitalEntity targetX={hoverX} />

        <div className="flex-shrink-0 flex items-center">
          <Link to="/" onClick={(e) => handleNavClick('/', e)} onMouseEnter={handleHoverLink} className="flex items-center active:scale-[0.97] transition-transform duration-200 ease-[var(--ease-out)]">
            {theme === 'dark' ? (
              <img src={logoImg} alt="SBS Quantum Logo" className="h-10 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(1512%) hue-rotate(185deg) brightness(115%) contrast(100%)' }} />
            ) : (
              <img src={logoImg} alt="SBS Quantum Logo" className="h-10 w-auto" />
            )}
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center justify-center space-x-2">
          {NAV_ITEMS.filter(item => item.label !== 'Contact Us').map((item) => {
            if (item.label === 'Services') {
              return (
                <div 
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    to="/services"
                    onClick={(e) => handleNavClick('/services', e)}
                    onMouseEnter={handleHoverLink}
                    className={clsx(
                      "flex items-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-full",
                      isServicesOpen || location.pathname.startsWith('/services')
                        ? "text-brand-text bg-brand-text/5" 
                        : "text-brand-text/60 hover:text-brand-text"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} className={clsx("ml-2 transition-transform", isServicesOpen && "rotate-180")} />
                  </Link>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                        style={{ transformOrigin: 'top center' }}
                        className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-[850px] bg-brand-surface/95 backdrop-blur-3xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-border overflow-hidden flex transition-colors duration-500"
                      >
                        <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent" />
                        
                        <div className="w-full p-10 grid grid-cols-3 gap-x-8 gap-y-8 relative z-10">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.name}
                              to={`/services/${service.slug}`}
                              className="group flex items-start space-x-4 transition-transform duration-150"
                            >
                              <div className="p-3 rounded-2xl bg-brand-text/5 border border-brand-border text-brand-text group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300 shadow-sm">
                                <service.icon size={22} strokeWidth={1.5} />
                              </div>
                              <div className="pt-1.5">
                                <h4 className="text-sm font-display font-medium text-brand-text/80 group-hover:text-brand-text transition-colors leading-snug">{service.name}</h4>
                              </div>
                            </Link>
                          ))}
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
                onClick={(e) => handleNavClick(item.href, e)}
                onMouseEnter={handleHoverLink}
                className={clsx(
                  "px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 rounded-full",
                  location.pathname === item.href 
                    ? "text-brand-text bg-brand-text/5" 
                    : "text-brand-text/60 hover:text-brand-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-brand-text/80 hover:bg-brand-text/10 hover:text-brand-text transition-colors duration-300 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <Link 
            to="/contact"
            onMouseEnter={handleHoverLink}
            className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-block-secondary text-brand-block-text hover:bg-brand-block-primary transition-colors duration-300 shadow-md"
          >
            Start Project
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full text-brand-text hover:bg-brand-text/10 focus:outline-none"
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
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            className="lg:hidden mt-4 bg-brand-surface/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-brand-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div key={item.label} className="space-y-1">
                      <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors hover:bg-brand-text/5">
                        <Link
                          to="/services"
                          onClick={(e) => handleNavClick('/services', e)}
                          className={clsx(
                            "flex-1",
                            location.pathname.startsWith('/services')
                              ? "text-brand-text"
                              : "text-brand-text/60 hover:text-brand-text"
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setIsServicesOpen(!isServicesOpen);
                          }}
                          className="p-1 text-brand-text/60 hover:text-brand-text transition-colors"
                        >
                          <ChevronDown size={18} className={clsx("transition-transform", isServicesOpen && "rotate-180")} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pr-2"
                          >
                            <div className="pt-2 pb-3 space-y-1 border-l-2 border-brand-border ml-2 pl-4">
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.name}
                                  to={`/services/${service.slug}`}
                                  onClick={(e) => handleNavClick(`/services/${service.slug}`, e)}
                                  className="block py-2.5 text-sm font-medium text-brand-text/70 hover:text-brand-text transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
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
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={clsx(
                      "block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider transition-colors",
                      location.pathname === item.href 
                        ? "text-brand-text bg-brand-text/5" 
                        : "text-brand-text/60 hover:text-brand-text hover:bg-brand-text/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-brand-border flex items-center justify-between px-4">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-text/80">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full bg-brand-text/5 text-brand-text hover:bg-brand-text/10 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
