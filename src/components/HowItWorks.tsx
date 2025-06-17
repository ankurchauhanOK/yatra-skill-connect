
import React from 'react';
import { Search, Send, Heart, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Discover Your Calling',
      description: 'Browse verified rural opportunities across states',
      icon: Search,
      color: 'from-green-500 to-emerald-600',
      hindi: 'अपना रास्ता खोजें'
    },
    {
      step: '2',
      title: 'Apply with Heart',
      description: 'Submit your interest in 2 quick steps',
      icon: Send,
      color: 'from-blue-500 to-cyan-600',
      hindi: 'दिल से आवेदन करें'
    },
    {
      step: '3',
      title: 'Get Matched',
      description: 'We connect you with hosts that fit your purpose',
      icon: UserCheck,
      color: 'from-orange-500 to-amber-600',
      hindi: 'सही जगह मिलें'
    },
    {
      step: '4',
      title: 'Begin Your Seva',
      description: 'Travel. Volunteer. Reflect. Transform.',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      hindi: 'सेवा की शुरुआत'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 relative overflow-hidden h-screen flex items-center">
      {/* Clay Texture Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/50 to-yellow-100/50"></div>
        <motion.div 
          className="absolute top-20 right-20 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-max relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Journey to Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Four simple steps on the path to meaningful change
          </p>
          <p className="text-lg font-bold text-orange-600 mt-2" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
            यात्रा से सेवा तक
          </p>
        </motion.div>
        
        {/* Timeline Path */}
        <div className="relative">
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-yellow-300 to-orange-300 rounded-full transform -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group" 
                variants={stepVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className="yatra-card text-center relative overflow-hidden bg-white/90 backdrop-blur-sm h-64"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex justify-center mb-6 mt-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-orange-600 font-bold mb-3" style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}>
                    {step.hindi}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm px-2">{step.description}</p>

                  {/* Hover Effect Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 rounded-2xl"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Ready to walk the path of service?</p>
          <motion.button 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-xl transition-all duration-300 ripple-effect"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(248, 203, 116, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            🎒 Begin Your Seva Yatra
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <motion.path 
            d="M0,60L48,65C96,70,192,80,288,75C384,70,480,50,576,45C672,40,768,50,864,55C960,60,1056,60,1152,65L1200,70V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V60Z" 
            fill="#FFFFFF"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
