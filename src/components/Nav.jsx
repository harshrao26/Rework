import React from 'react'
import Button from './Button'
function Nav() {
  return (
    <div className=''>
        <div className='bg-zinc-900 flex items-center px-32 gap-32 justify-between h-16 text-white '>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links text-white flex  gap-16'>
            {["Home", "Work", "Culture", "News"].map((elem, index)=> {
                return <a href="" className='flex items-center '>
                    
                    {index == 1 ? <span className='w-[6px] h-[6px] rounded-full mr-2 bg-[#4bdf38] shadow-lg shadow-[#39ff1f]'></span> : null}
                    {index == 3 ? <span className='w-[8px] h-[8px] rounded-full mr-16 text-[#dadada] flex items-center'>|</span> : null}
                    {elem}

                </a>
            
            })}

        </div>
        <Button />
        </div>
    </div>
  )
}

export default Nav