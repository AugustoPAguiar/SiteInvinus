import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
  const navigate = useNavigate();

  const handleNavigateAndScroll = (path, sectionId) => {
    navigate(path, {state: {scrollTo: sectionId}});
  }
  
  const handleScrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img  alt="Invinus Tuna band performing on stage" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            In'Vinus Tuna
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Uma banda universitária portuguesa que celebra a tradição musical com paixão e inovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full text-lg"
            >
              Conhece-nos
            </Button>
            <Button
              onClick={() => handleScrollToSection('music')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg"
            >
              Ouve a Nossa Música
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400/20 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;