import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/60122366381', '_blank');
  };

  const getLabelColor = (label) => {
    switch (label) {
      case 'Most Popular':
        return 'bg-[#A01818] text-white';
      case 'Premium':
        return 'bg-[#D4AF37] text-white';
      case 'Best Value':
        return 'bg-[#4A4A42] text-white';
      default:
        return 'bg-[#D4AF37] text-white';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-[#D4AF37]/20"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.label && (
          <div
            className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${getLabelColor(
              product.label
            )}`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {product.label}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
        >
          {product.name}
        </h3>
        <p
          className="mb-4 flex-grow leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A42' }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#D4AF37]/30">
          <div>
            <p className="text-sm text-[#4A4A42]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              Starting from
            </p>
            <p
              className="text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}
            >
              RM{product.price}
            </p>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#A01818] hover:bg-[#8B1414] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <MessageCircle className="mr-2" size={18} />
            Enquire
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;