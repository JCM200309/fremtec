
import React from 'react';

const OtherSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Termotanques Industriales',
      description: 'Sistemas de calentamiento de agua a gran escala para industrias, hoteles y centros deportivos. Reducen drásticamente el costo operativo utilizando la energía térmica del sol.',
      image: '/fotos/termotanque.jpg',
      features: ['Alta eficiencia térmica', 'Tanques de gran capacidad', 'Larga vida útil', 'Bajo mantenimiento']
    },
    {
      title: 'Bombeo Solar',
      description: 'Soluciones de extracción de agua para el sector agropecuario e industrial sin dependencia de la red eléctrica o combustibles fósiles. Ideal para zonas remotas.',
      image: '/fotos/bombeo_solar.jpg',
      features: ['Funcionamiento autónomo', 'Sin costos de combustible', 'Apto para pozos profundos', 'Instalación modular']
    },
    {
      title: 'Estaciones de Carga (EV)',
      description: 'Infraestructura de carga para vehículos eléctricos integrada con sistemas fotovoltaicos. El futuro de la movilidad sostenible alimentado por energía limpia.',
      image: '/fotos/fotos-tio/instalacion-tecnico.jpeg',
      features: ['Carga rápida y ultra-rápida', 'Gestión inteligente de energía', 'Compatibilidad universal', 'Escalable']
    }
  ];

  return (
    <div className="w-full bg-white pb-20">
      <div className="bg-[#111418] py-24 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">Otras Soluciones Sustentables</h1>
          <p className="text-gray-400 text-xl">Más allá de los paneles, ofrecemos una gama completa de tecnologías para maximizar su eficiencia energética.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-24">
          {solutions.map((solution, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 w-full">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-[#111418]">{solution.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSolutionsPage;
