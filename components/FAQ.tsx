
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cuánto tiempo tarda la instalación?",
      a: "Para una casa promedio, la instalación física suele demorar entre 1 y 2 días. Para proyectos industriales, el plazo varía según la magnitud pero suele rondar entre 2 y 4 semanas."
    },
    {
      q: "¿Qué sucede en los días nublados?",
      a: "Los paneles solares siguen generando energía incluso en días nublados, aunque a una eficiencia menor. Durante la noche, el sistema utiliza energía de la red eléctrica o de baterías si el sistema es Off-Grid."
    },
    {
      q: "¿Es legal inyectar energía a la red en Argentina?",
      a: "Sí, gracias a la Ley 27.424 de Generación Distribuida. Si generás más de lo que consumís, el excedente se inyecta a la red y la compañía eléctrica te lo reconoce como un crédito en tu factura."
    },
    {
      q: "¿Qué mantenimiento requieren los paneles?",
      a: "El mantenimiento es mínimo. Básicamente requieren limpieza periódica de la superficie (como un vidrio común) para evitar que el polvo reduzca la captación de luz. No tienen partes móviles que se desgasten."
    },
    {
      q: "¿Cómo sé cuántos paneles necesito?",
      a: "Depende de tu consumo histórico (que podés ver en tu factura de luz). Nuestro equipo técnico realiza un dimensionamiento personalizado basado en tus necesidades actuales y futuras."
    }
  ];

  return (
    <section id="faq" className="w-full py-24 px-6 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#111418] mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-500 text-lg">Todo lo que necesitás saber antes de dar el paso hacia la energía solar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all ${openIndex === idx ? 'border-primary bg-blue-50/20' : 'border-gray-100 bg-white'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold ${openIndex === idx ? 'text-primary' : 'text-[#111418]'}`}>
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                  keyboard_arrow_down
                </span>
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-600 mb-4">¿Tenés otra duda específica?</p>
          <a href="https://wa.me/541112345678" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Hablá con nuestro equipo técnico</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
