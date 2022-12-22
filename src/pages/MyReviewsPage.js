import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import Reviews from '../components/Reviews';
import { AuthContext } from '../contexts/AuthContextComp';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const MyReviewsPage = () => {
  useDocumentTitle('My Reviews');

  const { user, userLogout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/get-reviews-by-email?email=${user.email}&page=${page}&size=${3}`, {
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
        setReviews(data);
      })
      .catch(err => {
        setLoading(false);
      })
  }, [user, userLogout, page]);


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


  console.log(reviews);

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
              reviews.data?.length > 0 ?
                <Reviews reviews={reviews.data} edit='true' handleReviewDelete={handleReviewDelete}></Reviews>
                :
                <p>No reviews were added..</p>
            }
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={reviews.pagination.total}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={(e) => setPage(e.selected + 1)}
              containerClassName="pagination"
              activeClassName="active"
              forcePage={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReviewsPage;