import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Reviews from '../components/Reviews';
import { AuthContext } from '../contexts/AuthContextComp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const MyReviewsPage = () => {
  useDocumentTitle('My Reviews');

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://corner-advisor-server.vercel.app/get-reviews-by-email', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        setReviews(data.data)
      })
  }, [user]);


  const handleReviewDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(data => {
        const remainingReviews = reviews.filter(review => review._id !== id);
        setReviews(remainingReviews);
        toast.success('Delete successfull..');
      })
      .catch(err => toast.error('Somthing is wrong..'))
  }

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <div className='bg-gray p-10 border border-border'>
            <h4 className='text-xl mb-3'>My reviews</h4>
            {
              reviews.length > 0 ?
                <Reviews reviews={reviews} edit='true' handleReviewDelete={handleReviewDelete}></Reviews>
                :
                <p>No review found..</p>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReviewsPage;