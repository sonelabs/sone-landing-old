
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, CheckCircle, ArrowRight } from 'lucide-react';

const EarlyAccessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-fade');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const benefits = [
    "30-day free trial with full feature access",
    "Priority technical support from our engineering team",
    "Early access to new features and updates",
    "Influence product development with direct feedback"
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eye-blue/5 to-transparent"></div>
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 relative max-w-5xl glass-card rounded-3xl p-8 md:p-12 opacity-0"
      >
        <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-br from-eye-blue/20 to-eye-light-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eye-blue/10 text-eye-blue font-medium text-sm mb-6">
              <Eye className="h-4 w-4" />
              <span>Early Adopter Program</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be among the first to experience the future of interaction
            </h2>
            
            <p className="text-foreground/70 mb-8">
              Join our exclusive early access program and transform how you interact with technology. Limited spots available for our beta release.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-eye-blue flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-auto md:min-w-[350px] bg-white rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Request Early Access</h3>
            
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 h-12 bg-eye-gray border-transparent focus:border-eye-blue/30 focus:ring-eye-blue/20"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 h-12 bg-eye-gray border-transparent focus:border-eye-blue/30 focus:ring-eye-blue/20"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 h-12 bg-eye-gray border-transparent focus:border-eye-blue/30 focus:ring-eye-blue/20"
                />
              </div>
              
              <div>
                <select className="w-full px-4 py-3 h-12 bg-eye-gray border-transparent rounded-md focus:border-eye-blue/30 focus:ring-eye-blue/20">
                  <option value="">Primary Use Case</option>
                  <option value="ux">UX Research</option>
                  <option value="accessibility">Accessibility</option>
                  <option value="gaming">Gaming</option>
                  <option value="productivity">Productivity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-eye-blue hover:bg-eye-blue/90 text-white py-3 h-12 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Submit Application</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            
            <p className="text-xs text-center text-foreground/50 mt-4">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
