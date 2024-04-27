import React from 'react'
import { UserAuth } from '../context/AuthContext'
import {Link} from 'react-router-dom'

const Success = () => {
  const { user } = UserAuth();

  return (
    <div className='text-white h-screen flex flex-col justify-center items-center '>
      <h1 className='text-white text-center mb-4'>Request Form Submitted Successfully.</h1>
      <h1 className='text-white text-center'>Thank You, {user?.email}</h1>
      <div className=" text-lg m-4 bg-[#2952e3] px-4 rounded-full cursor-pointer hover:bg-[#2546bd] mt-4">
        <Link to='/'>
        <button  className="text-white text-sm">Home</button>
        </Link>
      
      </div>
      
    </div>
  )
}

export default Success;
