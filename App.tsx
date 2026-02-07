import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Ingredients from './components/Ingredients';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/Button';
import { ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the Hero section (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-brown antialiased selection:bg-brand-accent selection:text-white">

      {/* Header / Announcement Bar */}
      <div className="bg-brand-darkBrown text-brand-accent text-center py-2 px-4 text-sm font-bold tracking-wider uppercase">
        Frete Grátis nas compras acima de R$ 239
      </div>

      <main>
        <Hero />
        <PainPoints />
        <Ingredients />
        <Showcase />
        <Testimonials />
        <Offer />
        <FAQ />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-50 md:hidden transition-transform duration-300 ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through">R$ 220,00</span>
            <span className="font-bold text-green-600 text-lg">R$ 169,00</span>
          </div>
          <Button className="flex-grow py-3 text-sm" icon={false}>COMPRAR AGORA</Button>
        </div>
      </div>

      {/* Desktop Sticky Button (Bottom Right) */}
      <div className={`fixed bottom-8 right-8 z-50 hidden md:block transition-all duration-500 ${showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <Button className="shadow-2xl flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          COMPRAR KIT
        </Button>
      </div>

    </div>
  );
};

export default App;