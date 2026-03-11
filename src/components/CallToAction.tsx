import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePosition({ x, y });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [prefersReducedMotion]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5545999753768', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative z-10 py-32 md:py-40 px-6 overflow-hidden"
    >
      {/* Enhanced Spotlight Effect - Reduced opacity (50%) for softer feel */}
      {!prefersReducedMotion && isHovering && (
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            background: `
              radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(242,201,76,0.11), transparent 45%),
              radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(242,201,76,0.05), transparent 55%)
            `,
          }}
        />
      )}

      {/* Static spotlight fallback for mobile or reduced motion */}
      {(prefersReducedMotion || typeof window !== 'undefined' && window.innerWidth < 768) && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(242,201,76,0.08) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30">
          <div 
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(ellipse, rgba(242,201,76,0.15) 0%, transparent 70%)',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-20">
          <div 
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(242,201,76,0.1) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Label - Clean text only, no bubble */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm text-primary uppercase tracking-[0.3em] font-medium mb-8"
        >
          Vamos conversar
        </motion.p>

        {/* Heading with shimmer delayed effect - runs once after delay */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="shimmer-delayed">
            Pronto para transformar
            <br />
            seu negócio?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
        </motion.p>

        {/* WhatsApp Button with soft glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-lg mx-auto"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-full transition-all duration-500 overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(242,201,76,0.2), 0 0 60px rgba(242,201,76,0.1)',
            }}
          >
            {/* Soft glow on hover */}
            <span 
              className="absolute inset-0 rounded-full transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(242,201,76,0.4),0_0_80px_rgba(242,201,76,0.2)]"
            />
            {/* WhatsApp Icon */}
            <svg 
              className="w-6 h-6 relative z-10" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10">FALE CONOSCO</span>
          </motion.button>
        </motion.div>

        {/* Trust Badges with yellow check circles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
            </div>
            <span>Resposta em até 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
            </div>
            <span>Consultoria gratuita</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
            </div>
            <span>Sem compromisso</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
