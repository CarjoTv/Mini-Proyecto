// main.jsx
// Este es el punto de entrada de la aplicación React.
// Aquí se monta el componente App en el DOM.

import { StrictMode } from 'react'
// StrictMode: Componente de React que ayuda a identificar problemas potenciales en la aplicación.
// Activa advertencias adicionales y controles de desarrollo (solo en desarrollo, no en producción).

import { createRoot } from 'react-dom/client'
// createRoot: Función de React 18 que crea la raíz de la aplicación React en el DOM.
// Reemplaza el antiguo ReactDOM.render().

import './index.css'
// Importa los estilos globales CSS (incluyendo configuración de Tailwind).

import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
// Importa el componente principal App que contiene todas las rutas y lógica de la aplicación.

createRoot(document.getElementById('root')).render(
  // document.getElementById('root'): Obtiene el elemento <div id="root"></div> del archivo index.html.
  // createRoot(...): Crea la raíz de React aquí.
  // .render(...): Renderiza el contenido dentro de esa raíz.
  <StrictMode>
  <HashRouter>
    {/* StrictMode envuelve la app para lanzar advertencias de desarrollo. */}
    <App />
    {/* App: El componente principal que será renderizado en el <div id="root"></div>. */}
  </HashRouter>,
  </StrictMode>
)
// ; : Fin de la declaración.
