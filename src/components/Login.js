import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GoogleSignIn from './GoogleSignIn';

const Login = () => {
  const { userLogin, getUserJwt } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/my-reviews';

  const handleUserLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(res => {
        toast.success('Successfully logged in!!');
        getUserJwt(res.user.email)
          .then(data => {
            localStorage.setItem('corner-token', data.token);
            navigate(from, { replace: true });
          })
      })
      .catch(err => {
        toast.error(err.message);
      })
  }
  return (
    <div className='bg-gray py-10 px-6 md:p-10 border border-border'>
      <h4 className='text-xl mb-3'>Login</h4>
      <form onSubmit={handleUserLogin}>
        <div className='grid grid-cols-1 gap-4'>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email Address</span></label>
            <input name="email" type="email" placeholder="email" className="input input-bordered rounded" required />
          </div>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Password</span></label>
            <input name="password" type="password" placeholder="password" className="input input-bordered rounded" required />
          </div>
        </div>
        <input className='btn btn-primary rounded mt-4' type="submit" value="Login" />
      </form>

      <p className='pt-8 pb-2'>Want social login?</p>
      <GoogleSignIn from={from}></GoogleSignIn>

      <div className='mt-8'>
        Don't have an account? <Link
          to='/register' className='font-medium'>Register here</Link>
      </div>
    </div>
  );
};

export default Login;