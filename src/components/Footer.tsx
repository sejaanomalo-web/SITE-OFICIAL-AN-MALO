import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import logoAnomalo from '@/assets/logo-anomalo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/anomalohub', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@An%C3%B4maloHub', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'Sobre', href: '#manifesto' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 max-w-md"
          >
            {/* Logo clicável */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block cursor-pointer mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={logoAnomalo} 
                alt="Anômalo" 
                className="h-10 w-auto"
                loading="lazy"
              />
            </motion.a>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hub de negócios especializado em soluções digitais completas para marcas com propósito.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a 
                href="mailto:sejaanomalo@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>sejaanomalo@gmail.com</span>
              </a>
              <a 
                href="tel:+5545999753768"
                className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(45) 99975-3768</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Cascavel – PR</span>
              </div>
            </div>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  style={{ 
                    boxShadow: '0 0 15px rgba(242,201,76,0.15), 0 0 25px rgba(242,201,76,0.08)' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(242,201,76,0.35), 0 0 45px rgba(242,201,76,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(242,201,76,0.15), 0 0 25px rgba(242,201,76,0.08)';
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Anômalo. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
