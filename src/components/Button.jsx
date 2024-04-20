import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Button({ title, color }) {
  return (
    <div className={`px-4 md:px-8 py-1 md:py-2 cursor-pointer ${color ? color : 'bg-slate-200'} text-black rounded-xl text-sm md:text-base flex items-center justify-around gap-2 md:gap-4`}>
      {title ? title : 'Go Ahead'}
      <MdArrowOutward size={18} className='md:inline hidden' />
    </div>
  );
}

export default Button;
