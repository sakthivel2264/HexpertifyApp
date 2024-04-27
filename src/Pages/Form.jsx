import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultantForm = () => {
  const navigate = useNavigate();
  const [user, setUser ] = useState(
    {
      name:'', email:'', phoneNumber:'', consultantService:'' 
    }
  );
  let name, value
  const data =(e) =>{
    console.log(user)
    name= e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value})
  }
  const handleSubmit = async (e) =>{
    const { name, email, phoneNumber, consultantService } = user;
    e.preventDefault();
    const options = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phoneNumber, consultantService
      })
    }
    const res = await fetch(import.meta.env.VITE_FIREBASE_DBURL, options)

    console.log(res)
    if(res){
      alert("Form Submitted Successfully")
    }
    else{
      alert("Error Occured")
    }
    navigate('/success')
  }
 

  return (
    <div className='h-screen p-6 '>
    <div className="max-w-md mx-auto  mt-8 p-6 bg-white rounded-lg shadow-md blue-glassmorphism text-white">
      <h2 className="text-2xl font-bold mb-4">Consultant Service Request Form</h2>
      <form method= 'POST' onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={data}
            className="w-full blue-glassmorphism rounded-md p-1 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Email Address:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={data}
            className="w-full blue-glassmorphism rounded-md p-1 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block font-semibold">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={data}
            className="w-full blue-glassmorphism rounded-md p-1 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="consultantService" className="block font-semibold">Consultant Service Needed:</label>
          <select
            name="consultantService"
            value={user.consultantService}
            onChange={data}
            className="w-full blue-glassmorphism rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          >
            <option value="">Select service...</option>
            <option value="Financial Consulting" name="consultantService">Financial Consulting</option>
            <option value="Legal Consulting" name="consultantService">Legal Consulting</option>
            <option value="Marketing Consulting" name="consultantService">Marketing Consulting</option>
          </select>
        </div>
        
        <button type="submit" className="w-full bg-[#2952e3] text-white font-semibold py-2 rounded-md shadow-md ">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ConsultantForm;
