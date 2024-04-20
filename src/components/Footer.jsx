import React from "react";
import Button from "./Button";

function Footer() {
  const social = ["Instagram", "Facebook", "Twitter"];
  const navigation = ["Home", "About", "Contact"];
  
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16 items-center">
      <div className="w-full md:w-2/3 mb-8 md:mb-0 md:mr-4">
        <h1 className="text-4xl md:text-8xl leading-none font-extrabold hover:text-5xl md:hover:text-9xl transition-all ease-in-out">
          ReFokus <span className="text-violet-500">.</span>
        </h1>
      </div>
      <div className="w-full md:w-1/3 flex flex-col md:flex-row md:justify-end gap-8">
        <div className="flex flex-col">
          <h1 className="mb-4 md:mb-10">Socials</h1>
          <ul className="text-zinc-600 font-semibold gap-2 flex flex-wrap">
            {social.map((item, index) => (
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-4 md:mb-10">Navigation</h1>
          <ul className="text-zinc-600 gap-2 flex flex-wrap">
            {navigation.map((item, index) => (
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:justify-center gap-4">
          <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex">
            <Button title="Connect" color="bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
