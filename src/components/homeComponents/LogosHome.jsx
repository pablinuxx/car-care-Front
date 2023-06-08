import React from "react";
import "../../styles/brands.css";
import { Link } from "react-router-dom";

function LogosHome() {
  // const [getBrands, setGetBrands] = useState();

  // useEffect(() => {
  //   const getBrands = async () => {
  //     const response = await axios({
  //       method: "GET",
  //       url: `${import.meta.env.VITE_APP_API_URL}/brands`,
  //     });

  //     setGetBrands(response.data);
  //   };
  //   getBrands();
  // }, []);

  // console.log(response.data);
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="d-flex mt-5 m-3 p-3 ">
            <div className="col border border-1">
              <Link to="brand">
                <img
                  src="img/brands/fiat-logo.png"
                  alt="logo-fiat"
                  className="img-brand img-fluid"
                />
              </Link>
            </div>
            <div className="col border border-1">
              <img
                src="img/brands/kia-logo.png"
                alt="logo-kia"
                className="img-brand"
              />
            </div>
            <div className="col border border-1">
              <img
                src="img/brands/chevrolet-logo.png"
                alt="logo-chevrolet"
                className="img-brand"
              />
            </div>
            <div className="col border border-1">
              <img
                src="img/brands/toyota-logo.png"
                alt="logo-toyota"
                className="img-brand"
              />
            </div>

            <div className="col border border-1">
              <img
                src="img/brands/volkswagen-logo.png"
                alt="logo-wv"
                className="img-brand"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="main-slider">
          <div className="slide-right d-flex">
            <div className="slide-img col">
              <img src="img/brands/fiat-logo.png" alt="logo-fiat" />
            </div>
            <div className="slide-img col">
              <img src="img/brands/kia-logo.png" alt="logo-fiat" />
            </div>
            <div className="slide-img col">
              <img src="img/brands/chevrolet-logo.png" alt="logo-fiat" />
            </div>
            <div className="slide-img col">
              <img src="img/brands/toyota-logo.png" alt="logo-fiat" />
            </div>
            <div className="slide-img col">
              <img src="img/brands/volkswagen-logo.png" alt="logo-fiat" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogosHome;
