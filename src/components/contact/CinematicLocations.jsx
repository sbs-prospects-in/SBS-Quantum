import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LOCATIONS = [
  { 
    city: 'Canada', 
    address: 'First Canadian Place\nSuite 5000\nToronto, ON M5X 1A9',
    img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    city: 'Dubai', 
    address: 'Burj Khalifa\nCorporate Suites\nDowntown Dubai, UAE',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    city: 'Australia', 
    address: 'Australia Square\nLevel 40\nSydney NSW 2000',
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function CinematicLocations() {
  const containerRef = useRef(null);

  return (
    <section className="bg-brand-bg dark:bg-[#020202] py-24 text-brand-text dark:text-white border-t border-brand-border dark:border-white/5 pb-32 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative" ref={containerRef}>
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between pointer-events-none">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4">
              Global Presence
            </h2>
            <p className="text-brand-text text-sm font-bold tracking-widest uppercase">
              Interactive Physics: Grab and Drag
            </p>
          </div>
          <p className="mt-6 md:mt-0 text-xl text-brand-muted dark:text-brand-text/60 dark:text-white/60 max-w-sm font-medium">
            Strategic architectural hubs located in the world's most critical financial and technical sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {LOCATIONS.map((loc, i) => (
            <motion.div 
              key={loc.city}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 1, ease: "easeOut" }}
              whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              className="relative h-[500px] rounded-3xl overflow-hidden group cursor-grab touch-none"
            >
              <div className="absolute inset-0 bg-[#050505] z-0 pointer-events-none" />
              
              {/* Cinematic Image Zoom */}
              <img 
                src={loc.img} 
                alt={loc.city}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110 filter grayscale pointer-events-none"
              />
              
              {/* Light Gold Tint Overlay */}
              <div className="absolute inset-0 bg-brand-muted/30 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-50" />

              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10 transition-opacity duration-700 pointer-events-none" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 pointer-events-none">
                <div className="flex items-center space-x-3 mb-4 text-white transition-transform duration-500">
                  <MapPin size={24} />
                  <h3 className="text-3xl font-display font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {loc.city}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
