
import React from 'react';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
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
