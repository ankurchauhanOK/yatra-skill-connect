
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Filter, Search, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const skills = ['Web Development', 'Graphic Design', 'Photography', 'Teaching', 'Marketing', 'Content Writing'];
  const states = ['Himachal Pradesh', 'Rajasthan', 'Kerala', 'West Bengal', 'Uttarakhand', 'Goa'];

  const opportunities = [
    {
      id: 1,
      title: 'Design Marketing Materials for Eco-Tourism',
      host: 'Green Valley Resort',
      location: 'Manali, Himachal Pradesh',
      duration: '2-3 weeks',
      skills: ['Graphic Design', 'Photography'],
      description: 'Help create stunning visuals for our sustainable tourism initiative in the Himalayas.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      karma: 150,
      reviews: 4.8,
      reviewCount: 12,
      verified: true,
      accommodation: 'Private room in eco-lodge',
      meals: 'Traditional Himachali cuisine',
      startDate: 'March 2024',
    },
    {
      id: 2,
      title: 'Build E-commerce Platform for Artisans',
      host: 'Rajasthan Craft Collective',
      location: 'Jodhpur, Rajasthan',
      duration: '3-4 weeks',
      skills: ['Web Development', 'Marketing'],
      description: 'Create an online marketplace for local artisans to sell their handcrafted products globally.',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73bb9?w=400&h=250&fit=crop',
      karma: 200,
      reviews: 4.9,
      reviewCount: 8,
      verified: true,
      accommodation: 'Shared accommodation with other volunteers',
      meals: 'Authentic Rajasthani thali',
      startDate: 'April 2024',
    },
    {
      id: 3,
      title: 'Document Traditional Fishing Practices',
      host: 'Coastal Heritage Foundation',
      location: 'Kochi, Kerala',
      duration: '2 weeks',
      skills: ['Photography', 'Content Writing'],
      description: 'Create a visual documentary showcasing traditional fishing methods of Kerala backwaters.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop',
      karma: 120,
      reviews: 4.7,
      reviewCount: 15,
      verified: true,
      accommodation: 'Homestay with fishing family',
      meals: 'Fresh seafood and Kerala cuisine',
      startDate: 'May 2024',
    },
    {
      id: 4,
      title: 'Teach Digital Skills to Rural Youth',
      host: 'Digital India Initiative',
      location: 'Darjeeling, West Bengal',
      duration: '4-6 weeks',
      skills: ['Teaching', 'Web Development'],
      description: 'Empower local youth with digital literacy and basic programming skills.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      karma: 250,
      reviews: 4.9,
      reviewCount: 20,
      verified: true,
      accommodation: 'Volunteer dormitory',
      meals: 'Bengali and Tibetan cuisine',
      startDate: 'June 2024',
    },
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = !selectedSkill || opp.skills.includes(selectedSkill);
    const matchesState = !selectedState || opp.location.includes(selectedState);
    
    return matchesSearch && matchesSkill && matchesState;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Opportunities</h1>
          <p className="text-xl text-gray-600">Find meaningful projects that match your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Skills</option>
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All States</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredOpportunities.length} opportunities found
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="card-hover overflow-hidden">
              <div className="relative">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                {opportunity.verified && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      ✓ Verified Host
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {opportunity.title}
                  </h3>
                  <div className="karma-glow text-sm font-bold">
                    +{opportunity.karma} Karma
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{opportunity.reviews} ({opportunity.reviewCount})</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  <p><strong>Stay:</strong> {opportunity.accommodation}</p>
                  <p><strong>Food:</strong> {opportunity.meals}</p>
                  <p><strong>Starts:</strong> {opportunity.startDate}</p>
                </div>
                
                <div className="flex space-x-3">
                  <Link to={`/opportunity/${opportunity.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
