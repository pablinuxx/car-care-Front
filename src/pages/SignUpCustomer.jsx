import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router";

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
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        onSubmit={(event) => handleSubmit(event)}
                        className="mx-1 mx-md-4"
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="firstname"
                              name="firstname"
                              value={firstname}
                              onChange={(event) =>
                                setFirstname(event.target.value)
                              }
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="firstname">
                              Your FirstName
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lastname"
                              name="lastname"
                              className="form-control"
                              onChange={(event) =>
                                setLastname(event.target.value)
                              }
                              value={lastname}
                            />
                            <label className="form-label" htmlFor="lastname">
                              Your LastName
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="file"
                              id="avatar"
                              name="avatar"
                              className="form-control"
                              onChange={(event) =>
                                setAvatar(event.target.files[0])
                              }
                            />
                            <label className="form-label" htmlFor="avatar">
                              Avatar
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpCustomer;
