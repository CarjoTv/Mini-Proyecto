import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Loading from '../components/Loading';

export default function Home() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const url = category 
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';

  const { data: products, loading, error, refetch } = useFetchProducts(url);

  // Filtrado en tiempo real (Punto 3 de la rúbrica)
  const filteredProducts = Array.isArray(products) 
    ? products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  if (loading) return <Loading />;
  if (error) return (
    <div className="text-center py-20">
      <p className="text-red-500 mb-4 font-bold">{error}</p>
      <button onClick={refetch} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Reintentar</button>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 capitalize">
            {category ? category : 'Nuestra Colección'}
          </h1>
          <p className="text-slate-500">Explora productos de alta calidad</p>
        </div>
        
        {/* Input del Buscador */}
        <div className="relative w-full md:w-80">
          <input 
            type="text"
            placeholder="Buscar producto..."
            className="w-full pl-4 pr-10 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <CategoryFilter />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed">
          <p className="text-slate-400 font-medium">No se encontraron productos.</p>
        </div>
      )}
    </div>
  );
}