import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id='hero-section' className='py-32'>
        <div className="container flex">
          <div className='md:basis-8/12 lg:basis-6/12 text-center text-white'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl lg:leading-[60px] font-bold mb-5'>Passion For Dreams
              <span> Redefining </span>
              New Business Goals Online</h1>
            <p className='mb-5 md:px-10'>I Assist you to provide the ultimate business solution from the scratch and to make the business run and operate.</p>
            <Link to='/services' className='btn btn-outline text-white rounded-full font-normal px-10 mb-5'>Services</Link>
          </div>
          <div className='md:basis-4/12 lg:basis-6/12'></div>
        </div>
      </section>
      <section className='py-10 bg-gray'>
        <div className="container flex items-center flex-wrap">
          <div className='lg:basis-4/12 py-3'>
            <h2 className='text-2xl md:text-3xl font-bold text-secondary'>Business Workflow <br />Revealed</h2>
          </div>
          <div className='lg:basis-5/12 py-3'>
            <p>I provide services from incorporation or formation of company or entities. provides sourcing, intending, consultancy and financing facilities for importer/exporter & working capital loans, SME loans for local companies.</p>
          </div>
          <div className='lg:basis-3/12 py-3 text-left lg:text-right'>
            <Link to='/services' className='btn bg-primary border-primary text-white opacity-100 rounded-full font-normal px-10'>Discover More</Link>
          </div>
        </div>
      </section>
    </>

  );
};

export default Hero;