import { NavLink } from 'react-router-dom';

/**
 * @component CategoryFilter
 * @description Lista de enlaces de categorías con estilos dinámicos.
 */
export default function CategoryFilter({ isHeaderMenu = false }) {
  const categories = [
    { id: 1, name: "electronics", label: "Electrónicos" },
    { id: 2, name: "jewelery", label: "Joyería" },
    { id: 3, name: "men's clothing", label: "Hombre" },
    { id: 4, name: "women's clothing", label: "Mujer" }
  ];

  // Estilos sutiles para el Header, estilo de botones para el cuerpo de la página
  const getStyles = ({ isActive }) => {
    if (isHeaderMenu) {
      return `text-sm font-medium transition-colors ${
        isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-slate-600 hover:text-blue-600'
      }`;
    }
    return `px-4 py-2 rounded-full text-xs font-bold uppercase border transition-all ${
      isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'
    }`;
  };

  return (
    <nav className={isHeaderMenu ? "flex gap-8" : "flex flex-wrap gap-2"}>
      <NavLink to="/" end className={getStyles}>Todos</NavLink>
      {categories.map(cat => (
        <NavLink key={cat.id} to={`/products/category/${cat.name}`} className={getStyles}>
          {cat.label}
        </NavLink>
      ))}
    </nav>
  );
}