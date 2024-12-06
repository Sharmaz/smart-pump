import { useEffect, useState, useCallback } from 'react';

const useFetch = (url, options, { immediate = false } = {}) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async (dataOptions) => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await fetch(url, dataOptions);
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const json = await response.json();
      if (dataOptions.method === 'GET') {
        setData(json);
      } else {
        setUser(json);
      }
      setLoading(false);
      setError('');
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }, [url]);

  useEffect(() => {
    if (immediate) {
      fetchData(options);
    }
  }, [fetchData, immediate]);

  return {
    data,
    setData,
    user,
    loading,
    error,
    fetchData,
  };
};

export default useFetch;
