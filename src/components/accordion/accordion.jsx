import React, { useState } from 'react';
import data from './data';

const accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple]; //spread operator
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);
  return (
    <section className='text-center'>
      <h1 className='relative top-[50px] uppercase font-bold text-2xl'>
        Accordion
      </h1>
      <div className='w-screen h-screen flex items-center justify-center flex-col'>
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className='bg-slate-500 text-white px-3 py-4 rounded'>
          {enableMultiSelection
            ? 'Enabled Multi Select'
            : 'Enable Multi Select'}
        </button>
        <div className='w-[500px] p-7'>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className='bg-slate-500 mb-3 px-3 py-5'>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className='flex items-center justify-between cursor-pointer'>
                  <h3 className='text-white'>{dataItem.question}</h3>
                  <span className='text-white'>
                    {enableMultiSelection
                      ? multiple.indexOf(dataItem.id) !== -1
                        ? '-'
                        : '+'
                      : selected === dataItem.id
                      ? '-'
                      : '+'}
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className='text-gray-300'>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className='text-gray-300'>{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ? (
                <div className='text-gray-300'>{dataItem.answer}</div>
              ) : null} */}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default accordion;
