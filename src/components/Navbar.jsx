import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-navbar ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="img/CarCare1.png"
              alt="car-care-logo"
              className="img-nav"
            />
          </a>

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
                <a
                  className="nav-link active text-navbar"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-navbar" href="#">
                  Brands
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-navbar" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-navbar"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Maintenance service
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Alignment and balance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Oil change
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Car washed
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
