import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img from "../assets/logo.png"
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className='bg-black/50 sticky top-0 w-full flex md:justify-center justify-between items-center p-4 z-50'>
      {/* Set z-index to 50 to ensure the navbar remains on top of other components */}
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        
        <Link to='/'>
        <h1 className='text-white font-semibold text-xl'>HEXPERTIFY</h1>
          {/* <img src={img} alt="HEXPERTISE" className='w-40' /> */}
        </Link>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        <li className='mx-4 cursor-pointer'>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to="/account" className="text-white">My Profile</Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to="/profiles" className="text-white">Services</Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to="/about" className="text-white">About Us</Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to="/contact" className="text-white">Contact Us</Link>
        </li>
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-xl cursor-pointer hover:bg-[#0d1a48]'>
          {user? (
            <button onClick={handleSignOut} className="text-white">Logout</button>
          ) : (
            <Link to='/login' className="text-white">Login</Link>
          )}
        </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu ? (
          <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => { setToggleMenu(false) }} />
        ) : (
          <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul className="z-50 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="my-2 text-lg m-4">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="my-2 text-lg m-4">
              <Link to="/account" className="text-white">My Profile</Link>
            </li>
            <li className="my-2 text-lg m-4">
              <Link to="/profiles" className="text-white">Services</Link>
            </li>
            <li className="my-2 text-lg m-4">
              <Link to="/about" className="text-white">About Us</Link>
            </li>
            <li className="my-2 text-lg m-4">
              <Link to="/contact" className="text-white">Contact Us</Link>
            </li>
            <li className="my-2 text-lg m-4 bg-[#2952e3] px-4 rounded-xl cursor-pointer hover:bg-[#2546bd]">
              {user? (
                <button onClick={handleSignOut} className="text-white text-sm">Logout</button>
              ) : (
                <Link to='/login' className="text-white text-sm">Login</Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
