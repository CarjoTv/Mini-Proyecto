import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
      <p className="text-2xl font-bold text-slate-800 mt-4">¡Ups! Página no encontrada</p>
      <p className="text-slate-500 mt-2 mb-8">Parece que te has perdido en la tienda.</p>
      <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}