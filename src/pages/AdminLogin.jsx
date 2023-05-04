import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/form.css";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setLoggedUser } from "../redux/sessionReducer";

function AdminLogin() {
  const token = useSelector((state) => state.session.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async (event) => {
    try {
      event.preventDefault();

      const response = await axios({
        headers: {
          Authorization: `bearer: ${token}`,
        },
        method: "post",
        url: `${import.meta.env.VITE_APP_API_URL}/auth/admins`,
        data: {
          email,
          password,
        },
      });
      dispatch(setLoggedUser(response.data));
      navigate("/admin");
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
                  <h3 className="mt-4">Welcome to admin Login</h3>
                  <p>Please insert your credentials</p>
                </div>
                <div className="logo">
                  <img className="logo-sign-up" src="/CarCare1.png" />
                </div>
              </div>
              <form
                onSubmit={(event) => handleAdminLogin(event)}
                className="form-sign-up"
              >
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
                  <div className="action-confirm-login mt-3 d-flex justify-content-between">
                    <button className="btn-register">Confirm</button>
                    <span>Or</span>
                    <Link to={"/"}>
                      <button className="btn-register">Go website</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
