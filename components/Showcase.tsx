import React from 'react';
import Button from './Button';
import { PackageOpen, Coins, Sparkles } from 'lucide-react';
import { ASSETS } from '../constants';

const Showcase: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-brand-beige/50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-2 bg-brand-accent/10 rounded-full mb-4">
                        <Sparkles className="w-5 h-5 text-brand-accent mr-2" />
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Custo Benefício Imbatível</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-darkBrown mb-6">
                        Tratamento de Choque com <br /><span className="text-brand-accent italic">Volume Profissional</span>
                    </h2>
                </div>

                {/* Product Showcase Image */}
                <div className="mb-16 max-w-4xl mx-auto">
                    <img
                        src={ASSETS.productShowcase}
                        alt="Kit Cachos Cupuaçu com ingredientes naturais"
                        className="w-full rounded-[3rem] shadow-2xl border-4 border-white"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
                    {/* Card 1: The Kit */}
                    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl shadow-brand-brown/5 border border-brand-beige flex flex-col">
                        <h3 className="font-display text-2xl font-bold text-brand-darkBrown mb-8 text-center flex items-center justify-center gap-3">
                            <PackageOpen className="w-6 h-6 text-brand-brown" />
                            O Que Vem no Kit?
                        </h3>
                        <div className="space-y-6 flex-grow">
                            <div className="flex items-center gap-5 p-4 bg-brand-cream rounded-2xl border border-brand-beige/50 hover:bg-brand-beige/30 transition-colors">
                                <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center text-brand-brown font-bold text-xs shadow-inner">300ml</div>
                                <div>
                                    <p className="font-bold text-brand-darkBrown text-lg">Shampoo Reconstrução</p>
                                    <p className="text-sm text-gray-500">Definição, força e brilho desde a lavagem.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-4 bg-brand-cream rounded-2xl border border-brand-beige/50 hover:bg-brand-beige/30 transition-colors">
                                <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center text-brand-brown font-bold text-xs shadow-inner">300ml</div>
                                <div>
                                    <p className="font-bold text-brand-darkBrown text-lg">Condicionador Reconstrução</p>
                                    <p className="text-sm text-gray-500">Sela cutículas e controla o volume.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-4 bg-brand-cream rounded-2xl border border-brand-beige/50 hover:bg-brand-beige/30 transition-colors">
                                <div className="w-14 h-14 bg-brand-brown/10 rounded-full flex items-center justify-center text-brand-brown font-bold text-xs shadow-inner">300g</div>
                                <div>
                                    <p className="font-bold text-brand-darkBrown text-lg">Máscara Reconstrutora</p>
                                    <p className="text-sm text-gray-500">Cachos saudáveis, soltos e poderosos.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-4 bg-brand-accent/10 rounded-2xl border-2 border-brand-accent/30 hover:bg-brand-accent/20 transition-colors">
                                <div className="w-14 h-14 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-extrabold text-xs shadow-inner">1L</div>
                                <div>
                                    <p className="font-bold text-brand-darkBrown text-lg">Ativador de Cachos Reconstrução</p>
                                    <p className="text-sm text-gray-500">Barreira protetora para day-afters incríveis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: The Hero Activator */}
                    <div className="bg-brand-darkBrown text-white p-8 md:p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center border-4 border-white/10">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>

                        <div className="relative z-10 text-center">
                            <div className="inline-block bg-white text-brand-darkBrown font-bold px-6 py-2 rounded-full text-sm mb-8 shadow-lg">
                                ESTRELA DO KIT
                            </div>
                            <h3 className="font-display text-3xl font-bold mb-2 leading-tight">Ativador de Cachos<br />Reconstrução</h3>
                            <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200 mb-4 tracking-tighter">1 LITRO</div>
                            <p className="text-brand-beige mb-8 font-light text-lg">Barreira protetora que blinda seus cachos e garante day-afters incríveis.</p>

                            <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-md border border-white/10">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <Coins className="w-6 h-6 text-brand-accent" />
                                    <span className="font-bold text-xl">Economia Real</span>
                                </div>
                                <p className="text-brand-beige/80">
                                    Equivale a <span className="font-bold text-white border-b border-brand-accent">4 potes de 250g</span> de outras marcas. Você leva tudo em uma embalagem giga.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Button className="rounded-full px-12 py-4 text-xl">QUERO O KIT COM ATIVADOR DE 1L</Button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;