import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {auth} from './firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(signInWithEmailAndPassword)
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      //need to change
      navigate('/form');
    }
  }, [user]);

  return (
    <div className="min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white mb-2">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-1 border blue-glassmorphism text-white text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 m-1 border blue-glassmorphism text-white text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div className='flex items-center justify-center space-x-4'>
            <button
              type="submit"
              className="group relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2952e3] hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <Link to='/signup'>
              <button
                type="button"
                className="group relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Sign up
              </button>
            </Link>
          </div>
        </form>
        <h1 className='text-white flex justify-center'>or</h1>
        <div>
          <div className='max-w-[240px]  m-auto'>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Login;
