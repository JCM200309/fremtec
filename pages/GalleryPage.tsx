import React from "react";
import PageHero from "../components/PageHero";
import ImageCarousel from "../components/ImageCarousel";
import Seo from "../components/Seo";

const GalleryPage: React.FC = () => {
  const industrialImages = [
    { src: "/fotos/fotos-tio/industrial-header.jpeg", alt: "Planta Industrial Solar 1" },
    { src: "/fotos/paginaWeb/Industrial/industrial1.jpg", alt: "Instalación Central" },
    { src: "/fotos/paginaWeb/Industrial/industrial2.jpg", alt: "Vista Lateral Industrial" },
    { src: "/fotos/paginaWeb/Industrial/industrial3.jpeg", alt: "Paneles Industriales" },
    { src: "/fotos/paginaWeb/Industrial/industrialTecnico.jpeg", alt: "Sistema Industrial" },
    { src: "/fotos/paginaWeb/Industrial/tablero2.jpg", alt: "Instalación en Techo Industrial" },
  ];

  const residentialImages = [
    { src: "/fotos/paginaWeb/Residencial/residencial_soluciones3.jpeg", alt: "Paneles Residenciales" },
    { src: "/fotos/fotos-tio/casa-aereo.jpeg", alt: "Vista Aérea Residencial" },
    { src: "/fotos/fotos-tio/panel-domestico-index.jpeg", alt: "Panel Hogar" },
    { src: "/fotos/paginaWeb/Residencial/residencial1.jpeg", alt: "Casa residencial",  },
    { src: "/fotos/paginaWeb/Residencial/tableroHorizontal.jpg", alt: "Casa residencial"},
    { src: "/fotos/paginaWeb/Residencial/residencialCasaArriba.jpg", alt: "Casa Sustentable" },
  ];

  return (
    <div className="w-full bg-white pb-20">
      <Seo
        title="Galería de Proyectos | Instalaciones Solares | Fremtec"
        description="Proyectos de energía solar realizados por Fremtec en Argentina: instalaciones residenciales e industriales. Conocé nuestro trabajo y resultados."
      />
      <PageHero
        title="Nuestra Galería"
        subtitle="Explora nuestros proyectos realizados en los sectores industrial y residencial."
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

          <ImageCarousel
            images={industrialImages}
            autoplay
            intervalMs={3500}
            aspectClassName="h-[480px] md:h-[640px]"
            fit="cover"
          />


        </section>

        <section id="galeria_residencial">
          <h2 className="text-3xl font-bold text-[#111418] mb-4 flex items-center gap-3">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            Sector Residencial
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-3xl">
            Transformamos hogares en espacios autosustentables. Desde paneles fotovoltaicos hasta sistemas de agua caliente solar, brindamos confort y ahorro a las familias argentinas con tecnología de vanguardia y estética cuidada.
          </p>

          <ImageCarousel
            images={residentialImages}
            autoplay
            intervalMs={3800}
            aspectClassName="h-[480px] md:h-[640px]"
            fit="cover"
            className="[&_.bg-primary]:bg-secondary"
          />

        </section>
      </div>
    </div>
  );
};

export default GalleryPage;
