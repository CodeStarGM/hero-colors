import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="h-auto flex items-end justify-end px-4 pb-6">
        <button className="peer absolute right-4 top-4 z-30 h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-700 active:bg-cyan-800 transition">
          <span className="text-white">X</span>
        </button>
        {/* main sidebar space */}
        <div className="z-20 fixed top-0 -left-96 xl:w-[24%] xl:-left-full  h-screen w-2/4 bg-red-400 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200"></div>
      </div>
      {/* main sidebar space
        <div className=" z-10 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
       */}
    </>
  );
};

export default Sidebar;
