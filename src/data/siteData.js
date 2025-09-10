import { Music, Users, Calendar, History, Podcast as Spotify, ShoppingCart, Landmark } from 'lucide-react';

// Adiciona as Secções da Página Inicial
export const homeSections = [
  { id: 'home', label: 'Início', icon: Music },
  { id: 'venues', label: 'Palcos', icon: Landmark },
  { id: 'history', label: 'Nossa História', icon: History },
  { id: 'music', label: 'Músicas', icon: Spotify },
];

// Adiciona os Links de Navegação
export const navLinks = [
    { id: 'about', label: 'Quem Somos', icon: Users, path: '/about' },
    { id: 'calendar', label: 'Calendário', icon: Calendar, path: '/calendar' },
    { id: 'merchandise', label: 'Merchandise', icon: ShoppingCart, path: '/merchandise' }
];

// Adiciona os Membros
export const members = [
  { name: 'Charlinhos', role: 'Guitarrista Principal', instrument: 'Guitarra', image:"img/membros/Charlinhos.png" }, 
  { name: 'Augusto', role: 'Teclas', instrument: 'Acordeão', image: "img/membros/Augusto.jpg"}, 
  { name: 'Tiago', role: 'Cordas', instrument: 'Guitarra', image: "img/membros/Tiago.jpg"}, 
  { name: 'Baião', role: 'Cordas', instrument: 'Cavaquinho', image: "img/membros/Baiao.png"}, 
  { name: 'Joka', role: 'Cordas', instrument: 'Guitarra', image: "img/membros/Joka.png"}, 
  { name: 'Martinho', role: 'Coreografia', instrument: 'Pandeireta', image: "img/membros/Martinho.png"}
];

// Adiciona os Eventos Históricos
export const historyEvents = [
  { year: '2018', title: 'Fundação da Invinus Tuna', description: 'A banda foi formada por estudantes universitários apaixonados pela música tradicional portuguesa.' },
  { year: '2019', title: 'Primeiro Concerto', description: 'Realizámos o nosso primeiro concerto no auditório da universidade para uma plateia de 200 pessoas.' },
  { year: '2020', title: 'Álbum de Estreia', description: 'Lançámos o nosso primeiro álbum "Canções do Coração" com 12 faixas originais.' },
  { year: '2021', title: 'Turnê Nacional', description: 'Percorremos Portugal de norte a sul, levando a nossa música a mais de 20 cidades.' },
  { year: '2022', title: 'Prémio Jovem Talento', description: 'Fomos galardoados com o Prémio Jovem Talento Musical Português.' },
  { year: '2023', title: 'Festival Internacional', description: 'Participámos no Festival Internacional de Tunas em Salamanca, Espanha.' },
  { year: '2024', title: 'Novo Álbum', description: 'Lançámos "Ecos da Tradição", o nosso segundo álbum de estúdio.' }
];


// Adiciona os Eventos
export const events = [
  { date: '15 Jan 2025', title: 'Concerto de Ano Novo', location: 'Teatro Municipal do Porto', time: '21:00' },
  { date: '22 Fev 2025', title: 'Serenata de São Valentim', location: 'Jardim Botânico de Coimbra', time: '19:30' },
  { date: '18 Mar 2025', title: 'Festival Universitário', location: 'Campus da Universidade', time: '20:00' },
  { date: '25 Abr 2025', title: 'Concerto da Liberdade', location: 'Praça do Comércio, Lisboa', time: '18:00' },
  { date: '15 Mai 2025', title: 'Noite de Fados', location: 'Casa do Fado, Alfama', time: '22:00' },
  { date: '20 Jun 2025', title: 'Festival de Verão', location: 'Praia de Cascais', time: '19:00' },
  { date: '10 Jul 2025', title: 'Concerto Solidário', location: 'Centro Cultural de Braga', time: '21:30' },
  { date: '28 Ago 2025', title: 'Festa da Música', location: 'Largo do Senado, Évora', time: '20:30' },
  { date: '15 Set 2025', title: 'Serenata de Outono', location: 'Parque da Cidade, Aveiro', time: '19:00' },
  { date: '31 Out 2025', title: 'Concerto de Halloween', location: 'Pavilhão Multiusos de Viseu', time: '21:00' },
  { date: '25 Nov 2025', title: 'Concerto de São Martinho', location: 'Quinta da Regaleira, Sintra', time: '18:30' },
  { date: '24 Dez 2025', title: 'Concerto de Natal', location: 'Igreja do Carmo, Porto', time: '20:00' }
];

// Adiciona os Palcos
export const venues = [
  {
    name: "Coliseu do Porto",
    image: "img/venues/coliseu_porto.jpg", // Caminho relativo à pasta public/img
    imageText: "Coliseu do Porto",
  },
  {
    name: "Auditório de Mirandela",
    image: "img/venues/auditorio_mirandela.jpg",
    imageText: "Auditório de Mirandela",
  },
  {
    name: "Grande Auditório do Altice Forum Braga",
    image: "img/venues/Grande_Auditório _Braga.jpg",
    imageText: "Grande Auditório do Altice Forum Braga",
  },
];