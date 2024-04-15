import React from "react";

function Work() {
  const imgs = [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
      top: 0,
      left: 10,
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",
      top: 25,
      left: -50,
      isActive: false
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",
      top: 50,
      left: 100,
      isActive: false
    },
  ];

  return (
    <div className="w-full flex items-center justify-center bg-zinc-900 text-white relative">
      <h1 className="text-[25vw] select-none">Work</h1>
      <div className="w-80 h-80 rounded-lg absolute">
        {imgs.map((elem, index) => (
          <img
            key={index}
            src={elem.url}
            alt="imgs"
            className="rounded-xl absolute"
            style={{ top: `${elem.top}%`, left: `${elem.left}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
