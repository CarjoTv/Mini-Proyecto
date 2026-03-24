import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchProducts = (url) => {
  const [data, setData] = useState([]); // Inicializar con [] es CLAVE
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError("Error al cargar los productos. Revisa tu conexión.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};