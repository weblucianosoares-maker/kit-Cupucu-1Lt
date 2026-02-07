import React from 'react';
import Button from './Button';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-brand-beige">

          <div className="bg-brand-darkBrown p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
            <h3 className="text-white font-display text-2xl md:text-3xl font-bold tracking-wide relative z-10">OFERTA EXCLUSIVA DO SITE</h3>
          </div>

          <div className="p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkBrown mb-4">Kit Reconstrução Completo</h2>
            <p className="text-gray-500 mb-10 text-lg">Shampoo Reconstrução 300ml + Condicionador Reconstrução 300ml + Máscara Reconstrutora 300g + Ativador Reconstrução 1L</p>

            <div className="flex flex-col items-center justify-center mb-10 bg-brand-cream/50 p-8 rounded-3xl max-w-lg mx-auto border border-brand-beige/50">
              <span className="text-red-400 text-xl font-medium line-through decoration-1">De R$ 220,00</span>
              <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
                <span className="text-brand-brown text-lg">Por apenas:</span>
                <span className="text-6xl font-extrabold text-green-600 tracking-tight">R$ 169,00</span>
              </div>
              <span className="text-sm text-green-700 mt-4 font-bold bg-green-100 px-4 py-1.5 rounded-full">
                Parcele em até 6x
              </span>
            </div>

            <Button fullWidth={true} className="mb-8 animate-pulse hover:animate-none rounded-full text-xl shadow-green-200 shadow-xl">
              QUERO MEU KIT AGORA
            </Button>

            <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 pt-10 border-t border-gray-100">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <CreditCard className="w-6 h-6 text-brand-brown" />
                <span className="font-medium">Pagamento Seguro</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <Truck className="w-6 h-6 text-brand-brown" />
                <span className="font-medium">Entrega em todo Brasil</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <ShieldCheck className="w-6 h-6 text-brand-brown" />
                <span className="font-medium">Produto Original</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;