import React from 'react';
import DotLoader from 'react-spinners/DotLoader';
const override = {
  display: 'block',
  margin: '100px auto',
};
const Spinner = ({ isLoading }) => {
  return (
    <DotLoader
      color='#4338ca'
      loading={isLoading}
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinner;
