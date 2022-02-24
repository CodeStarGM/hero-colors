import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Search from "../components/Search";
import Tab from "../components/Tab";
import GradientColors from "../components/GradientColors";
const gradient = () => {
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
        tabButtonName="Solid"
        tabColorName="Gradient"
        tabButtonStyle="bg-yellow-400"
        tabButtonLink="/solid"
      />
      <GradientColors search_color={search} />
      <Footer />
    </>
  );
};

export default gradient;
