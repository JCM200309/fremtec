
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 w-full">
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#111418]">
              {/* LOGO PROTAGONISTA */}
        
              <div className="animate-brand-entry w-40 md:w-48 opacity-90">
                <Logo/>
              </div>
              
             
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              Liderando la revolución solar en Argentina. Compromiso, calidad y eficiencia energética para un futuro sostenible.
            </p>
            <div className="flex gap-5">
              {['public', 'share', 'mail'].map((icon) => (
                <a key={icon} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-blue-50 transition-all" href="#">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#111418] font-bold text-lg">Empresa</h4>
            <div className="flex flex-col gap-3">
              {['Nosotros', 'Proyectos', 'Blog', 'Carreras'].map((link) => (
                <a key={link} className="text-gray-500 hover:text-primary transition-colors text-base" href="#">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Services Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#111418] font-bold text-lg">Servicios</h4>
            <div className="flex flex-col gap-3">
              {['Instalación Industrial', 'Paneles Residenciales', 'Mantenimiento', 'Consultoría Energética'].map((link) => (
                <a key={link} className="text-gray-500 hover:text-primary transition-colors text-base" href="#">{link}</a>
              ))}
            </div>
          </div>
          
          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#111418] font-bold text-lg">Contacto</h4>
            <div className="flex flex-col gap-4 text-base text-gray-500">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <span>Av. Libertador 1234, CABA, Argentina</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">call</span>
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">email</span>
                <span>info@fremtec.com.ar</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">© 2023 Fremtec. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Privacidad</a>
            <a className="hover:text-primary transition-colors" href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
