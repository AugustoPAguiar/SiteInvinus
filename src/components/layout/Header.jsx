import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { homeSections, navLinks } from '@/data/siteData';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleNavigate = (path) => {
      setIsMenuOpen(false);
      navigate(path);
  }

  useEffect(() => {
    if (isHomePage && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate(location.pathname, { replace: true });
    }
  }, [isHomePage, location.state, navigate]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sectionIds = homeSections.map(s => s.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const NavItem = ({ item, isMobile = false }) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;
    return (
      <Link to={item.path}
            onClick={() => isMobile && setIsMenuOpen(false)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? 'bg-white/20 text-yellow-400'
                : 'hover:bg-white/10 text-white'
            } ${isMobile ? 'w-full py-3' : ''}`}>
        <Icon className="h-4 w-4" />
        <span>{item.label}</span>
      </Link>
    );
  };
  
  const ScrollItem = ({ item, isMobile = false }) => {
      const isActive = activeSection === item.id && isHomePage;
      const Icon = item.icon;
      return (
         <button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? 'bg-white/20 text-yellow-400'
                : 'hover:bg-white/10 text-white'
            } ${isMobile ? 'w-full py-3' : ''}`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
      )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleScrollToSection('home')}
          >
            <img  alt="Invinus Tuna logo" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1654657078233-d63d1548a891" />
            <span className="text-2xl font-bold gradient-text">Invinus Tuna</span>
          </motion.div>

          <nav className="hidden md:flex space-x-2 items-center">
            {homeSections.slice(1).map((section) => (
                <ScrollItem key={section.id} item={section} />
            ))}
            {navLinks.map((link) => (
                <NavItem key={link.id} item={link} />
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-effect"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
             {homeSections.map((section) => (
                <ScrollItem key={section.id} item={section} isMobile={true}/>
            ))}
             {navLinks.map((link) => (
                <NavItem key={link.id} item={link} isMobile={true}/>
            ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;