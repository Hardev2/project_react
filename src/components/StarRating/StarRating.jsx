import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={` cursor-pointer ${
                index <= (hover || rating) ? 'text-yellow-500' : 'text-black'
              }`}
              onClick={() => handleMouseClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
