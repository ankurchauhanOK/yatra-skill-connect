
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const stats = [
    { label: 'Active Yatris', value: '2,847', icon: Users },
    { label: 'Host Communities', value: '150+', icon: MapPin },
    { label: 'Projects Completed', value: '5,623', icon: CheckCircle },
    { label: 'States Covered', value: '28', icon: Star },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Browse Opportunities',
      description: 'Explore rural projects matching your skills across India',
      icon: '🔍',
    },
    {
      step: '2',
      title: 'Apply & Connect',
      description: 'Connect with verified hosts and discuss your contribution',
      icon: '🤝',
    },
    {
      step: '3',
      title: 'Travel & Contribute',
      description: 'Share your skills, gain experience, and make lasting impact',
      icon: '✨',
    },
    {
      step: '4',
      title: 'Earn Karma Points',
      description: 'Build your profile and unlock exclusive opportunities',
      icon: '🏆',
    },
  ];

  const featuredStories = [
    {
      name: 'Priya Sharma',
      skill: 'Graphic Design',
      location: 'Himachal Pradesh',
      story: 'Helped a mountain village create their first tourism brochure',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=150&h=150&fit=crop&crop=face',
      karma: 850,
    },
    {
      name: 'Arjun Patel',
      skill: 'Web Development',
      location: 'Rajasthan',
      story: 'Built an e-commerce platform for local artisans',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      karma: 920,
    },
    {
      name: 'Sneha Das',
      skill: 'Photography',
      location: 'West Bengal',
      story: 'Documented traditional crafts for cultural preservation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      karma: 760,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Travel India.<br />
                  Share Skills.<br />
                  <span className="text-yellow-300">Make an Impact.</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  Connect with rural communities, offer your expertise, and discover authentic India through meaningful volunteer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/browse">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      Explore Projects
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                  >
                    Become a Host
                  </Button>
                </div>
              </div>
              <div className="relative float-animation">
                <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🌟</div>
                    <h3 className="text-2xl font-bold mb-2">Featured This Week</h3>
                    <div className="bg-white/20 rounded-lg p-4 mt-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=50&h=50&fit=crop&crop=face" 
                          alt="Featured volunteer" 
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="text-left">
                          <p className="font-semibold">Priya Sharma</p>
                          <p className="text-sm text-gray-200">Graphic Designer</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-200">
                        "Transformed a village's tourism identity through beautiful design"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How YatraConnect Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of skilled travelers making meaningful impact across rural India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories from the Field</h2>
            <p className="text-xl text-gray-600">Real impact from our amazing community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <div className="skill-badge">{story.skill}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{story.location}</span>
                    </div>
                    <div className="karma-glow font-bold">
                      {story.karma} Karma
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Yatra?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of travelers making a difference across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Find Your First Project
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
            >
              Host a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
