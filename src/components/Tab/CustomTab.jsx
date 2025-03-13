import React from 'react';
import Tab from './Tab';

const CustomTab = () => {
  const randomContent = () => {
    return (
      <div className='relative top-2'>
        <h1 className=''>Hello world</h1>
      </div>
    );
  };
  const tabs = [
    { label: 'Tab 1', content: 'This is tab 1' },
    { label: 'Tab 2', content: 'This is tab 2' },
    { label: 'Tab 3', content: randomContent() },
  ];

  const handleOnClick = (currentTabIndex) => {
    console.log(`This is current index: ${currentTabIndex}`);
  };
  return (
    <div>
      <Tab tabContent={tabs} onChange={handleOnClick} />
    </div>
  );
};

export default CustomTab;
