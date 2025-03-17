import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const displayValue = (value) => {
    setDisplay((prev) => prev + value);
  };
  const clearDisplay = () => {
    setDisplay('');
  };

  const deleteDisplay = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const btnStyle =
    'text-white m-2 rounded shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),15px_15px_15px_rgba(0,0,0,0.2)] p-3 w-[45px] h-[45px]';
  return (
    <div className=' bg-gray-900 w-full h-screen flex items-center justify-center'>
      <div className='bg-gray-800 p-5 rounded'>
        <div className='flex justify-end mt-5 mb-5'>
          <input
            type='text'
            value={display}
            readOnly
            className='text-white text-right flex-1 bg-transparent p-2 outline-none border-none text-3xl w-[200px]'
          />
        </div>
        <div className='buttons'>
          <button type='button' onClick={clearDisplay} className={btnStyle}>
            AC
          </button>
          <button type='button' onClick={deleteDisplay} className={btnStyle}>
            DE
          </button>
          <button
            type='button'
            onClick={() => displayValue('.')}
            className={btnStyle}>
            .
          </button>
          <button type='button' className={btnStyle}>
            /
          </button>
        </div>
        <div className='buttons'>
          <button
            type='button'
            onClick={() => displayValue('7')}
            className={btnStyle}>
            7
          </button>
          <button
            type='button'
            onClick={() => displayValue('8')}
            className={btnStyle}>
            8
          </button>
          <button
            type='button'
            onClick={() => displayValue('9')}
            className={btnStyle}>
            9
          </button>
          <button
            type='button'
            onClick={() => displayValue('*')}
            className={btnStyle}>
            *
          </button>
        </div>
        <div className='buttons'>
          <button
            type='button'
            onClick={() => displayValue('4')}
            className={btnStyle}>
            4
          </button>
          <button
            type='button'
            onClick={() => displayValue('5')}
            className={btnStyle}>
            5
          </button>
          <button
            type='button'
            onClick={() => displayValue('6')}
            className={btnStyle}>
            6
          </button>
          <button
            type='button'
            onClick={() => displayValue('+')}
            className={btnStyle}>
            +
          </button>
        </div>
        <div className='buttons'>
          <button
            type='button'
            onClick={() => displayValue('1')}
            className={btnStyle}>
            1
          </button>
          <button
            type='button'
            onClick={() => displayValue('2')}
            className={btnStyle}>
            2
          </button>
          <button
            type='button'
            onClick={() => displayValue('3')}
            className={btnStyle}>
            3
          </button>
          <button
            type='button'
            onClick={() => displayValue('-')}
            className={btnStyle}>
            -
          </button>
        </div>
        <div className='buttons'>
          <button
            type='button'
            onClick={() => displayValue('00')}
            className={btnStyle}>
            00
          </button>
          <button
            type='button'
            onClick={() => displayValue('0')}
            className={btnStyle}>
            0
          </button>
          <button
            type='button'
            onClick={calculateResult}
            className='text-white m-2 rounded shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),15px_15px_15px_rgba(0,0,0,0.2)] p-3 w-[105px] h-[45px]'>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
