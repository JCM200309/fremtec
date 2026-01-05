
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
  className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] flex items-center justify-center bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(rgba(10, 26, 26, 0.45) 0%, rgba(10, 26, 26, 0.85) 100%), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`
  }}
>

      
      {/* Ornamentación geométrica de fondo */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="decor-circle w-[800px] h-[800px] -top-96 -left-96"></div>
        <div className="decor-circle w-[600px] h-[600px] -bottom-48 -right-48"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-[1280px] text-center flex flex-col items-center z-10 pb-20 md:pb-24">

        
        {/* LOGO PROTAGONISTA 
        
        <div className="animate-brand-entry mb-10 mt-12 w-40 md:w-48 opacity-90">
          <Logo variant="hero" />
        </div>
        
        <div className="h-1 w-24 bg-secondary mb-10 rounded-full"></div>
        */}

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.03em] max-w-[1000px] mb-8">
          El Poder del Sol en <br className="hidden md:block" />
          <span className="text-secondary italic">Tus Manos</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-2xl font-light leading-relaxed max-w-[720px] mb-12 border-l-2 border-secondary/30 pl-6">
          Soluciones fotovoltaicas de alta ingeniería para el sector residencial e industrial de Argentina.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link 
            to="/presupuesto" 
            className="flex items-center justify-center rounded-xl h-16 px-12 bg-primary hover:bg-teal-600 text-white text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Comenzar mi Proyecto
          </Link>
          <button 
            onClick={() => navigate('/industrial')} 
            className="flex items-center justify-center rounded-xl h-16 px-12 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white text-lg font-medium transition-all w-full sm:w-auto"
          >
            Casos de Éxito
          </button>
        </div>
      </div>
      
      {/* Indicador de scroll - ARREGLADO Y ANIMADO */}
     <div className="absolute bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow z-30 flex flex-col items-center pointer-events-none">
  <span className="text-white text-[9px] uppercase tracking-[0.6em] mb-4 font-black opacity-60">Explorar</span>
  <div className="w-0.5 h-14 md:h-16 bg-gradient-to-b from-secondary via-secondary to-transparent rounded-full shadow-[0_0_15px_rgba(251,192,45,0.4)]"></div>
</div>

    </section>
  );
};

export default Hero;