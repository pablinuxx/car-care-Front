import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import "../../styles/admin.css";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import Card from "react-bootstrap/Card";

function AdminPanel() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles`,
      });
      console.log(response.data);
      setCars(response.data);
    };
    getCars();
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <div className="container p-2 d-flex justify-content-around mt-2">
          <Card className="card-dashboard me-3">
            <div className="d-flex align-items-center p-2">
              <div>
                <Card.Body>
                  <Card.Title>TOTAL CARS</Card.Title>
                  <Card.Subtitle className="mt-3 fs-5">
                    {cars.length}
                  </Card.Subtitle>
                </Card.Body>
              </div>
              <div className="ms-auto">
                <i className="bi bi-car-front-fill mx-3 fs-1"></i>
              </div>
            </div>
          </Card>
          <Card className="card-dashboard me-3">
            <div className="d-flex align-items-center p-2">
              <div>
                <Card.Body>
                  <Card.Title>TOTAL CARS</Card.Title>
                  <Card.Subtitle className="mt-3 fs-5">Numero</Card.Subtitle>
                </Card.Body>
              </div>
              <div className="ms-auto">
                <i className="bi bi-car-front-fill mx-3 fs-1"></i>
              </div>
            </div>
          </Card>
          <Card className="card-dashboard me-3">
            <div className="d-flex align-items-center p-2">
              <div>
                <Card.Body>
                  <Card.Title>TOTAL KM</Card.Title>
                  <Card.Subtitle className="mt-3 fs-5"></Card.Subtitle>
                </Card.Body>
              </div>
              <div className="ms-auto">
                <i className="bi bi-car-front-fill mx-3 fs-1"></i>
              </div>
            </div>
          </Card>
          <Card className="card-dashboard me-3">
            <div className="d-flex align-items-center p-2">
              <div>
                <Card.Body>
                  <Card.Title>TOTAL CARS</Card.Title>
                  <Card.Subtitle className="mt-3 fs-5">Numero</Card.Subtitle>
                </Card.Body>
              </div>
              <div className="ms-auto">
                <i className="bi bi-car-front-fill mx-3 fs-1"></i>
              </div>
            </div>
          </Card>
        </div>
        {/* <StatisticCard /> */}
      </div>
    </>
  );
}

export default AdminPanel;
