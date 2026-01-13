import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/60122366381', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/wasupppppop/', '_blank');
  };

  return (
    <footer className="bg-white border-t border-[#D4AF37]/30 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
            >
              CNY Gifts 2026
            </h3>
            <p
              className="leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A42' }}
            >
              Premium Chinese New Year gift sets featuring abalone, bird's nest, and festive treats.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-[#A01818] text-[#A01818] hover:bg-[#A01818] hover:text-white transition-all duration-300 w-full justify-start"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button
                onClick={handleInstagramClick}
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 w-full justify-start"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
            >
              Quick Links
            </h4>
            <nav className="space-y-2">
              {['Gift Sets', 'Wine Upgrade', 'How to Order', 'Corporate'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-[#4A4A42] hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#D4AF37]/20 pt-8 text-center"
        >
          <p
            className="text-[#4A4A42]/80"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 Chinese New Year Gift Sets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;