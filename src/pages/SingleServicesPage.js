import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import AddReview from '../components/AddReview';
import Error from '../components/Error';
import NeedHelp from '../components/NeedHelp';
import Reviews from '../components/Reviews';
import { AuthContext } from '../contexts/AuthContextComp';

const SingleServicesPage = () => {

  const service = useLoaderData();
  const { _id, name, img, price, description } = service;

  useEffect(() => {
    document.title = name + " - Corner Advisor";
  }, [name]);


  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://corner-advisor-server.vercel.app/reviews?serviceId=${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data.data);
      })
  }, [_id]);



  if (!service?._id) {
    return (
      <Error></Error>
    );
  }

  return (
    <section className='py-20'>
      <div className="container">
        <div className='max-w-5xl mx-auto bg-gray border border-border p-10 flex gap-8'>
          <div className='basis-8/12'>

            <div className='mb-16'>
              <PhotoProvider>
                <PhotoView src={img}>
                  <figure>
                    <img src={img} className='w-full border border-border mb-10' alt="" />
                  </figure>
                </PhotoView>
              </PhotoProvider>
              <h2 className='text-2xl font-semibold mb-4 text-secondary'>{name}</h2>
              <p className='text-text mb-4'>Price: {price}</p>
              <p className='text-text mb-4'>{description}</p>
            </div>

            <div className='pt-8'>
              <h3 className='text-base font-semibold mb-4 text-secondary'>Service Reviews</h3>
              {
                reviews.length > 0 ?
                  <Reviews reviews={reviews}></Reviews>
                  :
                  <p>No review found..</p>
              }
            </div>

            <div className='pt-8'>
              <h3 className='text-base font-semibold mb-4 text-secondary'>Add your review</h3>
              {
                user ?
                  <AddReview serviceId={_id}></AddReview>
                  :
                  <>
                    <p>Want to add reviews here? <Link to='/login' state={location} className='font-medium'>Please Login</Link></p>

                  </>
              }
            </div>
          </div>
          <div className='basis-4/12'>
            <div className='sticky top-10'>
              <NeedHelp></NeedHelp>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SingleServicesPage;