import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Podcast as Spotify } from 'lucide-react';

const MusicSection = () => {
  const handleSpotifyClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-green-900/50 to-teal-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Nossas Músicas</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ouve as nossas criações no Spotify e deixa-te levar pela nossa música
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Álbum: "Canções do Coração"</h3>
            <p className="text-white/80 mb-6">
              O nosso álbum de estreia, lançado em 2020, com 12 faixas que capturam a essência da música tradicional portuguesa.
            </p>
            <Button
              onClick={() => handleSpotifyClick('https://open.spotify.com/album/1z3KspdaeGSUYv6j44Y4T7')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Spotify className="h-5 w-5" />
              <span>Ouvir no Spotify</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Álbum: "Ecos da Tradição"</h3>
            <p className="text-white/80 mb-6">
              O nosso segundo álbum, lançado em 2024, onde exploramos novos horizontes musicais mantendo as nossas raízes.
            </p>
            <Button
              onClick={() => handleSpotifyClick('https://open.spotify.com/album/1z3KspdaeGSUYv6j44Y4T7')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Spotify className="h-5 w-5" />
              <span>Ouvir no Spotify</span>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Playlist Destacada</h3>
            <p className="text-white/80 mb-6">
              Uma seleção das nossas melhores interpretações e composições originais
            </p>
            <div className="spotify-embed">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5cO1uP12s3I?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;