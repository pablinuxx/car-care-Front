import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import "react-toastify/dist/ReactToastify.css";

function EditCustomer() {
  const { id } = useParams();
  const user = useSelector((state) => state.session);

  const navigate = useNavigate();

  const notify = () =>
    toast.success("Successfully updated!", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const hawndleEditCustomer = async (e) => {
    try {
      e.preventDefault();

      const response = await axios({
        // headers: {
        //     Authorization: `bearer: ${user.token}`
        // },
        method: "patch",
        url: `${import.meta.env.VITE_APP_API_URL}/customers/${id}`,
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
        },
      });
      if (response.data) {
        notify();
        navigate("/admin/customers");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => hawndleEditCustomer(e)}
          >
            <h2 className="text-center p-3">Modify a customer</h2>
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
              <button className="btn-modify" onClick={notify}>
                Confirm
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditCustomer;
