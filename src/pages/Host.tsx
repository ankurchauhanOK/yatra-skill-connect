
import React from 'react';
import { Shield, Award, Users, ArrowRight, CheckCircle, Heart, Star, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Host = () => {
  const benefits = [
    { icon: Shield, title: 'Verified Host Badge', description: 'Gain credibility and trust in our community' },
    { icon: Award, title: 'Karma Community Recognition', description: 'Build your impact profile and unlock rewards' },
    { icon: Users, title: 'Skill Exchange, No Cost', description: 'Access talented volunteers at zero cost' },
    { icon: Heart, title: 'Personal Growth', description: 'Learn from young changemakers and their perspectives' },
    { icon: Star, title: 'Certificate of Participation', description: 'PDF auto-generated recognition for your contribution' },
    { icon: MapPin, title: 'Personal Profile Page', description: 'Showcase your community and impact stories' },
  ];

  const hostStories = [
    {
      name: 'Rajesh Kumar',
      location: 'Udaipur, Rajasthan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      story: 'A volunteer helped me digitize my pottery shop! Now we sell handmade items online and our income has doubled.',
      impact: '5 volunteers hosted • 200% revenue increase'
    },
    {
      name: 'Priya Nair',
      location: 'Coorg, Karnataka',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=80&h=80&fit=crop&crop=face',
      story: 'Teaching volunteers showed our youth sustainable farming. Now our village is a model for eco-tourism!',
      impact: '8 volunteers hosted • Eco-tourism initiative launched'
    },
    {
      name: 'Dr. Arun Singh',
      location: 'Dharamshala, Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      story: 'Photography volunteers documented our healthcare work. The awareness campaign reached thousands!',
      impact: '3 volunteers hosted • 10,000+ people reached'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 yatra-hero-gradient">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="hero-title mb-6">
              Empower Your Village –<br />
              <span className="text-yellow-300">Host with YatraConnect</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Share your local wisdom. Let young changemakers help your community grow.
            </p>
            <button className="yatra-btn-primary bg-white text-gray-900 hover:bg-gray-100">
              Start Hosting Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Host Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Why Host with YatraConnect?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your community while building meaningful connections
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Help bridge the skill gap</h3>
                  <p className="text-gray-600">Get access to skills your community needs - from technology to creative arts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Empower youth in your area</h3>
                  <p className="text-gray-600">Create opportunities for local youth to learn from skilled volunteers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Build lifelong relationships</h3>
                  <p className="text-gray-600">Form lasting connections with passionate changemakers from across India.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No payment needed</h3>
                  <p className="text-gray-600">Just provide a place to stay and food - skills are exchanged freely.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop"
                alt="Rural community working together"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Host Benefits */}
      <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Host Benefits</h2>
            <p className="text-xl text-gray-600">Everything you get as a YatraConnect host</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="yatra-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
                     style={{ background: 'hsl(var(--sage-green))' }}>
                  <benefit.icon className="w-8 h-8" style={{ color: 'hsl(var(--forest-green))' }} />
                </div>
                <h3 className="card-title mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Registration Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">Register as a Host</h2>
              <p className="text-xl text-gray-600">Tell us about your community and how volunteers can help</p>
            </div>
            
            <div className="yatra-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Village/Location</label>
                    <input type="text" placeholder="Enter your village or town" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent">
                      <option>Select your state</option>
                      <option>Rajasthan</option>
                      <option>Himachal Pradesh</option>
                      <option>Kerala</option>
                      <option>Karnataka</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent">
                      <option>Select primary skill needed</option>
                      <option>Teaching & Education</option>
                      <option>Technology & Digital</option>
                      <option>Arts & Crafts</option>
                      <option>Healthcare & Wellness</option>
                      <option>Environment & Sustainability</option>
                      <option>Business & Marketing</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stay Type</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Private Room', 'Shared Space', 'Community Hall'].map((type) => (
                      <label key={type} className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-sage-green hover:border-forest-green transition-all">
                        <input type="radio" name="stayType" className="text-forest-green" />
                        <span className="text-sm font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration Preference</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent">
                      <option>Select duration</option>
                      <option>1 week</option>
                      <option>2 weeks</option>
                      <option>1 month</option>
                      <option>2-3 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                    <input type="tel" placeholder="WhatsApp number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your community</label>
                  <textarea 
                    rows={4}
                    placeholder="What makes your community special? What challenges do you face that volunteers could help with?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="text-center pt-6">
                  <button type="submit" className="yatra-btn-primary">
                    Register as a Host
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <p className="text-sm text-gray-500 mt-4">No cost. No stress. Only change.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Host Stories */}
      <section className="section-padding" style={{ background: 'hsl(var(--soft-sand))' }}>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Stories from Our Hosts</h2>
            <p className="text-xl text-gray-600">Real impact from communities across India</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hostStories.map((story, index) => (
              <div key={index} className="yatra-card">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{story.story}"
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding yatra-accent-gradient">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6">Ready to Transform Your Community?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of hosts who are already making a difference
          </p>
          <button className="yatra-btn-primary bg-white text-gray-900 hover:bg-gray-100">
            Register as a Host Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Host;
