import React from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import BrandsHome from "../components/homeComponents/BrandsHome";
import InfoHome from "../components/homeComponents/InfoHome";
import GoServices from "../components/homeComponents/GoServices";
import GoDate from "../components/homeComponents/GoDate";
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
