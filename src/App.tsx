import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importar las páginas
import HomePage from '../pages/HomePage';
import DomesticPage from '../pages/DomesticPage';
import IndustrialPage from '../pages/IndustrialPage';
import FAQPage from '../pages/FAQPage';
import PresupuestoPage from '../pages/PresupuestoPage';
import GalleryPage from '../pages/GalleryPage';
import OtherSolutionsPage from '../pages/OtherSolutionsPage';
import WhatsAppButton from '../components/WhatsAppButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Componente para animar el contenido de la página
const PageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-page-entry w-full">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[#f8fafd]">
        <Navbar />
        <main className="flex-grow flex flex-col items-center">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/residencial" element={<DomesticPage />} />
              <Route path="/industrial" element={<IndustrialPage />} />
              <Route path="/otras-soluciones" element={<OtherSolutionsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/presupuesto" element={<PresupuestoPage />} />
              <Route path="/galeria" element={<GalleryPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;