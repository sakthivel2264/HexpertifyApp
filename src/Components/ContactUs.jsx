import React from 'react';

const ContactUs = () => {
  return (
    <div className="container h-screen mx-auto px-4 py-8 text-white ">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <a className='flex justify-center items-center m-14' href='https://mail.google.com/mail/?view=cm&fs=1&to=hexpertifyapp@gmail.com&su=Subject&body=Body%20Text'> 
        You can contact us via email at hexpertifyapp@gmail.com or by phone at +918940506900.
      </a>
      {/* Add more contact information or form as needed */}
    </div>
  );
};

export default ContactUs;
