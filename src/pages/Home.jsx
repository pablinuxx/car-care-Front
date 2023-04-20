import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandsHome from "../components/BrandsHome";
import InfoHome from "../components/InfoHome";
import GoServices from "../components/GoServices";
import GoDate from "../components/GoDate";
function Home() {
  return (
    <>
      <Navbar />
      <BrandsHome />
      <div className="content-fluid mt-5 mb-5">
        <div className="row ">
          <GoServices />
          <GoDate />
        </div>
      </div>
      <InfoHome />
      <Footer />
    </>
  );
}

export default Home;
