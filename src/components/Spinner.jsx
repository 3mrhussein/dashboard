import React from 'react';

const Spinner = ({ Loading }) => {
  return (
    Loading && (
      <span className=" w-fit  block rounded-full border-4 border-gray-500 border-y-yellow-500 w-14  h-14 animate-spin"></span>
    )
  );
};

export default Spinner;
