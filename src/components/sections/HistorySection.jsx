import React from 'react';
import { motion } from 'framer-motion';
import { historyEvents } from '@/data/siteData';

const HistorySection = () => {
  return (
    <section id="history" className="py-20 bg-gradient-to-br from-[#4c1d29] to-[#1c1917]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Nossa História</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Uma jornada musical que começou em 2018 e continua a crescer
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>
          
          {historyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-inherit`}>
                <div className="glass-effect rounded-xl p-6 inline-block">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{event.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-white/80">{event.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;