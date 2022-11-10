import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthContextComp = ({ children }) => {

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const userLogin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userRegister = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userLogout = () => {
    return signOut(auth);
  }

  const userSocialLogin = (provider) => {
    setUserLoading(true);

    if (provider === 'google') {
      return signInWithPopup(auth, googleProvider);
    }

    return false;
  }

  const updateUserProfile = arg => {
    return updateProfile(auth.currentUser, arg)
  }

  const getUserJwt = async (email) => {
    const currentUser = { email }

    const jwt = await fetch('https://corner-advisor-server.vercel.app/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    })

    const jwtData = await jwt.json();

    return jwtData;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    })

    return () => {
      unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    userLoading,
    userLogin,
    userRegister,
    userLogout,
    userSocialLogin,
    updateUserProfile,
    getUserJwt
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComp;