import React from 'react';
import Login from '../components/Login';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LoginPage = () => {

  useDocumentTitle('Login');

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='max-w-lg mx-auto'>
          <Login></Login>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;