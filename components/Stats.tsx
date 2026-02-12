
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Instalaciones", value: "+500" },
    { label: "Años de vida útil", value: "25" },
    { label: "Soporte Local", value: "100%" },
    { label: "Monitoreo", value: "24/7" }
  ];

  return (
    <section className="w-full py-16 px-4 bg-primary text-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <span className="text-5xl lg:text-6xl font-black font-display mb-2 transition-transform group-hover:scale-110 duration-300">
              {stat.value}
            </span>
            <span className="text-base font-medium opacity-80 uppercase tracking-widest text-blue-100">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
