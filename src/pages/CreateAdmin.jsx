import React, { useState } from "react";
import axios from "axios";

function SignupAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleUserCreation = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    const response = await axios({
      method: "POST",
      url: `http://localhost:3000/admins`,
      data: formData,
    });
    console.log(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <form
          className="row g-3"
          onSubmit={(event) => {
            handleUserCreation(event);
          }}
        >
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Firstname
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Lastname
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <input
            accept="image/*"
            type="file"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupAdmin;
