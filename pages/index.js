import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolidCard from "../components/SolidCard";
import GradientCard from "../components/GradientCard";
import { ToastContainer, toast } from "react-toastify";

import { Data_Gradient_Color, Data_Solid_Color } from "../data/Data";
import { useState } from "react";

export default function Home() {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (idx) => {
    setToggleTab(idx);
  };
  return (
    <>
      <Head>
        <title>Herocolors</title>
        <meta
          name="description"
          content="HeroColors is free & open source
          Colors Library that you can use in any part of your website,
          Just One Click & get CSS3 crossbrowser code and use it in a moment!"
        />
        <meta name="author" content="Ghous Muhammad, codestargm" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="HeroColors is free & open source
          Colors Library that you can use in any part of your website,
          Just One Click & get CSS3 crossbrowser code and use it in a moment!"
          name="description"
        />
        <meta property="og:url" content="https://heroicons.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Herocolors" />
        <meta
          property="og:description"
          content="HeroColors is free & open source
          Colors Library that you can use in any part of your website,
          Just One Click & get CSS3 crossbrowser code and use it in a moment!"
        />
        <meta property="og:title" content="Herocolors" />
      </Head>

      <Navbar />
      <Hero />

      <div className="mt-14 py-4 flex flex-col justify-center items-center w-screen">
        <h1 className="RIGHTO text-5xl font-bold text-purple-500 drop-shadow-2xl">
          Browse Colors
        </h1>
      </div>
      <div className="flex items-center justify-center  w-full h-auto py-4">
        <button
          onClick={() => {
            handleToggleTab(1);
          }}
          className={
            toggleTab === 1
              ? "text-white bg-purple-700 w-44 py-2 font-bold text-lg border-[2px] border-purple-500"
              : "w-44 py-2 font-bold text-lg border-[2px] border-purple-500"
          }
        >
          Solid Colors
        </button>
        <button
          onClick={() => {
            handleToggleTab(2);
          }}
          className={
            toggleTab === 2
              ? "text-white bg-purple-700 w-44 py-2 font-bold text-lg border-[2px] border-purple-500"
              : "w-44 py-2 font-bold text-lg border-[2px] border-purple-500"
          }
        >
          Gradient Colors
        </button>
      </div>

      {/* if solid colors */}
      {toggleTab === 1 && (
        <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
            {Data_Solid_Color.map((item) => (
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
                key={item.colorCode}
                solidColor={item.color}
              />
            ))}
          </div>
        </div>
      )}

      {toggleTab === 2 && (
        <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
            {Data_Gradient_Color.map((item) => (
              <GradientCard
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
                name={item.name}
                key={item.colorCode}
                g1={item.colorOne}
                g2={item.colorTwo}
              />
            ))}
          </div>
        </div>
      )}

      <ToastContainer />
      <Footer />
    </>
  );
}

{
  /* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
<div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
  MIT Licensed
</div>
</div> */
}
