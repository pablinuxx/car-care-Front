import React from "react";
import "./servicesAndDate.css";
import Button from "react-bootstrap/Button";

function ToDate() {
  return (
    <div className="col-6 data-box text-center d-flex align-items-center justify-content-center text-white">
      <div className="w-75">
        <h1 className="fs-1 fw-bold">
          We have a wide variety of schedules available.
        </h1>
        <h3 className="fs-5 mt-3">Book now! It's your moment.</h3>
        <Button
          className="mt-3 to-services-btn"
          variant="outline-light"
          to="#"
        >
          Date Now !
        </Button>
      </div>
    </div>
  );
}

export default ToDate;
