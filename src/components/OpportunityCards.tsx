
import React from 'react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OpportunityCards = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Digital Literacy for Artisans',
      location: 'Udaipur, Rajasthan',
      skill: 'Web Development',
      duration: '2 weeks',
      hostImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      hostName: 'Rajesh Kumar',
      description: 'Help traditional craftsmen create online presence for their handmade products',
      karma: 120,
      verified: true,
      hindi: 'डिजिटल साक्षरता',
      bgImage: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Environmental Education Program',
      location: 'Coorg, Karnataka',
      skill: 'Teaching',
      duration: '3 weeks',
      hostImage: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=60&h=60&fit=crop&crop=face',
      hostName: 'Priya Nair',
      description: 'Teach sustainable farming practices to local youth and farmers',
      karma: 150,
      verified: true,
      hindi: 'पर्यावरण शिक्षा',
      bgImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Rural Healthcare Documentation',
      location: 'Dharamshala, Himachal Pradesh',
      skill: 'Photography',
      duration: '1 week',
      hostImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      hostName: 'Dr. Arun Singh',
      description: 'Document healthcare initiatives and create awareness materials',
      karma: 100,
      verified: true,
      hindi: 'स्वास्थ्य प्रलेखन',
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"
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
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
          <motion.div
            className="text-5xl mb-6"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🗺️
          </motion.div>
          <h2 className="section-title text-gray-900 mb-6">Find Where You're Needed Most</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            From teaching in hill schools to building compost pits in deserts — choose how you want to help
          </p>
          <p className="text-green-600 font-medium">अपना योगदान चुनें</p>
          
          {/* Enhanced Filter Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: 'All Skills', emoji: '🌟' },
              { name: 'Environment', emoji: '🌱' },
              { name: 'Education', emoji: '📚' },
              { name: 'Health', emoji: '🏥' },
              { name: 'Technology', emoji: '💻' },
              { name: 'Arts', emoji: '🎨' }
            ].map((filter, index) => (
              <motion.button 
                key={filter.name} 
                className="skill-badge hover:scale-105 transition-all bg-white/80 backdrop-blur-sm border border-green-200"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "hsl(var(--forest-green))",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="mr-2">{filter.emoji}</span>
                {filter.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {opportunities.map((opportunity, index) => (
            <motion.div 
              key={opportunity.id} 
              className="group cursor-pointer"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="yatra-card overflow-hidden relative">
                {/* Image with Overlay */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.img 
                    src={opportunity.bgImage}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Karma Badge */}
                  <motion.div 
                    className="absolute top-3 right-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="skill-badge bg-white/90 text-green-700 font-semibold backdrop-blur-sm">
                      ✨ {opportunity.karma} Karma
                    </div>
                  </motion.div>
                  
                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm text-gray-700">
                      <MapPin className="w-3 h-3" />
                      <span>{opportunity.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Host Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <motion.img 
                    src={opportunity.hostImage}
                    alt={opportunity.hostName}
                    className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{opportunity.hostName}</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">Verified Host</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="card-title mb-2 text-gray-900">{opportunity.title}</h4>
                <p className="text-sm text-green-600 font-medium mb-3">{opportunity.hindi}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{opportunity.description}</p>
                
                {/* Duration */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.duration}</span>
                  </div>
                  <div className="skill-badge text-xs">{opportunity.skill}</div>
                </div>
                
                {/* CTA */}
                <motion.button 
                  className="yatra-btn-accent w-full group flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(168, 109, 63, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for Seva
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -left-2 text-yellow-400 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="yatra-btn-primary group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(76, 107, 60, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            🌍 Explore All Opportunities
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
          <p className="text-gray-500 mt-4 text-sm">सभी अवसर देखें • Find your calling</p>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <motion.path 
            d="M0,60L48,56C96,52,192,44,288,48C384,52,480,68,576,72C672,76,768,68,864,60C960,52,1056,44,1152,48L1200,52V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V60Z" 
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

export default OpportunityCards;
