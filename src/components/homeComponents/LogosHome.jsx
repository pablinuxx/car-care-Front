import React, { useEffect, useState } from "react";
import "../../styles/brands.css";
import { Link, useLocation } from "react-router-dom";
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
        <div className="row">
          <div className="main-slider">
            <div className="slide-right">
              {/* <Link
                onClick={() => setSelectedBrand(brands.name)}
                to={`/brands/${brands.name}`}
              > */}
              <div className="slide-img">
                {brands.map((brand) => (
                  <img
                    key={brand.id}
                    src={`${import.meta.env.VITE_APP_API_URL}/${brand.logo}`}
                    onClick={() => setSelectedBrand(brand.name)}
                    to={`/brands/${brand.name}`}
                  />
                ))}
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default LogosHome;
