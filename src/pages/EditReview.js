import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const EditReview = () => {

  useDocumentTitle('Edit Review')

  const review = useLoaderData();
  const navigate = useNavigate();

  const handleEditReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const reviewText = form.review.value;

    const data = {
      author: {
        name,
        image,
        email: review.author.email
      },
      rating,
      review: reviewText
    }

    // console.log(data);
    fetch(`https://corner-advisor-server.vercel.app/reviews/${review._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => {
        toast.success('Review updated..');
        navigate('/my-reviews')
      })
      .catch(err => toast.error('Somthing is wrong..'))
  }


  if (!review?._id) {
    return (
      <Error></Error>
    );
  }

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <div className='bg-gray p-10 border border-border'>
            <h4 className='text-xl mb-3'>Edit reviews</h4>
            <form onSubmit={handleEditReview}>
              <div className='grid grid-cols-1 gap-4'>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Full Name</span></label>
                  <input name="name" type="text" placeholder="full name" defaultValue={review?.author?.name} className="input input-bordered rounded" required />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Image URL</span></label>
                  <input name="image" type="url" placeholder="image url" defaultValue={review?.author?.image} className="input input-bordered rounded" required />
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Rating</span></label>
                  <select name='rating' defaultValue={review.rating} className="select select-bordered rounded">
                    <option defaultValue='1'>1</option>
                    <option defaultValue='2'>2</option>
                    <option defaultValue='3'>3</option>
                    <option defaultValue='4'>4</option>
                    <option defaultValue='5'>5</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label"><span className="label-text">Review</span></label>
                  <textarea name='review' minLength="10" defaultValue={review?.review} className="textarea textarea-bordered rounded" placeholder="Review" required></textarea>
                </div>

              </div>
              <input className='btn btn-primary w-full rounded mt-4' type="submit" value="Update review" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditReview;