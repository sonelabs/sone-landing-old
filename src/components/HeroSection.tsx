
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ScanEye, MousePointer, Zap } from 'lucide-react';

const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = orbitRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 15;
      const y = (clientY - top - height / 2) / 15;
      
      orbitRef.current.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="hero-background"></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-block mb-4 px-3 py-1.5 bg-eye-blue/10 rounded-full border border-eye-blue/20 opacity-0 animate-fade-in">
            <span className="text-eye-blue text-sm font-medium flex items-center gap-1.5">
              <ScanEye className="h-4 w-4" />
              Next Generation Eye Tracking
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in animate-delay-200">
            Unlock the Power of <span className="text-gradient">Visual&nbsp;Intelligence</span>
          </h1>
          
          <p className="text-foreground/70 text-lg md:text-xl mb-8 opacity-0 animate-fade-in animate-delay-300">
            Our precision eye tracking technology revolutionizes how humans interact with devices, creating more intuitive, accessible, and productive digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Button className="w-full sm:w-auto bg-eye-blue hover:bg-eye-blue/90 text-white shadow-md hover:shadow-xl transition-all duration-300 text-base font-medium px-6 py-6 h-auto">
              Get Early Access
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-eye-blue/20 text-eye-blue hover:bg-eye-blue/5 text-base font-medium px-6 py-6 h-auto">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 opacity-0 animate-fade-in animate-delay-500">
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-semibold text-2xl">99.8%</span>
              <span className="text-foreground/60 text-sm">Accuracy</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-semibold text-2xl">&lt;10ms</span>
              <span className="text-foreground/60 text-sm">Latency</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-semibold text-2xl">5x</span>
              <span className="text-foreground/60 text-sm">More Efficient</span>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center opacity-0 animate-scale-fade animate-delay-400">
          <div 
            ref={orbitRef}
            className="relative w-80 h-80 md:w-96 md:h-96 transition-transform duration-300 ease-out"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-eye-blue/5 to-eye-light-blue/10 flex items-center justify-center overflow-hidden">
              <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-eye-blue/20 animate-spin-slow"></div>
              <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-eye-blue/10"></div>
              
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-white shadow-lg ring-1 ring-eye-blue/10 ring-glow flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-eye-blue/20 to-eye-light-blue/20 blur-xl"></div>
                </div>
                
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-eye-blue to-eye-light-blue flex items-center justify-center">
                  <div className="absolute inset-1 rounded-full bg-white"></div>
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-eye-dark-gray">
                    <div className="absolute top-1 left-3 w-4 h-4 rounded-full bg-white/20"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center animate-float">
                <MousePointer className="h-5 w-5 text-eye-blue" />
              </div>
              
              <div className="absolute bottom-10 right-10 w-14 h-14 glass-card rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="h-6 w-6 text-eye-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
