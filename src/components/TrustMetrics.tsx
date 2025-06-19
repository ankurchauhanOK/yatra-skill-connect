import React from 'react';
import { Users, MapPin, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import WaterDroplet from './animations/WaterDroplet';

const TrustMetrics = () => {
  const metrics = [
    { icon: Users, label: 'Active Volunteers', value: '2,500+', color: 'text-blue-600' },
    { icon: MapPin, label: 'Villages Connected', value: '150+', color: 'text-green-600' },
    { icon: Award, label: 'Projects Completed', value: '500+', color: 'text-orange-600' },
    { icon: Heart, label: 'Lives Impacted', value: '25,000+', color: 'text-red-600' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Water droplet effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20">
          <WaterDroplet size="sm" color="rgba(112, 181, 230, 0.6)" delay={0} />
        </div>
        <div className="absolute bottom-20 right-20">
          <WaterDroplet size="md" color="rgba(232, 185, 81, 0.5)" delay={2} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <WaterDroplet size="lg" color="rgba(112, 181, 230, 0.3)" delay={1} />
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-20 w-24 h-24 bg-green-400/10 rounded-full blur-2xl"
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Collective Karma</h2>
          <p className="text-base text-gray-300">Building a movement of positive change across India</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Ripple effect on stat reveal */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ 
                  scale: [0, 2, 0],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut"
                }}
                style={{
                  background: `radial-gradient(circle, rgba(112, 181, 230, 0.2) 0%, transparent 70%)`
                }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </motion.div>
              
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {metric.value}
              </motion.div>
              
              <p className="text-gray-300 text-sm">{metric.label}</p>
              
              {/* Small droplet animation on hover */}
              <motion.div
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              >
                <WaterDroplet size="sm" color="rgba(112, 181, 230, 0.8)" delay={0} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
