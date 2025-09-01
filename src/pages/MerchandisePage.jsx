import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const merchandiseItems = [
  {
    name: 'Chaveiro Oficial',
    description: 'Leve o emblema da Invinus Tuna para todo o lado com este chaveiro de metal de alta qualidade.',
    price: '€7.99',
    imageText: 'Chaveiro de metal com o logo da Invinus Tuna'
  },
  {
    name: 'Emblema Bordado',
    description: 'Perfeito para personalizar a sua capa ou mochila. Mostre o seu orgulho pela tuna!',
    price: '€5.49',
    imageText: 'Emblema de tecido bordado com o logo da Invinus Tuna'
  },
  {
    name: 'T-shirt Clássica',
    description: 'T-shirt de algodão confortável com um design exclusivo da Invinus Tuna.',
    price: '€19.99',
    imageText: 'T-shirt preta com o logo da Invinus Tuna no peito'
  },
  {
    name: 'Copo de Shot',
    description: 'Um copo de shot personalizado para celebrar as vitórias e os bons momentos.',
    price: '€4.99',
    imageText: 'Copo de shot de vidro com o logo da Invinus Tuna'
  },
    {
    name: 'Pala de Sol',
    description: 'Pala de sol bordada, ideal para festivais e atuações ao ar livre.',
    price: '€12.99',
    imageText: 'Pala de sol preta com o logo da Invinus Tuna bordado'
  },
  {
    name: 'Autocolantes',
    description: 'Pack de 5 autocolantes em vinil com designs variados da banda.',
    price: '€3.99',
    imageText: 'Vários autocolantes com diferentes designs da Invinus Tuna'
  }
];

const MerchandisePage = () => {
  const { toast } = useToast();

  const handleAddToCart = (itemName) => {
    toast({
      title: '🛒 Adicionado ao Carrinho!',
      description: `"${itemName}" foi adicionado. Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀`
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#1e1b4b] to-[#1c1917] pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Merchandise Oficial
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Mostre o seu apoio à Invinus Tuna! Compre os nossos produtos exclusivos e ajude-nos a continuar a nossa jornada musical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden flex flex-col"
            >
              <div className="h-60 bg-black/30 flex items-center justify-center">
                 <img  class="w-full h-full object-cover" alt={item.imageText} src="https://images.unsplash.com/photo-1598020856638-cbc3b47bbada" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                <p className="text-white/70 mt-2 mb-4 flex-grow">{item.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-yellow-400">{item.price}</span>
                  <Button
                    onClick={() => handleAddToCart(item.name)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;