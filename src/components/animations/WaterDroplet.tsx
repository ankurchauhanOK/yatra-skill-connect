
import React from 'react';
import { motion } from 'framer-motion';

interface WaterDropletProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  delay?: number;
  className?: string;
}

const WaterDroplet = ({ 
  size = 'md', 
  color = '#70B5E6', 
  delay = 0,
  className = '' 
}: WaterDropletProps) => {
  const sizeClasses = {
    sm: 'w-3 h-4',
    md: 'w-4 h-5',
    lg: 'w-6 h-8'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1],
        y: [0, 10, 0],
        scale: [0.8, 1, 0.9, 1]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Main droplet */}
      <svg
        viewBox="0 0 24 32"
        className="w-full h-full"
        fill="none"
      >
        <motion.path
          d="M12 2C12 2 20 10 20 18C20 24.627 16.627 28 12 28C7.373 28 4 24.627 4 18C4 10 12 2 12 2Z"
          fill={color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay }}
        />
        <motion.ellipse
          cx="10"
          cy="12"
          rx="2"
          ry="3"
          fill="rgba(255,255,255,0.3)"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
};

export default WaterDroplet;
