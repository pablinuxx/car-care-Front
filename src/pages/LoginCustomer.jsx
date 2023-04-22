import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function LoginCustomer() {
  return (
    <div className="form-login">
      <div className="container sign-up p-5">
        <div className="row formulary ">
          <div className="formulary-welcome-message col-md-6 col-lg-6 text-center d-flex flex-column justify-content-center">
            <h2>Welcome to Car Care</h2>
            <p className="formulary-subtitle">
              {" "}
              Don't have an account?
              <Link to="/signup" className="text-decoration-none text-reset">
                {" "}
                <h3 className="formulary-subtitle-cta"> Sign up</h3>
              </Link>
            </p>
            {/* <button className="btn btn-lg btn-success sign-up-btn border-0">Sign Up</button> */}
          </div>
          <div className="col-md-5 col-lg-5">
            <form>
              <h2 className="create-account">Login</h2>
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="input-tx"
                required
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
              <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                className="input-tx"
                required
                // value=""
                // onChange={(event) => setPassword(event.target.value)}
              />

              <button
                className="log-in-btn mt-5 mb-4 d-block mx-auto"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="icons">
              <div className="border-icon">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="border-icon">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="border-icon">
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCustomer;
