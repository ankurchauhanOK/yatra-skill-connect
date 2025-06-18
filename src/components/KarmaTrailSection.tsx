
import React from 'react';
import { ArrowRight, Play, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const KarmaTrailSection = () => {
  const changemakers = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Education Volunteer',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop',
      story: 'Teaching 50+ children in remote villages',
      duration: '6 months',
      impact: '200+ lives touched',
      rating: 4.9,
      videoUrl: 'https://example.com/video1' // Placeholder for future video integration
    },
    {
      id: 2,
      name: 'Arjun Patel',
      role: 'Sustainable Farming',
      location: 'Gujarat',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      story: 'Introducing organic farming techniques',
      duration: '4 months',
      impact: '15 farms transformed',
      rating: 4.8,
      videoUrl: 'https://example.com/video2'
    },
    {
      id: 3,
      name: 'Kavya Reddy',
      role: 'Women Empowerment',
      location: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      story: 'Building self-help groups for rural women',
      duration: '8 months',
      impact: '100+ women empowered',
      rating: 5.0,
      videoUrl: 'https://example.com/video3'
    },
    {
      id: 4,
      name: 'Rahul Singh',
      role: 'Healthcare Volunteer',
      location: 'Uttarakhand',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      story: 'Mobile health camps in mountain villages',
      duration: '5 months',
      impact: '500+ health checkups',
      rating: 4.9,
      videoUrl: 'https://example.com/video4'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Floating karma icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 text-2xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          🪔
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-32 text-xl opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        >
          ✨
        </motion.div>
      </div>

      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 text-3xl"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <h2 className="section-title text-gray-900 mb-4">Karma Trail</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Watch the inspiring journeys of changemakers creating real impact across India
          </p>
          <p className="text-base text-blue-600 mt-2 font-bold hindi-text">
            प्रेरणादायक यात्राएं
          </p>
        </motion.div>

        {/* Video Reel Style Carousel */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {changemakers.map((person, index) => (
              <motion.div
                key={person.id}
                className="flex-shrink-0 w-80 group cursor-pointer snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="yatra-card overflow-hidden relative bg-white shadow-lg border border-gray-100">
                  {/* Video Thumbnail with Play Overlay */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <motion.img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Enhanced Play Button */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm border-2 border-white/50">
                        <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                      </div>
                    </motion.div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1 shadow-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-semibold text-gray-800">{person.rating}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1.5 shadow-sm">
                      <span className="text-xs font-semibold">{person.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">{person.location}</span>
                    </div>
                    
                    <h3 className="card-title mb-2 text-gray-900">{person.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">{person.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{person.story}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600">{person.impact}</span>
                      <motion.button 
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Journey</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {changemakers.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full transition-colors duration-300"
                initial={{ backgroundColor: "#D1D5DB" }}
                whileInView={{ backgroundColor: "#3B82F6" }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="yatra-btn-primary ripple-effect"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            🎥 Explore All Stories
            <ArrowRight className="ml-3 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KarmaTrailSection;
