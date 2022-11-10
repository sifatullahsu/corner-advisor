import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLocation } from 'react-router-dom';
import AddReview from '../components/AddReview';
import Error from '../components/Error';
import Loading from '../components/Loading';
import NeedHelp from '../components/NeedHelp';
import Reviews from '../components/Reviews';
import { AuthContext } from '../contexts/AuthContextComp';

const SingleServicesPage = () => {

  const [service, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(false);

  const { _id, name, img, price, description } = service;

  useEffect(() => {
    const serviceTitle = name ? name : 'Loading..';
    document.title = serviceTitle + " - Corner Advisor";
  }, [name]);


  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewUpdate, setReviewUpdate] = useState(true);
  const location = useLocation();
  const pageId = location.pathname.split('/services/')[1];

  useEffect(() => {
    fetch(`https://corner-advisor-server.vercel.app/services/${pageId}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setServices(data);

        setReviewLoading(true);
        fetch(`https://corner-advisor-server.vercel.app/reviews?serviceId=${data._id}`)
          .then(res => res.json())
          .then(data => {
            setReviewLoading(false);
            setReviews(data.data);
          })
      })
      .catch(err => {
        setLoading(false)
      })
  }, [pageId, reviewUpdate]);


  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (!service?._id) {
    return (
      <Error></Error>
    );
  }



  return (
    <section className='py-10 md:py-20'>
      <div className="container">
        <div className='max-w-5xl mx-auto bg-gray border border-border p-2 md:py-10 md:px-4 lg:p-10 flex flex-wrap md:flex-nowrap md:gap-4 lg:gap-8'>
          <div className='basis-12/12 md:basis-8/12'>

            <div className='mb-16'>
              <PhotoProvider>
                <PhotoView src={img}>
                  <figure>
                    <img src={img} className='w-full border border-border mb-5 lg:mb-10' alt="" />
                  </figure>
                </PhotoView>
              </PhotoProvider>
              <h2 className='text-xl lg:text-2xl font-semibold mb-4 text-secondary'>{name}</h2>
              <p className='text-text mb-4'>Price: {price}</p>
              <p className='text-text mb-4'>{description}</p>
            </div>

            <div className='pt-8'>
              <h3 className='text-base font-semibold mb-4 text-secondary'>Service Reviews</h3>
              {
                reviewLoading ?
                  <Loading></Loading>
                  :
                  <>
                    {
                      reviews.length > 0 ?
                        <Reviews reviews={reviews}></Reviews>
                        :
                        <p>No review found..</p>
                    }
                  </>
              }
            </div>

            <div className='pt-8'>
              <h3 className='text-base font-semibold mb-4 text-secondary'>Add your review</h3>
              {
                user ?
                  <AddReview
                    serviceId={_id}
                    seviceName={name}
                    reviewUpdate={reviewUpdate}
                    setReviewUpdate={setReviewUpdate}
                  ></AddReview>
                  :
                  <>
                    <p>Want to add reviews here? <Link to='/login' state={location} className='font-medium'>Please Login</Link></p>
                  </>
              }
            </div>
          </div>
          <div className='basis-12/12 md:basis-4/12'>
            <div className='sticky top-10 mt-8 md:mt-0'>
              <NeedHelp></NeedHelp>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SingleServicesPage;