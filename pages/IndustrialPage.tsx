
import React from 'react';
import IndustrialSolutions from '../components/IndustrialSolutions';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"

const IndustrialPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Industrial Hero - Imagen: industria.jpg */}
      
      <section className="hero-correct-size relative flex items-center justify-center bg-background-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="decor-circle w-[600px] h-[600px] -top-1/2 -left-40 opacity-20"></div>
          {/* Esta foto queda mucho mejor [url('/fotos/paginaWeb/Industrial/industrialCampo.jpeg')]*/}
          <div className="absolute inset-0 opacity-45 bg-[url('/fotos/heroIndustrial.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark/90"></div>
        </div>
        
        <div className="relative z-10 container px-4 md:px-6 max-w-[1280px] text-center flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="title-hero-texts font-black mb-6 leading-tight tracking-tighter drop-shadow-xl">
            Energía para <br/><span className="text-primary italic">Tu Industria</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-[700px] mx-auto leading-relaxed drop-shadow-md p-hero-texts mb-12">
            Optimizamos costos operativos mediante ingeniería solar de alta precisión y servicios de auditoría energética especializada.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center sm:w-auto buttons-hero-texts">
            <HashLink smooth to="/galeria#galeria_industrial" className="flex items-center justify-center rounded-xl px-12 bg-primary hover:bg-teal-600 text-white font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto h-14 buttons-hero-size">
              Nuestros proyectos industriales
            </HashLink>
          </div>
        </div>
      </section>

      <IndustrialSolutions />

      {/* Corporate Strategy Section */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-2xl relative z-20">
                <img //https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80
                  src="fotos/ingeniero.jpeg" 
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
                  },
                  { 
                    title: "Venta de energia a cooperativas (CAMBIAR TITULO)", 
                    desc: "El excedente se puede vender a distintas cooperativas para asi obtener un ingreso extra (CAMBIAR texto)",
                    icon: "Attach_Money" 
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

      
    </div>
  );
};

export default IndustrialPage;
