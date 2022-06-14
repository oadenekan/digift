import React from "react";
import { Card } from "react-bootstrap";
import avatar from "../images/avatar.svg";
import "../App.css";

const FeedbackLayout = ({text, name, role}) => {
  return (
    <React.Fragment>
        <Card className="testimonial-cards">
          <Card.Body>
            <div className="card-text testimonial">
              <p className="">{text}</p>
            </div>
            <div className="avatar-name-role">
              <span>
                <img src={avatar} alt="info icon" />
              </span>
            <div className="card-text role-name-wrapper">
              <p className="">{name}</p>
              <p className="">{role}</p>
            </div>
            </div>
          </Card.Body>
        </Card>;
    </React.Fragment>
  );
};

export default FeedbackLayout;
