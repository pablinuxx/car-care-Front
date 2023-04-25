import Carousel from "react-bootstrap/Carousel";
import "./servicesAndDate.css";

function CarouselHome() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="img-carrousel">
          <img
            className="d-block w-100"
            src="https://www.zastavki.com/pictures/originals/2020Auto___Volkswagen_2020_Volkswagen_Tiguan_R-Line_blue_car_at_sunset_148674_.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-carrousel">
          <img
            className="d-block w-100"
            src="https://www.motorverso.com/wp-content/uploads/2016/05/FIAT-500X-75.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-carrousel">
          <img
            className="d-block w-100"
            src="https://media.gm.com/dld/content/Pages/presskits/me/en/2015/chevrolet/2016-Chevrolet-Captiva/jcr:content/rightpar/sectioncontainer/par/imagewithmodal_0/image.resize.jpg/1447592096839.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
