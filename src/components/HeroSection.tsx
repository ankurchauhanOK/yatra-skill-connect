
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="min-h-[90vh] flex items-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
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
                Travel with Purpose.<br />
                <span className="text-yellow-300">Share Your Skills.</span><br />
                Live the Yatra.
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed max-w-lg">
                Connect with rural communities across India. Share your talents, gain authentic experiences, and create meaningful change together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse">
                  <button className="yatra-btn-primary group">
                    Explore Opportunities
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/host">
                  <button className="yatra-btn-secondary">
                    Become a Host
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="relative float-animation lg:block hidden">
              <div className="yatra-card bg-white/95 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="card-title mb-2 text-gray-800">Join 2,847+ Volunteers</h3>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 mt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Active Communities</span>
                      <span className="font-bold text-2xl text-gray-900">150+</span>
                    </div>
                    <div className="karma-progress-bar">
                      <div className="karma-progress-fill" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Across 28 Indian States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
