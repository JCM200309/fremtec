
import React from 'react';
import IndustrialSolutions from '../components/IndustrialSolutions';

const IndustrialPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Industrial Hero */}
      <section className="relative bg-background-dark py-24 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">División Corporativa</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Potencia Solar para <br/><span className="text-primary">Tu Empresa</span></h1>
          <p className="text-xl text-gray-300 max-w-[700px] mx-auto">Optimizamos los costos operativos de tu industria mediante ingeniería solar de alta precisión.</p>
        </div>
      </section>

      <IndustrialSolutions />

      {/* Process Section */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">Nuestra Metodología de Implementación</h2>
              <div className="space-y-10">
                {[
                  { t: "Estudio de Carga", d: "Analizamos el perfil de consumo 24/7 de su planta para dimensionar el sistema exacto que necesita.", icon: "analytics" },
                  { t: "Ingeniería y Gestión Legal", d: "Diseñamos el proyecto y gestionamos la inyección a red (Ley 27.424) ante el ente regulador.", icon: "gavel" },
                  { t: "Montaje Certificado", d: "Instalación bajo estrictas normas de seguridad industrial e higiene, minimizando el impacto en su producción.", icon: "construction" },
                  { t: "Monitoreo 24/7", d: "Seguimiento remoto de generación para asegurar el máximo retorno de inversión.", icon: "monitoring" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Ingeniería Solar Industrial" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary p-10 rounded-3xl shadow-2xl hidden xl:block max-w-[280px]">
                <div className="text-gray-900 text-5xl font-black mb-2">ROI</div>
                <div className="text-gray-900 font-bold text-sm uppercase tracking-wider">Retorno de inversión promedio entre 3 a 5 años</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Contact CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">¿Necesitás una auditoría energética?</h2>
            <p className="opacity-80">Nuestros ingenieros visitan tu planta sin cargo.</p>
          </div>
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-secondary hover:text-gray-900 transition-all shadow-xl">
            Agendar Visita Técnica
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndustrialPage;
