import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-beige last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-display font-bold text-lg text-brand-darkBrown pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-brand-accent flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-brand-brown flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const questions = [
    {
      question: "Reconstrução deixa o cabelo duro?",
      answer: "Com o Kit Cupuaçu, não! Nossa fórmula equilibra a reconstrução com a emoliência da manteiga, deixando os fios fortes, porém extremamente maleáveis."
    },
    {
      question: "Pode ser usado em cabelos com luzes ou progressiva?",
      answer: "Deve! Ele é o tratamento ideal para repor a massa que os processos químicos retiram do fio, devolvendo a resistência."
    },
    {
      question: "Qual a frequência de uso?",
      answer: "Se o cabelo estiver muito danificado, use o kit completo uma vez por semana. Se for apenas para manutenção, a cada 15 dias. O Ativador de 1L pode ser usado em todas as finalizações."
    },
    {
      question: "Qual a diferença para o Kit Coco?",
      answer: "O Kit Coco é para Nutrição (devolve óleo/brilho). O Kit Cupuaçu é para Reconstrução (devolve massa/força). Se seu cabelo quebra fácil ou está elástico, o Cupuaçu é a escolha certa."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-darkBrown mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-500">Tudo o que você precisa saber antes de recuperar seus cachos.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-brand-cream rounded-2xl p-6 md:p-8">
          {questions.map((q, index) => (
            <FAQItem key={index} question={q.question} answer={q.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
             <Button variant="outline">AINDA TEM DÚVIDA? FALE CONOSCO</Button>
             <div className="mt-6">
                <Button>GARANTIR MEU KIT AGORA</Button>
             </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;