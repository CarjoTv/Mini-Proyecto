import { NavLink } from 'react-router-dom';

export default function CategoryFilter() {
  const categories = [
    { id: 1, name: "electronics", label: "Electrónicos" },
    { id: 2, name: "jewelery", label: "Joyería" },
    { id: 3, name: "men's clothing", label: "Ropa de Hombre" },
    { id: 4, name: "women's clothing", label: "Ropa de Mujer" }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-10">
      <NavLink
        to="/"
        className={({ isActive }) => 
          `px-5 py-2 rounded-full text-sm font-medium transition-all border ${
            isActive 
            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
          }`
        }
      >
        Todos
      </NavLink>

      {categories.map((cat) => (
        <NavLink
          key={cat.id}
          to={`/products/category/${cat.name}`}
          className={({ isActive }) => 
            `px-5 py-2 rounded-full text-sm font-medium transition-all border capitalize ${
              isActive 
              ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400'
            }`
          }
        >
          {cat.label}
        </NavLink>
      ))}
    </div>
  );
}