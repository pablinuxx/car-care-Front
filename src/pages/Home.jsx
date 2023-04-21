import React from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import BrandsHome from "../components/homeComponents/BrandsHome";
import InfoHome from "../components/homeComponents/InfoHome";
import GoServices from "../components/homeComponents/GoServices";
import GoDate from "../components/homeComponents/GoDate";
import CarouselFadeExample from "../components/homeComponents/Carrousel";

function Home() {
  return (
    <>
      <Navbar />
      <CarouselFadeExample />
      <BrandsHome />
      <div className="container-fluid mt-5 mb-5">
        <div className="row ">
          <GoServices />
          <GoDate />
          <InfoHome />
        </div>
      </div>
      <div></div>
      <Footer />
    </>
  );
}

export default Home;
