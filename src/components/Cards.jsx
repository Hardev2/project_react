import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const getRandomColor = () => {
    const colors = [
      '#1B1B1B', // Dark Gray
      '#2C3E50', // Dark Blue Gray
      '#8E44AD', // Dark Purple
      '#C0392B', // Dark Red
      '#D35400', // Dark Orange
      '#16A085', // Dark Teal
      '#34495E', // Dark Slate Blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // ✅ Dynamic Card Data
  const cardData = [
    { title: 'Accordion', link: '/accordion' },
    { title: 'Hex Color', link: '/hex' },
    { title: 'Star Rating', link: '/star' },
    { title: 'Image Slider', link: '/slider' },
    { title: 'Load More Button', link: '/load_more' },
    { title: 'Tree Navigation', link: '/tree_nav' },
  ];

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='rounded w-full lg:w-[250px] h-[200px]'
          style={{ backgroundColor: getRandomColor() }}>
          <Link to={card.link}>
            <div className='flex items-center justify-center w-full h-full text-white'>
              <h1 className='mix-blend-difference'>{card.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
