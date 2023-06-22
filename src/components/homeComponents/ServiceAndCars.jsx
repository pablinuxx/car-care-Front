import React from "react";
import "./servicesAndDate.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ServiceAndCars() {
  return (
    <div className="row m-0 p-0 d-flex row-query">
      <div className="col-6 col-cars text-center d-flex align-items-center justify-content-center text-white p-5">
        <div className="">
          <h1 className="fs-1 fw-bold">We have a wide range of cars.</h1>
          <h3 className="fs-5 mt-3">Find out now!</h3>
          <Link to={"/total/vehicles"}>
            <Button
              className="mt-3 to-services-btn"
              variant="outline-light"
              to="#"
            >
              Discovery our cars
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-6 col-service text-center d-flex align-items-center justify-content-center text-white">
        <div className="">
          <h1 className="fs-1 fw-bold">
            Discover our full range of services here
          </h1>
          <h3 className="fs-5 mt-3">The comfort your car deserves.</h3>
          <Link to={"/services"}>
            <Button
              className="mt-3 to-services-btn"
              variant="outline-light"
              to="#"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceAndCars;
