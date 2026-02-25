import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

/**
 * Actualiza el título y la meta descripción del documento para SEO por página.
 * Usar en cada página con valores específicos.
 */
const Seo: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    return () => {
      // Opcional: restaurar valores por defecto al desmontar (si usas metadata.json)
      // Por simplicidad dejamos el último título/description hasta la siguiente navegación
    };
  }, [title, description]);

  return null;
};

export default Seo;
