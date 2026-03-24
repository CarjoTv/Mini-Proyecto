import { NavLink } from 'react-router-dom';

/**
 * @description Genera la lista de categorías.
 * @param {boolean} isHeaderMenu - Si es true, usa estilos de texto. Si es false, usa estilo de botones (ideal para móvil/Home).
 */
export default function CategoryFilter({ isHeaderMenu = false }) {
  const categories = [
    { id: 1, name: "electronics", label: "Electrónicos" },
    { id: 2, name: "jewelery", label: "Joyería" },
    { id: 3, name: "men's clothing", label: "Hombre" },
    { id: 4, name: "women's clothing", label: "Mujer" }
  ];

  const containerClasses = isHeaderMenu 
    ? "flex items-center gap-8" 
    : "flex flex-wrap gap-2";

  const linkClasses = ({ isActive }) => {
    if (isHeaderMenu) {
      return `text-sm font-medium transition-colors ${isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-600 hover:text-blue-600'}`;
    }
    return `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
      isActive ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-600 border-slate-200'
    }`;
  };

  return (
    <nav className={containerClasses}>
      <NavLink to="/" end className={linkClasses}>Todos</NavLink>
      {categories.map((cat) => (
        <NavLink key={cat.id} to={`/products/category/${cat.name}`} className={linkClasses}>
          {cat.label}
        </NavLink>
      ))}
    </nav>
  );
}