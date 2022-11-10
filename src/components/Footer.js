import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContextComp';

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className='bg-gray'>
      <div className='container py-10'>
        <div className="footer text-base-content">
          <div>
            <img src={logo} className='w-32 mb-4' alt="" />
            <p><span className='font-semibold'>Corner Advisor Ltd.</span><br />Providing business consultancy since 2012</p>
            <p>Email: personal.sifat@gmail.com</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link to='/services/636b2e153752e95b8788a420' className="link link-hover">HR Consultancy</Link>
            <Link to='/services/636b2e153752e95b8788a421' className="link link-hover">Strategy Consultancy</Link>
            <Link to='/services/636b2e153752e95b8788a422' className="link link-hover">Marketing and Sales Consultancy</Link>
            <Link to='/services/636b2e153752e95b8788a41e' className="link link-hover">Administration Consultancy</Link>
            <Link to='/services/636b2e153752e95b8788a423' className="link link-hover">Operations Consultancy</Link>
            <Link to='/services/636b2e153752e95b8788a41f' className="link link-hover">Finance Consultancy</Link>
          </div>
          <div>
            <span className="footer-title">Important</span>
            <Link to='/' className="link link-hover">Home</Link>
            <Link to='/services' className="link link-hover">Servises</Link>
            <Link to='/blog' className="link link-hover">Blog</Link>
          </div>
          <div>
            <span className="footer-title">Account</span>
            {
              !user?.uid ?
                <>
                  <Link to='/login' className="link link-hover">Login</Link>
                  <Link to='/register' className="link link-hover">Register</Link>
                </>
                :
                <>
                  <Link to='/my-reviews' className="link link-hover">My Review</Link>
                  <Link to='/add-service' className="link link-hover">Add Service</Link>
                </>
            }
          </div>
        </div>
      </div>
      <div className="text-center p-4 bg-zinc-100 text-base-content text-sm">
        <div>
          <p>Copyright © 2022 - All right reserved by Corner Advisor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;