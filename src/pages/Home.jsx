import React from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import LogosHome from "../components/homeComponents/LogosHome";
import InfoHome from "../components/homeComponents/InfoHome";
import ServiceAndCars from "../components/homeComponents/ServiceAndCars";
import Carousel from "../components/homeComponents/CarouselHome";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <LogosHome />
      <div className="container-fluid mt-5 mb-5">
        <div className="row ">
          <ServiceAndCars />
          <InfoHome />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
