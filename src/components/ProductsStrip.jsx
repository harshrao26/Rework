import React from "react";
import Button from "./Button";
function ProductsStrip({ title, content, showBtn }) {
  return (
    <div className="flex bg-zinc-900 hover:bg-violet-600 transition-all ease-in-out scale-500 rounded-lg mx-16 my-4 border-solid px-32 py-8 text-white justify-between items-center">
      <div className="fle">
        <h1 className="text-5xl">{title}</h1>

        <p>{content}</p>
      </div>
      <div className="flex gap-4">
        <Button title="Learn More" />
        {showBtn && <Button title="Browse"/>}
      </div>
    </div>
  );
}

export default ProductsStrip;
