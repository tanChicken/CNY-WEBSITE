import React from 'react';
import { motion } from 'framer-motion';

const WineUpgradeSection = () => {
  const wineOptions = [
    {
      id: 1,
      name: 'Premium Red Wine',
      price: 50,
      image: 'https://images.unsplash.com/photo-1700893417216-47933d90bde8',
      description: 'Enhance your gift with a bottle of premium red wine'
    },
    {
      id: 2,
      name: 'Premium Fruit Wine',
      price: 70,
      image: 'https://images.unsplash.com/photo-1695048475751-5d3b5077d631',
      description: 'Add a touch of sweetness with our premium fruit wine'
    }
  ];

  return (
    <section id="wine-upgrade" className="py-16 sm:py-24 bg-white">
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
            style={{ fontFamily: 'Playfair Display, serif', color: '#DC143C' }}
          >
            Upgrade Your Gift with Wine
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Optional add-ons to elevate your gift set
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {wineOptions.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-[#F5F1E8] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#DC143C' }}
                >
                  {wine.name}
                </h3>
                <p
                  className="text-gray-600 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {wine.description}
                </p>
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}
                >
                  +RM{wine.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineUpgradeSection;