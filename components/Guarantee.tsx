import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-brand-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-brand-cream p-8 rounded-[3rem] border border-brand-beige/50">
          <div className="flex-shrink-0">
             <div className="w-24 h-24 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-12 h-12" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-brand-darkBrown mb-2">Garantia de Satisfação</h3>
            <p className="text-gray-600 leading-relaxed">
              Confiamos tanto na qualidade do nosso Kit Cupuaçu que oferecemos <strong>7 dias de garantia</strong>. Se você não amar os resultados, devolvemos seu dinheiro. Risco zero para você testar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;