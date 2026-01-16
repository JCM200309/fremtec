
import React from 'react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-[#111418] py-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-6">Centro de Soporte</h1>
          <p className="text-gray-400 text-xl">Todo lo que necesitás saber sobre la energía solar en Argentina.</p>
        </div>
      </div>
      <div className="py-20 min-h-[40vh]">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
