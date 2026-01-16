
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Ahorro Económico",
      desc: "Reduzca drásticamente sus costos de electricidad a largo plazo.",
      icon: "savings",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      title: "Sustentabilidad",
      desc: "Energía 100% renovable para un medio ambiente más limpio.",
      icon: "eco",
      bgColor: "bg-green-50",
      iconColor: "text-secondary"
    },
    {
      title: "Gestion de trámite bidireccional",
      desc: "Ayudamos a realizar el trámite que va a permitir reinsertar leagalmente energia a la red",
      icon: "Contract",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      title: "Estudio de Carbono y eficiencia energetica",
      desc: "Junto a nuestros ingenieros realizaremos estudios para determinar la mejor configuracion para instalar",
      icon: "Co2",
      bgColor: "bg-green-50",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex flex-col gap-6 md:w-2/5">
            <h2 className="text-[#111418] text-3xl md:text-5xl font-bold leading-tight tracking-[-0.015em]">
              Por qué elegir Fremtec
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Tecnología avanzada y soporte local para su transición energética. Somos su socio estratégico en Argentina para un futuro más verde.
            </p>
            <button className="w-fit mt-4 text-primary font-bold hover:translate-x-2 transition-transform inline-flex items-center text-lg">
              Sobre Nosotros <span className="material-symbols-outlined ml-2">chevron_right</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-3/5">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-gray-50/50 p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center ${f.iconColor}`}>
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] text-xl font-bold">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
