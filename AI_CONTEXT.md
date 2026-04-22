# Fremtec - Contexto Comercial y Técnico para IA (AI Context)

Este documento sirve como referencia rápida para cualquier asistente de Inteligencia Artificial (IA), estructurando el contexto comercial y el ecosistema técnico del proyecto Fremtec para hacer lecturas de código más ágiles.

## 1. Contexto del Negocio

**Fremtec** es una empresa de Argentina especializada en **Energía Solar y Sistemas Fotovoltaicos**. Sus áreas clave son:
- **Residencial:** Paneles solares e inversores para viviendas, reduciendo la dependencia de la red eléctrica.
- **Industrial:** Soluciones solares de alta potencia para reducir el gasto energético en empresas e industrias.
- **Sistemas Especiales:** Bombeo solar (ideal para el agro), termotanques solares y climatización.

**Objetivo del Sitio Web:** 
Atraer leads, educar sobre los beneficios de la energía renovable en Argentina y proporcionar un flujo amigable para solicitar un presupuesto / cotización con captura de datos precisa.

## 2. Tecnologías Principal del Repositorio (Tech Stack)

- **Framework Frontend:** React 19 con TypeScript, empaquetado con Vite.
- **Estilos:** Tailwind CSS v4 para diseño responsive adaptativo y utilities.
- **Enrutamiento:** React Router DOM v6 con un sistema de Single Page Application (SPA).
- **Integraciones:** 
  - *Resend:* para el procesamiento de los formularios de presupuestos.
  - *Google reCAPTCHA v3:* Protege los formularios de solicitudes contra spam y bots maliciosos.
  - *Google Gemini AI:* Paquete `@google/genai` (integración nativa).

## 3. Estructura de Rutas de la Aplicación

Todas las rutas son expuestas desde el `src/App.tsx`.
- `/`: Inicio / Presentación.
- `/residencial`: Propuesta de valor de sistemas domiciliarios.
- `/industrial`: Propuesta de valor en sistemas de alta capacidad.
- `/otras-soluciones`: Catálogo de sistemas complementarios (Termotanques, Bombeo).
- `/faq`: Respuesta a interrogantes recurrentes.
- `/galeria`: Portfolio visual de últimos trabajos realizados.
- `/presupuesto`: Formulario dinámico con campos pre-armados para estimaciones de energía solar rápidas.
