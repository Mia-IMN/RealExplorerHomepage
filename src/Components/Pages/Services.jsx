import React from "react";
import HomeIcon from "../Images/house-icon.svg";
import Icon1 from "../Images/money-icon.svg";
import Icon2 from "../Images/rent-icon.svg";
import { Carousel, CarouselItem } from "react-bootstrap";
// import Icon2 from '../Images/rent-icon.svg';

const Services = () => {
  return (
    <div className="Services ">
      <h3 className="title">OUR SERVICES</h3>
      <h1>
        We have the most listings and constant <br /> updates. So you'll never
        miss out.
      </h1>
      <div className="services">
      <Carousel className="slider">
        <CarouselItem className="card">
          <div className="rectangle"><img src={HomeIcon} alt="" /></div>
          <Carousel.Caption>
          <h3>Buy a home</h3>
          <p>
            Find your place with an immersive <br /> photo experience and the
            most <br /> listings, including things you won't <br /> find
            anywhere else.
          </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className="card">
          <div className="rectangle two"><img src={Icon1} alt="" /></div>
          <h3>Sell a home</h3>
          <p>
            Whether you sell with new RealExplorer <br /> Offers<sup>TM</sup> or
            take another approach, <br /> we'll help you navigate the path to a{" "}
            <br /> successful sale
          </p>
        </CarouselItem>
        <div className="card">
          <div className="rectangle three"><img src={Icon2} alt="" /></div>
          <h3>Rent a home</h3>
          <p>We're creating a seamless online <br />
          experience - from shopping on the <br /> largest rental network, to applying <br />
          to paying rent. </p>
        </div>
        <div className="card">
          <div className="rectangle"><img src={HomeIcon} alt="" /></div>
          <h3>Buy a home</h3>
          <p>
            Find your place with an immersive <br /> photo experience and the
            most <br /> listings, including things you won't <br /> find
            anywhere else.
          </p>
        </div>
        <div className="card">
          <div className="rectangle two"><img src={Icon1} alt="" /></div>
          <h3>Sell a home</h3>
          <p>
            Whether you sell with new RealExplorer <br /> Offers<sup>TM</sup> or
            take another approach, <br /> we'll help you navigate the path to a{" "}
            <br /> successful sale
          </p>
        </div>
        <div className="card">
          <div className="rectangle three"><img src={Icon2} alt="" /></div>
          <h3>Rent a home</h3>
          <p>We're creating a seamless online <br />
          experience - from shopping on the <br /> largest rental network, to applying <br />
          to paying rent. </p>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Services;
