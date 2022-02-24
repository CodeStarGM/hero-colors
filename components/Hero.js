import React, { useEffect, useState } from "react";
import { Data_Solid_Color, Data_Gradient_Color } from "../data/Data";
const Hero = () => {
  const [colorNum, setColorNum] = useState();

  const colorCollection = () => {
    let solid = Data_Solid_Color.length;
    let gradient = Data_Gradient_Color.length;
    let collection = solid + gradient;
    setColorNum(collection);
  };

  useEffect(() => {
    colorCollection();
  }, []);

  return (
    <div className="flex lg:flex-row flex-col  w-screen lg:h-64 h-96 bg-gradient-to-r from-green-500 to-[#4ec346]">
      <div className="lg:w-3/5 w-screen bg-red px-14 py-16">
        <h1 className="lg:text-3xl text-2xl text-white font-medium">
          HeroColors is a free collection of {colorNum} Colors
        </h1>
        <h2 className="lg:text-3xl text-2xl text-green-700">
          just click and you're ready to go
        </h2>
        <p className="lg:text-sm text-xs py-4 text-green-800">
          HeroColors is free & Open Source <br />
          Colors Library that you can use in any part of your website,
          <br /> Just One Click & get CSS3 crossbrowser code and use it in a
          moment!
        </p>
      </div>
      <div className=" space-x-8 lg:w-2/5 w-screen flex justify-center items-center">
        <div className="drop-shadow-2xl flex justify-center items-center w-40  cursor-pointer hover:mb-2 bg-white shadow-xl py-3 px-3 rounded-lg transition-all duration-200">
          <a href="#" className="flex items-center">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              class="text-green-600 mr-2 transform"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            <span>Contribute</span>
          </a>
        </div>
        <div className="drop-shadow-2xl flex justify-center items-center w-40 cursor-pointer hover:mb-2  bg-[#4ec346] shadow-xl py-3 px-3 rounded-lg transition-all duration-200">
          <a href="#" className="flex items-center">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              class="text-red-400 mr-2  transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-white font-medium">Support</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
