
import React from 'react';
import { Users, MapPin, CheckCircle, Award } from 'lucide-react';

const TrustMetrics = () => {
  const stats = [
    { 
      icon: Users, 
      value: '2,847', 
      label: 'Active Volunteers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    { 
      icon: MapPin, 
      value: '150+', 
      label: 'Host Communities',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    { 
      icon: CheckCircle, 
      value: '5,623', 
      label: 'Projects Completed',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    { 
      icon: Award, 
      value: '28', 
      label: 'States Covered',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title text-gray-900 mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">Real impact across India</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${stat.bgColor}`}>
                <stat.icon className={`w-10 h-10 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
