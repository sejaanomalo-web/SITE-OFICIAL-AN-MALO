import React, { useEffect } from 'react';
import Lenis from 'lenis';

// ============ CONFIGURAÇÕES DE INÉRCIA ============
const CONFIG = {
  enabled: true,
  lerp: 0.08,              // Suavidade (menor = mais pesado). Range: 0.03–0.15
  duration: 1.4,            // Duração base do scroll (s). Range: 0.8–2.5
  smoothWheel: true,        // Suavizar roda do mouse
  syncTouch: false,         // Manter toque nativo no mobile
  wheelMultiplier: 0.9,     // Multiplicador da roda (menor = mais pesado)
  touchMultiplier: 1.5,     // Multiplicador do toque
};
// ===================================================

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    if (!CONFIG.enabled) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const lenis = new Lenis({
      lerp: CONFIG.lerp,
      duration: CONFIG.duration,
      smoothWheel: CONFIG.smoothWheel,
      syncTouch: CONFIG.syncTouch,
      wheelMultiplier: CONFIG.wheelMultiplier,
      touchMultiplier: CONFIG.touchMultiplier,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
