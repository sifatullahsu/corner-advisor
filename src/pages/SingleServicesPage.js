import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';

const SingleServicesPage = () => {

  const service = useLoaderData();
  const { _id, name, img, price, description } = service;

  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;

    const data = {
      serviceId: _id,
      author: {
        id: user.uid,
        email: user.email
      },
      review
    }

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => toast.success('Review added..'))
      .catch(err => toast.error('Somthing is wrong..'))
  }

  return (
    <section className='py-20'>
      <div className="container">
        <div className='max-w-5xl mx-auto bg-gray border border-border p-10 flex gap-8'>
          <div className='basis-8/12'>
            <div className='mb-16'>
              <img src={img} className='w-full border border-border mb-10' alt="" />
              <h2 className='text-2xl font-bold mb-4 text-secondary'>{name}</h2>
              <p className='text-text mb-4'>{price}</p>
              <p className='text-text mb-4'>{description}</p>
            </div>
            <div className='border-t border-border pt-5'>
              <h3 className='text-base font-semibold mb-4 text-secondary'>Add your review</h3>
              <form onSubmit={handleAddReview}>
                <div className='grid grid-cols-1 gap-4'>
                  <textarea name='review' className="textarea textarea-bordered rounded" placeholder="Review" required></textarea>
                </div>
                <input className='btn btn-primary w-full rounded mt-4' type="submit" value="Add your review" />
              </form>
            </div>
          </div>
          <div className='basis-4/12'>
            <div className='bg-white border border-border p-5 sticky top-10'>
              <h3 className='text-lg font-semibold text-secondary mb-4'>Need Help?</h3>
              <p className='text-text text-mxs mb-4'>Please Feel Free To Contact. I Will Get Back To You With 1-2 Business Days. <br /><br />personal.sifat@gmail.com <br /> (888) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SingleServicesPage;