import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {
  return (
    <ul className='text-white flex flex-col gap-5 px-5'>
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
