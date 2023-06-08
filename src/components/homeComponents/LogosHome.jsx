import React from "react";
import "../../styles/brands.css";

function LogosHome() {
  const [getBrands, setGetBrands] = useState();

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
      <div className="container">
        <div className="row">
          <div className="d-flex mt-5 m-3 p-3 ">
            <div
              className="col
          "
            >
              <Link to="brand">
                <img
                  src="img/brands/fiat.png"
                  alt="logo-fiat"
                  className="img-brand"
                />
              </Link>
            </div>
            <div className="col">
              <img
                src="img/brands/KIA.png"
                alt="logo-kia"
                className="img-brand"
              />
            </div>
            <div className="col">
              <img
                src="img/brands/5.png"
                alt="logo-chevrolet"
                className="img-brand"
              />
            </div>
            <div className="col">
              <img
                src="img/brands/Toyota.png"
                alt="logo-toyota"
                className="img-brand"
              />
            </div>

            <div>
              <img
                src="img/brands/wv.png"
                alt="logo-wv"
                className="img-brand"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogosHome;
