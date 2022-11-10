import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';

const AddReview = ({ serviceId }) => {

  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const rating = form.rating.value;

    const data = {
      serviceId,
      author: {
        name: user.displayName,
        image: user.photoURL,
        email: user.email
      },
      rating,
      review
    }

    fetch('https://corner-advisor-server.vercel.app/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => {
        form.reset();
        toast.success('Review added..');
      })
      .catch(err => toast.error('Somthing is wrong..'))
  }

  return (
    <>
      <form onSubmit={handleAddReview}>
        <div className='grid grid-cols-1 gap-4'>
          <div className="rating">
            <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-primary" required />
            <input type="radio" name="rating" value='2' className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-primary" />
            <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-primary" />
          </div>
          <textarea name='review' minLength="10" className="textarea textarea-bordered rounded" placeholder="Review" required></textarea>
        </div>
        <input className='btn btn-primary w-full rounded mt-4' type="submit" value="Add your review" />
      </form>
    </>
  );
};

export default AddReview;