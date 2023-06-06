import React, { useState } from "react";
import "../styles/contact.css";
import "../styles/form.css";
import { Link } from "react-router-dom";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [menssage, setMenssage] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container mt-5 mx-auto p-4 m-3 form-contact-info rounded shadow m-5">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center m-3">
              <h2>Contact</h2> <h2 className=" ms-2">Us</h2>{" "}
            </div>

            <div className="mt-2 p-3 text-center">
              <h4 className="mb-3">Hello, how can we help you?</h4>
              <p>
                Do you have any questions or need more information about our
                services? We're here to help. Contact us via phone or email and
                we'll be happy to assist you.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className=" p-2 rounded form-contact">
              <form className="form-sign-up w-75 mx-auto">
                <div className="form-container w-75 m-auto">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-input text-dark"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="form-input text-dark"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="form-label">
                      Name
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text-area"
                      id="text-area"
                      name="text-area"
                      value={menssage}
                      onChange={(event) => setMenssage(event.target.value)}
                      className="form-input text-dark"
                      placeholder=" "
                    />
                    <label htmlFor="text" className="form-label">
                      Mensage
                    </label>
                  </div>
                </div>
                <div className="action-confirm-login mt-3 mb-5">
                  <button className="btn-register text-white ">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 text-center">
        <h2>Thank you so much! </h2>
        <p>we will contact you as soon as possible.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
