import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import Footer from "../components/allPagesComponents/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Brand = () => {
  // const separadorMiles=(price)=>{
  //   let partesNumero = price.toString().split('.');

  //   partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  //   return partesNumero.join('.');
  // }

  const location = useLocation();
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    const getCarsxBrand = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_URL}/brands/${location.state.id}`,
      });

      setCarsList(response.data);
    };

    getCarsxBrand();
  }, [location.state.id]);

  return (
    <>
      <Navbar />

      <h1>{location.state.name}</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className=" p-3 border rounded mb-2">
              <h5>Vehicle Type</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="svuType"
                  name="type"
                />
                <label className="form-check-label" htmlFor="svuType">
                  SUV
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="autoType"
                  name="type"
                />
                <label className="form-check-label" htmlFor="autoType">
                  Auto
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="pickupsType"
                  name="type"
                />
                <label className="form-check-label" htmlFor="pickupsType">
                  PickUps
                </label>
              </div>
            </div>

            {/* New */}
            <div className=" p-3 border rounded mb-2">
              <h5>Condition </h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="new"
                  name="condition"
                />
                <label className="form-check-label" htmlFor="new">
                  New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="used"
                  name="used"
                />
                <label className="form-check-label" htmlFor="used">
                  Used
                </label>
              </div>
            </div>
            {/* Price */}
            <div className=" p-3 border rounded">
              <h5>Price ($)</h5>
              <div className="d-flex justify-content-between">
                <label htmlFor="price" className="form-label">
                  Min
                </label>
                <label htmlFor="price" className="form-label">
                  Max
                </label>
              </div>
              <input
                type="range"
                className="form-range"
                id="customRange1"
              ></input>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              {carsList.vehicles &&
                carsList.vehicles.map((car) => (
                  <div className=" col-4 card  m-2 border-0" key={car.id}>
                    <img
                      src={`${import.meta.env.VITE_APP_API_URL}/${
                        car.image[0]
                      }`}
                      className="img-fluid rounded"
                      alt={car.name}
                    />
                    <div className="card-body text-center p-0 ">
                      <h5 className="card-title fs-3">{car.price}</h5>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fs-6">
                        {car.year} | {car.kilometers} Km
                      </h5>
                      <h5 className="card-title text-center ">{car.name}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Brand;
