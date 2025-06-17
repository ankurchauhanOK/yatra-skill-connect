
import React from 'react';
import { Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Graphic Designer',
      location: 'Mumbai → Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=80&h=80&fit=crop&crop=face',
      story: 'Working with local artisans in Himachal was life-changing. I helped design packaging for their honey products, and they taught me traditional crafts.',
      rating: 5,
      badge: 'Top Volunteer',
      karma: 850,
      skills: ['Design', 'Crafts']
    },
    {
      name: 'Arjun Patel',
      role: 'Software Developer',
      location: 'Bangalore → Rajasthan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      story: 'I built a digital inventory system for a rural cooperative. Seeing farmers track their produce digitally for the first time was incredibly rewarding.',
      rating: 5,
      badge: 'Tech Pioneer',
      karma: 920,
      skills: ['Technology', 'Agriculture']
    },
    {
      name: 'Sneha Das',
      role: 'Teacher',
      location: 'Delhi → West Bengal',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      story: 'Teaching English to village children was pure joy. Their enthusiasm and curiosity reminded me why I became a teacher.',
      rating: 5,
      badge: 'Education Champion',
      karma: 760,
      skills: ['Teaching', 'Language']
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Stories from Our Volunteers</h2>
          <p className="text-base text-gray-600">Real experiences from changemakers across India</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="yatra-card h-full bg-white shadow-sm border border-gray-100 relative overflow-hidden">
                {/* Polaroid-style layout */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                      />
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mt-3 mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mb-3">{testimonial.location}</p>
                    
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-4 text-center">
                    "{testimonial.story}"
                  </p>
                  
                  {/* Skills moved to bottom */}
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {testimonial.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-100 rounded-full">
                      <Award className="w-3 h-3 text-orange-600" />
                      <span className="text-xs font-semibold text-orange-700">{testimonial.badge}</span>
                    </div>
                    <div className="karma-glow text-center text-sm mt-2">
                      {testimonial.karma} Karma Points
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
