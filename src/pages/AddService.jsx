import React from "react";
import NavbarAdmin from "../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../components/adminPanel/SidebarAdmin";

function AddService() {
  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container mt-3 d-flex">
          <form className="form-sign-up w-75 mx-auto">
            <h2 className="text-center p-3">Create new service</h2>
            <div className="form-container w-75 m-auto">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={email}
                  // onChange={(event) => setEmail(event.target.value)}
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
                  // value={name}
                  // onChange={(event) => setName(event.target.value)}
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
                  // value={menssage}
                  // onChange={(event) => setAvatar(event.target.files[0])}
                />
                <label htmlFor="image"></label>
              </div>
            </div>
            <div className="action-confirm-login mt-4 mb-5">
              <button className="btn-register text-white ">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddService;
