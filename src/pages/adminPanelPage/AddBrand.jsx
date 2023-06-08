import React, { useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

function AddBrand() {
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState("");

  const token = useSelector((state) => state.session.token);
  const navigate = useNavigate();

  const handleCreateBrand = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("logo", logo);

    await axios({
      headers: {
        // Authorization: `bearer: ${token}`,
        "Content-Type": "multipart/form-data",
      },
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      data: formData,
    });
    navigate("/admin/brands");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => handleCreateBrand(e)}
          >
            <h2 className="text-center p-3">Create new brand</h2>
            <div className="form-container w-75 m-auto">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="image"></label>
              </div>
              <div className="form-group">
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
                <label htmlFor="logo"></label>
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

export default AddBrand;
