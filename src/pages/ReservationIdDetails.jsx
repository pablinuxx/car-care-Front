import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function ReservationIdDetails() {
  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const token = useSelector((state) => state.session.token);
  const { id } = useParams();

  useEffect(() => {
    const getBookingById = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/bookings/single/${id}`,
      });
      console.log(response.data);
      setLoading(false);
      setBookingDetails(response.data);
    };
    getBookingById();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="d-flex justify-content-between mt-3 p-2">
              <button className="btn-back rounded" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i> Back
              </button>
              <h3 className="mb-3">Booking details</h3>
              <Link to={"/contact"}>
                <button className="btn-back rounded">
                  Cancel reservation <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
            <div className="row mt-5">
              <div className="col-8 col-details">
                <p className="mt-3 fs-5">
                  <i className="bi bi-search me-3"></i>
                  <strong className="me-2 fs-5">ID:</strong> {bookingDetails.id}
                </p>
                <p className="fs-5">
                  <i className="bi bi-car-front-fill me-3"></i>
                  <strong className="me-2 fs-5">Car Model:</strong>{" "}
                  {bookingDetails.carModel}
                </p>
                <p className="fs-5">
                  <i className="bi bi-calendar-check me-3"></i>
                  <strong className="me-2 fs-5">Time:</strong>{" "}
                  {bookingDetails.details.time}
                </p>
                <p className="fs-5">
                  <i className="bi bi-calendar-date me-3"></i>
                  <strong className="me-2 fs-5">Day:</strong>{" "}
                  {bookingDetails.details.date}
                </p>
                <p className="fs-5">
                  {" "}
                  <i className="bi bi-journal me-3"></i>
                  <strong className="me-2 fs-5">Plate:</strong>{" "}
                  {bookingDetails.plate}{" "}
                </p>
              </div>
              <div className="col-4 border p-0 img-reservation-details">
                <img src="/img/service-reservation-transformed.jpeg" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ReservationIdDetails;
