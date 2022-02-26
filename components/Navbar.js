import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="px-14 bg-gradient-to-r from-green-500 to-[#4ec346] flex space-x-2 items-center w-screen h-20 drop-shadow-md">
      {/* <img
        className="w-14 h-14"
        src="https://avatars.githubusercontent.com/u/68224623?s=400&u=b93abdf61169f4616478c05eacac0bc3ac0a54ad&v=4"
      /> */}
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14 text-green-700 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <Link href="/">
        <h1 className="text-white text-4xl font-extrabold cursor-pointer">
          herocolors
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
