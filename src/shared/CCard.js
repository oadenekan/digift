import React from "react";
import { Card } from "react-bootstrap";
import giftcard from "../images/giftcard.svg";
import amazon from "../images/amazon.svg";
import infoIcon from "../images/info-icon.svg";
import "../App.css";

const data = {
  category: "ecommerce",
  name: "Amazon Gift Card",
  text:
    "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
  footer: "This card has a fee of $ 0.99"
};

const CustomCard = () => {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <div className="gift-card-wrapper">
            <img src={giftcard} alt="tag" />
          </div>
          <Card.Title>
            <img src={amazon} alt="gift card Icon" />
            <strong>{data.name}</strong>
          </Card.Title>
          <div className="card-text">
            <p className="">{data.text}</p>
          </div>
          <div className="card-text footer-wrapper">
            <span>
              <img src={infoIcon} alt="info icon" />
            </span>
            <p className="">{data.footer}</p>
          </div>
          <div className="button-div">
            <Card.Link href="#"> Purchase card ></Card.Link>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default CustomCard;
