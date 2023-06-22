import React from "react";
import "./servicesAndDate.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ToDate() {
  return (
    <div className="col-6 data-box text-center d-flex align-items-center justify-content-center text-white">
      <div className="w-75">
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
  );
}

export default ToDate;
