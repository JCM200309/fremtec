
import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Seo from '../components/Seo';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Fremtec - Energía Solar Argentina | Hogares e Industrias"
        description="Empresa líder en energía solar en Argentina. Instalación de paneles solares para hogares e industrias. Sistemas on-grid, híbridos y off-grid. Presupuesto sin cargo."
      />
      <Hero />
      <Solutions />
      <Features />
      <Stats />
    </>
  );
};

export default HomePage;
