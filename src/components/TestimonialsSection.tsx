
import React from 'react';
import { Star, Award } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Graphic Designer',
      location: 'Mumbai → Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=80&h=80&fit=crop&crop=face',
      story: 'Working with local artisans in Himachal was life-changing. I helped design packaging for their honey products, and they taught me traditional crafts. The connections I made will last a lifetime.',
      rating: 5,
      badge: 'Top Volunteer',
      karma: 850,
    },
    {
      name: 'Arjun Patel',
      role: 'Software Developer',
      location: 'Bangalore → Rajasthan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      story: 'I built a digital inventory system for a rural cooperative. Seeing farmers track their produce digitally for the first time was incredibly rewarding. Rural India has so much potential!',
      rating: 5,
      badge: 'Tech Pioneer',
      karma: 920,
    },
    {
      name: 'Sneha Das',
      role: 'Teacher',
      location: 'Delhi → West Bengal',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      story: 'Teaching English to village children was pure joy. Their enthusiasm and curiosity reminded me why I became a teacher. I learned as much from them as they did from me.',
      rating: 5,
      badge: 'Education Champion',
      karma: 760,
    },
    {
      name: 'Vikram Singh',
      role: 'Photographer',
      location: 'Chennai → Kerala',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      story: 'Documenting traditional fishing methods in Kerala was amazing. I created a photo series that the community now uses to promote eco-tourism. Art truly can create change.',
      rating: 5,
      badge: 'Culture Keeper',
      karma: 680,
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Stories from Our Volunteers</h2>
          <p className="text-xl text-gray-600">Real experiences from changemakers across India</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="yatra-card group cursor-pointer h-full">
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="skill-badge text-xs bg-terracotta text-white border-terracotta">
                      <Award className="w-3 h-3 mr-1" />
                      {testimonial.badge}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                <p className="text-xs text-gray-500 mb-4">{testimonial.location}</p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-gray-700 italic leading-relaxed mb-4">
                  "{testimonial.story}"
                </p>
                
                <div className="karma-glow text-center text-sm">
                  {testimonial.karma} Karma Points
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="yatra-btn-secondary">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
