import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Building2, MessageCircle } from 'lucide-react';
const CorporateSection = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/60122366381', '_blank');
  };
  return <section id="corporate" className="py-16 sm:py-24 bg-[#F5F1E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D4AF37]/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <Building2 size={48} style={{
                color: '#A01818'
              }} />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Playfair Display, serif',
              color: '#A01818'
            }}>
                Corporate & Bulk Orders
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-lg sm:text-xl mb-6 leading-relaxed" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#4A4A42'
            }}>
                Our premium Chinese New Year gift sets are perfect for corporate gifting. Show appreciation to your clients, partners, and employees with our elegant and meaningful gifts.
              </p>
              <ul className="mb-8 space-y-3" style={{
              fontFamily: 'Inter, sans-serif',
              color: '#4A4A42'
            }}>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl font-bold">✓</span>
                  <span>Special pricing for bulk orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl font-bold">✓</span>
                  <span>Customization options available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl font-bold">✓</span>
                  <span>Dedicated account management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl font-bold">✓</span>
                  <span>Flexible delivery arrangements</span>
                </li>
              </ul>
              <Button onClick={handleContactClick} size="lg" className="bg-[#A01818] hover:bg-[#8B1414] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
                <MessageCircle className="mr-2" size={24} />
                Contact Us for Corporate Orders
              </Button>
            </div>

            {/* Image Side */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <img src="https://horizons-cdn.hostinger.com/30a7fa0f-967d-48f2-aaa7-76ab73c883b1/bird-s-nest-wellness-set-h4HTB.png" alt="Corporate Gifting" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#A01818]/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CorporateSection;