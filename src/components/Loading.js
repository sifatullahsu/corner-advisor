import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className='container text-center py-[150px]'>
      <div type="button" className="btn btn-primary rounded">
        <FaSpinner className="animate-spin h-5 w-5 mr-3 inline"></FaSpinner>
        Processing...
      </div>
    </div>
  );
};

export default Loading;