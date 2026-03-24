import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

/**
 * @description Componente de página principal.
 * Obtiene productos de la API y aplica el filtrado por texto (searchTerm)
 * y por categoría (vía URL).
 * @param {string} searchTerm - Texto ingresado en el buscador del Header.
 */
export default function Home({ searchTerm }) {
  const { category } = useParams();
  
  // URL dinámica: Si hay categoría en la URL la usa, si no, trae todo.
  const url = category 
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';

  const { data: products, loading, error } = useFetchProducts(url);

  /**
   * @description Lógica de filtrado en tiempo real.
   * Filtra los productos que vienen de la API basándose en el 'searchTerm'.
   */
  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;
  
  if (error) return (
    <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100">
      <p className="text-red-600 font-semibold">{error}</p>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700">
      {/* Título de sección */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 capitalize">
          {category ? category.replace(/-/g, ' ') : 'Nuestra Colección'}
        </h1>
        <p className="text-slate-500">
          {filteredProducts.length} productos encontrados
        </p>
      </div>

      {/* Grid Responsivo */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-400">No encontramos resultados para "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}