
import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const OpportunityCards = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Teach Digital Skills',
      location: 'Udaipur, Rajasthan',
      duration: '2-4 weeks',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
      description: 'Help local artisans digitize their craft business',
      skills: ['Teaching', 'Technology'],
      participants: 12,
      rating: 4.8,
      urgency: 'High'
    },
    {
      id: 2,
      title: 'Sustainable Farming',
      location: 'Coorg, Karnataka',
      duration: '1-2 months',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=300&fit=crop',
      description: 'Introduce organic farming techniques to coffee growers',
      skills: ['Agriculture', 'Environment'],
      participants: 8,
      rating: 4.9,
      urgency: 'Medium'
    },
    {
      id: 3,
      title: 'Healthcare Support',
      location: 'Dharamshala, Himachal Pradesh',
      duration: '3-6 weeks',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      description: 'Support rural health camps and wellness programs',
      skills: ['Healthcare', 'Community'],
      participants: 15,
      rating: 5.0,
      urgency: 'High'
    },
    {
      id: 4,
      title: 'Women Empowerment',
      location: 'Pushkar, Rajasthan',
      duration: '4-8 weeks',
      image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&h=300&fit=crop',
      description: 'Build self-help groups and skill development programs',
      skills: ['Training', 'Empowerment'],
      participants: 10,
      rating: 4.7,
      urgency: 'Medium'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Find Where You're Needed Most</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Real opportunities to make a difference in rural communities
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="yatra-card overflow-hidden h-full bg-white shadow-sm border border-gray-100">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold">{opportunity.rating}</span>
                  </div>
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                    opportunity.urgency === 'High' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    {opportunity.urgency} Need
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{opportunity.location}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 text-center">{opportunity.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 text-center">{opportunity.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{opportunity.participants} volunteers</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="w-full text-center py-2 px-3 text-xs font-semibold text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-400 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Apply for Seva</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:shadow-lg transition-all duration-300 ripple-effect"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            🌍 Explore All Opportunities
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunityCards;
