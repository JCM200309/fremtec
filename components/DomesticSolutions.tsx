
import React from 'react';

const DomesticSolutions: React.FC = () => {
  const benefits = [
    { title: "Ahorro Inmediato", desc: "Reduce hasta un 70% tu factura de luz desde el primer día.", icon: "account_balance_wallet" },
    { title: "Valorización", desc: "Una casa con paneles solares incrementa su valor de mercado significativamente.", icon: "trending_up" },
    { title: "Independencia", desc: "Protegete contra los aumentos de tarifas y cortes de suministro.", icon: "bolt" },
    { title: "Fácil Instalación", desc: "Nuestros sistemas se instalan en menos de 48 horas sin obras complejas.", icon: "build" }
  ];

  return (
    <section id="domestica" className="w-full py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">home</span> Soluciones Residenciales
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111418] mb-8 leading-tight">
              Transformá tu hogar en una fuente de energía limpia.
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              En Argentina, el sol es un recurso inagotable. Con Fremtec Doméstica, podés generar tu propia energía, inyectar el excedente a la red mediante la Ley de Generación Distribuida y ahorrar miles de pesos anualmente. 
              <br></br>Ser totalmente independiente de la energía y contar con una solución ante cortes de luz
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <span className="material-symbols-outlined text-primary text-3xl mb-1">{b.icon}</span>
                  <h4 className="font-bold text-[#111418]">{b.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              {/* Imagen: Casa ejemplo domestica.jpg */}
              <img 
                src="/fotos/Casa ejemplo Domestica.jpg" 
                alt="Casa ejemplo domestica" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50 hidden md:block max-w-[280px]">
              <div className="text-primary text-5xl font-black mb-2 italic">70%</div>
              <div className="text-gray-900 text-sm font-bold uppercase tracking-widest">Ahorro promedio reportado por nuestros clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomesticSolutions;
