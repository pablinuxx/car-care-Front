import React from "react";
import "../../styles/brands.css";

function BrandsHome() {
  return (
    <>
      <div className="d-flex justify-content-evenly m-5">
        <img src="img/brands/fiat.png" alt="logo-fiat" className="img-brand" />
        <img src="img/brands/KIA.png" alt="logo-kia" className="img-brand" />
        <img
          src="img/brands/5.png"
          alt="logo-chevrolet"
          className="img-brand"
        />
        <img
          src="img/brands/Toyota.png"
          alt="logo-toyota"
          className="img-brand"
        />
        <img src="img/brands/wv.png" alt="logo-wv" className="img-brand" />
      </div>
    </>
  );
}

export default BrandsHome;
