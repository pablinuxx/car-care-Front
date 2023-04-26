import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";

// import { useLocation } from "react-router-dom";
import axios from "axios";
import "./vehicle.css";

function Vehicle() {
  //   const location = useLocation();
  const [car, setCar] = useState("");
  useEffect(() => {
    const getCar = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles/${1}`,
      });

      setCar(response.data);
    };

    getCar();
  }, []);
  console.log("prueba", car);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row pb-0">
          <div className="col car-shine g-0">
            <figure className="p-0 m-0">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}/${
                  car ? car.image[0] : ""
                }`}
                className="hero-front-image"
                alt={car && car.name}
              />{" "}
            </figure>
          </div>
        </div>
        <div className="row ">
          <div className="col-6  g-0">
            <figure className="p-0 m-0 ">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}/${
                  car ? car.image[2] : ""
                }`}
                className="hero-front-image"
                alt={car && car.name}
              />{" "}
            </figure>
          </div>
          <div className="col-6 information-box text-white d-flex flex-column align-items-start justify-content-start g-0">
            <h1 className="fw-bold fs-2 ms-4 mt-5">{car && car.name}</h1>
            <h3 className="fs-4 ms-4 mt-1">{car && car.description}</h3>
            <h2 className="fw-bold fs-2 ms-4 mt-2">USD {car && car.price}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col car-shine g-0">
            <figure className="p-0 m-0">
              <img
                src={`${import.meta.env.VITE_APP_API_URL}/${
                  car ? car.image[1] : ""
                }`}
                className="hero-front-image"
                alt={car && car.name}
              />{" "}
            </figure>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Vehicle;
