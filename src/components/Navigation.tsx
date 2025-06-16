
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, MapPin, Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Browse', href: '/browse', icon: MapPin },
    { name: 'Community', href: '/community', icon: MessageCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--forest-green)), hsl(var(--mustard-gold)))' 
                }}
              >
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <motion.div 
                className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <span className="text-2xl font-bold" style={{ color: 'hsl(var(--forest-green))' }}>
                YatraConnect
              </span>
              <div className="text-xs text-gray-500 -mt-1 font-medium">Purpose-Driven Travel</div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                    isActive(item.href)
                      ? 'text-white shadow-xl scale-105'
                      : 'text-gray-700 hover:text-white hover:shadow-lg hover:scale-105'
                  }`}
                  style={{
                    background: isActive(item.href) 
                      ? 'linear-gradient(135deg, hsl(var(--forest-green)), hsl(var(--earth-brown)))' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, hsl(var(--mustard-gold) / 0.2), hsl(var(--warm-clay) / 0.2))';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/host">
                <button className="yatra-btn-accent ml-4">
                  🌾 Become a Host
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {isMenuOpen && (
            <div className="py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 font-semibold ${
                        isActive(item.href)
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      style={{
                        background: isActive(item.href) 
                          ? 'linear-gradient(135deg, hsl(var(--forest-green)), hsl(var(--earth-brown)))' 
                          : 'transparent'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-6 h-6" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="px-6 pt-4"
                >
                  <Link to="/host">
                    <button className="yatra-btn-accent w-full">
                      🌾 Become a Host
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
