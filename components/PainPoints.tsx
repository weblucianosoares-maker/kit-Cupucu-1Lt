import React from 'react';
import { XCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './Button';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-darkBrown mb-4">
            Sente que seu cabelo "parou de crescer" ou quebra só de pentear?
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Muitas vezes, o que falta não é hidratação, é <span className="font-semibold text-brand-brown">estrutura</span>. Cabelos que passam por químicas, colorações ou excesso de calor perdem massa e ficam elásticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16">
          {/* Pain Box */}
          <div className="bg-red-50/50 p-8 md:p-10 rounded-[2.5rem] border border-red-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-darkBrown">Você sofre com isso?</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-brand-brown/80 group">
                <XCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" />
                <span className="text-lg">Cabelos porosos e com frizz excessivo</span>
              </li>
              <li className="flex items-start gap-4 text-brand-brown/80 group">
                <XCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" />
                <span className="text-lg">Fios finos, elásticos e sem "corpo"</span>
              </li>
              <li className="flex items-start gap-4 text-brand-brown/80 group">
                <XCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-0.5 group-hover:text-red-400 transition-colors" />
                <span className="text-lg">Pontas duplas e quebra constante ao pentear</span>
              </li>
            </ul>
          </div>

          {/* Solution Box */}
          <div className="bg-green-50/50 p-8 md:p-10 rounded-[2.5rem] border border-green-100/50 relative overflow-hidden shadow-lg shadow-green-100/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-darkBrown">A Solução Amanhecer</h3>
            </div>

            <p className="text-brand-brown/90 mb-8 relative z-10 text-lg leading-relaxed">
              O <strong>Kit Cupuaçu da Amanhecer</strong> age diretamente na reposição lipídica e proteica. Não é maquiagem capilar, é tratamento estrutural.
            </p>

            <div className="p-6 bg-white rounded-3xl shadow-sm relative z-10 border border-green-100/30">
              <p className="font-medium text-brand-darkBrown text-center italic">
                "Devolvendo a densidade que seus cachos precisam para crescerem fortes."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="secondary" className="rounded-full px-12">QUERO RECUPERAR MEU CABELO</Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;