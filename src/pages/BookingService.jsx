import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BookingService() {
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.session);

  const [isLoading, setIsLoading] = useState(false);

  const [services, setServices] = useState([]);

  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carModel, setCarModel] = useState("");
  const [plate, setPlate] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const response = await axios({
      headers: {
        Authorization: `bearer ${loggedUser.token}`,
      },
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}/bookings/services`,
      data: {
        plate,
        carModel,
        serviceId,
        details: {
          time,
          date,
        },
      },
    });
    if (response) {
      console.log(response);
      setTimeout(() => {
        navigate("/thanks", { state: response.data });
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const getServices = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/services`,
      });
      setServices(response.data);
    };
    getServices();
  }, []);

  return (
    services && (
      <>
        <Navbar />
        <div className="container mt-3 d-flex">
          <form
            className="form-sign-up w-75 mx-auto"
            onSubmit={(e) => handleBooking(e)}
          >
            <h2 className="text-center p-3">Booking your services</h2>
            <div className="form-container w-75 m-auto">
              <div className="form-group">
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                  required
                >
                  {services.map((service) => {
                    <span key={service.id}></span>;
                    return <option value={service.id}>{service.name}</option>;
                  })}
                </select>
                <label htmlFor="firstname" className="form-label-admin">
                  Services
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="time"
                  id="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="time" className="form-label-admin">
                  Time
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="date" className="form-label-admin">
                  Date
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="text"
                  id="carModel"
                  name="carModel"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="password" className="form-label-admin">
                  Car model
                </label>
              </div>

              <div className="form-group">
                <input
                  required
                  type="text"
                  id="plate"
                  name="plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  className="form-input text-dark"
                  placeholder=" "
                />
                <label htmlFor="plate" className="form-label-admin">
                  Plate
                </label>
              </div>
            </div>
            <div className="action-confirm-login mt-4 mb-5">
              <button className="btn-modify">Create</button>
            </div>
          </form>
        </div>
        <Footer />
      </>
    )
  );
}

export default BookingService;
