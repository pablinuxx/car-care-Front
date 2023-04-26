import React, { useEffect, useState } from "react";
import "./navbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { setLoggedUser } from "../../redux/sessionReducer";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const [brandsList, setBrandsList] = useState([]);

  const loggedUser = useSelector((state) => state.session);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoggedUser({ token: null, user: null }));
  };

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
          <Link className="navbar-brand ms-4" to="#">
            <img src="/CarCare1.png" alt="car-care-logo" className="img-nav" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-0 me-4 mb-2 mb-lg-0 ">
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
                        <Link
                          key={brand.id}
                          to={`/${brand.name}`}
                          state={brand}
                        >
                          <li className="p-1">{brand.name}</li>
                        </Link>
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
                <Link className="nav-link text-navbar" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 ">
              <div className="d-flex align-items-center">
                <Avatar
                  name="Dan Abrahmov"
                  src={
                    loggedUser.token
                      ? `${import.meta.env.VITE_APP_API_URL}/img/users/${
                          loggedUser.avatar
                        }`
                      : `${
                          import.meta.env.VITE_APP_API_URL
                        }/img/users/no_user_log.webp`
                  }
                  alt={
                    loggedUser.token
                      ? `${loggedUser.firstname}`
                      : "user picture"
                  }
                  className="navbar-avatar ms-3 ms-lg-4"
                />
                <NavDropdown id="basic-nav-dropdown">
                  {loggedUser.token ? (
                    <>
                      <NavDropdown.Item href="#">Reservations</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>
                        Logout
                      </NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                      <NavDropdown.Item href="/signup">
                        Signup!
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
