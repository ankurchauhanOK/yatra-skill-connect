
import React from 'react';
import { Heart, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Connections',
      description: 'Real relationships between volunteers and communities'
    },
    {
      icon: Users,
      title: 'Skill Sharing',
      description: 'Meaningful exchange of knowledge and expertise'
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'Connecting urban youth with rural wisdom'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-gray-900 mb-6">About YatraConnect</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe in the power of meaningful travel. YatraConnect bridges the gap between 
              India's talented youth and rural communities that need their skills.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by changemakers who experienced firsthand how skill-sharing can transform 
              both volunteers and communities, we've created a platform where authentic connections 
              flourish and real impact happens.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" 
                         style={{ background: 'hsl(var(--sage-green))' }}>
                      <value.icon className="w-6 h-6" style={{ color: 'hsl(var(--forest-green))' }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl" style={{ background: 'hsl(var(--soft-sand))' }}>
              <p className="text-sm text-gray-700 italic">
                "Backed by changemakers, built by youth, trusted by communities across India."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
              alt="Young volunteers working with rural community"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-xl opacity-30" 
                 style={{ background: 'hsl(var(--terracotta))' }}></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-30" 
                 style={{ background: 'hsl(var(--sage-green))' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
