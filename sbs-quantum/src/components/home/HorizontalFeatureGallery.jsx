import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HorizontalFeatureGallery({ features }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(features.length - 1) * 100}vw`]);

  return (
    <>
      {/* MOBILE FALLBACK: Standard Vertical Stack */}
      <section className="md:hidden py-20 bg-brand-bg relative">
        <div className="absolute inset-0 pointer-events-none border-y border-brand-muted/20"></div>
        <div className="px-6 space-y-24 relative z-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col space-y-8">
              {/* Visual Side */}
              <div className="relative aspect-square w-full rounded-[2.5rem] bg-brand-surface border border-brand-border flex items-center justify-center overflow-hidden">
                <feature.icon className="text-brand-text relative z-10" size={80} strokeWidth={1} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,140,83,0.1)_0%,transparent_70%)] pointer-events-none"></div>
              </div>

              {/* Content Side */}
              <div>
                <span className="text-brand-muted font-mono tracking-widest text-xs uppercase mb-3 block">0{idx + 1} // {features.length}</span>
                <h3 className="text-4xl font-display font-bold text-brand-text mb-4 leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-brand-text/70 mb-8 leading-relaxed font-medium">
                  {feature.desc}
                </p>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-lg font-bold text-brand-text"
                >
                  Explore <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP: Horizontal Scroll */}
      <section ref={targetRef} className="hidden md:block relative bg-brand-bg" style={{ height: `${features.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {/* Background Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-muted/20 to-transparent"></div>
            <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-muted/20 to-transparent"></div>
          </div>

          <motion.div style={{ x }} className="flex">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="w-screen h-screen flex items-center justify-center p-8 md:p-24 flex-shrink-0"
              >
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  
                  {/* Visual Side */}
                  <div className="relative aspect-square w-full md:w-4/5 mx-auto rounded-[3rem] bg-brand-surface border border-brand-border flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-text/5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
                    <feature.icon className="text-brand-text relative z-10 transition-transform duration-700 group-hover:scale-110" size={140} strokeWidth={1} />
                    
                    {/* Glowing backdrop */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,140,83,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                  </div>

                  {/* Content Side */}
                  <div>
                    <span className="text-brand-muted font-mono tracking-widest text-sm uppercase mb-4 block">0{idx + 1} // {features.length}</span>
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brand-text mb-8 leading-[1.1] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-brand-text/70 mb-12 leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                    
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-xl font-bold text-brand-text group hover:text-brand-muted transition-colors"
                    >
                      Explore capability <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={24} />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}