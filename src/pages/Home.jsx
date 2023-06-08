import React from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import LogosHome from "../components/homeComponents/LogosHome";
import InfoHome from "../components/homeComponents/InfoHome";
import GoServices from "../components/homeComponents/GoServices";
import GoDate from "../components/homeComponents/GoDate";
import Carousel from "../components/homeComponents/CarouselHome";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <LogosHome />
      <div className="container-fluid mt-5 mb-5">
        <div className="row ">
          <GoServices />
          <GoDate />
          <InfoHome />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
