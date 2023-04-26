import React from "react";
import "./infoHome.css";

function InfoHome() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col ">
          <div className="d-flex flex-column align-items-center ">
            <div className="info-home">
              <i className="bi bi-calendar-check-fill icon-info fs-1"></i>
            </div>
            <div className="text-center">
              <h4 className="mt-2">Flexible Schedule</h4>
              <p className=" mt-2">
                With our customizable service agenda, we offer flexible and
                scalable solutions to adapt to any need of our clients.
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
              <h4 className="mt-2">In exchanges </h4>
              <p className=" mt-2">
                Make your dream car a reality with our hassle-free exchange
                program. We offer fair appraisals and a wide selection of
                quality vehicles to choose from.
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="d-flex flex-column align-items-center ">
            <div className="info-home">
              <i className="bi bi-card-checklist icon-info fs-1"></i>
            </div>
            <div className="text-center">
              <h4 className="mt-2">Consultancy</h4>
              <p className=" mt-2">
                Our consultancy services offer personalized and efficient
                support for all kinds of administrative procedures and
                formalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoHome;
