import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
const HeroSection = () => {
  const scrollToGiftSets = () => {
    const element = document.getElementById('gift-sets');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/60122366381', '_blank');
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Light Overlay for Dark Text Contrast */}
      <div className="absolute inset-0 z-0">
        <img src="/images/nnTDQFf5FDS6E9gc.png" alt="Chinese New Year Celebration" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#F5F1E8]/35" />
        
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-32">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight" style={{
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '0.05em',
            textShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
              <span className="block mb-2" style={{
              color: '#A01818'
            }}>
                Chinese New Year
              </span>
              <span style={{
              color: '#A01818',
              fontWeight: 600
            }}>
                Gift Sets 2026
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A42'
      }}>
          Curated gift sets featuring abalone, bird's nest, festive treats & optional wine upgrades.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-[#A01818] hover:bg-[#8B1414] text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-[#A01818]/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            <MessageCircle className="mr-2" size={24} />
            Order via WhatsApp
          </Button>

          <Button onClick={scrollToGiftSets} size="lg" variant="outline" className="border-2 border-[#A01818] bg-transparent text-[#A01818] hover:bg-[#A01818] hover:text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            View Gift Sets
            <ArrowDown className="ml-2" size={24} />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 1.5
      }}>
          <ArrowDown size={32} className="text-[#A01818]/80 drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;