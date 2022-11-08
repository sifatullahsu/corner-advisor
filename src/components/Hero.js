import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id='hero-section' className='py-32'>
        <div className="container flex">
          <div className='basis-6/12 text-center text-white'>
            <h1 className='text-5xl leading-[60px] font-bold mb-5'>Passion For Dreams
              <span> Redefining </span>
              New Business Goals Online</h1>
            <p className='mb-5 md:px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum elementum velit, id bibendum nisl cursus vel. Quisque facilisis tygd sapien eget congue convallis. Sed egestas nulla neque .</p>
            <Link to='' className='btn btn-outline text-white rounded-full font-normal px-10 mb-5'>Ask For Consultation</Link>
          </div>
          <div className='basis-6/12'></div>
        </div>
      </section>
      <section className='py-10 bg-slate-200'>
        <div className="container flex items-center flex-wrap">
          <div className='lg:basis-4/12 py-3'>
            <h2 className='text-3xl font-bold text-secondary'>Business Workflow <br />Revealed</h2>
          </div>
          <div className='lg:basis-5/12 py-3'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod lorem sit amet metus malesuada.</p>
          </div>
          <div className='lg:basis-3/12 py-3 text-left lg:text-right'>
            <Link className='btn rounded-full font-normal px-10'>Discover More</Link>
          </div>
        </div>
      </section>
    </>

  );
};

export default Hero;