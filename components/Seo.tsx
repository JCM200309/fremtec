import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

/**
 * Actualiza el título y la meta descripción del documento para SEO por página.
 * Usar en cada página con valores específicos.
 */
const Seo: React.FC<SeoProps> = ({ title, description, image = "/fotos/heroPrincipal.jpg", url = "https://www.fremtec.com.ar" }) => {
  useEffect(() => {
    // Título de la página
    document.title = title;

    // Función helper para actualizar o crear meta tags
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Función helper para actualizar o crear link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Meta Tags Básicos
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Configuración de URL actual si es relativa
    const fullUrl = url.startsWith('http') ? url : `https://www.fremtec.com.ar${url}`;
    const fullImage = image.startsWith('http') ? image : `https://www.fremtec.com.ar${image}`;

    // Canonical
    setLinkTag('canonical', fullUrl);

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImage);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImage);

    return () => {
      // Opcional: restaurar valores por defecto al desmontar (si usas metadata.json)
      // Por simplicidad dejamos el último título/description hasta la siguiente navegación
    };
  }, [title, description, image, url]);

  return null;
};

export default Seo;
