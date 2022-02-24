import React, { useState } from "react";
import SolidCard from "./SolidCard";
import { Data_Solid_Color } from "../data/Data";

const SolidColors = () => {
  const [colorCode, setColorCode] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(colorCode);
  };

  return (
    <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
      <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Data_Solid_Color.map((item) => (
          <SolidCard
            ONCLICK={() => {
              navigator.clipboard.writeText(item.colorCode);
            }}
            solidColor={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SolidColors;

// THIS IS THE GRID WHERE ALL THE SOLID CARDS ARE LISTING / SHOWING
