
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Solutions: React.FC = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Soluciones Industriales",
      subtitle: "INDUSTRIA",
      description: "Maximice la eficiencia operativa y reduzca la huella de carbono de su empresa con parques solares a gran escala.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "factory",
      path: "/industrial",
      color: "primary"
    },
    {
      title: "Soluciones Domésticas",
      subtitle: "HOGAR",
      description: "Independencia energética y ahorro significativo en su factura de luz residencial con kits de fácil instalación.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "home",
      path: "/residencial",
      color: "secondary"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-background-light">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#111418] text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">Nuestras Soluciones</h2>
          <p className="text-gray-600 max-w-[600px] text-lg">Diseñamos sistemas energéticos a medida para cada necesidad. Elija su sector para comenzar el cambio.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((sol, idx) => (
            <div key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="h-72 w-full overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${sol.image}")` }}
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className={`flex items-center gap-2 mb-4 ${sol.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  <span className="material-symbols-outlined">{sol.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{sol.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#111418] mb-4">{sol.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-lg">
                  {sol.description}
                </p>
                <button 
                  onClick={() => navigate(sol.path)}
                  className={`inline-flex items-center font-bold transition-all group-hover:translate-x-2 text-left ${sol.color === 'primary' ? 'text-primary' : 'text-secondary'}`}
                >
                  Ver soluciones completas
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
