import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";

// import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/vehicle.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function Vehicle() {
  //   const location = useLocation();

  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState("");

  useEffect(() => {
    const getCar = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles/${id}`,
      });
      setCar(response.data);
    };

    getCar();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row pb-0">
          <div className="col car-shine g-0">
            <figure className="p-0 m-0 figure-img-vehicle">
              <img
                src={
                  typeof car.image === "object"
                    ? `${import.meta.env.VITE_APP_API_URL}/${car.image[0]}`
                    : `${import.meta.env.VITE_APP_API_URL}/img/cars/${
                        car.image
                      }`
                }
                className="hero-front-image"
                alt={car.name}
              />{" "}
            </figure>
          </div>
        </div>
        <div className="row ">
          <div className="col-6 brighten g-0">
            <figure className="p-0 m-0">
              <img
                src={
                  typeof car.image === "object"
                    ? `${import.meta.env.VITE_APP_API_URL}/${car.image[1]}`
                    : `${import.meta.env.VITE_APP_API_URL}/img/cars/${
                        car.image
                      }`
                }
                className="hero-front-image-interior"
                alt={car.name}
              />{" "}
            </figure>
          </div>
          <div className="col-6 information-box text-white d-flex flex-column align-items-start justify-content-start g-0  p-3">
            <div>
              <div className="p-4">
                <h1 className="fw-bold fs-2">{car.name}</h1>
                <h3 className="fs-4">{car.description}</h3>
                <h2 className="fw-bold fs-2">USD {car.price}</h2>
                <div className="justify-content-between d-flex fs-5 mt-5 mb-5">
                  <button className="btn-see-live" onClick={() => navigate(-1)}>
                    <span className="fw-bold">
                      <i className="bi bi-arrow-left mx-2"></i>Back to catalog
                    </span>
                  </button>
                  <button className="btn-see-live">
                    <span className="fw-bold">
                      Book a test drive
                      <i className="bi bi-arrow-right mx-2"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col car-shine g-0">
            <figure className="p-0 m-0">
              <img
                src={
                  typeof car.image === "object"
                    ? `${import.meta.env.VITE_APP_API_URL}/${car.image[2]}`
                    : `${import.meta.env.VITE_APP_API_URL}/img/cars/${
                        car.image
                      }`
                }
                alt={car.name}
                className="hero-front-image"
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
