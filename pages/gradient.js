import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Search from "../components/Search";
import Tab from "../components/Tab";
import GradientColors from "../components/GradientColors";
const gradient = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Tab
        tabButtonName="Solid"
        tabColorName="Gradient"
        tabButtonStyle="bg-yellow-400"
        tabButtonLink="/solid"
      />
      <GradientColors />
      <Footer />
    </>
  );
};

export default gradient;
