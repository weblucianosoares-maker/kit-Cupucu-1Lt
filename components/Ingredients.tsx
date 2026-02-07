import React from 'react';
import { Droplets, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { ASSETS } from '../constants';

const Ingredients: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darkBrown relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-[3rem] transform rotate-3"></div>
              <img
                src={ASSETS.benefitsBanner}
                alt="Benefícios do Cupuaçu para seus cachos"
                className="relative rounded-[3rem] shadow-2xl border-4 border-white/10 w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-brand-cream">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-bold tracking-wider mb-4 border border-brand-accent/20">
              O SEGREDO DA AMAZÔNIA
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Manteiga de Cupuaçu: <br />
              <span className="text-brand-accent italic font-light">O Ouro da Reconstrução</span>
            </h2>

            <p className="text-brand-beige/80 text-lg mb-10 leading-relaxed font-light">
              Diferente de outros reconstrutores que deixam o cabelo rígido, a <strong>Manteiga de Cupuaçu</strong> promove uma reconstrução macia. Ela absorve a umidade 200% mais que a lanolina.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <Droplets className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Hidratação Profunda & Emoliência</h4>
                  <p className="text-brand-beige/70 font-light">Retém a umidade por mais tempo, garantindo maciez extrema.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <ShieldCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Nutrição Intensa</h4>
                  <p className="text-brand-beige/70 font-light">Rica em ácidos graxos que nutrem e fortalecem os fios.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <Zap className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Definição Duradoura</h4>
                  <p className="text-brand-beige/70 font-light">Sela as cutículas, controlando o frizz e definindo os cachos.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
                  <Sparkles className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Elasticidade & Brilho</h4>
                  <p className="text-brand-beige/70 font-light">Melhora a flexibilidade e proporciona um brilho radiante.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ingredients;