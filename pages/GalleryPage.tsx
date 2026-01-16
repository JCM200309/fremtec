
import React from 'react';

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
      <div className="bg-[#f8fafd] py-20 px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111418] mb-6">Nuestra Galería</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestros proyectos realizados en los sectores industrial y residencial.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#111418] mb-10 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Sector Industrial
          </h2>
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

        <section>
          <h2 className="text-3xl font-bold text-[#111418] mb-10 flex items-center gap-3">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            Sector Residencial
          </h2>
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
