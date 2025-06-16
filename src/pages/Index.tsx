
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Clock, Star, ArrowRight, CheckCircle, Heart, Award, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Active Yatris', value: '2,847', icon: Users, color: 'text-blue-600' },
    { label: 'Host Communities', value: '150+', icon: MapPin, color: 'text-green-600' },
    { label: 'Projects Completed', value: '5,623', icon: CheckCircle, color: 'text-orange-600' },
    { label: 'States Covered', value: '28', icon: Star, color: 'text-purple-600' },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Find Your Match',
      description: 'Browse verified opportunities that match your skills across rural India',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '2',
      title: 'Connect & Apply',
      description: 'Chat with verified hosts and discuss how you can contribute meaningfully',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '3',
      title: 'Travel & Impact',
      description: 'Share your skills, immerse in local culture, and create lasting change',
      icon: '✨',
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '4',
      title: 'Earn Recognition',
      description: 'Build your karma profile and unlock exclusive volunteer opportunities',
      icon: '🏆',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const featuredStories = [
    {
      name: 'Priya Sharma',
      skill: 'Graphic Design',
      location: 'Himachal Pradesh',
      story: 'Transformed a mountain village tourism identity through beautiful design and local storytelling',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=300&h=300&fit=crop&crop=face',
      karma: 850,
      badge: 'Design Maven',
      impact: 'Helped 5 local businesses',
    },
    {
      name: 'Arjun Patel',
      skill: 'Web Development',
      location: 'Rajasthan',
      story: 'Built a comprehensive e-commerce platform connecting local artisans to global markets',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      karma: 920,
      badge: 'Tech Pioneer',
      impact: 'Connected 20+ artisans online',
    },
    {
      name: 'Sneha Das',
      skill: 'Photography',
      location: 'West Bengal',
      story: 'Documented traditional crafts and cultural heritage for future generations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      karma: 760,
      badge: 'Culture Keeper',
      impact: 'Preserved 15 craft stories',
    },
  ];

  const trustIndicators = [
    { icon: Heart, title: 'No Hidden Fees', description: 'Completely free for volunteers' },
    { icon: Award, title: 'Verified Hosts', description: 'All hosts background checked' },
    { icon: Globe, title: 'Real Impact', description: 'Measurable community change' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="yatra-hero-gradient min-h-[90vh] flex items-center relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
            backgroundPosition: `center ${scrollY * 0.5}px`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="relative container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white fade-in-up">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">India's #1 Skill-for-Stay Platform</span>
                </div>
                <h1 className="hero-title mb-6">
                  Travel Meaningfully.<br />
                  <span className="text-yellow-300">Volunteer Freely.</span><br />
                  Connect Deeply.
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed max-w-lg">
                  Join a community of skilled travelers making meaningful impact across rural India through authentic volunteer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/browse">
                    <button className="yatra-btn-primary group">
                      Explore Opportunities
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <button className="yatra-btn-secondary">
                    Become a Host
                  </button>
                </div>
                
                {/* Trust indicators mini */}
                <div className="flex items-center space-x-6 mt-8 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Verified Hosts</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span>Zero Fees</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span>Real Impact</span>
                  </div>
                </div>
              </div>
              
              {/* Featured Story Card */}
              <div className="relative float-animation lg:block hidden">
                <div className="yatra-card bg-white/95 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌟</div>
                    <h3 className="card-title mb-2 text-gray-800">Featured This Week</h3>
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 mt-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=60&h=60&fit=crop&crop=face" 
                          alt="Featured volunteer" 
                          className="w-14 h-14 rounded-full border-2 border-white shadow-sm"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-gray-800">Priya Sharma</p>
                          <div className="skill-badge">Graphic Designer</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 italic">
                        "Transformed a village's tourism identity through beautiful design and storytelling"
                      </p>
                      <div className="karma-glow text-center mt-3">
                        850 Karma Points ⭐
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  index === 0 ? 'bg-blue-100' :
                  index === 1 ? 'bg-green-100' :
                  index === 2 ? 'bg-orange-100' : 'bg-purple-100'
                }`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 mb-4">Why Choose YatraConnect?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands who've discovered meaningful travel through skill sharing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustIndicators.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 group-hover:scale-110" 
                     style={{ background: 'hsl(var(--sage-green))' }}>
                  <item.icon className="w-8 h-8" style={{ color: 'hsl(var(--forest-green))' }} />
                </div>
                <h3 className="card-title mb-2" style={{ color: 'hsl(var(--forest-green))' }}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">How YatraConnect Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to start your meaningful journey across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative group">
                <div className="yatra-card text-center relative overflow-hidden">
                  <div className="text-5xl mb-6">{step.icon}</div>
                  <div className={`absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="card-title mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Stories from the Field</h2>
            <p className="text-xl text-gray-600">Real impact from our incredible community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div key={index} className="yatra-card group cursor-pointer">
                <div className="relative mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="skill-badge text-xs">{story.badge}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="card-title mb-1 text-gray-900">{story.name}</h3>
                  <div className="skill-badge mb-3">{story.skill}</div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">"{story.story}"</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{story.location}</span>
                    </div>
                    <div className="karma-glow text-sm">
                      {story.karma} Karma
                    </div>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-500">
                    {story.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding yatra-accent-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="section-title mb-6">
              Ready to Start Your Yatra?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of travelers making a difference across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse">
                <button className="yatra-btn-primary bg-white text-gray-900 hover:bg-gray-100">
                  Find Your First Project
                </button>
              </Link>
              <button className="yatra-btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                Host a Volunteer
              </button>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
