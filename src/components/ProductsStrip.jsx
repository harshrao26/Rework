import React from "react";
import Button from "./Button";

function ProductsStrip({ title, content, showBtn }) {
  return (
    <div className="flex flex-col bg-zinc-900 hover:bg-violet-600 transition-all ease-in-out scale-500 rounded-lg mx-4 my-4 border-solid px-4 py-8 text-white items-center md:flex-row md:justify-between md:px-32">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl mb-4">{title}</h1>
        <p className="text-sm md:text-base">{content}</p>
      </div>
      <div className="md:flex mt-4 md:mb-0 gap-4 p-5">
        <div className="flex gap-4">
        <Button title="Learn More"  />
        {showBtn && <Button title="Browse" />}
        </div>
      </div>
    </div>
  );
}

export default ProductsStrip;
