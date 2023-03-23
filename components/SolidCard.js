import React from "react";

const SolidCard = ({ solidColor, ONCLICK }) => {
  return (
    <div
      onClick={ONCLICK}
      className="bg-white shadow-2xl hover:drop-shadow-2xl px-4 py-4 rounded-2xl w-44"
    >
      <div
        style={{
          backgroundColor: solidColor,
        }}
        className="cursor-pointer text-white font-bold flex justify-start px-1 items-end w-[100%] h-24  rounded-xl"
      ></div>

      <div className="mt-3">
        <h2 className="RIGHTO font-extrabold text-sm">{solidColor}</h2>
      </div>
    </div>
  );
};

export default SolidCard;

// THIS IS JUST A CARD DESIGN FOR ONLY SOLID CARD GALLERY
