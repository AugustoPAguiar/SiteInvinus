import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
          title: 'Invinus Tuna - Banda Universitária Portuguesa',
          description: 'Conheça a Invinus Tuna, uma banda universitária portuguesa dedicada à música tradicional e moderna. Descubra nossa história, membros e próximas apresentações.'
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