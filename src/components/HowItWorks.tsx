
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

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 relative overflow-hidden">
      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Your Journey to Service</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2">
            Four simple steps on the path to meaningful change
          </p>
          <div 
            className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 px-4 py-1 rounded-full shadow-sm"
            style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
          >
            <p className="text-base font-bold text-white">
              यात्रा से सेवा तक
            </p>
          </div>
        </motion.div>
        
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="yatra-card text-center relative overflow-hidden bg-white/90 backdrop-blur-sm h-56 p-4"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-white font-bold text-xs">{step.step}</span>
                  </motion.div>

                  <h3 className="text-base font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <div 
                    className="bg-orange-100 px-2 py-1 rounded-full mb-3 inline-block"
                    style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
                  >
                    <p className="text-sm font-bold text-orange-700">{step.hindi}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-3">Ready to walk the path of service?</p>
          <motion.button 
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg transition-all duration-300 ripple-effect"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            🎒 Begin Your Seva Yatra
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
