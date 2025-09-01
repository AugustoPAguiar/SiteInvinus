import React from 'react';
import { motion } from 'framer-motion';
import { venues } from '../../data/siteData';

const VenuesSection = () => {
  return (
    <section id="venues" className="py-20" style={{ backgroundColor: '#3a0c09ff' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Palcos Memoráveis</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Desde teatros históricos a grandes festivais, estes são alguns dos palcos que tivemos a honra de pisar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="member-card rounded-xl text-center overflow-hidden"
            >
              <div className="h-48 relative">
                 <img  class="w-full h-full object-cover" alt={venue.imageText} src="https://images.unsplash.com/photo-1688046671828-c26b7fd54596" />
                 <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
                    <h3 className="text-lg font-semibold text-white text-center">{venue.name}</h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;