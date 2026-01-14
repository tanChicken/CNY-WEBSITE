import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const GiftSetsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Classic CNY Gift Set',
      description: 'Festive gift bag with horse keychain, 2026 Red Packets, 2 Da Hong Pao tea leaves, White Rabbit candy, and Fortune stick biscuit.',
      price: 68,
      image: '/images/Classic CNY Gift Set.png',
      label: 'Most Popular'
    },
    {
      id: 2,
      name: 'Bird\'s Nest Wellness Set',
      description: 'Festive gift bag with horse keychain, 2026 Red Packets, 2 Da Hong Pao tea leaves, White Rabbit candy, Fortune stick biscuit, 3 bird\'s nest.',
      price: 88,
      image: '/images/Bird\'s Nest Wellness Set.png',
    },
    {
      id: 3,
      name: 'Abalone Prosperity Set',
      description: 'Festive gift bag with horse keychain, 2026 Red Packets, 2 Da Hong Pao tea leaves, White Rabbit candy, Fortune stick biscuit, 2 abalone.',
      price: 108,
      image: '/images/Abalone Prosperity Set.png',
      label: null
    },
    {
      id: 4,
      name: 'Signature Best Value Set',
      description: 'Festive gift bag with horse keychain, 2026 Red Packets, 2 Da Hong Pao tea leaves, White Rabbit candy, Fortune stick biscuit, 1 abalone, and 2 bird\'s nest.',
      price: 118,
      image: '/images/Signature Best Value Set.png',
      label: 'Best Value'
    },
    {
      id: 5,
      name: 'Grand Prosperity Set',
      description: 'Festive gift bag with horse keychain, 2026 Red Packets, 2 Da Hong Pao tea leaves, White Rabbit candy, Fortune stick biscuit, 2 abalone, and 3 bird\'s nest.',
      price: 138,
      image: '/images/Grand Prosperity Set.png',
      // label: 'Premium'
    }
  ];

  return (
    <section id="gift-sets" className="py-16 sm:py-24 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
          >
            Our Premium Gift Sets
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A42' }}
          >
            Choose from our carefully curated collection of Chinese New Year gift sets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSetsSection;



