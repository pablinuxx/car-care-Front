import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandsHome from "../components/BrandsHome";
import InfoHome from "../components/InfoHome";

function Home() {
  return (
    <>
      <Navbar />
      <BrandsHome />
      <InfoHome />
      <Footer />
    </>
  );
}

export default Home;
