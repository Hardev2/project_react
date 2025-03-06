import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError('could not fetch the data for that resource!');
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
