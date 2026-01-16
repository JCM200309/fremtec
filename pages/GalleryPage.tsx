
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111418] py-24 md:py-32">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Visualizando el Futuro</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Nuestra <span className="text-primary">Galería</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Un recorrido visual por nuestras instalaciones de vanguardia que están transformando la matriz energética argentina.
          </p>
        </div>
        
        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <section className="mb-20">
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

        <section>
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
