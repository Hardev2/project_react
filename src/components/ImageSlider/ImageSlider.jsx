import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import Spinner from '../Spinner';

import useFetch from '../UseFetch';
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const [errorMsg, setErrorMsg] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const fetchImages = async (getUrl) => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
  //       const data = await response.json();

  //       if (data) {
  //         setImages(data);
  //         setLoading(false);
  //       }
  //     } catch (e) {
  //       setErrorMsg(e.message);
  //       setLoading(false);
  //     }
  //   };

  const {
    data: images,
    isLoading,
    error,
  } = useFetch('https://picsum.photos/v2/list?page=1&limit=5');

  //   const handlePrevious = () => {
  //     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  //   };

  //   const handleNext = () => {
  //     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  //   };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  //   useEffect(() => {
  //     if (url !== '') fetchImages(url);
  //   }, [url]);

  //   console.log(images);

  //   if (isLoading) {
  //     return <Spinner isLoading={isLoading} />;
  //   }

  return (
    <div className='flex justify-center items-center mt-20'>
      <div className='container relative flex justify-center items-center w-[600px] h-[450px] '>
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className='absolute w-8 h-8 text-white drop-shadow-[0px 0px 5px #555] left-4 cursor-pointer'
        />
        {error && <div>{error}</div>}
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <>
            {images && images.length
              ? images.map((imageItem, index) => (
                  <img
                    className={`${
                      currentSlide === index ? 'visible' : 'hidden'
                    } current-image rounded-lg shadow w-screen h-[100%] `}
                    key={imageItem.id}
                    src={imageItem.download_url}
                    alt={imageItem.download_url}
                  />
                ))
              : null}
          </>
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className='absolute w-8 h-8 text-white drop-shadow-[0px 0px 5px #555] right-2 cursor-pointer'
        />
        <span className='circle-indicator flex absolute bottom-4'>
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => setCurrentSlide(index)}
                  key={index}
                  className={`${
                    currentSlide === index ? 'bg-white' : 'bg-red-500'
                  } current-indicator h-4 w-4 border-none outline-none mt-0 mb-0 ml-1 mr-1 cursor-pointer rounded-full`}></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
