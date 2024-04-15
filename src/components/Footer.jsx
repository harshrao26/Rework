import React from "react";
import Button from "./Button";
function Footer() {
    const social = ["Instagram", "Facebook", "Twitter"];
    const navigation = ["Home", "About", "Contact"];
  return (
    <div className="flex p-16 items-center">
      <div className="w-2/3">
        <h1 className="text-8xl leading-none font-extrbold hover:text-9xl transition-all ease-in-out">ReFokus <span className="text-violet-500 ">.</span></h1>
      </div>
      <div className="w-1/3 flex gap-10">
        <div className="">
            <h1 className="mb-10">Socials</h1>
          <ul className="text-zinc-600 font-semibold w-20 gap-2 flex flex-col">
            {social.map((item, index) => (
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
            <h1 className="mb-10">Navigation</h1>
          <ul className="text-zinc-600 w-20 gap-2 flex flex-col">
            {navigation.map((item, index) => (
              <li className="cursor-pointer hover:pl-2 transition-all ease-in-out" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-4 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex " >
            <Button title="Connect" color="bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
