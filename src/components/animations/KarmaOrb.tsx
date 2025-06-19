
import React from 'react';
import { motion } from 'framer-motion';

interface KarmaOrbProps {
  size?: number;
  intensity?: number;
  className?: string;
}

const KarmaOrb = ({ 
  size = 80, 
  intensity = 1,
  className = ''
}: KarmaOrbProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -15, 0],
        rotateZ: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(112, 181, 230, ${0.3 * intensity}) 0%, transparent 70%)`,
          filter: 'blur(8px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main orb */}
      <motion.div
        className="absolute inset-2 rounded-full"
        style={{
          background: `linear-gradient(135deg, 
            rgba(112, 181, 230, ${0.4 * intensity}) 0%, 
            rgba(232, 185, 81, ${0.3 * intensity}) 50%,
            rgba(47, 82, 51, ${0.2 * intensity}) 100%)`,
          backdropFilter: 'blur(10px)',
        }}
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Inner highlight */}
        <motion.div
          className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/40"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default KarmaOrb;
