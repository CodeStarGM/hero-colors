import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import SolidColors from "../components/SolidColors";
import Search from "../components/Search";
import Tab from "../components/Tab";
import GradientColors from "../components/GradientColors";
const solid = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Tab
        tabButtonName="Gradients"
        tabColorName="Solid"
        tabButtonStyle="bg-green-500"
        tabButtonLink="/gradient"
      />
      <SolidColors />
      <Footer />
    </>
  );
};

export default solid;
