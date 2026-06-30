import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    navigate('/request-quote');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
        <Link to="/" className="flex items-center -ml-2 md:-ml-6">
          <img src="/Logo (7).png" alt="Kamachi TMT" className="h-14 md:h-16 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-base relative group transition-colors ${location.pathname === '/' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            Home
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/products" className={`text-base relative group transition-colors ${location.pathname === '/products' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            Products
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/infrastructure" className={`text-base relative group transition-colors ${location.pathname === '/infrastructure' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            Infrastructure
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/infrastructure' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/projects" className={`text-base relative group transition-colors ${location.pathname === '/projects' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            Projects
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/clients" className={`text-base relative group transition-colors ${location.pathname === '/clients' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            Our Clients
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/clients' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/about" className={`text-base relative group transition-colors ${location.pathname === '/about' ? 'text-primary font-bold' : 'text-on-surface-variant font-medium hover:text-white'}`}>
            About
            <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary transition-transform duration-300 ${location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <Link to="/profile" className="hidden md:inline-block text-sm font-bold text-primary mr-2 hover:underline">
              Hi, {user.name}
            </Link>
          )}
          <button onClick={handleQuoteClick} className="btn-primary px-6 py-2.5 rounded-full font-bold font-label-caps text-label-caps hidden md:block tracking-wide">Request Quote</button>
          <button onClick={handleQuoteClick} className="btn-primary px-5 py-2 font-headline-md text-sm font-bold uppercase tracking-wider rounded-full md:hidden">Quote</button>
          
          {user && (
            <button onClick={logout} className="hidden md:block btn-glass px-5 py-2 rounded-full font-bold font-label-caps text-label-caps tracking-wide">Logout</button>
          )}

          <button className="md:hidden text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
