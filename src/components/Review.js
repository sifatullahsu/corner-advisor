import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Review = ({ review, edit, handleReviewDelete }) => {

  return (
    <div className='mb-5 bg-white p-5 border border-border'>
      <div className='flex relative'>
        {
          edit &&
          <>
            <Link to={`/my-reviews/${review._id}`}>
              <FaEdit className='absolute right-7 top-0'></FaEdit>
            </Link>
            <FaTrash onClick={() => handleReviewDelete(review._id)} className='absolute right-0 top-0'></FaTrash>
          </>
        }
        <img src={review.author.image} className='w-12 h-12 rounded-full mr-3 border border-border' alt="" />
        <div>
          <p className='font-medium'>{review.author.name}</p>
          <p>Rating: {review.rating}</p>
        </div>
      </div>
      <p className='mt-3 text-text'>{review.review}</p>
    </div>
  );
};

export default Review;