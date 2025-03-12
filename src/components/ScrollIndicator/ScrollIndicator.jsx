import React, { useEffect, useState } from 'react';
import useFetch from '../UseFetch';
import Spinner from '../Spinner';
const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const {
    data: fetchData,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/products?limit=100`);

  const products = fetchData.products || [];

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='fixed bottom-0 z-[1] w-full text-center bg-gray-800 p-4'>
        <div className='w-full h-3 bg-green-400 rounded'>
          <div
            className='h-3 bg-red-500 w-0 rounded'
            style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <h1 className='text-[2rem] mt-8'>Custom Scroll Indicator</h1>

      {error && <div>{error}</div>}
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <div className='text-center'>
          {products && products.length > 0
            ? products.map((dataItem) => (
                <p key={dataItem.id}>{dataItem.title}</p>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;
