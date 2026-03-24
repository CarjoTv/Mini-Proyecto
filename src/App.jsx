import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

/**
 * @component App
 * @description Punto de entrada lógico. Gestiona el estado 'searchTerm' 
 * para que el buscador (Header) y el catálogo (Home) estén sincronizados.
 */
function App() {
  // Estado para el término de búsqueda compartido
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* El Header actualiza el estado mediante onSearch */}
      <Header onSearch={setSearchTerm} />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          {/* Home recibe el término para realizar el filtrado local */}
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/products/category/:category" element={<Home searchTerm={searchTerm} />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;