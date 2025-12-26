
import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <Features />
      <Stats />
    </>
  );
};

export default HomePage;
