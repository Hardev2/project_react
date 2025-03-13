import React, { useEffect, useState } from 'react';
import UseFetch from '../UseFetch';
import Spinner from '../Spinner';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const {
    data: fetchData,
    error,
    isLoading,
  } = UseFetch(`https://dummyjson.com/products?limit=100`);

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
      window.removeEventListener('scroll', handleScrollPercentage);
    };
  }, []);

  console.log(scrollPercentage);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='fixed bg-gray-900 bottom-0 w-full'>
        <div className='h-3 bg-green-500'>
          <div
            className='h-3 bg-red-400'
            style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <h1>Custom Scroll Indicator</h1>
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
