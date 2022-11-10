import React from 'react';
import Service from './Service';

const Services = ({ services }) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        services.data.map(service => <Service
          key={service._id}
          service={service}
        ></Service>)
      }
    </div>
  );
};

export default Services;