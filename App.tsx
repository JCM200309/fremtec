
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import DomesticSolutions from './components/DomesticSolutions';
import IndustrialSolutions from './components/IndustrialSolutions';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <DomesticSolutions />
        <IndustrialSolutions />
        <Features />
        <Stats />
        <FAQ />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
