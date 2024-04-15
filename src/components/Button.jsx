import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Button({title, color}) {
  return (
    <div className={`px-8 py-1 cursor-pointer ${color ? color : "bg-slate-200"} text-black rounded-xl text-sm flex items-center justify-around gap-4`}> {title? title : "Go Ahead"} <MdArrowOutward /> </div>
  )
}

export default Button