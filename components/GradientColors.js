import React from "react";
import GradientCard from "./GradientCard";
import { Data_Gradient_Color } from "../data/Data";
const GradientColors = ({ search_color }) => {
  return (
    <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
      <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Data_Gradient_Color.filter((val) => {
          if (search_color == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(search_color.toLowerCase())
          ) {
            return val;
          }
        }).map((item) => (
          <GradientCard
            ONCLICK={() => {
              navigator.clipboard.writeText(item.colorCode);
            }}
            g1={item.colorOne}
            g2={item.colorTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientColors;

// THIS IS THE GRID WHERE ALL THE GRADIENT CARDS ARE LISTING / SHOWING
