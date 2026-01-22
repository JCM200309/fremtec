import React from 'react';
import PageHero from '../components/PageHero';

const GalleryPage: React.FC = () => {
  const industrialImages = [
    { src: '/fotos/fotos-tio/industrial-header.jpeg', alt: 'Planta Industrial Solar 1' },
    { src: '/fotos/fotos-tio/industrial-centro.jpeg', alt: 'Instalación Central' },
    { src: '/fotos/fotos-tio/industrial-costado.jpeg', alt: 'Vista Lateral Industrial' },
    { src: '/fotos/fotos-tio/paneles-industrial.jpeg', alt: 'Paneles Industriales' },
    { src: '/fotos/fotos-tio/paneles-industrial2.jpeg', alt: 'Sistema Industrial' },
    { src: '/fotos/fotos-tio/industrial-techo.jpeg', alt: 'Instalación en Techo Industrial' },
  ];

  const residentialImages = [
    { src: '/fotos/fotos-tio/paneles-domestico.jpeg', alt: 'Paneles Residenciales' },
    { src: '/fotos/fotos-tio/casa-aereo.jpeg', alt: 'Vista Aérea Residencial' },
    { src: '/fotos/fotos-tio/panel-domestico-index.jpeg', alt: 'Panel Hogar' },
    { src: '/fotos/termotanque.jpg', alt: 'Termotanque Solar' },
    { src: '/fotos/bombeo_solar.jpg', alt: 'Bombeo Solar' },
    { src: '/fotos/Casa ejemplo Domestica.jpg', alt: 'Casa Sustentable' },
  ];

  return (
    <div className="w-full bg-white pb-20">
      <PageHero 
        title="Nuestra Galería" 
        subtitle="Explora nuestros proyectos realizados en los sectores industrial y residencial."
        backgroundImage="https://images.unsplash.com/photo-1509391366360-feaffa64d4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="mb-20" id="galeria_industrial">
          <h2 className="text-3xl font-bold text-[#111418] mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Sector Industrial
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-3xl">
            Implementaciones de gran escala diseñadas para optimizar el consumo energético de fábricas, almacenes y complejos industriales. Nuestras soluciones garantizan un retorno de inversión acelerado y una reducción significativa en la huella de carbono corporativa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialImages.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="galeria_residencial">
          <h2 className="text-3xl font-bold text-[#111418] mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            Sector Residencial
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-3xl">
            Transformamos hogares en espacios autosustentables. Desde paneles fotovoltaicos hasta sistemas de agua caliente solar, brindamos confort y ahorro a las familias argentinas con tecnología de vanguardia y estética cuidada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialImages.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;
