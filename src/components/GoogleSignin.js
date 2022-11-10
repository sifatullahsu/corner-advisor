import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextComp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignIn = ({ from }) => {
  const { userSocialLogin, getUserJwt } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    userSocialLogin('google')
      .then(res => {
        toast.success('Successfully logged in!!');
        getUserJwt(res.user.email)
          .then(data => {
            localStorage.setItem('corner-token', data.token);
            navigate(from);
          })
      })
      .catch(err => {
        toast.error('Something is wrong!!');
      })
  }

  return (
    <>
      <button onClick={handleGoogleSignIn} className='bg-white py-2 px-5 border border-border'>
        <FcGoogle className='inline'></FcGoogle> Google
      </button>
    </>
  );
};

export default GoogleSignIn;