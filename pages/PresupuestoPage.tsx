import FileUploader from '@/components/FileUploader';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha"

type presupuestoForm = {
  name: string;
  email: string;
  phone: string;
  location: string;
  type: 'residencial' | 'industrial' | 'agro' | 'otro' | '';
  subType: '' | 'OffGrid' | 'Hibrido' | 'OnGrid';
  details: string;
  file: File | null;
};

const PresupuestoPage: React.FC = () => {
  const [formData, setFormData] = useState<presupuestoForm>({
    name: '',
    email: '',
    phone: '',
    location: '',
    type: 'industrial',
    subType: '',
    details: '',
    file: null 
  });

  const [capVal, setCapVal] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const showResidentialSubType = formData.type === 'residencial';

  type UploadStatus = "idle" | "uploading" | "success" | "error";
  const [fileStatus, setFileStatus] = useState<UploadStatus>("idle");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // ✅ Validación condicional (antes del fetch)
    if (formData.type === 'residencial' && !formData.subType){
      //Caso que eligio residencial y dejo por default el subtype = onGrid
      //setStatus('error');
      //setErrorMsg('Si elegís "Residencial", seleccioná el tipo de solucion.');
      formData.subType = 'OnGrid'
    }


    try {
      const fd = new FormData();

      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("location", formData.location);
      fd.append("type", formData.type);
      fd.append("Subtype", formData.subType)
      fd.append("details", formData.details);

      if (file){
        fd.append("file",file)
      }

      console.log(fd);
      const res = await fetch('/api/presupuesto', {
        method: 'POST',
        body: fd,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || 'No se pudo enviar la solicitud.');
      }

      setStatus('success');

      // opcional: limpiar form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        type: 'industrial',
        subType: '',
        details: '',
        file: null
      });

      // volver a estado idle después de 5s (si querés)
      setTimeout(() => setStatus('idle'), 5000);

    {/* Logueo error anterior   
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Error enviando el formulario.');
      setTimeout(() => setStatus('idle'), 6000);
    }*/}
    } catch (e) {
      console.error("ERROR /api/presupuesto:", e);
      console.error("STACK:", e?.stack);
    }

  };

  const buttonText =
    status === 'loading' ? 'Enviando...' :
    status === 'success' ? '¡Solicitud Enviada!' :
    status === 'error' ? 'Error al enviar' :
    'Enviar Solicitud';

  const buttonClass =
    status === 'success' ? 'bg-green-500 text-white' :
    status === 'error' ? 'bg-red-500 text-white' :
    status === 'loading' ? 'bg-primary/80 text-white cursor-not-allowed' :
    'bg-primary text-white hover:bg-teal-700 hover:scale-[1.02]';

  return (
    <div className="min-h-screen pt-20 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Cotización Online</span>
          <h1 className="text-4xl md:text-6xl font-black text-background-dark mt-4 mb-6">Solicitá tu Presupuesto</h1>
          <p className="text-gray-500 text-xl max-w-[600px] mx-auto">
            Completá el formulario y uno de nuestros ingenieros te contactará para realizar un dimensionamiento a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-[50px] shadow-2xl border border-gray-100">
          <div>
            <h2 className="text-2xl font-bold mb-8">Información del Proyecto</h2>

            {/* Mensajito de error opcional */}
            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700">
                {errorMsg || 'Hubo un problema enviando tu solicitud. Probá de nuevo.'}
              </div>
            )}

            {/* Mensajito success opcional */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-700">
                ¡Listo! Recibimos tu solicitud y te contactamos a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  placeholder="Ej: Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'loading'}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Teléfono</label>
                  <input
                    type="numeric"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    placeholder="+54 9 11 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={status === 'loading'}
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
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Solución</label>
                <select
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  value={formData.type}
                  onChange={(e) => {

                    const nextType = e.target.value as presupuestoForm['type'];

                    // ✅ Si deja de ser industrial, reseteo subType
                    setFormData((prev) => ({
                      ...prev,
                      type: nextType,
                      subType: nextType === 'residencial' ? prev.subType : '',
                    }));
                  }}
                  disabled={status === 'loading'}
                >
                  <option value="industrial" >Industrial / Corporativo</option>
                  <option value="residencial">Residencial (Hogar)</option>
                  <option value="otro">Otro</option>  
                </select>
              </div>
              {showResidentialSubType && ( 
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Solución residencial</label>
                  <select
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                    value={formData.subType}
                      onChange={(e) =>
                        setFormData({ ...formData, subType: e.target.value as presupuestoForm['subType'] })
                      }
                    disabled={status === 'loading'}
                  >
                    <option value="OnGrid">OnGrid (Hogar)</option>
                    <option value="Hibrido">Híbrido</option>
                    <option value="OffGrid">OffGrid</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Detalles del Proyecto / Consumo Mensual (kWh)</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                  placeholder="Contanos sobre tu necesidad energética..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              <FileUploader
                file={file}
                setFile={setFile}
                fileStatus={fileStatus}
                setFileStatus={setFileStatus}
              />
              <div className='justify-center'>
                  <ReCAPTCHA
                    sitekey="6LeMOGksAAAAAKxbCkj0uifvuL0ZtRc_a9374PaV"
                    onChange={(val: string | null) => setCapVal(val)}
                  />
                </div>

              <button
                type="submit"
                disabled={status === 'loading' || !capVal}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${buttonClass}`}
              >
                {buttonText}
              </button>
            </form>
          </div>

          <div className="bg-background-dark p-10 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-8">
                {[
                  { t: "Estudio Personalizado", d: "Analizamos tu factura de luz para darte un ROI exacto", i: "analytics" },
                  { t: "Soporte Local", d: "Equipo de especialización post venta.", i: "engineering" },
                  { t: "Calidad Certificada", d: "Equipos de primera línea con garantia de fabrica.", i: "verified" }
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
                  <span>fremtecargentina@gmail.com</span>
                </div>
                <div className="flex-col items-center gap-3">
                  <div className='mb-2'>
                    <a href="https://wa.me/541150572126" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span> +54 9 11 5057-2126 (Zona Norte)</span>
                    </a>
                    
                  </div>
                  <div className='mb-2'>
                    <a href="https://wa.me/541162084045" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span> +54 9 11 6208-4045 (Zona Sur) </span>
                    </a>
                    
                  </div>
                  <div className='mb-2'>
                    <a href="https://wa.me/541171769809" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">call</span>
                      <span> +54 9 11 7176-9809 (Zona Oeste) </span>
                    </a>
                    
                    
                  </div>
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
