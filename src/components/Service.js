import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, price, img, description } = service;

  return (
    <div className="service card border border-border bg-white rounded">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img src={img} className='py-3 border-b border-border' alt="" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body bg-gray p-4">
        <h4 className="card-title text-lg text-secondary">{name}</h4>
        <p>{price}</p>
        <p>{description.length > 100 ? <>{description.slice(0, 100)}...</> : description}</p>
        <div className="card-actions">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary rounded">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;