import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const DarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <div
      className='w-full h-screen flex items-center justify-start transition-all
    dark:bg-gray-950 dark:text-white'>
      <div className='ml-7'>
        <h1 className='text-[2rem]'>Hello!</h1>
        <button
          onClick={handleToggleTheme}
          className='bg-black p-2 text-white rounded transition-all dark:bg-white dark:text-black'>
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default DarkMode;
