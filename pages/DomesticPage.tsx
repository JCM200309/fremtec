
import React from 'react';
import DomesticSolutions from '../components/DomesticSolutions';

const DomesticPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Sector Hero Hogar */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1518005020250-675f0f0fd17b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hogar Solar" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-[900px]">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-tight">
            Tu Hogar, <span className="text-secondary">Tu Energía</span>
          </h1>
          <p className="text-white/90 text-xl font-medium max-w-[600px] mx-auto">
            Asesoramos y dimensionamos sistemas solares a medida para el confort de tu familia y el ahorro real.
          </p>
        </div>
      </section>

      <DomesticSolutions />

      {/* Tipos de Sistemas Residenciales */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="decor-circle w-[400px] h-[400px] -top-20 -right-20"></div>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 underline decoration-secondary decoration-4 underline-offset-8">Tecnología para tu Vivienda</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">Nos especializamos en el diseño e instalación de sistemas adaptados a tus necesidades.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "On-Grid", 
                icon: "settings_input_antenna", 
                desc: "Conectado a la red eléctrica. Ideal para reducir la factura de luz inyectando excedentes (Ley 27.424).",
                features: ["Ahorro directo", "Inyección a red", "Bajo mantenimiento"]
              },
              { 
                name: "Híbrido", 
                icon: "battery_charging_full", 
                active: true,
                desc: "Lo mejor de ambos mundos: ahorro mediante la red y respaldo de baterías para cortes de suministro.",
                features: ["Backup energético", "Gestión inteligente", "Seguridad 24/7"]
              },
              { 
                name: "Off-Grid", 
                icon: "power_off", 
                desc: "Independencia total de la red eléctrica. Ideal para campos, zonas aisladas o casas de fin de semana.",
                features: ["100% Autónomo", "Baterías ciclo profundo", "Zonas remotas"]
              }
            ].map((system, i) => (
              <div key={i} className={`group p-8 rounded-[40px] border-2 transition-all duration-300 flex flex-col ${system.active ? 'border-secondary bg-background-dark text-white' : 'border-gray-100 bg-white hover:border-primary'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${system.active ? 'bg-secondary text-background-dark' : 'bg-primary/10 text-primary'}`}>
                  <span className="material-symbols-outlined text-4xl">{system.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4">{system.name}</h3>
                <p className={`text-sm leading-relaxed mb-8 flex-grow ${system.active ? 'text-gray-300' : 'text-gray-600'}`}>{system.desc}</p>
                <ul className="space-y-3 mb-10">
                  {system.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-bold">
                      <span className={`material-symbols-outlined text-sm ${system.active ? 'text-secondary' : 'text-primary'}`}>check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-black transition-all ${system.active ? 'bg-secondary text-background-dark hover:scale-105' : 'bg-primary text-white hover:bg-teal-700'}`}>
                  Solicitar Dimensionamiento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Venta Quote */}
      <section className="py-24 px-6 bg-background-dark text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <span className="text-secondary text-5xl font-display mb-8 block">“</span>
          <p className="text-2xl md:text-3xl italic leading-relaxed mb-8">
            Nuestra prioridad es que tengas una solución confiable, con ahorro real y soporte técnico de ingeniería cuando lo necesites.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          <div className="uppercase tracking-[0.3em] text-xs font-bold text-gray-400">Garantía y Acompañamiento Fremtec</div>
        </div>
      </section>
    </div>
  );
};

export default DomesticPage;
