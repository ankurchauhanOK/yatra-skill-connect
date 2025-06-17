
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
      value: 15000, 
      suffix: '+',
      label: 'Volunteer Hours',
      hindi: 'सेवा घंटे',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: MapPin, 
      value: 350, 
      suffix: '+',
      label: 'Yatras Completed',
      hindi: 'पूर्ण यात्राएं',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: CheckCircle, 
      value: 100, 
      suffix: '+',
      label: 'Villages Connected',
      hindi: 'जुड़े गांव',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      icon: Award, 
      value: 1, 
      suffix: '',
      label: 'Purposeful Community',
      hindi: 'सार्थक समुदाय',
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
    <section className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Night Sky with Floating Diyas */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Floating Lotus/Diya Elements */}
        {['🪔', '🏵️', '✨', '🌸'].map((emoji, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl opacity-60"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <h2 className="section-title text-white mb-6">Our Collective Karma</h2>
          <p className="text-xl text-gray-300 mb-4">The impact we create together</p>
          <p className="text-yellow-400 font-medium">हमारी सामूहिक शक्ति</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glowing Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 rounded-3xl blur-xl`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <motion.div 
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6 transition-all duration-500 bg-gradient-to-br ${stat.gradient} shadow-2xl relative z-10`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-12 h-12 text-white" />
                
                {/* Sparkle Effect */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-300"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-5xl font-bold text-white mb-2 count-up"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <motion.span
                  animate={isInView ? { 
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  {counters[index].toLocaleString()}{stat.suffix}
                </motion.span>
              </motion.div>
              
              <div className="text-gray-300 font-medium text-lg mb-1">{stat.label}</div>
              <div className="text-yellow-400 text-sm font-medium">{stat.hindi}</div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Karma Meter */}
        <motion.div 
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 relative overflow-hidden">
            {/* Decorative Background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/10 to-orange-400/10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold text-white text-center mb-8"
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🪔 Community Karma Level
              </motion.h3>
              
              <div className="relative">
                <div className="karma-progress-bar h-6 rounded-full bg-gray-700 overflow-hidden">
                  <motion.div 
                    className="karma-progress-fill h-full rounded-full relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '78%' } : { width: 0 }}
                    transition={{ duration: 3, delay: 1 }}
                  >
                    {/* Flowing Light Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-300">सेवा से सिद्धि</p>
                  <motion.p 
                    className="text-yellow-400 font-bold"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Growing stronger together
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;
