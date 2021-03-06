import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Hero from "../components/Hero";
import SolidColors from "../components/SolidColors";
import Search from "../components/Search";
import Tab from "../components/Tab";
import GradientColors from "../components/GradientColors";
const Solid = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Head>
        <title>Herocolors | Solid Colors</title>
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
      <div className=" w-screen h-10 ">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9395568136340476"
          data-ad-slot="5323880222"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
      <SolidColors search_color={search} />
      <Footer />
    </>
  );
};

export default Solid;
