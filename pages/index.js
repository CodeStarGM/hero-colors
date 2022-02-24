import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolidCard from "../components/SolidCard";
import GradientCard from "../components/GradientCard";
import Search from "../components/Search";
import GradientColors from "../components/GradientColors";
import { Data_Gradient_Color, Data_Solid_Color } from "../data/Data";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <div className="py-14 flex flex-col justify-center items-center w-screen">
        <h1 className="text-4xl font-bold">Solid Colors</h1>
      </div>
      <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
        <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Data_Solid_Color.slice(0, 8).map((item) => (
            <SolidCard solidColor={item.color} />
          ))}
        </div>
      </div>
      <div className="py-14 flex flex-col justify-center items-center w-screen">
        <h1 className="text-4xl font-bold">Gradient Colors</h1>
      </div>
      <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
        <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Data_Gradient_Color.slice(0, 8).map((item) => (
            <GradientCard g1={item.colorOne} g2={item.colorTwo} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
