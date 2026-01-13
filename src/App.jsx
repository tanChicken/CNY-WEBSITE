import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GiftSetsSection from '@/components/GiftSetsSection';
import WineUpgradeSection from '@/components/WineUpgradeSection';
import HowToOrderSection from '@/components/HowToOrderSection';
import CorporateSection from '@/components/CorporateSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Chinese New Year Gift Sets 2026 | Premium Gifting</title>
        <meta name="description" content="Curated Chinese New Year gift sets featuring abalone, bird's nest, festive treats & optional wine upgrades. Pre-order now for CNY 2026." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="scroll-smooth">
          <HeroSection />
          <GiftSetsSection />
          <WineUpgradeSection />
          <HowToOrderSection />
          <CorporateSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;