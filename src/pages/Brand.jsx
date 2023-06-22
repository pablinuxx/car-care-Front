import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Card, Heading, Divider, CardBody, Button } from "@chakra-ui/react";

const Brand = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { name } = useParams();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getCarsBrand = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/brands/${name}`,
      });
      setBrands(response.data);
    };

    getCarsBrand();
  }, []);

  return (
    <div>
      {!brands && cars.length === 0 ? (
        <div>
          <h4>Loading cars...</h4>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="container">
            <h1 className="p-3 text-center">{brands.name}</h1>
            <div className="row ">
              {brands &&
                brands.vehicles &&
                brands.vehicles.map((brand) => (
                  <div key={brand.id} className="col-12 col-md-6 col-lg-4">
                    <Card
                      maxW="sm"
                      className="shadow mb-5 vehicles-card mx-auto"
                    >
                      <CardBody>
                        <img
                          src={
                            typeof brand.image === "object"
                              ? `${import.meta.env.VITE_APP_API_URL}/${
                                  brand.image[0]
                                }`
                              : `${import.meta.env.VITE_APP_API_URL}/img/cars/${
                                  brand.image
                                }`
                          }
                          className="img-fluid rounded card-image"
                          alt={brand.name}
                        />
                        <Heading size="md" className="mt-2">
                          {brand.name}{" "}
                        </Heading>
                        <h6>From {brand.price} USD </h6>
                        <Divider />
                        <Link to={`/vehicle/${brand.id}`} onClick={handleClick}>
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
};

export default Brand;
