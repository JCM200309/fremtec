
import React from 'react';
import IndustrialSolutions from '../components/IndustrialSolutions';

const IndustrialPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Industrial Hero - Imagen: industria.jpg */}
      <section className="relative bg-background-dark py-40 px-6 text-white overflow-hidden">
        <div className="decor-circle w-[600px] h-[600px] -top-1/2 -left-40 opacity-20"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-[0.2em] mb-8">Engineering & Efficiency Argentina</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter drop-shadow-lg">
            Energía para <br/><span className="text-primary italic">Tu Industria</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed drop-shadow-md">
            Optimizamos costos operativos mediante ingeniería solar de alta precisión y servicios de auditoría energética especializada.
          </p>
        </div>
      </section>

      <IndustrialSolutions />

      {/* Corporate Strategy Section */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-2xl relative z-20">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Industria Solar" 
                  className="w-full h-[650px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-primary/10 rounded-[60px] -z-10 translate-x-4 translate-y-4"></div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 leading-tight">Servicios de Ingeniería</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Eficiencia Energética", 
                    desc: "Analizamos el perfil de carga y calidad de energía para detectar fugas y optimizar consumos críticos en plantas industriales.",
                    icon: "query_stats" 
                  },
                  { 
                    title: "Huella de Carbono", 
                    desc: "Certificamos la reducción de emisiones de CO2, mejorando el posicionamiento corporativo y cumpliendo normas internacionales.",
                    icon: "eco" 
                  },
                  { 
                    title: "Ingeniería On-Grid", 
                    desc: "Sistemas de inyección de alta potencia para reducir drásticamente los costos fijos mensuales y la dependencia de red.",
                    icon: "electric_bolt" 
                  }
                ].map((service, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-gray-50 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-lg">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 underline decoration-primary decoration-4 underline-offset-8">Garantía de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              {/* Imagen: termotanque */}
              <img src="../fotos/termotanque.jpg" className="w-full h-72 object-cover rounded-[40px] mb-8 shadow-xl" alt="Termotanque Solar" />
              <h3 className="text-2xl font-bold mb-2">Termotanques Industriales</h3>
              <p className="text-gray-500">Capacidad de alto rendimiento para consumos comerciales.</p>
            </div>
            <div className="flex flex-col items-center">
              {/* Imagen: bombeo_solar.jpg */}
              <img src="../fotos/bombeo_solar.jpg" className="w-full h-72 object-cover rounded-[40px] mb-8 shadow-xl" alt="Bombeo Solar" />
              <h3 className="text-2xl font-bold mb-2">Bombeo Solar</h3>
              <p className="text-gray-500">Soluciones de riego y extracción para el sector agropecuario.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=600&q=80" className="w-full h-72 object-cover rounded-[40px] mb-8 shadow-xl" alt="Estacion Solar" />
              <h3 className="text-2xl font-bold mb-2">Estaciones de Carga</h3>
              <p className="text-gray-500">Carga de dispositivos en espacios públicos y privados.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialPage;
