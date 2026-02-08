import React from 'react';
import Button from './Button';
import { Star } from 'lucide-react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-cream overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-beige opacity-60"></div>

      {/* Decorative organic blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-beige/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 z-0"></div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">

          {/* Copy Side */}
          <div className="w-full md:w-[48%] text-center md:text-left order-2 md:order-1">

            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-darkBrown leading-tight mb-3">
              Resgate a Força dos seus Cachos: <span className="text-brand-accent italic">Reconstrução Profunda</span> com Cupuaçu!
            </h1>

            <p className="text-sm md:text-base text-brand-brown/90 mb-4 leading-relaxed font-light">
              Seus fios estão quebradiços, porosos ou sem vida? Recupere a massa capilar e a definição com o tratamento que reconstrói a fibra de dentro para fora. Agora com o exclusivo <strong>Ativador de 1 Litro</strong>.
            </p>

            {/* Price Highlight */}
            <div className="mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  23% OFF
                </span>
                <span className="text-gray-500 text-base line-through">R$ 220,00</span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-brand-brown text-sm font-medium">Por apenas</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-green-600 tracking-tight">R$ 169</span>
                </div>
                <span className="text-brand-brown/70 text-xs font-medium">
                  ou 6x de <strong className="text-brand-darkBrown">R$ 31,87</strong> sem juros
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button fullWidth={false} className="rounded-full px-8 py-3 text-base shadow-brand-accent/20 shadow-xl hover:shadow-2xl">
                QUERO MEU KIT AGORA
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-brand-beige">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="font-semibold text-brand-darkBrown ml-2 text-xs">+2.000 Mulheres Aprovaram</span>
              </div>
            </div>
          </div>

          {/* Image Side - Soft Organic Shape with Model */}
          <div className="w-full md:w-[52%] relative order-1 md:order-2">
            <div className="relative z-10 mx-auto max-w-md md:max-w-full">
              {/* Main Image Mask - More horizontal/rectangular shape */}
              <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-brown/20">
                <img
                  src={ASSETS.heroModel}
                  alt="Modelo brasileira com cabelos cacheados saudáveis e kit de produtos Cupuaçu"
                  className="object-contain object-center w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/30 rounded-full blur-2xl -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-brand-brown/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;