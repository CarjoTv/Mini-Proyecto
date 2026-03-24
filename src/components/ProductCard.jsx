import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col h-full border border-gray-100">
      {/* Contenedor de la imagen con altura fija */}
      <div className="h-48 w-full mb-4 bg-white flex items-center justify-center overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      {/* Información del producto */}
      <div className="flex flex-col flex-grow">
        <h3 
          className="text-sm font-medium text-gray-800 line-clamp-2 mb-2" 
          title={product.title}
        >
          {product.title}
        </h3>
        
        {/* mt-auto empuja el precio y el botón hacia abajo */}
        <p className="text-lg font-bold text-gray-900 mb-4 mt-auto">
          ${product.price.toFixed(2)}
        </p>
        
        <Link 
          to={`/products/${product.id}`}
          className="w-full bg-[#0f172a] hover:bg-slate-800 text-white text-center py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}