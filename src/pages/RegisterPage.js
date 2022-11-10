import React from 'react';
import Register from '../components/Register';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const RegisterPage = () => {

  useDocumentTitle('Register');

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <Register></Register>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;