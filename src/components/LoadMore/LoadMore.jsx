import React, { useEffect, useState } from 'react';
import useFetch from '../UseFetch';
import Spinner from '../Spinner';
import { FaCartPlus } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const LoadMore = () => {
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const {
    data: fetchData,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);

  const products = fetchData.products || []; //ensures that the products are always in array

  console.log(fetchData);

  useEffect(() => {
    if (count * 20 >= 200) setDisableButton(true);
    else setDisableButton(false);
  }, []);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle only the clicked product
    }));
  };
  return (
    <div className='flex flex-col'>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Spinner isLoading={isLoading} />
      ) : (
        <div className='flex items-stretch justify-center flex-wrap gap-5 px-2 mt-5 '>
          {products && products.length > 0 ? (
            products.map((item) => {
              const showFullDescription =
                expandedDescriptions[item.id] || false;
              return (
                <div
                  key={item.id}
                  className=' bg-[#F8FAFC] flex flex-col items-center justify-center rounded w-full border-2 border-solid border-gray-100 lg:w-[300px]'>
                  <img src={item.thumbnail} alt={item.thumbnail} />

                  <div className='bg-white p-3'>
                    <p className='font-bold text-lg mb-3 h-[50px]'>
                      {item.title}
                    </p>
                    <p
                      className={`mb-3 ${
                        showFullDescription ? 'h-auto' : 'h-[80px]'
                      }`}>
                      {showFullDescription
                        ? item.description
                        : item.description.substring(0, 70) + '...'}
                    </p>
                    <button
                      onClick={() => toggleDescription(item.id)}
                      className='bg-blue-500 text-white py-1 px-2 rounded transition 3s mb-3 hover:bg-blue-800'>
                      {showFullDescription ? 'Less' : 'More'}
                    </button>
                    <div className='flex items-center justify-between'>
                      <p className='flex items-center gap-1 text-lg'>
                        <FaStar className='text-yellow-500' />
                        {item.rating}
                      </p>
                      <p>₱{item.price}</p>
                    </div>
                    <div className='flex items-center justify-around gap-2 mt-2'>
                      <button className='w-full text-black border border-gray-300 rounded py-1 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-black hover:text-white'>
                        <FaCartPlus /> Add to Cart
                      </button>
                      <button className='bg-black text-white w-full py-1 rounded border-[1px] border-solid border-black transition 3s hover:bg-white hover:text-black '>
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              {disableButton
                ? 'No product available'
                : 'You reach the product limit'}
            </p>
          )}
        </div>
      )}

      <div className='button_wrapper flex items-center justify-center gap-2 mt-4'>
        <button
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
          className={`${
            count === 0 ? ' bg-slate-200' : ' bg-blue-400'
          } w-[150px] p-2 text-white rounded`}>
          Previous
        </button>
        <button
          disabled={disableButton}
          onClick={() => setCount((prev) => prev + 1)}
          className={`w-[150px] bg-blue-400 p-2 text-white rounded`}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
