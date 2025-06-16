
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import OpportunityCards from '@/components/OpportunityCards';
import BecomeHostSection from '@/components/BecomeHostSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustMetrics from '@/components/TrustMetrics';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <HowItWorks />
      <OpportunityCards />
      <BecomeHostSection />
      <TestimonialsSection />
      <TrustMetrics />
      <AboutSection />
      <FAQSection />

      {/* Final CTA Section */}
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
                  Start Your Yatra
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/host">
                <button className="yatra-btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                  Empower Your Community
                </button>
              </Link>
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
