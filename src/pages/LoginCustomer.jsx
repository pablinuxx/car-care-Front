import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setLoggedUser } from "../redux/sessionReducer";

function LoginCustomer() {
  const user = useSelector((state) => state.session);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const invalidCredentials = () => toast.error("Invalid credentials");
  const userNotFound = () => toast.error("You are not registred yet!");

  const handleUserLogin = async (event) => {
    try {
      event.preventDefault();

      const response = await axios({
        headers: {
          Authorization: `bearer: ${user.token}`,
        },
        method: "post",
        url: `${import.meta.env.VITE_APP_API_URL}/auth/customers`,
        data: {
          email,
          password,
        },
      });

      if (response.data.message === "Invalid credentials") {
        return invalidCredentials();
      } else if (response.data.message === "You are not registred yet") {
        return userNotFound();
      } else {
        dispatch(setLoggedUser(response.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              <form onSubmit={(event) => handleUserLogin(event)}>
                <h2 className="create-account">Login</h2>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-tx"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="input-tx"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
    </>
  );
}

export default LoginCustomer;
