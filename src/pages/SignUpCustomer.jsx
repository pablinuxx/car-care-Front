import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SignUpCustomer() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const userAlreadyExists = () => toast.error("You are already registered!");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      url: `${import.meta.env.VITE_APP_API_URL}/customers`,
      data: formData,
    });
    if (response.data.message === "User already exist") {
      userAlreadyExists();
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="background-image">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-sm-12 formulary-sign-up p-4">
              <div className="header-logo p-2 w-75 m-auto">
                <div className="header-text">
                  <h3 className="my-3">Sign up</h3>
                  <p>
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <strong className="sign-in-strong">SIGN IN</strong>
                    </Link>
                  </p>
                </div>
                <div className="logo">
                  <img className="logo-sign-up" src="CarCare1.png" />
                </div>
              </div>
              <form
                onSubmit={(event) => handleSubmit(event)}
                className="form-sign-up"
              >
                <div className="form-container w-75 m-auto">
                  <div className="form-group">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={firstname}
                      onChange={(event) => setFirstname(event.target.value)}
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="firstname" className="form-label">
                      Firstname
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={lastname}
                      onChange={(event) => setLastname(event.target.value)}
                      className="form-input"
                      placeholder=" "
                    />
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                  </div>
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
                  <div>
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      className="avatar-input"
                      onChange={(event) => setAvatar(event.target.files[0])}
                    />
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

export default SignUpCustomer;
