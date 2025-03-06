
import React, { useRef, useEffect } from 'react';
import { 
  Target, 
  Zap, 
  Shield, 
  Cpu, 
  Activity, 
  ScanEye, 
  MousePointer,
  BarChart3
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="glass-card p-6 md:p-8 rounded-2xl opacity-0 transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-eye-blue/10 text-eye-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Tracking",
      description: "Track eye movements with sub-millimeter accuracy, enabling precise cursor control and interaction."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ultra-Low Latency",
      description: "Experience real-time responsiveness with less than 10ms latency from eye movement to screen action."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy-First Design",
      description: "All processing happens on-device with no eye data ever leaving your system, ensuring complete privacy."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Our advanced algorithms learn from your usage patterns to provide increasingly intuitive interactions."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Attention Analytics",
      description: "Gain valuable insights into user attention patterns for UX optimization and research."
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: "Effortless Control",
      description: "Navigate interfaces naturally with your eyes, reducing physical strain and increasing productivity."
    },
    {
      icon: <ScanEye className="h-6 w-6" />,
      title: "Cross-Platform",
      description: "Works seamlessly across devices and operating systems with our versatile SDK and API."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Metrics",
      description: "Comprehensive measurements and benchmarks to quantify improvements in workflow efficiency."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="section-container bg-eye-gray relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
      <div className="relative z-10">
        <h2 ref={titleRef} className="section-title text-center">
          Advanced <span className="text-gradient">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
