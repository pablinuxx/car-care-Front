import React, { useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useNavigate } from "react-router";

function AddCustomer() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const handleAddCustomer = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}/customers`,
      data: formData,
    });
    navigate("/admin/customers");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => handleAddCustomer(e)}
          >
            <h2 className="text-center p-3">Create new customer</h2>
            <div className="form-container w-75 m-auto">
              <div className="form-group">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                  required
                />
                <label htmlFor="firstname" className="form-label-admin">
                  Firstname
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="lastname" className="form-label-admin">
                  Lastname
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="email" className="form-label-admin">
                  Email
                </label>
              </div>

              <div className="form-group">
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="password" className="form-label-admin">
                  Password
                </label>
              </div>

              <div className="form-group">
                <input
                  required
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
                <label htmlFor="avatar"></label>
              </div>
            </div>
            <div className="action-confirm-login mt-4 mb-5">
              <button className="btn-modify">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
