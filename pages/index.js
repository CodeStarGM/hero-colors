import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolidCard from "../components/SolidCard";
import GradientCard from "../components/GradientCard";

import { Data_Gradient_Color, Data_Solid_Color } from "../data/Data";

export default function Home() {
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

      <div className="py-14 flex flex-col justify-center items-center w-screen">
        <h1 className="text-5xl font-bold text-green-500 drop-shadow-2xl">
          Newest Colors
        </h1>
      </div>
      <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Data_Solid_Color.slice(0, 8).map((item) => (
            <SolidCard key={item.colorCode} solidColor={item.color} />
          ))}
        </div>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link href="/solid">
          <button className="hover:bg-gradient-to-l hover:from-green-600  font-medium mt-2 text-center text-white bg-gradient-to-r from-green-500 to-[#4ec346] drop-shadow-2xl px-3 py-2 rounded-xl">
            Browse Solids
          </button>
        </Link>
      </div>
      <div className="py-14 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {Data_Gradient_Color.slice(0, 8).map((item) => (
            <GradientCard
              key={item.colorCode}
              g1={item.colorOne}
              g2={item.colorTwo}
            />
          ))}
        </div>
      </div>
      <div className="flex w-screen justify-center items-center">
        <Link href="/gradient">
          <button className="hover:bg-gradient-to-l hover:from-green-600 font-medium mt-2 text-center text-white  bg-gradient-to-r from-green-500 to-[#4ec346] drop-shadow-2xl px-3 py-2 rounded-xl">
            Browse Gradients
          </button>
        </Link>
      </div>
      <div className=" w-screen">
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

      <Footer />
    </>
  );
}
