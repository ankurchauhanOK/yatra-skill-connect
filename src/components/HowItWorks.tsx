
import React from 'react';
import { UserPlus, Search, Send, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Create your profile and showcase your skills',
      icon: UserPlus,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '2',
      title: 'Browse Opportunities',
      description: 'Find volunteer projects that match your passion',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '3',
      title: 'Apply to Volunteer',
      description: 'Connect with verified hosts and apply',
      icon: Send,
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '4',
      title: 'Share Your Skills',
      description: 'Travel, volunteer, and create lasting impact',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-4">How YatraConnect Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to start your meaningful journey across India
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group scroll-reveal">
              <div className="yatra-card text-center relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sage-green to-forest-green flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
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
  );
};

export default HowItWorks;
