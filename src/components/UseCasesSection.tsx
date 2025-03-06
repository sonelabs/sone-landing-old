
import React, { useRef, useEffect } from 'react';
import { Target, CircleUser, Monitor, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
  index: number;
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, benefits, color, index }) => {
  const caseRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (caseRef.current) {
      observer.observe(caseRef.current);
    }
    
    return () => {
      if (caseRef.current) {
        observer.unobserve(caseRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={caseRef}
      className="relative glass-card rounded-2xl p-8 opacity-0 transition-all duration-500 border border-white/30 overflow-hidden"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div 
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-20"
        style={{ background: color }}
      ></div>
      
      <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6`} style={{ background: `${color}20`, color }}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0`} style={{ background: `${color}20` }}>
              <div className={`w-2 h-2 rounded-full`} style={{ background: color }}></div>
            </div>
            <span className="text-sm text-foreground/80">{benefit}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className="w-full bg-white hover:bg-eye-gray text-foreground border border-border/50 shadow-sm hover:shadow transition-all duration-300"
      >
        Learn More
      </Button>
    </div>
  );
};

const UseCasesSection = () => {
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

  const useCases = [
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "UX Research",
      description: "Transform how you gather user feedback and analyze interface effectiveness.",
      benefits: [
        "Heat maps of visual attention",
        "Quantitative engagement metrics",
        "Identify UI friction points",
        "Reduce research time by 60%"
      ],
      color: "#2D7FF9"
    },
    {
      icon: <CircleUser className="h-7 w-7" />,
      title: "Accessibility",
      description: "Enable hands-free computing for users with mobility challenges.",
      benefits: [
        "Complete cursor control using only eyes",
        "Customizable dwell selections",
        "Voice command integration",
        "Adaptive interface elements"
      ],
      color: "#8342D0"
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Gaming",
      description: "Create immersive gaming experiences with natural eye-based interactions.",
      benefits: [
        "Look-to-aim mechanics",
        "Realistic NPC interactions",
        "Gaze-aware environments",
        "Reduced control complexity"
      ],
      color: "#E63946"
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Productivity",
      description: "Accelerate workflows with intelligent, anticipatory interfaces.",
      benefits: [
        "50% faster document navigation",
        "Smart UI element highlighting",
        "Reduced mouse movement fatigue",
        "Context-aware tool suggestions"
      ],
      color: "#06D6A0"
    }
  ];

  return (
    <section id="use-cases" ref={sectionRef} className="section-container">
      <h2 ref={titleRef} className="section-title text-center">
        Transformative <span className="text-gradient">Use Cases</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {useCases.map((useCase, index) => (
          <UseCase 
            key={index}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
            benefits={useCase.benefits}
            color={useCase.color}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
