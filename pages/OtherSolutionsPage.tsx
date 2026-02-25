import React from 'react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

const OtherSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Cargadores para vehículos eléctricos',
      description: 'Infraestructura de carga para vehículos eléctricos integrada con sistemas fotovoltaicos. El futuro de la movilidad sostenible alimentado por energía limpia.',
      image: '/fotos/paginaWeb/Otras/pinDeCargaAuto.jpg',
      features: ['Carga rápida y ultra-rápida', 'Gestión inteligente de energía', 'Compatibilidad universal', 'Escalable']
    },
    {
      title: 'Carpot Solares',
      description: 'Estructuras de estacionamiento diseñadas para proteger vehículos, que integran paneles fotovoltaicos en su cubierta. Transforman un espacio pasivo (el parking) en una central de generación eléctrica, permitiendo alimentar las instalaciones de la empresa o cargar flotas de vehículos eléctricos.',
      image: '/fotos/paginaWeb/Otras/carPotNuevo.png',
      features: ['Carga rápida y ultra-rápida', 'Gestión inteligente de energía', 'Compatibilidad universal', 'Escalable']
    },
    {
      title: 'Termotanques Industriales',
      description: 'Sistemas de captación térmica diseñados para calentar agua utilizando exclusivamente la radiación solar. Gracias a sus tubos de vacío de alta eficiencia y tanques térmicos aislados, permiten cubrir hasta el 80% de las necesidades de agua caliente anuales, eliminando la dependencia de combustibles fósiles o resistencias eléctricas.',
      image: '/fotos/paginaWeb/Otras/termotanque.jpeg',
      features: ['Alta eficiencia térmica', 'Tanques de gran capacidad', 'Larga vida útil', 'Bajo mantenimiento']
    },
    {
      title: 'Bombeo Solar',
      description: 'Soluciones avanzadas de extracción y movimiento de agua que funcionan directamente con energía fotovoltaica. Estos sistemas eliminan la necesidad de red eléctrica o generadores de combustible, permitiendo el abastecimiento de agua en lugares remotos de forma automatizada y eficiente. ',
      image: '/fotos/bombeo_solar.jpg',
      features: ['Funcionamiento autónomo', 'Sin costos de combustible', 'Apto para pozos profundos', 'Instalación modular']
    }
    
    
  ];

  return (
    <div className="w-full bg-white pb-20">
      <Seo
        title="Otras Soluciones Solares | Carpot, Bombeo, EV | Fremtec"
        description="Cargadores para autos eléctricos, carport solares, termotanques solares industriales y bombeo solar en Argentina. Soluciones a medida más allá de los paneles fotovoltaicos."
      />
      <PageHero 
        title="Otras Soluciones" 
        subtitle="Mucho más que paneles: desarrollamos proyectos a medida en movilidad sustentable, gestión hídrica y energía térmica para optimizar todos sus recursos."

      />

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-24">
          {solutions.map((solution, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 w-full">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
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
