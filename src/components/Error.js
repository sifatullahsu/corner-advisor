import React from 'react';
import errorImg from '../assets/error.jpg';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Error = () => {
  useDocumentTitle('404');

  return (
    <section className='py-16'>
      <div className="container">
        <img src={errorImg} className='max-w-lg mx-auto' alt="" />
      </div>
    </section>
  );
};

export default Error;