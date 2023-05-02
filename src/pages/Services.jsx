import { React, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/allPagesComponents/Footer";
import Navbar from "../components/allPagesComponents/Navbar";
import { InlineWidget } from "react-calendly";
import "../styles/services.css";
function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/services`,
      });
      console.log(services);
      setServices(response.data);
    };
    getServices();
  }, []);

  return (
    services && (
      <>
        <Navbar />
        <div className="mt-4 text-center hero-service">
          <h2>SERVICES</h2>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {services.map((service) => {
              return (
                <div key={service.id} className="col ">
                  <div className="card h-100">
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
                      className="card-img-top"
                      alt="service"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 text-center">
            <InlineWidget
              url="https://calendly.com/carcare-proyectate"
              pageSettings={{
                backgroundColor: "#ffffff",
                hideEventTypeDetails: true,
                hideLandingPageDetails: false,
                primaryColor: "#33414c",
                textColor: "#33414c",
                showFrame: false,
                height: "100%",
              }}
            />
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default Services;
