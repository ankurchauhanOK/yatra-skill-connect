
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, MapPin, Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, hsl(var(--terracotta)), hsl(var(--denim-blue)))' }}
              >
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-xl font-bold" style={{ color: 'hsl(var(--forest-green))' }}>YatraConnect</span>
              <div className="text-xs text-gray-500 -mt-1">Skill-for-Stay</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActive(item.href)
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:text-white hover:shadow-md'
                }`}
                style={{
                  background: isActive(item.href) 
                    ? 'hsl(var(--forest-green))' 
                    : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.background = 'hsl(var(--sage-green))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <button className="yatra-btn-accent">
              Become a Host
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    isActive(item.href)
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    background: isActive(item.href) ? 'hsl(var(--forest-green))' : 'transparent'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <button className="yatra-btn-accent mt-4 w-full">
                Become a Host
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
