import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Heading, Divider, CardBody, Button } from "@chakra-ui/react";

function AllVehicles() {
  const [cars, setCars] = useState([]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles`,
      });
      console.log(response.data);
      setCars(response.data);
    };
    getVehicles();
  }, []);

  return (
    <div>
      {cars.length === 0 ? (
        <div>
          <h4>Loading cars...</h4>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="container">
            <h1 className="p-3 text-center">Total cars</h1>
            <div className="row ">
              {cars &&
                cars.map((car) => (
                  <div key={car.id} className="col-12 col-md-6 col-lg-4">
                    <Card
                      maxW="sm"
                      className="shadow mb-5 vehicles-card mx-auto"
                    >
                      <CardBody>
                        <img
                          src={
                            typeof car.image === "object"
                              ? `${import.meta.env.VITE_APP_API_URL}/${
                                  car.image[0]
                                }`
                              : `${import.meta.env.VITE_APP_API_URL}/img/cars/${
                                  car.image
                                }`
                          }
                          className="img-fluid rounded card-image"
                          alt={car.name}
                        />
                        <Heading size="md" className="mt-2">
                          {car.name}{" "}
                        </Heading>
                        <h6>From {car.price} USD </h6>
                        <Divider />
                        <Link to={`/vehicle/${car.id}`} onClick={handleClick}>
                          <Button variant="link" className="discovery-btn p-2">
                            Discovery
                            <i className=" bi bi-arrow-right ms-2"></i>
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </div>
                ))}
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default AllVehicles;
