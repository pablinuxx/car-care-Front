import { React, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/allPagesComponents/Footer";

import Navbar from "../components/allPagesComponents/Navbar";

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
        <div className="bg-secondary mt-4 text-center"> HERO</div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {services.map((service) => {
              return (
                <div key={service.id} className="col ">
                  <div className="card h-100">
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL}/img/services/${
                        service.image
                      }`}
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
          <div className="bg-secondary mt-5 text-center"> Agenda</div>
        </div>
        <Footer />
      </>
    )
  );
}

export default Services;
