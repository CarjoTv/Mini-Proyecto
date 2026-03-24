import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

/**
 * @component Header
 * @description Encabezado responsivo con soporte para búsqueda y categorías.
 * @param {Function} onSearch - Función para elevar el texto del buscador.
 */
export default function Header({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú móvil al navegar
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-6">
          
          {/* Logo Principal */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-1.5 text-2xl font-extrabold text-[#0f172a] shrink-0">
            <div className="w-5 h-5 bg-blue-600 rounded"></div>
            LUXE<span className="text-blue-600">.</span>
          </Link>

          {/* Buscador: Solo visible en pantallas medianas/grandes */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Botón Hamburguesa (Móvil) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Panel Desplegable Móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-50 space-y-6 animate-in slide-in-from-top duration-300">
            <div className="px-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 ml-1">Buscador</p>
              <SearchBar onSearch={onSearch} />
            </div>
            <div className="px-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 ml-1">Categorías</p>
              <div onClick={closeMenu}>
                <CategoryFilter isHeaderMenu={false} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Barra de Categorías (Desktop) */}
      <div className="hidden md:block bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 py-2">
          <CategoryFilter isHeaderMenu={true} />
        </div>
      </div>
    </header>
  );
}