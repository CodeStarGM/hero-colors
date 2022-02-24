import React from "react";
import Link from "next/link";
const Tab = ({
  tabButtonLink,
  tabButtonStyle,
  tabColorName,
  tabButtonName,
}) => {
  return (
    <div className="py-14 flex flex-col justify-center items-center w-screen">
      <h1 className="text-xl font-medium">
        You're Browsing {tabColorName} Colors
      </h1>
      <Link href={tabButtonLink}>
        <a
          className={` ${tabButtonStyle} font-medium mt-2  px-3 py-2 rounded-xl`}
        >
          Browse {tabButtonName}
        </a>
      </Link>
    </div>
  );
};

export default Tab;
