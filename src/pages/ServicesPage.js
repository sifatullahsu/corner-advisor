import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../components/Services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ServicesPage = () => {

  useDocumentTitle('Services');

  const services = useLoaderData();

  return (
    <section className='py-14 md:py-20'>
      <div className="container">
        <div className='max-w-5xl mx-auto'>
          <div className='text-center max-w-xl mx-auto mb-10'>
            <h2 className='text-2xl md:text-3xl font-bold mb-5 text-secondary'>All Advantage Services</h2>
            <p className='text-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod lorem sit amet metus malesuada.</p>
          </div>
          <Services services={services}></Services>
        </div>
      </div>
    </section >
  );
};

export default ServicesPage;