
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
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
              <span className="text-sm font-semibold">India's #1 Purpose-Driven Travel Platform</span>
            </motion.div>

            <motion.h1 
              className="hero-title mb-8 text-glow"
              variants={itemVariants}
            >
              Travel with Purpose.<br />
              <span className="text-yellow-300">Connect with Villages.</span><br />
              Create Change.
            </motion.h1>

            <motion.p 
              className="text-xl mb-10 text-gray-100 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Join hands with rural communities across India. Explore, volunteer, and grow on a meaningful journey that changes lives — including yours.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <Link to="/browse">
                <button className="yatra-btn-primary group ripple-effect">
                  🌿 Start Your Yatra
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
              <Link to="/host">
                <button className="yatra-btn-secondary">
                  🌾 List Your Project
                </button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 mt-12 text-sm text-gray-300"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>900+ Volunteers</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>350+ Villages</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Karma Card */}
          <motion.div 
            className="relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="yatra-card bg-white/95 backdrop-blur-md border border-white/30 floating-animation">
              <div className="text-center">
                <div className="text-6xl mb-6">🕯️</div>
                <h3 className="card-title mb-4 text-gray-800">Your Karma Trail So Far</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Impact Level</span>
                    <span className="font-bold text-2xl karma-glow">Beginner</span>
                  </div>
                  
                  <div className="relative">
                    <div className="karma-progress-bar h-3 rounded-full">
                      <motion.div 
                        className="karma-progress-fill h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 2, delay: 1 }}
                      ></motion.div>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">Light the way for others</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full wavy-divider"></div>
    </section>
  );
};

export default HeroSection;
