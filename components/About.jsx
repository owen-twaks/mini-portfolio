import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 text-gray-700'>
          Reason to be a developer at<span className='text-[#5651e5]'> SovTech.</span>
          </h2>
          <p className='py-2 text-gray-600'>
           <strong>I am Junior <span className='text-[#5651e5]'>Fullstack web developer</span></strong>
          </p>
          <p className='py-2 text-gray-600'>
          While I feel that my technical skills are an excellent fit for your needs, 
          the core reason I want to work here is because of the amazing culture. 
          The company’s mission and values align with my own. 
          Plus, your company doesn’t just talk big; it takes action,
          showing its dedication to its purpose and stated priorities.
          </p>
          <p className='py-2 text-gray-600'>
          I’m impressed by your company’s commitment to the growth and development of its employees and
          I’m looking for a company 
          that empowers and challenges its employees to be the best professionals they can be.
          In my research, I’ve found that <span className='text-[#5651e5]'> SovTech.</span> invest in ongoing education of its employees 
          through education reimbursement, onsite training and mentorship programs. 
          In addition, you have a great reputation for leadership in the industry. 
          This is a company at which I would be honored to grow my career.

          </p>
         
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src="/owen.png"
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
