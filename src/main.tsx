
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

type SiteMetadata = {
  name?: string;
  description?: string;
};

async function applySiteMetadata() {
  try {
    const response = await fetch('/metadata.json', { cache: 'no-cache' });
    if (!response.ok) return;

    const data: SiteMetadata = await response.json();

    if (data.name) {
      document.title = data.name;
    }

    if (data.description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = data.description;
    }
  } catch {
    // Si falla la carga de metadata.json, simplemente continuamos con los valores por defecto.
  }
}

void applySiteMetadata();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
