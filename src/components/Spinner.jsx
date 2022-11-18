import React from 'react';

const Spinner = ({ Loading }) => {
  return (
    Loading && (
      <div className="w-full h-full flex justify-center items-center">
        <span className="=block rounded-full border-4 border-gray-500 border-y-yellow-500 w-14  h-14 animate-spin"></span>
      </div>
    )
  );
};

export default Spinner;
