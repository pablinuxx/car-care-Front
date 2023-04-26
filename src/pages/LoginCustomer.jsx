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

  const notify = () => toast("Welcome");

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
        notify()
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="background-image">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 formulary-sign-up p-5 mt-5">
              <div className="header-logo p-2 w-75 m-auto">
                <div className="header-text">
                  <h3 className="my-3">Sign in</h3>
                  <p>
                    Don't have an account?{" "}
                    <Link to={"/signup"}>
                      <strong className="sign-in-strong"> SIGN UP</strong>
                    </Link>
                  </p>
                </div>
                <div className="logo">
                  <img className="logo-sign-up" src="CarCare1.png" />
                </div>
              </div>
              <form
                onSubmit={(event) => handleUserLogin(event)}
                className="form-sign-up"
              >
                <ToastContainer />
                <div className="form-container w-75 m-auto">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">
                      Password
                    </label>
                  </div>
                </div>
                <div className="action-confirm-login mt-3">
                  <button className="btn-register">Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCustomer;
