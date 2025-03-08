import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const PassGenerate = () => {
  const [password, setPassword] = useState('');

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const number = '1234567890';
  const symbol = '!@#$%^&^*()_+=?|/{}';
  const allChars = upperCase + lowerCase + number + symbol;

  const createPassword = () => {
    let newPassword = '';
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += number[Math.floor(Math.random() * number.length)];
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];

    while (newPassword.length < 12) {
      newPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password Copied to clipboard');
  };
  return (
    <div className='bg-gray-800 w-full h-screen flex items-center justify-center flex-col'>
      <div>
        <h1 className='text-white text-[1.2rem] text-left'>
          Password Generator
        </h1>

        <div className='flex gap-1 items-center justify-center'>
          <button
            className='m-5 bg-blue-500 text-white p-2 rounded outline-none border-none'
            onClick={createPassword}>
            Generate Password
          </button>
          <input
            className='p-2 border-[1px] border-solid border-blue-300 outline-none rounded'
            type='text'
            value={password}
            placeholder='Password'
          />
          <button onClick={copyPassword} className='text-white text-[1.3rem]'>
            <FaCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassGenerate;
