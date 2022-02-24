import React, { useState } from "react";
import SolidCard from "./SolidCard";
import { Data_Solid_Color } from "../data/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SolidColors = ({ search_color }) => {
  return (
    <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
      <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {Data_Solid_Color.filter((val) => {
          if (search_color == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(search_color.toLowerCase())
          ) {
            return val;
          }
        }).map((item) => (
          <SolidCard
            ONCLICK={() => {
              navigator.clipboard.writeText(item.colorCode);
              toast.success("Wow so easy!", {
                position: "bottom-right",
                autoClose: 2400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
            solidColor={item.color}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SolidColors;

// THIS IS THE GRID WHERE ALL THE SOLID CARDS ARE LISTING / SHOWING
