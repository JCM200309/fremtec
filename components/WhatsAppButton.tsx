
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "541112345678"; // Ajustar al número real si es necesario
  const message = encodeURIComponent("Hola, quiero más información sobre paneles solares");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/fotos/whatsapp.png" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
        Contactanos
      </span>
    </a>
  );
};

export default WhatsAppButton;
