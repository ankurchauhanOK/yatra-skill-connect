
import React from 'react';
import { Search, Send, Heart, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Browse Projects',
      description: 'Discover verified rural opportunities across states',
      icon: Search,
      color: 'from-green-500 to-emerald-600',
    },
    {
      step: '2',
      title: 'Apply to Volunteer',
      description: 'Submit your interest in 2 quick steps',
      icon: Send,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      step: '3',
      title: 'Get Matched',
      description: 'We connect you with hosts that fit your purpose',
      icon: UserCheck,
      color: 'from-orange-500 to-amber-600',
    },
    {
      step: '4',
      title: 'Start Your Yatra',
      description: 'Travel. Volunteer. Reflect. Repeat.',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
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
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="container-max">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to start your meaningful journey across India
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative group" variants={stepVariants}>
              <div className="yatra-card text-center relative overflow-hidden">
                {/* Dotted Path Connection */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 border-t-2 border-dotted border-gray-300 z-10"></div>
                )}
                
                <motion.div 
                  className="flex justify-center mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg sparkle">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                <h3 className="card-title mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Ready to begin your journey?</p>
          <button className="yatra-btn-accent ripple-effect">
            🎒 Begin Your Yatra Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
