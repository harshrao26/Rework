import React from "react";
import Button from "./Button";

function ProductsStrip({ title, content, showBtn }) {
  return (
    <div className="flex flex-col md:flex-row bg-zinc-900 hover:bg-violet-600 transition-all ease-in-out scale-500 rounded-lg mx-4 md:mx-16 my-4 border-solid px-8 md:px-32 py-8 text-white justify-between items-center">
      <div>
        <h1 className="text-3xl md:text-5xl">{title}</h1>
        <p className="mt-4">{content}</p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Button title="Learn More" />
        {showBtn && <Button title="Browse" />}
      </div>
    </div>
  );
}

export default ProductsStrip;
