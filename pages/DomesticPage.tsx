
import React from 'react';
import DomesticSolutions from '../components/DomesticSolutions';

const DomesticPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Sector Hero */}
      <section className="bg-primary py-20 px-6 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Energía para tu Hogar</h1>
          <p className="text-xl opacity-90">Soluciones residenciales que transforman tu consumo en ahorro real y sustentable.</p>
        </div>
      </section>

      <DomesticSolutions />

      {/* Kits Section */}
      <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Kits Residenciales</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">Configuraciones prediseñadas para adaptarse a cualquier tipo de vivienda en Argentina.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Eco Inicio", panels: "4 Paneles", ideal: "Dptos / PH", icon: "energy_savings_leaf", desc: "Ideal para consumos bajos y espacios reducidos." },
              { name: "Hogar Estándar", panels: "8 Paneles", ideal: "Familia de 4", icon: "home", active: true, desc: "La solución más elegida por familias argentinas." },
              { name: "Premium Plus", panels: "16+ Paneles", ideal: "Casas con Piscina", icon: "villa", desc: "Máxima potencia para independencia total de la red." }
            ].map((kit, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-white shadow-lg border transition-all hover:-translate-y-2 ${kit.active ? 'border-primary ring-4 ring-primary/5' : 'border-gray-100'}`}>
                <span className="material-symbols-outlined text-primary text-5xl mb-6">{kit.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{kit.name}</h3>
                <p className="text-primary font-black text-3xl mb-4">{kit.panels}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{kit.desc}</p>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Ideal para: {kit.ideal}</div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${kit.active ? 'bg-primary text-white hover:bg-teal-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  Consultar Precio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-[700px] mx-auto italic text-2xl text-gray-400">
          "Desde que instalamos los paneles de Fremtec, nuestra factura de luz bajó un 85% y nos sentimos orgullosos de contribuir al planeta."
          <div className="not-italic text-sm font-bold text-gray-900 mt-6 uppercase tracking-widest">— Familia Gonzalez, Buenos Aires</div>
        </div>
      </section>
    </div>
  );
};

export default DomesticPage;
