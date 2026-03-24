import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

/**
 * @component Home
 * @description Página de catálogo. Filtra productos por categoría (vía URL) 
 * y por texto (vía prop searchTerm).
 */
export default function Home({ searchTerm }) {
  const { category } = useParams();
  
  // Define URL según si hay categoría en el HashRouter
  const url = category 
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';

  const { data: products, loading, error } = useFetchProducts(url);

  /**
   * Filtrado local: Compara el título del producto con el searchTerm.
   * Se ejecuta en cada renderizado cuando el usuario escribe.
   */
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loading />;
  
  if (error) return (
    <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100 text-red-600">
      <p className="font-semibold">{error}</p>
    </div>
  );

  return (
    <section className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 capitalize">
          {category ? category.replace(/-/g, ' ') : 'Todos los productos'}
        </h1>
        <p className="text-slate-500">{filteredProducts.length} items encontrados</p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-400">No hay productos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </section>
  );
}