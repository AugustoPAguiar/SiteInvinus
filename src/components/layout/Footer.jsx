import React from 'react';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna 1: Conteúdo atual */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"              >
                In'vinus Tuna
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Tuna Masculina da Escola Superior de Administração, Comunicação e Turismo de Mirandela
            </p>
            <p className="text-white/70 mb-4">
              Hoje, Amanha e Sempre!
            </p>
            <p className="text-white/50 text-sm">
              © 2025 In'vinus Tuna. Todos os direitos reservados.
            </p>
          </div>
          {/* Coluna 2: Contatos */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right justify-center h-full">
            <h3 className="text-lg font-semibold text-white mb-2">Contactos</h3>
            <p className="text-white/80">
              <span className="font-bold">Magister:</span> <a href="tel:+351912345678" className="hover:underline">+351 912 345 678</a>
            </p>
            <p className="text-white/80">
              <span className="font-bold">Presidente:</span> <a href="tel:+351987654321" className="hover:underline">+351 987 654 321</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;