import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'gift-sets', label: 'Gift Sets' },
    { id: 'wine-upgrade', label: 'Wine Upgrade' },
    { id: 'how-to-order', label: 'How to Order' },
    { id: 'corporate', label: 'Corporate' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg py-0 border-b border-[#D4AF37]/20' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Hidden at top, visible on scroll */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isScrolled ? 1 : 0, 
              y: isScrolled ? 0 : -20,
              pointerEvents: isScrolled ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}>
              CNY Gifts 2026
            </h1>
          </motion.div>

          {/* Desktop Navigation - Hidden at top, visible on scroll */}
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ 
               opacity: isScrolled ? 1 : 0, 
               y: isScrolled ? 0 : -20,
               pointerEvents: isScrolled ? 'auto' : 'none'
             }}
             transition={{ duration: 0.3 }}
             className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#4A4A42] hover:text-[#A01818] transition-colors duration-300 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${isScrolled ? 'text-[#A01818]' : 'text-[#4A4A42] hover:text-[#A01818]'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#F5F1E8] border-t border-[#D4AF37]/30 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left py-2 text-[#4A4A42] hover:text-[#A01818] transition-colors duration-300 font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;