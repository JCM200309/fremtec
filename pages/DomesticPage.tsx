
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DomesticSolutions from '../components/DomesticSolutions';
import { HashLink } from "react-router-hash-link";
import Seo from '../components/Seo';

const DomesticPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <Seo
        title="Energía Solar Residencial | Fremtec Argentina"
        description="Sistemas solares para tu hogar en Argentina: on-grid, híbridos y off-grid. Ahorro en la factura de luz, respaldo ante cortes y gestión de trámites Ley 27.424. Presupuesto gratuito."
        image="/fotos/paginaWeb/Residencial/heroResidencial.jpeg"
        url="/residencial"
      />
      {/* Sector Hero Hogar - Imagen: Domestica_hero.jpg */}
      <section className="hero-correct-size flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background-dark/30 z-10 "></div>
        <img
          src="/fotos/paginaWeb/Residencial/heroResidencial.jpeg"
          alt="Instalación de paneles solares residenciales en un hogar en Argentina"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          fetchPriority="high"
        />
        <div className="relative z-20 text-center px-6 max-w-[900px]">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-background-dark text-xs font-black uppercase tracking-widest mb-6 shadow-xl">Hogar Sustentable</span>
          <h1 className="text-white font-black mb-6 leading-tight drop-shadow-2xl title-hero-texts">
            Tu Hogar, <span className="text-secondary">Tu Energía</span>
          </h1>
          <p className="text-white mx-auto drop-shadow-md p-hero-texts">
            Asesoramos y dimensionamos sistemas solares a medida para el confort de tu familia y el ahorro real.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center sm:w-auto sm:text-sm py-20 buttons-hero-texts ">
            <HashLink smooth to="/galeria#galeria_residencial" className="flex items-center rounded-xl h-14 2xl:h-16 px-12 bg-primary hover:bg-teal-600 text-white font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto buttons-hero-size">
              Nuestros proyectos residenciales
            </HashLink>
          </div>


        </div>
      </section>

      <DomesticSolutions />

      {/* Tipos de Sistemas Residenciales */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="decor-circle w-[400px] h-[400px] -top-20 -right-20 opacity-50"></div>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 underline decoration-secondary decoration-4 underline-offset-8">Tecnología para tu Vivienda</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto">Nos especializamos en el diseño e instalación de sistemas adaptados a tus necesidades extraídas de nuestra experiencia en Argentina.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "On-Grid",
                icon: "settings_input_antenna",
                desc: "Conectado a la red eléctrica. Ideal para reducir la factura de luz inyectando excedentes bajo la Ley 27.424.",
                features: ["Ahorro directo", "Inyección a red", "Bajo mantenimiento", "Gestion de trámite bidireccional"]

              },
              {
                name: "Híbrido",
                icon: "battery_charging_full",
                active: true,
                desc: "Backup energético mediante red y baterías. Seguridad ante cortes de suministro y gestión inteligente.Sistema que sirve de ahorro energético y las batarias cubre ante cortes de luz. Es una combinación del equipo on grid y el off grid",
                features: ["Respaldo 24/7", "Máxima eficiencia", "Energía ininterrumpida", "Gestion de trámite bidireccional"]
              },
              {
                name: "Off-Grid",
                icon: "power_off",
                desc: "Independencia total. Ideal para zonas aisladas o campos donde la red no llega, con almacenamiento de alta capacidad.",
                features: ["100% Autónomo", "Baterías de Litio", "Zonas remotas"]
              }
            ].map((system, i) => (
              <div key={i} className={`group p-8 rounded-[40px] border-2 transition-all duration-300 flex flex-col ${system.active ? 'border-secondary bg-background-dark text-white shadow-2xl scale-105' : 'border-gray-100 bg-white hover:border-primary'}`}>
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
                <button
                  onClick={() => navigate('/presupuesto')}
                  className={`w-full py-4 rounded-2xl font-black transition-all ${system.active ? 'bg-secondary text-background-dark hover:brightness-110' : 'bg-primary text-white hover:bg-teal-700'}`} link>
                  Solicitar Presupuesto

                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticPage;
