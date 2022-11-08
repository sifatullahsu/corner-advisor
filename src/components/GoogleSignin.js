import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextComp';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleSignIn = ({ from }) => {
  const { userSocialLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    userSocialLogin('google')
      .then(res => {
        toast.success('Successfully logged in!!');
        navigate(from);
      })
      .catch(err => {
        toast.error('Something is wrong!!');
      })
  }

  return (
    <>
      <button onClick={handleGoogleSignIn} className='btn'>Google</button>
    </>
  );
};

export default GoogleSignIn;