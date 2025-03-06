
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 font-medium text-lg transition-opacity duration-300 hover:opacity-80"
        >
          <img 
            src="/lovable-uploads/7bb49070-62a5-4a46-acdd-d6369b3b0ea1.png" 
            alt="VisionTrack Logo" 
            className="h-8 w-8"
          />
          <span className="font-semibold">VisionTrack</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'Use Cases', 'Pricing', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-eye-teal relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eye-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex"
          >
            Sign In
          </Button>
          <Button 
            className="bg-eye-teal hover:bg-eye-teal/90 text-eye-black shadow-md hover:shadow-xl transition-all duration-300"
          >
            Try for Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
