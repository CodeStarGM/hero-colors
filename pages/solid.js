import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import SolidColors from "../components/SolidColors";
import Search from "../components/Search";
import Tab from "../components/Tab";
import GradientColors from "../components/GradientColors";
const solid = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <Hero />
      <Search
        on_change={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Tab
        tabButtonName="Gradients"
        tabColorName="Solid"
        tabButtonStyle="bg-green-500"
        tabButtonLink="/gradient"
      />
      <SolidColors search_color={search} />
      <Footer />
    </>
  );
};

export default solid;
