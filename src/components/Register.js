import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';
import GoogleSignIn from './GoogleSignIn';

const Register = () => {
  const { userRegister, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/my-reviews';

  const handleUserRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    userRegister(email, password)
      .then(result => {
        console.log(result.user);
        form.reset();
        updateUserProfile({ displayName: name, photoURL: image })
          .then(res => {
            toast.success('Successfully logged in!!');
            navigate(from);
          })
      })
      .catch(error => {
        toast.error('Something is wrong!!');
      })
  }

  return (
    <div>
      <div className='bg-gray p-10 border border-border'>
        <h4 className='text-xl mb-3'>Register</h4>
        <form onSubmit={handleUserRegister}>
          <div className='grid grid-cols-1 gap-4'>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input name="name" type="text" placeholder="name" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Image URL</span></label>
              <input name="image" type="url" placeholder="image url" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Email Address</span></label>
              <input name="email" type="email" placeholder="email" className="input input-bordered rounded" required />
            </div>

            <div className="form-control w-full">
              <label className="label"><span className="label-text">Password</span></label>
              <input name="password" type="password" placeholder="password" className="input input-bordered rounded" required />
            </div>

          </div>
          <input className='btn btn-primary rounded mt-4' type="submit" value="Register" />
        </form>

        <p className='pt-8 pb-2'>Want social login?</p>
        <GoogleSignIn from={from}></GoogleSignIn>

        <div className='mt-8'>
          Allready have an accout? <Link
            to='/login' className='font-medium'>Please Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;