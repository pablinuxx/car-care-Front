import { Link } from "react-router-dom";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="row footer-container mx-auto">
        <div className="col-8">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="h-100 d-flex flex-column justify-content-center align-items-left">
                <img
                  src="/CarCare1.png"
                  alt="care-car-logo"
                  className="img-footer"
                />
              </div>
            </div>
            <div className="col-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Pages</li>
                <li>Home</li>
                <li>Brands</li>
                <li>Services</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Services</li>
                <li>Maintenace service</li>
                <li>Alignment and balance</li>
                <li>Oil change</li>
                <li>Car washed</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <ul className="list-unstyled footer-list">
                <li className="fs-5">Contact Us</li>
                <Link
                  to="https://www.linkedin.com/in/pablo-sarasua/"
                  className="text-decoration-none  contact-us-name"
                  target="_blank"
                >
                  <li>Pablo Sarasua</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/virginia-barbaro/"
                  className="text-decoration-none  contact-us-name"
                  target="_blank"
                >
                  <li>Virginia Barbaro</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/juan-abraham/"
                  target="_blank"
                  className="text-decoration-none  contact-us-name"
                >
                  <li>Juan Abraham</li>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/aline-farias-111035268/"
                  className="text-decoration-none contact-us-name"
                  target="_blank"
                >
                  <li>Aline Farias</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                className=" form-control w-50 "
              />
              <button
                className="btn btn-outline-secondary footer-cta text-white"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
            <p className="mb-5 footer-text">
              Take a look at the world behind our services and discover our
              latest local motorsport news.
            </p>
            <div>
              <i className="bi bi-instagram me-2 icon-footer fs-5"></i>
              <i className="bi bi-twitter me-2 icon-footer fs-5"></i>
              <i className="bi bi-facebook me-2 icon-footer fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
