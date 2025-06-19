
import React from 'react';
import { motion } from 'framer-motion';

interface WaterTransitionProps {
  className?: string;
}

const WaterTransition = ({ className = '' }: WaterTransitionProps) => {
  return (
    <div className={`relative w-full h-16 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#70B5E6', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#70B5E6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#70B5E6', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,60 C150,100 350,0 500,50 C650,100 850,0 1000,40 C1100,60 1200,20 1200,20 L1200,120 L0,120 Z"
          fill="url(#waterGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        <motion.path
          d="M0,80 C200,120 400,40 600,70 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill="rgba(112, 181, 230, 0.1)"
          animate={{
            d: [
              "M0,80 C200,120 400,40 600,70 C800,100 1000,20 1200,60 L1200,120 L0,120 Z",
              "M0,90 C200,130 400,50 600,80 C800,110 1000,30 1200,70 L1200,120 L0,120 Z",
              "M0,80 C200,120 400,40 600,70 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
      
      {/* Floating droplets */}
      <motion.div
        className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-blue-300/40"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-6 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-400/50"
        animate={{
          y: [0, -8, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default WaterTransition;
