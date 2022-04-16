import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/banner-1.jpg";
import banner2 from "../../../images/Banner/banner-2.jpg";
import banner3 from "../../../images/Banner/banner-3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Ride in Desert</h3>
            <p>Long drive in desert can give you an extra felling.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Green Natural Field</h3>
            <p>Green nature makes you happy and blowing your mind.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>A Wonderful Sea Beach</h3>
            <p>
              Visiting in sea beach can broad your mind and fresh your thinking.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
