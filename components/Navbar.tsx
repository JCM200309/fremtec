
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f0f2f4]">
      <div className="flex items-center justify-between px-6 py-4 lg:px-10 max-w-[1280px] mx-auto w-full">
        <a href="#" className="flex items-center gap-3">
          <Logo className="h-10" />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors" href="#">Inicio</a>
            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors" href="#domestica">Residencial</a>
            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors" href="#industria">Industrial</a>
            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-teal-700 text-white text-sm font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
            Solicitar Presupuesto
          </button>
        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-[#111418]">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
