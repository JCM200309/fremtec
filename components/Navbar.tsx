
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f0f2f4] py-2">
      <div className="flex items-center justify-between px-6 py-2 lg:px-10 max-w-[1440px] mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Logo variant="navbar" className="h-12" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-10">
            {[
              { path: '/', label: 'Inicio' },
              { path: '/residencial', label: 'Residencial' },
              { path: '/industrial', label: 'Industrial' },
              { path: '/faq', label: 'FAQ' }
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-semibold tracking-wider uppercase transition-all relative py-2
                  ${isActive(link.path) 
                    ? 'text-primary after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary' 
                    : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link 
            to="/presupuesto"
            className="flex min-w-[120px] items-center justify-center rounded-lg h-11 px-8 bg-primary hover:bg-teal-700 text-white text-xs font-black uppercase tracking-widest transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Presupuesto
          </Link>
        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-[#111418] p-2">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;