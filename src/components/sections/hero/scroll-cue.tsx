'use client';

import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/lib/hooks/use-mobile';
import { cn } from '@/lib/utils';

export default function ScrollCue() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'absolute left-1/2 -translate-x-1/2 flex flex-col text-gray-600 items-center animate-pulse transition-all duration-1000 ease-in-out',
        isMobile ? 'bottom-24' : 'bottom-7',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none hidden'
      )}
    >
      <p className="lg:text-sm">Scroll Down</p>
      <ChevronDown className="w-5 h-5" />
    </div>
  );
}
