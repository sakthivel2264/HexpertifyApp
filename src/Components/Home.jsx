import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Home = () => {
  const { user} = UserAuth();

  return (
    <>
    <div className='flex h-screen w-full justify-center py-10 mx-auto px-2 mt-6'>
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-2">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
          We <span className='font-semibold'>specialize</span>  <br /> in helping businesses reach their full <span className='font-semibold'>potential.</span>
          </h1>
          <p className="text-left mt-5 text-white font-semibold md:w-9/12 w-11/12 text-base ">
              One Stop Solution To Meet <span className='text-red-600 font-semibold'>PRO</span>fessionals Online
          </p>
          <Link to='/profiles'>
          <button
              type="button"
              
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-2 rounded-xl cursor-pointer hover:bg-[#2546bd] "
            >
              {/* <AiFillPlayCircle className="text-white mr-2" /> */}
              {user? (
                <button  className="text-white text-base font-semibold">CONNECTED</button>
                 ) : (
                  <p className="text-white text-base font-semibold">
                    Connect with Us
                  </p>
                  )}
            </button>
            </Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home