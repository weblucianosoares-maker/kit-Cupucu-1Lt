import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Costa",
    text: "Meu cabelo estava elástico por causa das luzes. Na primeira semana usando o kit já senti ele mais encorpado. O ativador de 1 litro é vida, dura muito!"
  },
  {
    name: "Juliana Alves",
    text: "Melhor reconstrução que já fiz. Não deixa o cabelo duro igual queratina. Meus cachos ficaram super definidos e brilhantes."
  },
  {
    name: "Patrícia Lima",
    text: "Eu achava que meu cabelo não tinha jeito, só cortando. Esse kit salvou minhas pontas. E o cheiro? Maravilhoso!"
  },
  {
    name: "Camila Rodrigues",
    text: "Comprei por indicação de uma amiga e não me arrependo! Meu cabelo voltou a crescer e parou de quebrar. Estou no terceiro mês usando."
  },
  {
    name: "Renata Souza",
    text: "O ativador de 1L é o melhor custo-benefício! Uso todos os dias e ainda sobra. Meus cachos ficam definidos o dia todo sem pesar."
  },
  {
    name: "Fernanda Santos",
    text: "Fiz química e meu cabelo ficou horrível. Esse kit reconstruiu de verdade, não é propaganda enganosa. Recomendo demais!"
  }
];

const ITEMS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-darkBrown mb-4">
            O Que Nossas Clientes Dizem
          </h2>
          <p className="text-lg text-brand-brown/70 font-light">
            Mais de 2.000 mulheres já transformaram seus cachos
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Carousel Container */}
          <div className="relative px-16">
            <div className="grid md:grid-cols-3 gap-6">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={startIndex + index}
                  className="bg-white rounded-[2rem] shadow-xl p-6 md:p-8 border border-brand-beige/50 flex flex-col min-h-[280px]"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="flex-grow mb-6">
                    <p className="text-base md:text-lg text-brand-brown italic leading-relaxed text-center">
                      "{testimonial.text}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <p className="text-center font-bold text-brand-darkBrown">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-brown transition-colors shadow-lg"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-brown transition-colors shadow-lg"
              aria-label="Próxima página"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                    ? 'bg-brand-accent w-8'
                    : 'bg-brand-beige hover:bg-brand-brown/30'
                  }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;