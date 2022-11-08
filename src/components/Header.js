import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navMenuItems = () => {
    return (
      <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
        <li><NavLink to='/add-service'>Add Service</NavLink></li>
      </>
    );
  }

  return (
    <header>
      <div className="topbar bg-primary text-white text-mxs">
        <div className="container flex">
          <div className='basis-6/12 p-2 hidden md:block'>
            <p>NEED HELP? TALK TO AN EXPERT 888-123-4567</p>
          </div>
          <div className='basis-full md:basis-6/12 p-2 text-center md:text-right'>
            <span>Follow us: </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navbar justify-between bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost text-primary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navMenuItems()}
              </ul>
            </div>
            <Link>
              <img src={logo} alt="" className='w-32' />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navMenuItems()}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;