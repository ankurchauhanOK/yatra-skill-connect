
import { useState, useEffect } from 'react';

export const useWaterAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setShouldReduceMotion(mediaQuery.matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return {
    isMobile,
    shouldReduceMotion,
    // Disable heavy animations on mobile or when user prefers reduced motion
    enableHeavyAnimations: !isMobile && !shouldReduceMotion,
    // Use simpler animations on mobile
    animationIntensity: isMobile ? 0.5 : 1,
  };
};
