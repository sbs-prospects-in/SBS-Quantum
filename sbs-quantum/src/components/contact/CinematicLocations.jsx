import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LOCATIONS = [
  { 
    city: 'New York', 
    address: 'One World Trade Center\nSuite 4500\nNew York, NY 10007',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    city: 'London', 
    address: 'One Canada Square\nLevel 39\nLondon E14 5AB',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    city: 'Tokyo', 
    address: 'Roppongi Hills Mori Tower\nFloor 42\nMinato City, Tokyo 106-6108',
    img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200'
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
                <div className="flex items-center space-x-3 mb-4 text-brand-text transform group-hover:-translate-y-2 transition-transform duration-500">
                  <MapPin size={24} />
                  <h3 className="text-3xl font-display font-medium text-brand-text dark:text-white drop-shadow-lg">
                    {loc.city}
                  </h3>
                </div>
                
                <div className="overflow-hidden">
                  <p className="text-brand-text/80 dark:text-brand-text/60 dark:text-white/60 leading-relaxed whitespace-pre-line transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out drop-shadow-md">
                    {loc.address}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
