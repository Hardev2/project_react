import React, { useState } from 'react';
import data from './data';

const accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col '>
      <button
        onClick={() => setMultiSelection(!multiSelection)}
        className='bg-slate-400 text-white py-3 px-5 font-bold'>
        {multiSelection ? 'Enabled Multi Select' : 'Enable Multi Select'}
      </button>
      <div className='w-[500px] p-7 '>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='bg-slate-400 mb-3 py-3 px-5'>
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='flex items-center justify-between cursor-pointer'>
                <h3 className='text-white'>{dataItem.question}</h3>
                <span className='text-white'>
                  {multiSelection
                    ? multiple.includes(dataItem.id)
                      ? '-'
                      : '+'
                    : selected === dataItem.id
                    ? '-'
                    : '+'}
                </span>
              </div>

              {multiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className='text-gray-200'>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className='text-gray-200'>{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className='text-gray-200'>{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default accordion;
