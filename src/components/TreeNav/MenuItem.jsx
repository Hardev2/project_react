import React, { useState } from 'react';
import MenuList from './MenuList';
import { FaPlus, FaMinus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };

  console.log(displayCurrentChildren);
  return (
    <li>
      <div className='flex gap-4 relative top-4 mb-4'>
        <p>{item.title}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.title)}>
            {displayCurrentChildren[item.title] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.title] ? (
        <div className='relative left-6 top-2 mb-4'>
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
};

export default MenuItem;
