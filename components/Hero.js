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
    <div className="flex lg:flex-row flex-col  w-screen lg:h-64 h-96 bg-gradient-to-r from-purple-700 to-[#a65fec] ">
      <div className="space-y-4 lg:w-3/5 w-screen px-10 py-16">
        <div className="space-y-1">
          <h1 className="font-bold lg:text-4xl text-2xl text-white ">
            Colors that enhance your website&apos;s look
          </h1>
          <h2 className="font-semibold lg:text-3xl text-2xl text-purple-300">
            just click and you&apos;re ready to go{" "}
          </h2>
        </div>

        <div className="font-semibold flex items-center space-x-8">
          {/* item */}
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className=" text-xs lg:text-base hover:text-white text-purple-400">
              {colorNum} Colors
            </p>
          </div>
          {/*item*/}
          {/* item */}
          <div className="flex items-center space-x-1">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-purple-400"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs lg:text-base hover:text-white text-purple-400">
              MIT Licensed
            </p>
          </div>
          {/*item*/}
          {/* item */}
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-400 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs lg:text-base hover:text-white text-purple-400">
              Cross Browser Code
            </p>
          </div>
          {/*item*/}
        </div>
      </div>
      <div className="space-x-8 lg:w-2/5 w-screen flex justify-center items-center">
        <a
          href="https://github.com/CodeStarGM/hero-colors"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <div className="drop-shadow-2xl flex justify-center items-center w-40  cursor-pointer hover:mb-2 bg-white shadow-xl py-3 px-3 rounded-lg transition-all duration-200">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="text-purple-600 mr-2 transform"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            <span className="font-semibold">Contribute</span>
          </div>
        </a>
        <a href="mailto:codestargm@gmail.com" className="flex items-center">
          <div className="drop-shadow-2xl flex justify-center items-center w-40 cursor-pointer hover:mb-2  bg-purple-600 shadow-xl py-3 px-3 rounded-lg transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white mr-2"
              height="24"
              width="24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-white font-semibold">Contact</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
