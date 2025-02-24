// Header.jsx
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Button from './Button'; // Changed from { Button }

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Academics', href: '#academics' },
    { name: 'Sports', href: '#sports' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Campus Tour', href: '#campus-tour' },
  ];

  return (
    <header className="py-4 mt-15 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/api/placeholder/50/50" 
              alt="Mysore International School Logo" 
              className="h-12 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-[#264653]">MIS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#8A2E88] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="flex items-center gap-2 border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white"
              onClick={() => window.location.href = '#contact'}
            >
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
            <Button 
              className="flex items-center gap-2 bg-[#E76F51] hover:bg-[#E76F51]/90 text-white"
              onClick={() => window.location.href = '#campus-tour'}
            >
              <Calendar className="w-4 h-4" />
              Book Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#8A2E88] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline"
                className="flex items-center gap-2 border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white"
                onClick={() => window.location.href = '#contact'}
              >
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
              <Button 
                className="flex items-center gap-2 bg-[#E76F51] hover:bg-[#E76F51]/90 text-white"
                onClick={() => window.location.href = '#campus-tour'}
              >
                <Calendar className="w-4 h-4" />
                Book Tour
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;