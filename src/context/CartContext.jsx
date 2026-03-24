import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// 1. Creamos el contexto
const GlobalContext = createContext();

// 2. Creamos el Proveedor (Provider)
export const GlobalProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]); // Todos los productos de la API
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos que coinciden con la búsqueda
  const [searchTerm, setSearchTerm] = useState(''); // El texto que escribe el usuario
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga inicial de datos de la API (UNA SOLA VEZ)
  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setAllProducts(response.data);
        setFilteredProducts(response.data); // Al inicio, mostramos todos
      } catch (err) {
        setError('Error al conectar con la tienda. Intenta de nuevo.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  // Lógica de filtrado en tiempo real (SIN RECARGAR LA API)
  useEffect(() => {
    if (!searchTerm.trim()) {
      // Si el buscador está vacío, mostramos todos
      setFilteredProducts(allProducts);
    } else {
      // Filtramos por título (ignorando mayúsculas/minúsculas)
      const results = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchTerm, allProducts]); // Se ejecuta cuando cambia el texto o los productos base

  // Valor que expondremos a toda la app
  const value = {
    filteredProducts,
    searchTerm,
    setSearchTerm,
    isLoading,
    error,
    allProducts // Por si acaso lo necesitamos
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Hook personalizado para usar este contexto fácilmente
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState debe usarse dentro de un GlobalProvider');
  }
  return context;
};