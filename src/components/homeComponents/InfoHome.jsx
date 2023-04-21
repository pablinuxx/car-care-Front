import React from "react";
import "./infoHome.css";

function InfoHome() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <div className="d-flex flex-column align-items-center ">
            <div className="info-home">
              <i className="bi bi-calendar-check-fill icon-info fs-1"></i>
            </div>
            <div className="text-center">
              <h4 className="mt-2">Title</h4>
              <p className=" mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus? Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="d-flex flex-column align-items-center ">
            <div className="info-home">
              <i className="bi bi-car-front-fill icon-info fs-1"></i>
            </div>
            <div className="text-center">
              <h4 className="mt-2">Title</h4>
              <p className=" mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus? Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="d-flex flex-column align-items-center ">
            <div className="info-home">
              <i className="bi bi-currency-dollar icon-info fs-1"></i>
            </div>
            <div className="text-center">
              <h4 className="mt-2">Title</h4>
              <p className=" mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, ducimus? Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoHome;
