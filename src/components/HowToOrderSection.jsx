import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Wine, MessageCircle, CheckCircle } from 'lucide-react';

const HowToOrderSection = () => {
  const steps = [
    {
      id: 1,
      icon: Gift,
      title: 'Choose Your Gift Set',
      description: 'Browse our curated collection and select the perfect gift set for your loved ones'
    },
    {
      id: 2,
      icon: Wine,
      title: 'Optional Wine Upgrade',
      description: 'Elevate your gift with premium red wine or fruit wine add-ons'
    },
    {
      id: 3,
      icon: MessageCircle,
      title: 'Contact Us via WhatsApp',
      description: 'Reach out to us on WhatsApp with your selection and delivery details'
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Confirm Payment & Delivery',
      description: 'Complete your order and we\'ll arrange delivery before Chinese New Year'
    }
  ];

  return (
    <section id="how-to-order" className="py-16 sm:py-24 bg-[#F5F1E8]">
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
            How to Order
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A42' }}
          >
            Simple steps to secure your Chinese New Year gift sets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/20"
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center border-2 border-[#D4AF37]"
                  style={{ backgroundColor: '#A01818' }}
                >
                  <IconComponent className="text-white" size={32} />
                </div>
                <div
                  className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37' }}
                >
                  {step.id}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#A01818' }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#4A4A42' }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#A01818] rounded-xl shadow-2xl p-6 sm:p-8 text-center text-white max-w-3xl mx-auto border-2 border-[#D4AF37]"
        >
          <p
            className="text-lg sm:text-xl font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="block mb-2">Pre-order only | Limited quantities</span>
            <span style={{ color: '#D4AF37' }}>Cut-off date: [To be announced]</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;