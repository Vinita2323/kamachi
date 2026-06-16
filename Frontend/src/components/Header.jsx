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
    <header className={`fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-all ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-section-padding max-w-container-max mx-auto">
        <Link to="/" className="flex items-center -ml-2 md:-ml-6">
          <img src="/Logo (7).png" alt="Kamachi TMT" className="h-14 md:h-16 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-base ${location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-on-surface-variant font-medium hover:text-primary transition-colors'}`}>Home</Link>
          <Link to="/products" className={`text-base ${location.pathname === '/products' ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-on-surface-variant font-medium hover:text-primary transition-colors'}`}>Products</Link>
          <Link to="/infrastructure" className={`text-base ${location.pathname === '/infrastructure' ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-on-surface-variant font-medium hover:text-primary transition-colors'}`}>Infrastructure</Link>
          <Link to="/projects" className={`text-base ${location.pathname === '/projects' ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-on-surface-variant font-medium hover:text-primary transition-colors'}`}>Projects</Link>
          <Link to="/about" className={`text-base ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1 font-bold' : 'text-on-surface-variant font-medium hover:text-primary transition-colors'}`}>About</Link>
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <Link to="/profile" className="hidden md:inline-block text-sm font-bold text-primary mr-2 hover:underline">
              Hi, {user.name}
            </Link>
          )}
          <button onClick={handleQuoteClick} className="bg-primary text-on-primary px-6 py-3 rounded hover:bg-primary-container hover:text-on-primary-container transition-all font-bold font-label-caps text-label-caps hidden md:block">Request Quote</button>
          <button onClick={handleQuoteClick} className="bg-secondary-container text-on-secondary-container px-6 py-2.5 font-headline-md text-sm font-bold uppercase tracking-wider rounded-lg transition-all active:scale-95 md:hidden">Quote</button>
          
          {user && (
            <button onClick={logout} className="hidden md:block border-2 border-primary text-primary px-5 py-2.5 rounded hover:bg-primary hover:text-white transition-all font-bold font-label-caps text-label-caps">Logout</button>
          )}

          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
