import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkBrown text-brand-beige py-8 border-t border-brand-brown">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display font-bold text-xl mb-2">AMANHECER PROFESSIONAL</p>
        <p className="text-sm opacity-70 mb-4">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        <p className="text-xs opacity-50">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
          Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>
      </div>
    </footer>
  );
};

export default Footer;