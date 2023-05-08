import { Button, Col, Alert, Image, Buttonge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function PhotoSlider() {
  return (
    <Carousel style={{ marginBlock: 10 }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 500 }}
          src="imgs/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 500 }}
          src="imgs/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: 500 }}
          src="imgs/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoSlider;
