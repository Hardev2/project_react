import React from 'react';
import MenuList from './MenuList';

const TreeNav = ({ menus = [] }) => {
  return (
    <div className='bg-gray-800 w-[300px] pb-10  h-[90vh]'>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeNav;
