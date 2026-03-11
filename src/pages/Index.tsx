import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      <SmoothScroll />
      <ScrollProgress />
      
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
