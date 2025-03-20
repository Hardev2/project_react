import React, { useState } from 'react';
import ModalPop from './ModalPop';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className='w-full h-screen bg-gray-950'>
      <div className='w-full h-screen flex items-center justify-center'>
        <button
          onClick={openModal}
          className='text-black border-none bg-white rounded-full px-3 py-2 hover:text-white hover:bg-black duration-500'>
          Open Modal
        </button>
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500
          ${showModal ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          onClick={closeModal}>
          <ModalPop showModal={showModal} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
