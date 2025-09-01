import React from 'react';
import { motion } from 'framer-motion';
import { members } from '../data/siteData';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#4a2c2a] to-[#1c1917] pt-28 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Quem Somos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Somos uma família musical unida pela paixão pela música tradicional portuguesa e pela vontade de inovar. Conheça cada um dos nossos talentosos membros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="member-card rounded-xl p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                 <img  alt={`Foto de ${member.name}`} className="w-28 h-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1693325924433-9009521d4079" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium mb-1">{member.role}</p>
              <p className="text-white/70 text-sm">{member.instrument}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;