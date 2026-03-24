import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

/**
 * @description Componente principal de la aplicación.
 * Define el estado global 'searchTerm' para sincronizar el Header con la Home
 * y establece la estructura de rutas de React Router.
 */
function App() {
  // Estado para el término de búsqueda compartido entre Header y Home
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Pasamos setSearchTerm para que el Header actualice el estado */}
        <Header onSearch={setSearchTerm} />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Pasamos searchTerm a Home para que filtre los productos */}
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/products/category/:category" element={<Home searchTerm={searchTerm} />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;