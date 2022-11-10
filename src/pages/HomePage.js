import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import videoButton from '../assets/video-button.png';
import group42 from '../assets/Group-42.svg';
import section3 from '../assets/section3.png';
import Services from '../components/Services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Loading from '../components/Loading';

const HomePage = () => {

  useDocumentTitle('Home');

  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://corner-advisor-server.vercel.app/services?page=1&size=3')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setServices(data);
      })
      .catch(err => {
        setLoading(false)
      })
  }, []);


  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <section className='py-20'>
        <div className="container">
          <div className='max-w-5xl mx-auto'>
            <div className='text-center max-w-xl mx-auto mb-10'>
              <h2 className='text-2xl md:text-3xl font-bold mb-5 text-secondary'>All Advantage Services</h2>
              <p className='text-text'>It's a complete business solutions to its clients and source,supplies industry proven technologies and machines from global believed companies.</p>
            </div>
            <Services services={services}></Services>
            <div className='mt-14 text-center'>
              <Link to='/services'>
                <button className="btn btn-primary rounded">View all</button>
              </Link>
            </div>
          </div>
        </div>
      </section >
      <section id='my-story' className='py-[70px] lg:py-[150px]'>
        <div className="container flex flex-wrap">
          <div className='md:basis-3/6'>
            <h2 className='text-2xl md:text-3xl font-bold mb-5 text-secondary'>Brainstorming Interactive Ideas on Business Transformation</h2>
            <p className='mb-5 text-text'>I assists companies and individuals to establish business operation in Bangladesh and abroad including subsidiary formation, operating agreements, licensing and establishing relationship with banks, vendors, customers  with our virtual associate consultants worldwide.</p>
            <Link to='' className='flex items-center'>
              <img src={videoButton} className='w-10 mr-4' alt="" />
              <p>Watch My Story</p>
            </Link>
          </div>
          <div className='md:basis-3/6'></div>
        </div>
      </section>
      <section className='py-16'>
        <div className="container flex items-center flex-wrap">
          <div className='md:basis-3/6 lg:pr-16'>
            <div className='text-primary mb-4'>HISTORY CORNER ADVISOR</div>
            <h2 className='text-2xl md:text-3xl font-bold mb-5 text-secondary'>Our Sevices Make Your Work More Productive!</h2>
            <p className='text-text'>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
            <div className='flex mt-8'>
              <figure className='mr-8'>
                <img src={group42} className='w-12 h-12' alt="" />
              </figure>
              <div className="">
                <h5 className="text-lg md:text-xl font-semibold mb-3 text-secondary">Engineered Corporate Solutions Making a Difference</h5>
                <p className="text-text">Every good consulting needs awesome very good consulting needs awesome for your website or marketing.</p></div>
            </div>
            <div className='flex mt-8'>
              <figure className='mr-8'>
                <img src={group42} className='w-12 h-12' alt="" />
              </figure>
              <div className="">
                <h5 className="text-lg md:text-xl font-semibold mb-3 text-secondary">Magnifying New Business Prospects Via Research</h5>
                <p className="text-text">When forming a business, its legal structure is one of the owner's most important practical decisions.</p></div>
            </div>
          </div>
          <div className="md:basis-3/6">
            <img src={section3} className='w-full mt-6 md:mt-0' alt="" />
          </div>
        </div>
      </section>
    </div >
  );
};

export default HomePage;