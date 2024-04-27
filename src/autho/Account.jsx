import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[300px] m-auto h-screen flex flex-col justify-start items-center'>
      <h1 className='text-center text-white text-2xl font-bold pt-12 mb-5'>Account</h1>
      <div>
        <p className='text-white'>Welcome, {user?.email}</p>
      </div>
      <div className='p-10'>
        <button onClick={handleSignOut} className='bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
