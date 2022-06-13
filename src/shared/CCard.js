import React from "react";
import { Card } from "react-bootstrap";
import CButton from "./Button";
import giftcard from "../images/giftcard.svg";
import amazon from "../images/amazon.svg";
import infoIcon from "../images/info-icon.svg";
import "../App.css";

const data = {
  tags: "Giftcard",
  name: "Amazon Gift Card",
  text:
    "Amazon Gift Card is a global fashion destination for 20-somethings, selling all the freshest styles complemented by exclusive content....",
  footer: "This card has a fee of $ 0.99"
};

const CustomCard = () => {
  return (
    <React.Fragment>
      <div className="card-parent">
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
              <p className="home-text__desc">{data.text}</p>
            </div>
            <div className="card-text footer-wrapper">
              <span>
                <img src={infoIcon} />
              </span>
              <p className="home-text__desc">{data.footer}</p>
            </div>
            <div className="button-div">
              <Card.Link href="#"> Purchase card ></Card.Link>            
            </div>
          </Card.Body>
        </Card>
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
              <p className="home-text__desc">{data.text}</p>
            </div>
            <div className="card-text footer-wrapper">
              <span>
                <img src={infoIcon} />
              </span>
              <p className="home-text__desc">{data.footer}</p>
            </div>
            <div className="button-div">
              <Card.Link href="#"> Purchase card ></Card.Link>            
            </div>
          </Card.Body>
        </Card>
        </div>
      {/*<div className="card-parent">
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
              <p className="home-text__desc">{data.text}</p>
            </div>
            <div className="card-text footer-wrapper">
              <span>
                <img src={infoIcon} />
              </span>
              <p className="home-text__desc">{data.footer}</p>
            </div>
            <div className="button-div">
              <Card.Link href="#"> Purchase card ></Card.Link>            
            </div>
          </Card.Body>
        </Card>
      </div>*/}
    </React.Fragment>
  );
};

export default CustomCard;
