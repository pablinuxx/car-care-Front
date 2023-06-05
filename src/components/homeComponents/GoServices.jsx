import React from "react";
import "./servicesAndDate.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ToServices() {
  return (
    <div className="col-6 services-box text-center d-flex align-items-center justify-content-center text-white">
      <div className="w-75">
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
  );
}

export default ToServices;
