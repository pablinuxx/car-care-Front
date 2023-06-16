import { React, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/allPagesComponents/Footer";
import Navbar from "../components/allPagesComponents/Navbar";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/services`,
      });
      setServices(response.data);
    };
    getServices();
  }, []);

  return (
    services && (
      <>
        <Navbar />
        {/* <div className="mt-4 text-center"> */}
        {/* </div> */}
        <div className="container-fluid hero-service m-auto">
          <h2 className="text-center p-3">SERVICES</h2>
          {services.map((service) => {
            return (
              <>
                <div className="row d-flex mb-2" key={service.id}>
                  <div className="col-7 p-2 img-box">
                    <img
                      src={
                        typeof service.image === "object"
                          ? `${import.meta.env.VITE_APP_API_URL}/${
                              service.image[0]
                            }`
                          : `${import.meta.env.VITE_APP_API_URL}/img/services/${
                              service.image
                            }`
                      }
                      className="rounded"
                      alt="service"
                    />
                  </div>
                  <div className="col-5 p-2">
                    <h5>{service.name}</h5>
                    <p>{service.description}</p>
                    <div className="text-center">
                      <Link to={"/booking/service"}>
                        {/* <Button
                          className="mt-3 btn btn-dark"
                          variant="outline-light"
                        >
                          Date Now !
                        </Button> */}
                        <button className="btn-date-now">
                          <span className="fw-bold">
                            Date Now !
                            {/* <i className="bi bi-arrow-right mx-2"></i> */}
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Footer />
      </>
    )
  );
}

export default Services;
