import React from 'react';
import { Link } from 'react-router-dom';
const Cards = () => {
  const getRandomColor = () => {
    const colors = [
      '#FF5733',
      '#33FF57',
      '#3357FF',
      '#FF33A1',
      '#A133FF',
      '#33FFF3',
      '#F3FF33',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const cardStyle = ' rounded w-full lg:w-[250px] h-[200px]';

  return (
    <>
      <div className={cardStyle} style={{ backgroundColor: getRandomColor() }}>
        <Link to='/accordion'>
          <div className='flex items-center justify-center w-full h-full text-white'>
            <h1 className='mix-blend-difference'>Accordion</h1>
          </div>
        </Link>
      </div>

      <div className={cardStyle} style={{ backgroundColor: getRandomColor() }}>
        <Link to='/hex'>
          <div className='flex items-center justify-center w-full h-full text-white'>
            <h1 className='mix-blend-difference'>Hex Color</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
