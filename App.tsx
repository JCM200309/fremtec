
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importar las páginas
import HomePage from './pages/HomePage';
import DomesticPage from './pages/DomesticPage';
import IndustrialPage from './pages/IndustrialPage';
import FAQPage from './pages/FAQPage';
import PresupuestoPage from './pages/PresupuestoPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#f8fafd]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/residencial" element={<DomesticPage />} />
            <Route path="/industrial" element={<IndustrialPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/presupuesto" element={<PresupuestoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
