import { useNavigate } from 'react-router-dom';

export default function ProductDetail({ product }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row p-8 md:p-16 gap-12">
        
        {/* Lado Izquierdo: Imagen */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 rounded-2xl p-10">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[500px] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Lado Derecho: Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(Math.round(product.rating?.rate || 0))}
                <span className="text-gray-200">{"★".repeat(5 - Math.round(product.rating?.rate || 0))}</span>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {product.rating?.rate} / 5 ({product.rating?.count} reviews)
              </span>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-3xl font-bold text-slate-900 mb-6">
              ${product.price?.toFixed(2)}
            </p>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Descripción</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95">
              Añadir al carrito
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="px-10 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all active:scale-95"
            >
              Atrás
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}