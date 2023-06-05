import React, { useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function AddService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.session);

  const handleAddService = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `bearer: ${loggedUser.token}`,
      },
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}/services`,
      data: formData,
    });
    navigate("/admin/services");
  };

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => handleAddService(e)}
          >
            <h2 className="text-center p-3">Create new service</h2>
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
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="description" className="form-label">
                  Description
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

export default AddService;
