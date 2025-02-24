import React, { use } from 'react';
import { useState } from 'react';

const HexColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <>
      <div
        className='text-center py-2 w-full h-[100vh]'
        style={{ backgroundColor: color }}>
        <div className='flex gap-2 items-center justify-center'>
          <button onClick={() => setTypeOfColor('hex')} className='bg-white'>
            Hex Color
          </button>
          <button onClick={() => setTypeOfColor('rgb')} className='bg-white'>
            RGB Color
          </button>
          <button
            onClick={
              typeOfColor === 'hex'
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
            className='bg-white'>
            Create random Color
          </button>
        </div>
        <div className='text-white mix-blend-difference flex items-center justify-center py-[200px] flex-col'>
          <h1 className='text-6xl'>{typeOfColor}</h1>
          <h1 className='text-6xl'>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default HexColor;
