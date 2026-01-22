import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/residencial', label: 'Residencial' },
    { path: '/industrial', label: 'Industrial' },
    { path: '/otras-soluciones', label: 'Más Soluciones' },
    { path: '/galeria', label: 'Galería' },
    { path: '/faq', label: 'FAQ' }
  ];

  // Cierra el menú cuando cambia la ruta
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f0f2f4] py-2">
      <div className="flex items-center justify-between px-6 py-2 lg:px-10 max-w-[1440px] mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Logo variant="navbar" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-10">
            {links.map((link) => (
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#111418] p-2"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#f0f2f4] bg-white/95 backdrop-blur-md">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 px-2 rounded-lg font-semibold uppercase tracking-wider text-sm transition
                  ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-gray-700 hover:bg-gray-100'}
                `}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/presupuesto"
              className="mt-2 flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-teal-700 text-white text-xs font-black uppercase tracking-widest transition-all shadow-md hover:shadow-xl active:scale-95"
            >
              Presupuesto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
