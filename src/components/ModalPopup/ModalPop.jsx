import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ModalPop = ({ id, showModal, closeModal }) => {
  return (
    <div
      id={id || 'Modal'}
      className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-out ${
        showModal
          ? 'scale-100 translate-y-0 opacity-100'
          : 'scale-90 -translate-y-96 opacity-0'
      }`}
      onClick={(e) => e.stopPropagation()}>
      <div className='bg-white w-[300px] h-[200px] rounded-md'>
        <div className='flex items-center justify-center'>
          <FaCheckCircle className='text-[5rem] text-green-400' />
        </div>
        <div className='flex flex-col items-center justify-center mt-5'>
          <h1>Submitted Successfully!</h1>
          <p>Thank you for choosing us.</p>
        </div>
        <div className='w-full mt-5 text-center'>
          <button
            onClick={closeModal}
            className='bg-green-400 w-full text-gray-800 uppercase p-1 rounded hover:bg-green-800 duration-500 hover:text-white'>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPop;
