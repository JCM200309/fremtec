
import React from 'react';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Seo
        title="Preguntas Frecuentes | Energía Solar | Fremtec"
        description="Respuestas a las dudas más comunes sobre energía solar en Argentina: instalación, costos, Ley de Generación Distribuida, mantenimiento y plazos. Fremtec te asesora."
        url="/faq"
      />
      <PageHero
        title="Centro de Soporte"
        subtitle="Todo lo que necesitás saber sobre la energía solar en Argentina."
      />
      <div className="py-12">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
