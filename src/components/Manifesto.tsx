import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative z-10 py-24 md:py-32 px-6 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(242,201,76,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-primary text-sm uppercase tracking-[0.3em] mb-8"
            >
              Nosso Manifesto
            </motion.p>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="text-foreground">AS EMPRESAS MAIS FORTES NÃO SÃO CONSTRUÍDAS COM ANÚNCIOS, SÃO FORJADAS POR UM </span>
              <span className="relative inline-block text-primary">
                PROPÓSITO.
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary to-primary/60 origin-left rounded-full"
                />
              </span>
            </motion.h2>

            {/* Spacer */}
            <div className="mb-8" />

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
            >
              A Anômalo existe para resgatar a alma das marcas e transformar propósito em crescimento sustentável.
            </motion.p>
          </motion.div>

          {/* Right Column - Additional Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 lg:pt-16"
          >
            {/* First paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-foreground text-lg leading-relaxed"
            >
              Nosso trabalho não é criar marketing,{' '}
              <span className="text-primary font-medium">
                é revelar a essência que diferencia o seu negócio de todos os outros.
              </span>
            </motion.p>

            {/* Second paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-foreground text-lg leading-relaxed"
            >
              Acreditamos que o marketing é apenas a voz, mas o{' '}
              <span className="text-primary font-medium">propósito é a alma.</span>{' '}
              Nossa missão é alinhar o que sua empresa é por dentro com o que comunica por fora.
            </motion.p>

            {/* Quote box with left border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="relative pl-6 py-6 border-l-2 border-primary bg-card/30 rounded-r-lg"
            >
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed">
                Crescimento com propósito, autenticidade e cultura, pilares que sustentam marcas verdadeiramente únicas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
