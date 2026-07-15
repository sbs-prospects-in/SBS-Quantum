import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS, NAV_ITEMS } from '../../lib/constants';
import { motion } from 'framer-motion';
import SocialIcon from '../shared/SocialIcon';
import logoImg from '../../assets/logo.png';
import robotImg from '../../assets/robot.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919081353523');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Hide the massive footer CTA on pages that already have their own strong bottom CTAs
  // or on the contact page where it is redundant.
  const hideCTA = location.pathname === '/contact' || (location.pathname.startsWith('/services/') && location.pathname !== '/services');

  return (
    <footer className="bg-brand-bg border-t border-brand-muted/20 pt-24 pb-12 mt-20 relative overflow-hidden">
      
      {!hideCTA && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32 text-center">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-brand-text mb-8 tracking-tight">
            Ready to leap?
          </h2>
          <p className="text-xl md:text-2xl text-brand-accent dark:text-white/80 mb-12 max-w-2xl mx-auto">
            Let's engineer your next digital transformation with unparalleled precision and design.
          </p>
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-12 py-5 rounded-full text-lg font-bold bg-brand-text text-brand-bg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-[0.97] ease-[var(--ease-out)] duration-300"
          >
            Start Your Project
          </Link>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ${!hideCTA ? 'pt-16 border-t border-brand-muted/20' : ''}`}>
          <div className="md:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center mb-6 active:scale-[0.98] transition-transform duration-200 ease-[var(--ease-out)] w-max">
              <img src={logoImg} alt="SBS Quantum Logo" className="h-12 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(50%) saturate(464%) hue-rotate(352deg) brightness(88%) contrast(93%)' }} />
            </Link>
            <p className="text-brand-muted dark:text-white/70 max-w-sm mb-8 text-sm leading-relaxed">
              Engineering modern IT solutions with credibility, technical competence, and an uncompromising premium design sensibility. Founded by Urval Shah.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.label} href={social.href} icon={social.icon} label={social.label} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-brand-text dark:text-brand-accent mb-6 tracking-tight text-lg">Navigation</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.href} 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-brand-text/70 hover:text-brand-text transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-brand-text dark:text-brand-accent mb-6 tracking-tight text-lg">Contact</h3>
            <ul className="space-y-4 text-brand-muted dark:text-white/70 text-sm">
              <li className="flex items-start space-x-2">
                <a href="https://share.google/k86ZBxZ9HFHpSckyp" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors text-left">
                  1003, Span Trade Center, Pritam Nagar, Paldi, Ahmedabad, Gujarat 380006
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sbsquantum@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors">
                  sbsquantum@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <button 
                  onClick={handleCopyPhone} 
                  className="hover:text-brand-text transition-colors flex items-center group relative"
                  aria-label="Copy phone number"
                >
                  <span>+919081353523</span>
                  {copied && (
                    <span className="absolute left-full ml-3 px-2 py-1 bg-brand-text text-brand-bg text-xs font-bold rounded shadow-lg whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </li>
              <li className="flex flex-col space-y-1 mt-4">
                <span className="font-semibold text-brand-text dark:text-brand-accent">Business Hours:</span>
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
                <span>Sun: On Advance Appointment Basis</span>
              </li>
              <li className="pt-4">
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-brand-text font-bold transition-colors active:scale-[0.97] ease-[var(--ease-out)] duration-200 group">
                  Get in touch <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Floating Interactive Robot */}
        <div className="absolute left-0 right-0 bottom-12 hidden md:block z-20 pointer-events-none">
          <img 
            src={robotImg} 
            alt="Animated Robot"
            className="w-32 h-auto absolute bottom-0 robot-walk"
          />
        </div>
        
        <div className="border-t border-brand-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text/60 relative z-20">
          <p>&copy; {currentYear} SBS Quantum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-text transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-text transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
