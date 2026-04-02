
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (

    <section

      className="hero-correct-size flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 26, 26, 0.45) 0%, rgba(10, 26, 26, 0.85) 100%), url("/fotos/heroPrincipal.jpg")`,
        backgroundPosition: "center 80%"
      }}
    >

      {/* Ornamentación geométrica de fondo */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="decor-circle w-[800px] h-[800px] -top-96 -left-96"></div>
        <div className="decor-circle w-[600px] h-[600px] -bottom-48 -right-48"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-[1280px] text-center flex flex-col items-center justify-center z-10 min-h-[60vh]">

        <h1 className="text-white title-hero-texts font-black leading-tight tracking-[-0.03em] max-w-[1000px] mb-8">
          Empresa líder en energía solar <br className="hidden md:block" />
          <span className="text-secondary italic">Hogares e Industrias</span>
        </h1>

        <p className="text-white text-base p-hero-texts font-light leading-relaxed max-w-[720px] mb-12 border-l-2 border-secondary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          Soluciones solares a medida para todas las necesidades.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 lg:w-full lg:justify-center sm:w-auto buttons-hero-texts buttons-hero-size">
          <Link
            to="/presupuesto"
            className="flex items-center justify-center rounded-xl px-12 bg-primary hover:bg-teal-600 text-white font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto buttons-hero-size"
          >
            Comenzar mi Proyecto
          </Link>
          <button
            onClick={() => navigate('/Galeria')}
            className="flex items-center justify-center rounded-xl px-12 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium transition-all w-full sm:w-auto buttons-hero-size"
          >
            Nuestros proyectos residenciales
          </button>
        </div>
      </div>

      {/* Indicador de scroll - ARREGLADO Y ANIMADO */}

      <div className="flex absolute bottom-4 sm:bottom-1 md:bottom-2 left-1/2 right-1/2 -translate-x-1/2 animate-bounce-slow z-30 flex-col items-center pointer-events-none">

        <span className="text-white text-[9px] uppercase tracking-[0.6em] mb-4 font-black opacity-60">Explorar</span>
        <div className="w-0.5 h-10 md:h-16 bg-gradient-to-b from-secondary via-secondary to-transparent rounded-full shadow-[0_0_15px_rgba(251,192,45,0.4)]"></div>
      </div>

    </section>
  );
};

export default Hero;