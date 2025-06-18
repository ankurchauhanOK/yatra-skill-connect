
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[65vh] flex items-center">
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-6 h-6 text-yellow-300 opacity-60"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.4, 0.8, 0.4] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          ✨
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-20 w-8 h-8 text-orange-300 opacity-50"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        >
          🪔
        </motion.div>
      </div>

      <div className="relative container-max">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="text-white z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-semibold hindi-text">भारत का #1 सेवा यात्रा मंच</span>
            </motion.div>

            <motion.h1 
              className="hero-title mb-5 text-glow leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Travel with Purpose.<br />
              <span className="text-yellow-300">Serve with Heart.</span><br />
              Connect with Villages.
            </motion.h1>

            <motion.p 
              className="text-base mb-6 text-gray-100 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Volunteer across Indian villages and create real change. Join hands with rural communities on a meaningful journey.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/browse">
                <motion.button 
                  className="yatra-btn-compact bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg ripple-effect pulse-gentle group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌿 Start Your Yatra
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link to="/host">
                <motion.button 
                  className="yatra-btn-compact border-2 border-white text-white hover:bg-white hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌾 Host a Change-Maker
                </motion.button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-6 mt-6 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
          
          <motion.div 
            className="relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="yatra-card bg-white/95 backdrop-blur-md border border-white/30 p-5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl mb-3"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🪔
                </motion.div>
                <h3 className="card-title mb-3 text-gray-800">Your Karma Trail</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Impact Level</span>
                    <motion.span 
                      className="font-bold text-lg karma-glow"
                      animate={{ scale: [1, 1.05, 1] }}
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
                    <p className="text-xs text-gray-600 mt-2 hindi-text">
                      यह सिर्फ सफर नहीं, एक सेवा है
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8">
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
