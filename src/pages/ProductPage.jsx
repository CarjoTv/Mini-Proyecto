import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductDetail from '../components/ProductDetail';
import Loading from '../components/Loading';

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, loading, error, refetch } = useFetchProducts(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <Loading />;

  if (error || !product) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <p className="text-red-500 text-lg font-medium mb-4">No pudimos cargar el producto.</p>
        <button 
          onClick={refetch}
          className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <ProductDetail product={product} />
    </div>
  );
}