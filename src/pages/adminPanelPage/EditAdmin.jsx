import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.session.token);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleEditAdmin = async (e) => {
    e.preventDefault();
    await axios({
      //   headers: { Authorization: `bearer: ${token}` },
      method: "patch",
      url: `${import.meta.env.VITE_APP_API_URL}/admins/${id}`,
      data: {
        firstname,
        lastname,
        email,
      },
    });
    navigate("/admin/list");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => handleEditAdmin(e)}
          >
            <h2 className="text-center p-3">Modify admin</h2>
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
                />
                <label htmlFor="firstname" className="form-label-admin">
                  Firstname
                </label>
              </div>
              <div className="form-group">
                <input
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
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  className="form-input text-dark"
                />
                <label htmlFor="email" className="form-label-admin">
                  Email
                </label>
              </div>
            </div>
            <div className="action-confirm-login mt-4 mb-5">
              <button className="btn-modify">Confirm</button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditAdmin;
