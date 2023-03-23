import React from "react";

const GradientCard = ({ name, g1, g2, ONCLICK }) => {
  return (
    <div
      onClick={ONCLICK}
      className="bg-white shadow-2xl hover:drop-shadow-2xl px-4 py-4 rounded-2xl w-44"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(${g1},${g2})`,
        }}
        className=" cursor-pointer text-white font-bold flex justify-start px-1 items-end w-[100%] h-24  rounded-xl"
      ></div>

      <div className="mt-3 flex items-center justify-between">
        <h2 className="RIGHTO font-extrabold text-sm">{name}</h2>
        {/* <h2 className="RIGHTO font-extrabold text-sm">{g2}</h2> */}
      </div>
    </div>
  );
};

export default GradientCard;

// THIS IS JUST A CARD DESIGN FOR ONLY GRADIENT CARD GALLERY
