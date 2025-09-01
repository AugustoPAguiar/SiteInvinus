import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '../../components/ui/toaster';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // Corrigido o import


const Layout = () => {
  const location = useLocation();

  const getPageTitleAndDescription = () => {
    switch (location.pathname) {
      case '/about':
        return {
          title: 'Quem Somos - Invinus Tuna',
          description: 'Conheça todos os membros da Invinus Tuna. Uma família unida pela paixão musical.'
        };
      case '/calendar':
        return {
          title: 'Calendário de Atuações - Invinus Tuna',
          description: 'Confira as próximas atuações e eventos da Invinus Tuna. Não perca a oportunidade de nos ver ao vivo!'
        };
      case '/merchandise':
        return {
          title: 'Merchandise - Invinus Tuna',
          description: 'Compre os produtos oficiais da Invinus Tuna! Mostre o seu apoio com os nossos chaveiros, emblemas e mais.'
        };
      default:
        return {
          title: "In'Vinus Tuna",
          description: 'Tuna Masculina da Escola Superior de Administração, Comunicação e Turismo de Mirandela (EsACT).'
        };
    }
  };

  const { title, description } = getPageTitleAndDescription();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToTop /> {/* Adicione aqui */}
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default Layout;