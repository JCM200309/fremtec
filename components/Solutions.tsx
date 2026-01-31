
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Solutions: React.FC = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Soluciones Industriales",
      subtitle: "INDUSTRIA",
      description: "Impulse su industria con energia solar: menos costos, mayor eficiencia, más competitividad y un futuro sostenible.",
      image: "/fotos/paginaWeb/Industrial/industrialCampo.jpeg",
      icon: "factory",
      path: "/industrial",
      color: "primary"
    },
    {
      title: "Soluciones Domésticas",
      subtitle: "HOGAR",
      description: "Independencia energética y ahorro significativo en su factura de luz residencial con kits de fácil instalación.",
      image: "/fotos/paginaWeb/Residencial/residencialNueva.jpeg",
      icon: "home",
      path: "/residencial",
      color: "secondary"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#111418] text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">Nuestras Soluciones</h2>
          <p className="text-gray-600 max-w-[600px] text-lg">Diseñamos sistemas energéticos a medida para cada necesidad. Elija su sector para comenzar el cambio.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {solutions.map((sol, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 cursor-pointer"
              onClick={() => navigate(sol.path)}
            >
              <div className="h-80 w-full overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${sol.image}")` 
                }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="p-10 flex flex-col flex-1 relative z-10 bg-white group-hover:bg-gray-50/50 transition-colors duration-500">
                <div className={`flex items-center gap-2 mb-4 transition-transform duration-500 group-hover:translate-x-1 ${sol.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  <span className="material-symbols-outlined">{sol.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{sol.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#111418] mb-4 group-hover:text-primary transition-colors duration-500">{sol.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-lg">
                  {sol.description}
                </p>
                <div 
                  className={`inline-flex items-center font-bold transition-all group-hover:translate-x-3 text-left ${sol.color === 'primary' ? 'text-primary' : 'text-secondary'}`}
                >
                  Ver soluciones completas
                  <span className="material-symbols-outlined ml-2 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
