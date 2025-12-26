
import React, { useState } from 'react';

const PresupuestoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    type: 'residencial',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simular envío
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Cotización Online</span>
          <h1 className="text-4xl md:text-6xl font-black text-background-dark mt-4 mb-6">Solicitá tu Presupuesto</h1>
          <p className="text-gray-500 text-xl max-w-[600px] mx-auto">Completá el formulario y uno de nuestros ingenieros te contactará para realizar un dimensionamiento a medida.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border border-gray-100">
          <div>
            <h2 className="text-2xl font-bold mb-8">Información del Proyecto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  placeholder="Ej: Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Teléfono</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="+54 9 11 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Ubicación (Ciudad/Provincia)</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  placeholder="Ej: CABA, Buenos Aires"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Solución</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="residencial">Residencial (Hogar)</option>
                  <option value="industrial">Industrial / Corporativo</option>
                  <option value="agro">Agropecuario (Bombeo)</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Detalles del Proyecto / Consumo Mensual (kWh)</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                  placeholder="Contanos sobre tu necesidad energética..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${submitted ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-teal-700 hover:scale-[1.02]'}`}
              >
                {submitted ? '¡Solicitud Enviada!' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>

          <div className="bg-background-dark p-10 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-8">
                {[
                  { t: "Estudio Personalizado", d: "Analizamos tu factura de luz para darte un ROI exacto.", i: "analytics" },
                  { t: "Soporte Local", d: "Atención técnica inmediata en toda la Argentina.", i: "engineering" },
                  { t: "Calidad Certificada", d: "Equipos de primera línea con 25 años de garantía.", i: "verified" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="material-symbols-outlined text-secondary text-4xl">{item.i}</span>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.t}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-secondary font-bold text-lg mb-4">Atención Inmediata</p>
              <div className="flex flex-col gap-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span>presupuestos@fremtec.com.ar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>+54 9 11 5057-2126 (Zona Norte)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresupuestoPage;
