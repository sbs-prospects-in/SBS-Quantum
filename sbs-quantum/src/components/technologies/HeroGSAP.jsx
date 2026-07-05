import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroGSAP() {
  const heroRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imageRef = useRef(null);
  const imgBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(imgBgRef.current, 
        { scale: 1.1, opacity: 0 }, 
        { scale: 1, opacity: 0.2, duration: 2, ease: "power3.out" }
      )
      .fromTo([text1Ref.current, text2Ref.current], 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" },
        "-=1.5"
      )
      .fromTo(imageRef.current,
        { scale: 0, rotation: -10 },
        { scale: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=1"
      );

      // Interactive Parallax
      const onMouseMove = (e) => {
        if (!heroRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        
        gsap.to(imgBgRef.current, { x: x * -1.5, y: y * -1.5, duration: 1.5, ease: 'power2.out' });
        gsap.to(imageRef.current, { x: x * 2, y: y * 2, rotation: x * 0.5, duration: 0.8, ease: 'power2.out' });
        gsap.to([text1Ref.current, text2Ref.current], { x: x * 0.5, y: y * 0.5, duration: 1.5, ease: 'power2.out' });
      };

      heroRef.current.addEventListener('mousemove', onMouseMove);
      
      return () => {
        heroRef.current?.removeEventListener('mousemove', onMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-brand-bg dark:bg-[#020202] text-brand-text dark:text-white flex flex-col justify-center overflow-hidden pt-32 pb-16">
      
      {/* Cinematic Background Image Wash */}
      <div 
        ref={imgBgRef}
        className="absolute inset-0 pointer-events-none mix-blend-luminosity grayscale contrast-125"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(circle at 70% 30%, black, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black, transparent 60%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive H1 - Forced to max 2 lines via clamp and max-w */}
        <h1 className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-[clamp(4rem,9vw,9rem)] uppercase">
          <div className="overflow-hidden">
            <span ref={text1Ref} className="block text-brand-text dark:text-white">
              We architect
              <span 
                ref={imageRef}
                className="inline-block mx-4 md:mx-6 rounded-full bg-cover bg-center align-middle border border-white/20"
                style={{ 
                  width: 'clamp(80px, 15vw, 160px)', 
                  height: 'clamp(40px, 7.5vw, 80px)',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400)',
                  filter: 'grayscale(100%) contrast(1.2)'
                }}
              />
            </span>
          </div>
          <div className="overflow-hidden">
            <span ref={text2Ref} className="block text-brand-text">heavy infrastructure.</span>
          </div>
        </h1>

        <div className="mt-16 md:mt-32 w-full max-w-lg">
          <p className="text-xl md:text-2xl text-brand-muted dark:text-brand-text/60 dark:text-white/60 leading-relaxed">
            No fluff. Just raw, distributed systems designed for relentless throughput and scale.
          </p>
        </div>

      </div>
    </section>
  );
}
