import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-white text-black hover:text-gray-300 py-2 px-4 rounded-md'
      : 'text-white hover:text-gray-300 py-2 px-4';
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Brand/Logo */}
        <div className='text-white text-xl font-semibold'>MyApp</div>

        {/* Hamburger Icon for Mobile */}
        <button className='text-white lg:hidden' onClick={toggleMenu}>
          <FaBars className='w-6 h-6' />
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } lg:flex lg:space-x-6 flex-col space-y-4 lg:flex-row lg:space-y-0 z-10
             ${
               isOpen
                 ? 'absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 items-center justify-start'
                 : ''
             }`}>
          {/* Close Button for Mobile (Hidden on Desktop) */}
          <button
            className='absolute top-4 right-4 text-white text-3xl lg:hidden'
            onClick={toggleMenu}>
            &times;
          </button>

          <NavLink
            to='/'
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to='/add-review'
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Add Review
          </NavLink>
          {/* <NavLink
            to='/services'
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink
            to='/contact'
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
