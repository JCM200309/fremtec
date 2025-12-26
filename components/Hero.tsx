
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[600px] md:h-[680px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`
      }}>
      <div className="container px-4 md:px-6 max-w-[1280px] text-center flex flex-col items-center gap-6 z-10">
        <span className="bg-secondary/20 text-secondary backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          Energía Renovable Argentina
        </span>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] max-w-[900px]">
          Energía Limpia para el Futuro de Argentina
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-[720px]">
          Soluciones fotovoltaicas de vanguardia para su hogar o industria. Reduzca costos y cuide el planeta con la tecnología de Fremtec.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <button 
            onClick={() => navigate('/residencial')} 
            className="flex items-center justify-center rounded-lg h-14 px-10 bg-primary hover:bg-teal-700 text-white text-lg font-bold shadow-lg transition-transform hover:scale-105 w-full sm:w-auto"
          >
            Hogar Inteligente
          </button>
          <button 
            onClick={() => navigate('/industrial')} 
            className="flex items-center justify-center rounded-lg h-14 px-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-bold transition-all w-full sm:w-auto"
          >
            Sector Industrial
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2 font-bold">Descubrir</span>
        <span className="material-symbols-outlined text-white/50">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
