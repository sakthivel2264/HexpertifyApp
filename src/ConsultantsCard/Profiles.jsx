import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/profile.jpeg'
import { UserAuth } from '../context/AuthContext';

const ProfileCard = ({ name, role, image }) => {
  const { user } = UserAuth();

  return (
    <>
    {user?.displayName ? (
    
        <Link to='/form'>
        <div className="bg-black/50 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs">
          <img className="w-full h-36 object-cover object-center" src={image} alt={name} />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
            <p className="text-sm text-gray-700 mb-2">{role}</p>
            {/* You can add more information about the profile here */}
            <button className="bg-[#2952e3] hover:bg-[#172c76] text-white font-bold py-2 px-4 rounded-xl">
              Get Service
            </button>
          </div>
        </div>
        </Link>
      ) : (
    <Link to='/login'>
    <div className="bg-black/50 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs">
      <img className="w-full h-36 object-cover object-center" src={image} alt={name} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
        <p className="text-sm text-gray-700 mb-2">{role}</p>
        {/* You can add more information about the profile here */}
        <button className="bg-[#2952e3] hover:bg-[#172c76] text-white font-bold py-2 px-4 rounded-xl">
        Get Service
        </button>
      </div>
    </div>
    </Link>
    )}
    </>
  );
};

const Profiles = () => {
  const profiles = [
    {
      name: "John Doe",
      role: "Web Developer",
      image: img,
    },
    {
      name: "Jane Smith",
      role: "App Developer",
      image: img,
    },
    {
      name: "Smith",
      role: "AR/VR Developer",
      image: img,
    },
    // Add more profiles as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8  md:max-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white underline">Our Experts</h1>
      <p className='text-white mb-4'>Here our Experts to help you!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
          
        ))}
      </div>
    </div>
  );
};

export default Profiles;
