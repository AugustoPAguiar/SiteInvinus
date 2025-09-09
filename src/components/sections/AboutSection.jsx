import React from 'react';
import { motion } from 'framer-motion';
import { members } from '../../data/siteData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#4a2c2a' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Quem Somos</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Somos uma família musical unida pela paixão pela música tradicional portuguesa e pela vontade de inovar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="member-card rounded-xl p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <img alt={`Foto de ${member.name}`} className="w-20 h-20 rounded-full object-cover" src={member.image} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium mb-1">{member.role}</p>
              <p className="text-white/70 text-sm">{member.instrument}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;