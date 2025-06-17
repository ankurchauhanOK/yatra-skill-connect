
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
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        
        {/* Floating Elements - Birds and Clouds */}
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
        
        {/* Flying Bird Animation */}
        <motion.div
          className="absolute top-32 w-full h-8"
          animate={{
            x: [-100, window.innerWidth + 100]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="text-white/60 text-2xl">🕊️</div>
        </motion.div>
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
              variants={itemVariants}
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">भारत का #1 सेवा यात्रा मंच</span>
            </motion.div>

            <motion.h1 
              className="hero-title mb-8 text-glow"
              variants={itemVariants}
            >
              Travel with Purpose.<br />
              <span className="text-yellow-300">Serve with Heart.</span><br />
              Connect with Villages.
            </motion.h1>

            <motion.p 
              className="text-xl mb-10 text-gray-100 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Volunteer across Indian villages and create real change. Join hands with rural communities. Explore, volunteer, and grow on a meaningful journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <Link to="/browse">
                <motion.button 
                  className="yatra-btn-primary group ripple-effect"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(248, 203, 116, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌿 Start Your Yatra
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link to="/host">
                <motion.button 
                  className="yatra-btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌾 Host a Change-Maker
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 mt-12 text-sm text-gray-300"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
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

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center text-white/60">
                <span className="text-sm mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.div>
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
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🪔
                </motion.div>
                <h3 className="card-title mb-4 text-gray-800">Your Karma Trail</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Impact Level</span>
                    <motion.span 
                      className="font-bold text-2xl karma-glow"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Beginner
                    </motion.span>
                  </div>
                  
                  <div className="relative">
                    <div className="karma-progress-bar h-3 rounded-full">
                      <motion.div 
                        className="karma-progress-fill h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-3">यह सिर्फ सफर नहीं, एक सेवा है</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
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
