import React from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import BrandsHome from "../components/homeComponents/BrandsHome";
import InfoHome from "../components/homeComponents/InfoHome";
import GoServices from "../components/homeComponents/GoServices";
import GoDate from "../components/homeComponents/GoDate";
import Carousel from "../components/homeComponents/CarouselHome";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
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
