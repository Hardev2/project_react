import React, { useState } from 'react';

const Tab = ({ tabContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClickChange = (getCurrentIndex) => {
    if (getCurrentIndex !== currentTabIndex) {
      setCurrentTabIndex(getCurrentIndex);
      onChange(getCurrentIndex);
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-start transition-all dark:bg-gray-950'>
      <div className='flex gap-2 mt-7'>
        {tabContent.map((dataItem, index) => (
          <div
            className={`${
              currentTabIndex === index ? 'bg-blue-500' : 'bg-blue-300'
            } text-white py-2 px-6 rounded cursor-pointer z-20 `}
            onClick={() => handleClickChange(index)}
            key={index}>
            <span>{dataItem.label}</span>
          </div>
        ))}
      </div>
      <div className='dark:text-white transition-all'>
        {tabContent[currentTabIndex]?.content}
      </div>
    </div>
  );
};

export default Tab;
