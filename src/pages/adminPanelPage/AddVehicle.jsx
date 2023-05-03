import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getType } from "@reduxjs/toolkit";

function AddVehicle() {
  const token = useSelector((state) => state.session.token);
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [brandId, setBrandId] = useState(null);
  const [typeId, setTypeId] = useState(null);

  const handleAddVehicle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("year", year);
    formData.append("description", description);
    formData.append("color", color);
    formData.append("kilometers", kilometers);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("brandId", brandId);
    formData.append("typeId", typeId);

    await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `bearer: ${token}`,
      },
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}/vehicles`,
      data: formData,
    });
    navigate("/admin/vehicles");
  };

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      });
      console.log(response.data);
      setBrands(response.data);
    };
    getBrands();
  }, []);

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/types`,
      });
      setTypes(response.data);
    };
    getTypes();
  }, []);

  return (
    brands &&
    types && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <div className="container mt-3 d-flex">
            <form
              className="form-sign-up w-75 mx-auto"
              onSubmit={(e) => handleAddVehicle(e)}
            >
              <h2 className="text-center p-3">Create new car</h2>
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
                    required
                  />
                  <label htmlFor="firstname" className="form-label-admin">
                    Name
                  </label>
                </div>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="year"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="form-input text-dark"
                    placeholder=" "
                  />
                  <label htmlFor="lastname" className="form-label-admin">
                    Year
                  </label>
                </div>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input text-dark"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="form-label-admin">
                    Description
                  </label>
                </div>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="form-input text-dark"
                    placeholder=" "
                  />
                  <label htmlFor="password" className="form-label-admin">
                    Color
                  </label>
                </div>

                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="kilometers"
                    name="kilometers"
                    value={kilometers}
                    onChange={(e) => setKilometers(e.target.value)}
                    className="form-input text-dark"
                    placeholder=" "
                  />
                  <label htmlFor="password" className="form-label-admin">
                    Kilometers
                  </label>
                </div>

                <div className="form-group">
                  <input
                    required
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-input text-dark"
                    placeholder=" "
                  />
                  <label htmlFor="password" className="form-label-admin">
                    Price
                  </label>
                </div>
                <div className="select-group d-flex">
                  <div className="form-group me-5">
                    <select
                      onChange={(e) => setBrandId(e.target.value)}
                      className="create-vehicle-select"
                    >
                      {brands.map((brand) => {
                        <span key={brand.id}></span>;
                        return <option value={brand.id}>{brand.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      onChange={(e) => setTypeId(e.target.value)}
                      className="create-vehicle-select"
                    >
                      {types.map((type) => {
                        <span key={type.id}></span>;
                        return <option value={type.id}>{type.name}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    required
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
    )
  );
}

export default AddVehicle;
