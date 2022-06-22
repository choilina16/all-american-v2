import React from 'react';
import { Carousel } from 'react-bootstrap';
import './products.css';

import productIcon1 from '../../assets/images/productIcon1.png';
import productIcon2 from '../../assets/images/productIcon2.png';
import productIcon3 from '../../assets/images/productIcon3.png';

function Miscellaneous() {
  return (
    <section>
      <div className="container carousel-container">
        <div className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productIcon3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div>
        <h1>MISCELLANEOUS</h1>
        <h5>
          "Replacing a piece of molding? Decided to decorate your entire home?
          We are your local source, friendly to the basics for the contractors,
          and the MDF's for the decorators."
        </h5>
        <p>
          Stops & Catches · Bumpers · Hinges (Knuckle, Spring, Cabinet) · Pivot
          & Cabinet Hinges · Concealed Screw & Surface Bolts · Doorbell Buttons
          & Accessories · House Numbers · Mail Slots · Window Utility Pulls ·
          Surface Bolts · Push & Switch Plates
        </p>
        <p>Wood · Bronze · Steel · Smooth · Hammered · and much more</p>
      </div>
    </section>
  );
}

export default Miscellaneous;
