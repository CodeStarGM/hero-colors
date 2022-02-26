import React from "react";
import GradientCard from "./GradientCard";
import { Data_Gradient_Color } from "../data/Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GradientColors = ({ search_color }) => {
  return (
    <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
            key={item.colorCode}
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
            g1={item.colorOne}
            g2={item.colorTwo}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default GradientColors;

// THIS IS THE GRID WHERE ALL THE GRADIENT CARDS ARE LISTING / SHOWING
