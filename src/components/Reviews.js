import React from 'react';
import Review from './Review';

const Reviews = ({ reviews, edit, handleReviewDelete }) => {
  return (
    <div>
      {
        reviews.map(review => <Review
          key={review._id}
          review={review}
          edit={edit}
          handleReviewDelete={handleReviewDelete}
        ></Review>)
      }
    </div>
  );
};

export default Reviews;

