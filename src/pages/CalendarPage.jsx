import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { events } from '../data/siteData';

const CalendarPage = () => {
  const { toast } = useToast();

  return (
    <div className="relative pt-28 pb-20">
       <div className="absolute inset-0">
        <img  alt="A crowd at a music festival at night" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1684348406379-950ef79e81c9" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Calendário de Atuações 2025</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Vem assistir aos nossos concertos ao vivo! Aqui estão todas as nossas próximas apresentações.
          </p>
        </motion.div>

        <div className="calendar-grid">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="event-card frosted-glass-event rounded-xl p-6 flex flex-col"
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl font-bold text-yellow-400">
                    {event.date.split(' ')[0]}
                    </div>
                    <div className="text-right text-white/70">
                    {event.date.split(' ').slice(1).join(' ')}
                    </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 flex-grow">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-white/80">
                    <MapPin className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">{event.time}</span>
                    </div>
                </div>
                
                <Button
                    onClick={() => toast({
                    title: "📅 Evento",
                    description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Pode solicitá-la no seu próximo prompt! 🚀"
                    })}
                    className="w-full mt-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
                >
                    Mais Informações
                </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;