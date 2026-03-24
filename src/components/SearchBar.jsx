/**
 * @description Componente de entrada de búsqueda con diseño redondeado e icono integrado.
 * Captura el texto ingresado por el usuario y lo comunica al componente padre.
 * * @param {Function} onSearch - Función callback que se ejecuta en cada pulsación de tecla.
 */
export default function SearchBar({ onSearch }) {
  return (
    <div className="relative w-full">
      {/* Icono de Lupa posicionado de forma absoluta dentro del contenedor */}
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      
      <input
        type="search" 
        placeholder="Buscar productos..."
        // Uso de onSearch: Elevamos el estado del input al padre (Header -> App)
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-white focus:border-blue-400 transition-all"
      />
    </div>
  );
}