import Carousel from "react-bootstrap/Carousel";
import "./servicesAndDate.css";
import { React, useEffect, useState } from "react";
import axios from "axios";

function CarouselHome() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      });

      setBrands(response.data);
    };
    getBrands();
  }, []);

  return (
    brands && (
      <>
        <div>
          <Carousel fade>
            {brands.map((brand) => {
              return (
                <Carousel.Item className="img-carrousel" key={brand.id}>
                  <img
                    src={
                      typeof brand.image === "object"
                        ? `${import.meta.env.VITE_APP_API_URL}/${
                            brand.image[0]
                          }`
                        : `${import.meta.env.VITE_APP_API_URL}/img/brands/${
                            brand.image
                          }`
                    }
                    className="d-block w-100"
                    alt="brands"
                  />

                  <Carousel.Caption>
                    <h3>{brand.name}</h3>
                    <p>Texto comun a todos</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </>
    )
  );
}

export default CarouselHome;
