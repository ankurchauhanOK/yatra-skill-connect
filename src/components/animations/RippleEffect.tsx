
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RippleEffectProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  className?: string;
}

const RippleEffect = ({ 
  children, 
  color = 'rgba(112, 181, 230, 0.3)',
  size = 100,
  className = ''
}: RippleEffectProps) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x - size / 2,
              top: ripple.y - size / 2,
              width: size,
              height: size,
              backgroundColor: color,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;
