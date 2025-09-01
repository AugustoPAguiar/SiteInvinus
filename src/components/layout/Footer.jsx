import React from 'react';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Music className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold gradient-text">Invinus Tuna</span>
        </div>
        <p className="text-white/70 mb-4">
          Banda Universitária Portuguesa • Tradição e Inovação Musical
        </p>
        <p className="text-white/50 text-sm">
          © 2025 Invinus Tuna. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;