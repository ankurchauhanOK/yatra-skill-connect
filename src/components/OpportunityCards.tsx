
import React from 'react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

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
    },
  ];

  return (
    <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Explore Volunteer Opportunities</h2>
          <p className="text-xl text-gray-600">Discover meaningful projects across India</p>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['All Skills', 'Teaching', 'Technology', 'Arts', 'Healthcare', 'Environment'].map((filter) => (
              <button key={filter} className="skill-badge hover:scale-105 transition-all">
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="yatra-card group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-150${opportunity.id}${opportunity.id}${opportunity.id}${opportunity.id}-4008-3008?w=400&h=250&fit=crop`}
                  alt={opportunity.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-3 right-3">
                  <div className="skill-badge bg-white text-forest-green font-semibold">
                    {opportunity.karma} Karma
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={opportunity.hostImage}
                  alt={opportunity.hostName}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{opportunity.hostName}</h3>
                  <div className="trust-indicator">
                    <span className="text-xs">Verified Host</span>
                  </div>
                </div>
              </div>
              
              <h4 className="card-title mb-2 text-gray-900">{opportunity.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{opportunity.description}</p>
              
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{opportunity.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="skill-badge">{opportunity.skill}</div>
                <button className="yatra-btn-accent text-sm px-4 py-2 group-hover:scale-105 transition-all">
                  Apply Now
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="yatra-btn-primary">
            View All Opportunities
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCards;
