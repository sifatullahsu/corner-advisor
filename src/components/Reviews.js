import React from 'react';
import Review from './Review';

const Reviews = ({ reviews, edit }) => {
  return (
    <div>
      {
        reviews.map(review => <Review key={review._id} review={review} edit={edit}></Review>)
      }
    </div>
  );
};

export default Reviews;

