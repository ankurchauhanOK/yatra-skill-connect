
import React from 'react';
import { Shield, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

const BecomeHostSection = () => {
  const benefits = [
    { icon: Shield, title: 'Verified Host Badge', description: 'Gain credibility in our community' },
    { icon: Award, title: 'Karma Recognition', description: 'Build your impact profile' },
    { icon: Users, title: 'Skill Exchange', description: 'No cost, just knowledge sharing' },
  ];

  const steps = [
    {
      number: '1',
      title: 'List Your Place & Skills Needed',
      description: 'Tell us about your community and what help you need',
    },
    {
      number: '2',
      title: 'Accept Interested Volunteers',
      description: 'Review applications and choose the right volunteers',
    },
    {
      number: '3',
      title: 'Share Knowledge & Build Community',
      description: 'Exchange skills and create lasting connections',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">Host Changemakers. Empower Your Village.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open your doors to skilled volunteers and watch your community grow
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 hover:scale-110" 
                   style={{ background: 'hsl(var(--denim-blue))' }}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="card-title mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="yatra-accent-gradient rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Host Benefits</h3>
            <p className="text-gray-100">Everything you get when you join our host community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Form Preview */}
        <div className="max-w-2xl mx-auto">
          <div className="yatra-card">
            <h3 className="card-title mb-6 text-center text-gray-900">Ready to Start Hosting?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Village/Location</label>
                <input type="text" placeholder="Enter your location" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skills Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent">
                  <option>Select skills needed</option>
                  <option>Teaching</option>
                  <option>Technology</option>
                  <option>Arts & Crafts</option>
                  <option>Healthcare</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Stay Type</label>
              <div className="grid grid-cols-3 gap-3">
                {['Private Room', 'Shared Space', 'Community Hall'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-sage-green hover:border-forest-green transition-all">
                    <input type="radio" name="stayType" className="text-forest-green" />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="yatra-btn-primary w-full md:w-auto">
                Register as a Host
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 mt-3">No cost. No stress. Only change.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeHostSection;
