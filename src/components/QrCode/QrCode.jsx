import React, { useState } from 'react';

const QrCode = () => {
  const [qrImage, setQrImage] = useState('');
  const [qrText, setQrText] = useState('');
  const [isError, setIsError] = useState(false);

  const generateQr = () => {
    if (qrText.length > 0) {
      setQrImage(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`
      );
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 1000);
    }
  };
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <h1>QR Code Generator</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 flex-col'>
          <label htmlFor=''>Enter text or url</label>
          <input
            className={`border-[1px] border-solid rounded outline-none p-2  ${
              isError ? 'animate-shake border-red-500' : 'border-blue-500'
            }`}
            placeholder='Type here...'
            type='text'
            value={qrText}
            onChange={(e) => setQrText(e.target.value)}
          />
        </div>
        <div
          className={`flex items-center justify-center w-[200px] rounded max-h-0 overflow-hidden  transition-all p-3   ${
            qrImage
              ? 'max-h-[300px] my-2 mx-auto border-[1px] border-solid border-r-gray-400'
              : ''
          }`}>
          <img className='w-full p-3' src={qrImage} alt={qrImage} />
        </div>
        <button
          onClick={generateQr}
          className='px-3 py-1 w-full bg-blue-500 text-white rounded'>
          Generate QR Code
        </button>
      </div>
    </div>
  );
};

export default QrCode;
