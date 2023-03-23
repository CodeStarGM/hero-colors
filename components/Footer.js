import React from "react";

const Footer = () => {
  return (
    <div className="space-x-2 py-14 mt-24 font-sans flex justify-center items-center  w-screen h-14 bg-gray-50">
      <div className="flex space-x-1 justify-center items-center">
        <p>Created with</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <p>by</p>
        <a
          href="https://codestargm.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-green-700"
        >
          CodeStarGM
        </a>
      </div>
      <div className="flex space-x-1 justify-center items-center">
        <p>Inspired By</p>

        <a
          href="https://v1.heroicons.com/"
          target="_blank"
          rel="noreferrer"
          className="text-purple-700"
        >
          HeroIcons
        </a>
      </div>
    </div>
  );
};

export default Footer;
