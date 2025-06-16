
import React, { useState, useEffect } from 'react';
import { Users, MapPin, CheckCircle, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const TrustMetrics = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { 
      icon: Users, 
      value: 900, 
      suffix: '+',
      label: 'Volunteers Sent',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: MapPin, 
      value: 350, 
      suffix: '+',
      label: 'Villages Supported',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: CheckCircle, 
      value: 75, 
      suffix: '+',
      label: 'Ongoing Initiatives',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      icon: Award, 
      value: 1, 
      suffix: '',
      label: 'Purposeful Community',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      gradient: 'from-purple-500 to-pink-500'
    },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = end;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 50);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Floating Diyas/Fireflies */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-white mb-6">Your Karma Trail So Far</h2>
          <p className="text-xl text-gray-300">Track your impact. Light the way for others.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6 transition-all duration-500 group-hover:scale-110 bg-gradient-to-br ${stat.gradient} shadow-2xl`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-12 h-12 text-white" />
              </motion.div>
              
              <motion.div 
                className="text-5xl font-bold text-white mb-3 count-up"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {counters[index]}{stat.suffix}
              </motion.div>
              
              <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
              
              {/* Glow Effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-300`}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Karma Meter */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-6">🕯️ Community Karma Level</h3>
            <div className="relative">
              <div className="karma-progress-bar h-4 rounded-full bg-gray-700">
                <motion.div 
                  className="karma-progress-fill h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '75%' } : { width: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
              <p className="text-gray-300 text-center mt-4">Growing stronger together</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;
