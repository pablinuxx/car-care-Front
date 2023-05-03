import React, { useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

function EditBrand() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = useSelector((state) => state.session.token);

  const [name, setName] = useState([]);
  const [image, setImage] = useState(null);

  const handleEditBrand = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        //     Authorization: `bearer: ${token}`,
      },
      method: "patch",
      url: `${import.meta.env.VITE_APP_API_URL}/brands/${id}`,
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
            onSubmit={(e) => handleEditBrand(e)}
          >
            <h2 className="text-center p-3">Modify a brand</h2>
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
                <label htmlFor="name" className="form-label-admin">
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
            </div>
            <div className="action-confirm-login mt-4 mb-5">
              <button className="btn-modify">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBrand;
