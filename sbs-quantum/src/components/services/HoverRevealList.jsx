import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HoverRevealList({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full relative py-10 md:py-20">
      <div className="w-full flex flex-col border-y border-brand-border/50">
        {services.map((service, idx) => (
          <div 
            key={idx}
            className="group relative border-b border-brand-border/50 last:border-b-0"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 bg-brand-surface scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] z-0" />
            
            <Link to={service.link} className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between p-8 md:p-12 lg:p-16 w-full cursor-pointer">
              
              {/* Title Section */}
              <div className="flex items-center lg:w-7/12 mb-6 lg:mb-0 lg:pr-12">
                <span className="text-brand-muted font-mono tracking-widest text-sm mr-8 md:mr-16 opacity-100 lg:opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  0{idx + 1}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-brand-text lg:group-hover:translate-x-8 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] tracking-tight break-words">
                  {service.title}
                </h3>
              </div>
              
              {/* Description & Icon Section */}
              <div className="lg:w-5/12 flex items-center justify-between lg:justify-end lg:pl-4">
                <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed lg:mr-16 lg:opacity-0 lg:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out max-w-md hidden md:block">
                  {service.desc}
                </p>
                
                <div className="w-16 h-16 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center group-hover:bg-brand-text group-hover:text-brand-bg transition-colors duration-300 flex-shrink-0">
                  <ArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}