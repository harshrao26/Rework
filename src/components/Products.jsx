import React from "react";
import ProductStrips from "./ProductsStrip";
import Button from "./Button";
function Products() {
  const ProductStripsInfo = [
    {
      title: "Jackets",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit!",
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
    },
    {
      title: "Cars",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit!",
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    },
    {
      title: "Phones",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit!",
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
    },
  ];
  return (
    <div>
      <div>
        {ProductStripsInfo.map((elem, index) => {
          return (
            <div>
              <ProductStrips
                title={elem.title}
                content={elem.content}
                url={elem.url}
                showBtn={elem.title === "Cars" || elem.title === "Phones"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
