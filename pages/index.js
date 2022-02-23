import Head from "next/head";
import Image from "next/image";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="z-40 flex justify-center items-center peer-focus:opacity-100 peer:transition duration-200">
        <div class=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
