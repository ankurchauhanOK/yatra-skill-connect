import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import WaterDroplet from './animations/WaterDroplet';
import RippleEffect from './animations/RippleEffect';
import KarmaOrb from './animations/KarmaOrb';
import WaterTransition from './animations/WaterTransition';

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
        
        {/* Water Droplet Elements */}
        <div className="absolute top-20 right-20">
          <WaterDroplet size="md" color="#70B5E6" delay={0} />
        </div>
        
        <div className="absolute bottom-32 left-20">
          <WaterDroplet size="sm" color="#E8B951" delay={2} />
        </div>
        
        <div className="absolute top-40 left-1/3">
          <WaterDroplet size="lg" color="rgba(112, 181, 230, 0.6)" delay={1} />
        </div>
        
        {/* Floating Karma Orb */}
        <div className="absolute top-32 right-1/3 hidden lg:block">
          <KarmaOrb size={60} intensity={0.8} />
        </div>
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
                <RippleEffect color="rgba(255, 193, 7, 0.3)" size={120}>
                  <motion.button 
                    className="yatra-btn-compact bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg ripple-effect pulse-gentle group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🌿 Start Your Yatra
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </RippleEffect>
              </Link>
              <Link to="/host">
                <RippleEffect color="rgba(112, 181, 230, 0.2)" size={100}>
                  <motion.button 
                    className="yatra-btn-compact border-2 border-white text-white hover:bg-white hover:text-gray-900 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🌾 Host a Change-Maker
                  </motion.button>
                </RippleEffect>
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

      {/* Water Transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <WaterTransition />
      </div>
    </section>
  );
};

export default HeroSection;
