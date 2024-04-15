import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

function Card({ width, height, color, hovering }) {
  return (
    <div
      className={`${width} h-${height} hover:bg-violet-600 transition-all ease-in-out rounded-xl p-4 ${color}  `}>
      <div className="hover:ml-2 flex flex-col justify-between h-full transition-all ease-in-out ">
        <div className="flex flex-col">
          <p className="flex items-center justify-between">
            One Heading <FaArrowRight />
          </p>
          <h3 className="text-2xl">Whatever Heading</h3>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Start New Project</h1>
          <div width="100%" className="flex">
            <Button title={"Learn More"} />
          </div>
          <p>Lorem ipsum dolor sit amet conset.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
