import React from 'react';
import Button from './Button';

function Nav() {
  return (
    <div className='w-full'>
      <div className='bg-zinc-900 flex items-center px-8 md:px-16 gap-4 md:gap-32 justify-between h-16 text-white mx-auto max-w-screen-xl'>
        <img
          src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg'
          alt='logo'
          className='h-6 md:h-6'
        />
        <div className='hidden md:flex gap-16'>
          {["Home", "Work", "Culture", "News"].map((elem, index) => (
            <a href='#' className='flex items-center text-base md:text-lg lg:text-md xl:text-md' key={index}>
              {index === 1 && (
                <span className='w-2 h-2 rounded-full mr-2 bg-[#4bdf38] shadow-lg shadow-[#39ff1f]'></span>
              )}
              {index === 3 && (
                <span className='mr-16 text-[#dadada] h-full w-[1.5px] bg-white'></span>
              )}
              {elem}
            </a>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
