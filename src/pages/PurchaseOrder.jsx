import { React } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import { useSelector } from "react-redux";

function PurchaseOrder() {
  const location = useLocation();

  const loggedUser = useSelector((state) => state.session);
  console.log(loggedUser);

  const service = location.state.service;
  const plate = location.state.plate;
  const carModel = location.state.plate;
  const serviceId = location.state.serviceId;
  const details = location.state.details;

  return (
    plate &&
    carModel &&
    serviceId &&
    details && (
      <>
        <Navbar />

        <div className="m-4 text-center">
          <h1>Thanks for your reservation!</h1>
          <p>
            Booking number: <strong>{location.state.id} </strong>{" "}
          </p>
        </div>
        <div className="formulary-sign-up m-5 mb-5 w-50 mx-auto">
          <div className="m-5 text-center">
            <h3>
              Fullname: {loggedUser.firstname} {loggedUser.lastname}{" "}
            </h3>
            <h3>Service: {service.name}</h3>
            <br />
            <p>Time: {details.time}</p>
            <p>Date: {details.date}</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center ">
          <div className="info-home">
            <i className="bi  bi-calendar-check icon-info fs-1"></i>
          </div>
          <div className="text-center m-3">
            <h4 className="mt-2">We will wait for you!</h4>

            <p className=" mt-2">
              Please, if you cannot attend,{" "}
              <Link to="/contact">
                <strong> contact us</strong>.
              </Link>
            </p>
          </div>
        </div>

        <Footer />
      </>
    )
  );
}

export default PurchaseOrder;
