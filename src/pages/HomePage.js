import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';
import videoButton from '../assets/video-button.png';
import group42 from '../assets/Group-42.svg';
import section3 from '../assets/section3.png';
import Services from '../components/Services';

const HomePage = () => {
  const services = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <section className='py-20'>
        <div className="container">
          <div className='max-w-5xl mx-auto'>
            <div className='text-center max-w-xl mx-auto mb-10'>
              <h2 className='text-3xl font-bold mb-5 text-secondary'>All Advantage Services</h2>
              <p className='text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod lorem sit amet metus malesuada.</p>
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
            <h2 className='text-3xl font-bold mb-5 text-secondary'>Brainstorming Interactive Ideas on Business Transformation</h2>
            <p className='mb-5 text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia hendrerit sapien mollis pretium. Sed ultricies tempus malesuada. Nulla faucibu lacus neque, eu consequat enim mollis pharetra.</p>
            <Link to='' className='flex items-center'>
              <img src={videoButton} className='w-10 mr-4' alt="" />
              <p>Watch My Story</p>
            </Link>
          </div>
          <div className='md:basis-3/6'></div>
        </div>
      </section>
      <section className='py-16'>
        <div className="container flex items-center">
          <div className='basis-3/6 lg:pr-16'>
            <div className='text-primary mb-4'>HISTORY CORNER ADVISOR</div>
            <h2 className='text-3xl font-bold mb-5 text-secondary'>Our Sevices Make Your Work More Productive!</h2>
            <p className='text-text'>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
            <div className='flex mt-8'>
              <figure className='mr-8'>
                <img src={group42} className='w-12 h-12' alt="" />
              </figure>
              <div className="">
                <h5 className="text-xl font-semibold mb-3 text-secondary">Engineered Corporate Solutions Making a Difference</h5>
                <p className="text-text">Every good consulting needs awesome very good consulting needs awesome for your website or marketing.</p></div>
            </div>
            <div className='flex mt-8'>
              <figure className='mr-8'>
                <img src={group42} className='w-12 h-12' alt="" />
              </figure>
              <div className="">
                <h5 className="text-xl font-semibold mb-3 text-secondary">Magnifying New Business Prospects Via Research</h5>
                <p className="text-text">Every good consulting needs awesome very good consulting needs awesome for your website or marketing.</p></div>
            </div>
          </div>
          <div className="basis-3/6">
            <img src={section3} className='w-full' alt="" />
          </div>
        </div>
      </section>
    </div >
  );
};

export default HomePage;