import React from "react";

const SolidCard = ({ solidColor, ONCLICK }) => {
  return (
    <div
      style={{
        backgroundColor: solidColor,
        // backgroundImage: "linear-gradient(yellow,lightgreen)",
      }}
      onClick={ONCLICK}
      className=" shadow-2xl hover:drop-shadow-2xl cursor-pointer text-white font-bold flex justify-start px-1 items-end w-40 h-20  rounded-xl md:w-64 md:h-32 md:text-2xl lg:w-64 lg:h-32 xl:w-64 xl:h-32"
    >
      <h1 className="text-tiny RIGHTO">Click To Copy Code</h1>
    </div>
  );
};

export default SolidCard;

// THIS IS JUST A CARD DESIGN FOR ONLY SOLID CARD GALLERY
