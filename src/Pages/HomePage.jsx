import React from 'react';
import Cards from '../components/Cards';

const HomePage = () => {
  return (
    <>
      <section className='w-full h-auto bg-gray-800 '>
        <div className='flex items-center justify-center relative top-10'>
          <h1 className='uppercase text-white text-2xl'>Project Lesson</h1>
        </div>
        <div className='flex items-center justify-center gap-4 mt-[100px] flex-wrap p-2'>
          <Cards />
        </div>
        <h1></h1>
      </section>
    </>
  );
};

export default HomePage;
