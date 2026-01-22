
import React from 'react';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';

const FAQPage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Centro de Soporte" 
        subtitle="Todo lo que necesitás saber sobre la energía solar en Argentina."
        backgroundImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <div className="py-12">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
