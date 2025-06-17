
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import KarmaTrailSection from '@/components/KarmaTrailSection';
import HowItWorks from '@/components/HowItWorks';
import OpportunityCards from '@/components/OpportunityCards';
import BecomeHostSection from '@/components/BecomeHostSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TrustMetrics from '@/components/TrustMetrics';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.scroll-reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroSection />
      <KarmaTrailSection />
      <HowItWorks />
      <OpportunityCards />
      <BecomeHostSection />
      <TestimonialsSection />
      <TrustMetrics />
      <AboutSection />
      <FAQSection />

      {/* Enhanced Final CTA Section */}
      <motion.section 
        className="section-padding yatra-earth-gradient relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container-max relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="section-title mb-8 text-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Journey Awaits
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 text-gray-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Not all who wander are lost — some just find a deeper meaning.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/browse">
                <motion.button 
                  className="yatra-btn-primary bg-white text-gray-900 hover:bg-gray-100 ripple-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎒 Begin Your Yatra Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.button>
              </Link>
              <Link to="/host">
                <motion.button 
                  className="yatra-btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌾 List Your Project
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-300 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Join thousands of changemakers making a difference across India
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
