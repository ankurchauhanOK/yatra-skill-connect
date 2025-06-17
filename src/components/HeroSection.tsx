
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="relative overflow-hidden h-[75vh] flex items-center">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-white z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-semibold">भारत का #1 सेवा यात्रा मंच</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow leading-tight"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Travel with Purpose.<br />
              <span className="text-yellow-300">Serve with Heart.</span><br />
              Connect with Villages.
            </motion.h1>

            <motion.p 
              className="text-lg mb-8 text-gray-100 leading-relaxed max-w-2xl"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Volunteer across Indian villages and create real change. Join hands with rural communities. Explore, volunteer, and grow on a meaningful journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/browse">
                <motion.button 
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-xl transition-all duration-300 ripple-effect group"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(248, 203, 116, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  🌿 Start Your Yatra
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link to="/host">
                <motion.button 
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🌾 Host a Change-Maker
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-6 mt-10 text-sm text-gray-300"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>15,000+ volunteer hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>350+ yatras completed</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Karma Card */}
          <motion.div 
            className="relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="yatra-card bg-white/95 backdrop-blur-md border border-white/30"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🪔
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Karma Trail</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Impact Level</span>
                    <motion.span 
                      className="font-bold text-xl karma-glow"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Beginner
                    </motion.span>
                  </div>
                  
                  <div className="relative">
                    <div className="karma-progress-bar h-2 rounded-full">
                      <motion.div 
                        className="karma-progress-fill h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">यह सिर्फ सफर नहीं, एक सेवा है</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <motion.path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="#F9F7F4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
