import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, BarChart3, Video, Palette, Share2, Mic, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: "Campanhas estratégicas",
    description: "Campanhas estratégicas para maximizar seu ROI e alcançar o público certo.",
    gradient: "from-amber-500/20 to-orange-500/5",
  },
  {
    icon: Video,
    title: "Produção de conteúdo",
    description: "Produção de conteúdo em áudio e vídeo para fortalecer sua marca.",
    gradient: "from-blue-500/20 to-purple-500/5",
  },
  {
    icon: Palette,
    title: "Criação visual",
    description: "Criação visual impactante que comunica a essência do seu negócio.",
    gradient: "from-pink-500/20 to-rose-500/5",
  },
  {
    icon: Share2,
    title: "Gestão de redes sociais",
    description: "Gestão completa das suas redes sociais com estratégia e criatividade.",
    gradient: "from-green-500/20 to-emerald-500/5",
  },
  {
    icon: Mic,
    title: "Gravação de Podcast",
    description: "Gravação profissional de podcasts com qualidade de áudio, direção técnica e estrutura pensada para fortalecer autoridade, posicionamento e comunicação da marca.",
    gradient: "from-violet-500/20 to-indigo-500/5",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description: "Consultoria estratégica personalizada para alinhar propósito, posicionamento, comunicação e crescimento do negócio de forma clara e sustentável.",
    gradient: "from-cyan-500/20 to-teal-500/5",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  // Scroll-based subtle sway
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const swayY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const swayRotate = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0, -1.5]);
  
  const smoothSwayY = useSpring(swayY, { stiffness: 50, damping: 30 });
  const smoothSwayRotate = useSpring(swayRotate, { stiffness: 50, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    setIsHovered(false);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: prefersReducedMotion ? 0 : rotateX, 
        rotateY: prefersReducedMotion ? 0 : rotateY, 
        y: prefersReducedMotion ? 0 : smoothSwayY,
        rotate: prefersReducedMotion ? 0 : smoothSwayRotate,
        transformStyle: "preserve-3d" 
      }}
      className="group relative cursor-pointer"
    >
      <div
        className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 group-hover:border-border transition-all duration-500 flex flex-col justify-between h-[380px] overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="text-primary mb-8 opacity-80 group-hover:opacity-100 transition-all duration-300"
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <IconComponent className="w-10 h-10" strokeWidth={1.5} />
          </motion.div>

          <h3 className="text-2xl font-semibold text-foreground mb-4 leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* CTA - Clickable to scroll to contact */}
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative z-10 mt-8"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="flex items-center gap-2 text-primary text-sm font-medium">
            Saiba mais
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </span>
        </motion.button>

        {/* Subtle glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-500"
          animate={{
            boxShadow: isHovered
              ? "0 0 60px rgba(242,201,76,0.12), inset 0 0 60px rgba(242,201,76,0.03)"
              : "0 0 0px rgba(242,201,76,0), inset 0 0 0px rgba(242,201,76,0)",
          }}
        />

        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-3xl gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => (
  <section id="services" className="relative z-10 py-32 md:py-40 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary text-sm uppercase tracking-[0.3em] mb-4"
        >
          O que fazemos?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight"
        >
          Serviços Premium
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 origin-center"
        />
      </div>

      {/* Service Cards Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ perspective: "1200px" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
