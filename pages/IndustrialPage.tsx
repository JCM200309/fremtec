
import React from 'react';
import IndustrialSolutions from '../components/IndustrialSolutions';

const IndustrialPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Industrial Hero */}
      <section className="relative bg-background-dark py-32 px-6 text-white overflow-hidden">
        <div className="decor-circle w-[600px] h-[600px] -top-1/2 -left-40"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-[0.2em] mb-8">Engineering & Efficiency</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Eficiencia que <br/><span className="text-primary italic">Impulsa</span> tu Industria
          </h1>
          <p className="text-xl text-gray-400 max-w-[700px] mx-auto leading-relaxed">
            Energía solar para tu empresa: simple, eficiente y con servicios de ingeniería que hoy nos requieren.
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
                  src="https://images.unsplash.com/photo-1559302995-f09577505246?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Industria Solar" 
                  className="w-full h-[650px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-primary/10 rounded-[60px] -z-10 translate-x-4 translate-y-4"></div>
              <div className="absolute top-10 -right-10 bg-secondary p-8 rounded-3xl shadow-xl z-30 max-w-[200px] transform rotate-3">
                <p className="text-background-dark font-black text-xs uppercase mb-2 tracking-widest">Compromiso</p>
                <p className="text-background-dark text-lg font-bold">Posicionamiento Corporativo Sustentable</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 leading-tight">Servicios de Ingeniería Especializada</h2>
              <div className="space-y-12">
                {[
                  { 
                    title: "Estudio de Eficiencia Energética", 
                    desc: "Analizamos el perfil de carga 24/7 y la calidad de energía de su planta para detectar fugas y optimizar consumos críticos.",
                    icon: "query_stats" 
                  },
                  { 
                    title: "Huella de Carbono", 
                    desc: "Medimos y certificamos la reducción de emisiones de CO2 de su proceso productivo, reforzando la imagen sustentable ante inversores y clientes.",
                    icon: "eco" 
                  },
                  { 
                    title: "Ingeniería de Inyección (OnGrid)", 
                    desc: "Implementamos sistemas de alta potencia que reducen drásticamente la dependencia de la red tradicional y bajan costos fijos mensuales.",
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
              <div className="mt-16">
                <button className="bg-background-dark text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary transition-all shadow-xl flex items-center gap-4">
                  Descargar Brochure Industrial
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Tech Grid */}
      <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 underline decoration-primary decoration-4 underline-offset-8">Garantía de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1548333341-97ad215ee2f7?auto=format&fit=crop&w=400&q=80" className="w-full h-64 object-cover rounded-[30px] mb-8 shadow-lg" alt="Termotanque" />
              <h3 className="text-xl font-bold mb-2">Termotanques Industriales</h3>
              <p className="text-gray-500 text-sm">Capacidad de 100 a 400 litros para uso comercial.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1466611653911-954ff21caaf0?auto=format&fit=crop&w=400&q=80" className="w-full h-64 object-cover rounded-[30px] mb-8 shadow-lg" alt="Bombeo" />
              <h3 className="text-xl font-bold mb-2">Bombeo Solar</h3>
              <p className="text-gray-500 text-sm">Desde 6.000 a 250.000 litros diarios.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=400&q=80" className="w-full h-64 object-cover rounded-[30px] mb-8 shadow-lg" alt="Estacion" />
              <h3 className="text-xl font-bold mb-2">Estaciones Solares</h3>
              <p className="text-gray-500 text-sm">Carga de dispositivos en espacios públicos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialPage;
