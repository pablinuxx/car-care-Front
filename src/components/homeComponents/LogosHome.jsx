import React, { useEffect, useState } from "react";
import "../../styles/brands.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

function LogosHome() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      });
      console.log(response.data);
      setBrands(response.data);
    };
    getBrands();

    if (selectedBrand) {
      window.location.href = `/brands/${selectedBrand}`;
    }
  }, [location, selectedBrand]);

  return (
    brands && (
      <>
        <div className="container">
          <div className="row m-auto mt-2 d-flex query-col">
            {/* <div className="d-flex"> */}
            {brands.map((brand) => (
              <div className="col col-sm-4 col-md-2 mt-3">
                <div className="slide-img">
                  <img
                    key={brand.id}
                    src={
                      typeof brand.logo === "object"
                        ? `${import.meta.env.VITE_APP_API_URL}/${brand.logo[0]}`
                        : `${import.meta.env.VITE_APP_API_URL}/img/brands/${
                            brand.logo
                          }`
                    }
                    onClick={() => setSelectedBrand(brand.name)}
                    to={`/brands/${brand.name}`}
                    className="img-fluid m-auto"
                  />
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </>
    )
  );
}

export default LogosHome;
