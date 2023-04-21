import React, { useEffect, useState } from "react";
import "./navbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Navbar() {
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      });
      setBrandsList(response.data);
    };
    getBrands();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-navbar ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="img/CarCare1.png"
              alt="car-care-logo"
              className="img-nav"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  className="nav-link active text-navbar"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-navbar"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </Link>
                <div>
                  <ul className="dropdown-menu">
                    {brandsList &&
                      brandsList.map((brand) => (
                        <li key={brand.id} className="p-1">
                          <Link to="#">{brand.name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-navbar" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-navbar" to="#">
                  About us
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-navbar" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
