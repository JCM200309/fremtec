
import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <div className="py-20 min-h-[60vh]">
      <div className="max-w-[800px] mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-4">Centro de Soporte</h1>
        <p className="text-gray-500 text-xl">Todo lo que necesitás saber sobre la energía solar en Argentina.</p>
      </div>
      <FAQ />
    </div>
  );
};

export default FAQPage;
