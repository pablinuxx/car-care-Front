import React, { useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleEditService = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios({
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `bearer: ${user.token}`,
        },
        method: "patch",
        url: `${import.meta.env.VITE_APP_API_URL}/services/${id}`,
        data: formData,
      });
      navigate("/admin/services");
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
            onSubmit={(e) => handleEditService(e)}
          >
            <h2 className="text-center p-3">Modify a service</h2>
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
              <button className="btn-register text-white ">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditService;
