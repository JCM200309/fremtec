
import React from 'react';
import { useNavigate} from 'react-router-dom';

const IndustrialSolutions: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="industria" className="w-full py-24 px-6 bg-background-light">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm">factory</span> Energía Corporativa
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111418] mb-6 max-w-[800px]">
            Eficiencia Energética para la Industria.
          </h2>
          <p className="text-gray-600 text-lg max-w-[700px]">
            Diseñamos e instalamos parques industriales que reducen los costos operativos y mejoran la competitividad de tu empresa como también parques solares para venta de energia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Parques Solares</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Instalaciones a gran escala para plantas industriales y campos, optimizando el uso de superficies no aprovechadas.
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Alta Potencia (MW)</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Sistemas On-Grid/Off-Grid</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Leyes que regulan</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              <strong>Ley 27.424, Generacion Distribuida:</strong>
              Esta es la ley que permite a una empresa ser "Usuario-Generador".
              <br></br>
              <strong>Ley 27.191, Régimen de Fomento para Grandes Usuarios: </strong>
               Para clientes que consuman más de 300 kW de potencia, la ley lo obliga a que una parte de su energía sea renovable (la meta para 2025/2026 es del 20%)
            </p>
            
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Garantía y Soporte</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Mantenimiento preventivo y monitoreo remoto 24/7 para asegurar que tu producción nunca se detenga.
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Monitoreo en Tiempo Real</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Respuesta Técnica en 24h</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-primary rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-bold mb-2">¿Tu empresa gasta mucho en energía?</h3>
            <p className="text-teal-50 text-lg">Realizamos auditorías energéticas gratuitas para proyectos industriales.</p>
          </div>
          <button
           onClick={() => navigate('/presupuesto')}
          className="relative z-10 px-8 py-4 bg-secondary text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform">
            Solicitar Auditoría
          </button>
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSolutions;
