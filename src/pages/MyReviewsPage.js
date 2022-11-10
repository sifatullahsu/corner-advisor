import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import Reviews from '../components/Reviews';
import { AuthContext } from '../contexts/AuthContextComp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const MyReviewsPage = () => {
  useDocumentTitle('My Reviews');

  const { user, userLogout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://corner-advisor-server.vercel.app/get-reviews-by-email?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('corner-token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return userLogout().then(res => toast.error('You are not authorize user.'));
        }
        else {
          return res.json();
        }
      })
      .then(data => {
        setLoading(false);
        setReviews(data.data);
      })
      .catch(err => {
        setLoading(false);
      })
  }, [user, userLogout]);


  const handleReviewDelete = (id) => {
    const confirm = window.confirm('Are you sure, you want to delete the review?');

    if (confirm) {
      fetch(`https://corner-advisor-server.vercel.app/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(data => {
          const remainingReviews = reviews.filter(review => review._id !== id);
          setReviews(remainingReviews);
          toast.success('Delete successfull..');
        })
        .catch(err => toast.error('Somthing is wrong..'))
    }
  }


  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <div className='bg-gray py-8 px-3 md:p-10 border border-border'>
            <h4 className='text-xl mb-3'>My reviews</h4>
            {
              reviews?.length > 0 ?
                <Reviews reviews={reviews} edit='true' handleReviewDelete={handleReviewDelete}></Reviews>
                :
                <p>No reviews were added..</p>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReviewsPage;